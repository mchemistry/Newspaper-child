import APP from '../constants/app';

export default class Notification {
    constructor(timeOut) {
        this.timeOut = timeOut;
        this.notification = $('.notification-benzene');
        this.notification_message = $('.notification-benzene__message');
    }

    show = () => {
        this.notification.css('display', 'flex');
        this.notification.removeClass('slide-right').addClass('slide-left');
    }

    hide = () => {
        setTimeout(() => {
            this.notification.removeClass('slide-left').addClass('slide-right');
            setTimeout(() => {
                this.notification.css('display', 'none');
            }, 400);
        }, this.timeOut);
    }

    showMessageWithSuccess = () => {
        this.notification_message.html(APP.DEFAULT_RESPONE_SUCCESS_MESSAGE);
        this.notification.removeClass('error').addClass('success');
        this.show();
        this.hide();
    }

    showMessageWithError = () => {
        this.notification_message.html(APP.ERROR_MESSAGE);
        this.notification.removeClass('success').addClass('error');
        this.show();
        this.hide();
    }
}
