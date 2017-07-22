// Based On https://github.com/chrisdavidmills/push-api-demo/blob/283df97baf49a9e67705ed08354238b83ba7e9d3/main.js
function Notifier(serviceWorkerSrc, callhome, storage) {
  var registration;
  
  function onPageLoad() {
    // Do everything if the Browser Supports Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(serviceWorkerSrc)
        .then(
          function(reg) {
            registration = reg;
            initialiseState(reg);
          }
        );
    }
    // If service worker not supported, show warning to the message box
    else {
      callhome("service-worker-not-supported");
    }
  }

  // Once the service worker is registered set the initial state  
  function initialiseState(reg) {
    // Are Notifications supported in the service worker?  
    if (!(reg.showNotification)) {
      callhome("showing-notifications-not-supported-in-browser");
      return;
    }

    // Check the current Notification permission.  
    // If its denied, it's a permanent block until the  
    // user changes the permission  
    if (Notification.permission === 'denied') {
      callhome("notifications-disabled-by-user");
      return;
    }

    // Check if push messaging is supported  
    if (!('PushManager' in window)) {
      // Show a message and activate the button 
      console.log('push-notifications-not-supported-in-browser');
      return;
    }
    subscribe();
  }

  function subscribe() {
    registration.pushManager.getSubscription().then(
        function(existing_subscription) {
          // Check if Subscription is available
          if (existing_subscription) {
            endpoint = existing_subscription.toJSON()['endpoint']
            if (storage.getItem(endpoint) === 'failed') {
              postSubscribeObj('subscribe', existing_subscription);
            }
            return existing_subscription;
          }
          // If not, register one using the 
          // registration object we got when 
          // we registered the service worker
          registration.pushManager.subscribe({
            userVisibleOnly: true
          }).then(
            function(new_subscription) {
              postSubscribeObj('subscribe', new_subscription);
            }
          );
        }
      )
  }

  function unsubscribe() {
    navigator.serviceWorker.ready.then(function(existing_reg) {
      // Get the Subscription to unregister
      registration.pushManager.getSubscription()
        .then(
          function(subscription) {
            // Check we have a subscription to unsubscribe
            if (!subscription) {
              return;
            }
            postSubscribeObj('unsubscribe', subscription);
          }
        )
    });
  }

  function postSubscribeObj(statusType, subscription) {
    // Send the information to the server with fetch API.
    // the type of the request, the name of the user subscribing, 
    // and the push subscription endpoint + key the server needs
    // to send push messages

    var subscription = subscription.toJSON();
    var csrftoken = getCookie('csrftoken');
    var browser = navigator.userAgent.match(/(firefox|msie|chrome|safari|trident)/ig)[0].toLowerCase();
    var data = {
        csrfmiddlewaretoken: csrftoken,
        endpoint: subscription['endpoint'],
        auth: subscription['keys']['auth'],
        p256dh: subscription['keys']['p256dh'],
        browser: browser
      };
    
    $.post("/api/subscribe", data)
      .done(function(data){
        storage.setItem(data.endpoint, "registered")
      })
      .fail(function(data){
        storage.setItem(data.endpoint, "failed")
      });
  }

  onPageLoad();
  return {
    "subscribe": subscribe,
    "unsubscribe": unsubscribe
  }
}

var serviceWorkerSrc = "/static/pushnote-serviceworker.js";
var callhome = function(status) {
  console.log(status);
}
var notifier = Notifier(serviceWorkerSrc, callhome, window.localStorage);