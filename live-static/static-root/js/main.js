function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$('.vote-button').click(function(){
    //the button that was clicked (upvote or downvote)
    var elem = $(this);

    // the div holding upvote and downvote buttons
    var parent = elem.parent(".vote-control")
    
    //if upvote button was clicked, sibling is the downvote button
    var sibling = $(elem.siblings(".vote-button")[0]);

    var objectType = parent.data("object-type");
    var objectId = parent.data("object-id");
    
    var state = elem.attr("data-state");
    var isUpvoteButton = elem.hasClass("upvote");
    var isDownvoteButton = elem.hasClass("downvote");
    var action;
    if (isUpvoteButton && state === 'enabled') {
        action = "upvote";
    }
    else if (isDownvoteButton && state === 'enabled') {
        action = "downvote";
    }
    else if (state === 'voted') {
        action = "undovote";
    }

    // Optimistic UI
    // First update the UI, assuming that the request will succeed
    // If the request fails, revert the UI
    if (action === "upvote" || action === "downvote") {
        elem.attr("data-state", "voted");
        sibling.attr("data-state", "disabled");
    }
    else if (action === "undovote") {
        elem.attr("data-state", "enabled");
        sibling.attr("data-state", "enabled");
    }

    var url = "/api/" + objectType + "/" + objectId + "/" + action;
    
    var csrftoken = getCookie('csrftoken');
    $.post(url, {'csrfmiddlewaretoken': csrftoken })
        .done(function(data){
            //Nothing to do
        })
        .fail(function(data){
            // Undo the changes we made to the UI, thinking that the request would succeed
            if (action === "upvote" || action === "downvote") {
                elem.attr("data-state", "enabled");
                sibling.attr("data-state", "enabled");
            }
            else if (action === "undovote") {
                elem.attr("data-state", "voted");
                sibling.attr("data-state", "disabled");
            }
        });
});