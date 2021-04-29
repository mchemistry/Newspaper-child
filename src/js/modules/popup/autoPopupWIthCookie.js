import Cookies from 'js-cookie';
import APP from '../../constants/app';
import Popup from './popup';

export default class PopupWithCookie extends Popup {
    constructor(imgUrl, cookieKey,
        expires = APP.DEFAULT_COOKIE_EXPRIES) {
        super(imgUrl);
        this.cookieKey = cookieKey;
        this.expires = expires;
    }

    // set cookie if cookie key is exist
    setCookieForPopup = () => {
        if (this.cookieKey) {
            Cookies.set(this.cookieKey, true, { expires: this.expires });
        }
    };

    // show popup
    show = () => {
        if (
            typeof this.checkCookieIsExpired() === 'undefined'
            && this.popupAdsContainer.is(':hidden')
        ) {
            this.popupAdsContainer.css('display', 'flex');
            setTimeout(() => {
                this.popupAdsContainer.css('display', 'flex');
            }, this.timeToShowPopUp);
        }
    };
}
