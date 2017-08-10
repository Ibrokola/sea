var updateSuccess = function (response) {
    var notification_box = $(nfBoxListClassSelector);
    var notifications = response.notifications;
    $.each(notifications, function (i, notification) {
        notification_box.prepend(notification.html);
    });
    var $nf_count_badge = $("#note-count-badge");
    if(response.unread_count > 0){
        $nf_count_badge.html(response.unread_count);
        // $nf_count_badge.html(response.retrieved);
    }else{
        $nf_count_badge.remove(response.unread_count)
    }
};