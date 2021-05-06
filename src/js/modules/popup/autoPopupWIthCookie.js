import Cookies from 'js-cookie';
import APP from '../../constants/app';
import Popup from './popup';

export default class PopupWithCookie extends Popup {
    constructor(imgUrl, cookieKey,
        expires = APP.DEFAULT_COOKIE_EXPRIES, timeToShowPopUp) {
        super(imgUrl);
        this.cookieKey = cookieKey;
        this.expires = expires;
        this.timeToShowPopUp = timeToShowPopUp;
    }

    // set cookie if cookie key is exist
    setCookieForPopup = () => {
        if (this.cookieKey) {
            Cookies.set(this.cookieKey, true, { expires: this.expires });
        }
    };

    // check cookie is exist or expired
    checkCookieIsExpired = () => {
        return Cookies.get(this.cookieKey);
    };

    // auto show popup
    autoShowPopup = () => {
        const _self = this;
        _self.show(function () {
            if (_.isUndefined(_self.checkCookieIsExpired())) {
                this.popupAdsContainer.css('display', 'flex');
            }
        });
    };
}
