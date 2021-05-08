import Cookies from 'js-cookie';
import APP from '../../constants/app';
import Popup from './popup';
import closePopUp from '../../utils/closePopUp';

export default class PopupWithCookie extends Popup {
    constructor(imgUrl, cookieKey,
        expires = APP.DEFAULT_COOKIE_EXPRIES, timeToShowPopUp,
        path = '/') {
        super(imgUrl);
        this.cookieKey = cookieKey;
        this.expires = expires;
        this.timeToShowPopUp = timeToShowPopUp;
        this.path = path;
        this.handleButtonCloseClick();
    }

    // set cookie if cookie key is exist
    setCookieForPopup = () => {
        if (this.cookieKey && this.path !== '/') {
            Cookies.set(this.cookieKey, true, { expires: this.expires, path: this.path });
        } else {
            Cookies.set(this.cookieKey, true, { expires: this.expires });
        }
    };

    // ignore path to show popup
    // ignorePath = (arrPath) => {
    //     return
    // }

    // check cookie is exist or expired
    checkCookieIsExpired = () => {
        return Cookies.get(this.cookieKey);
    };

    /**
     * @override handle button close click to set cookie
     */
    handleButtonCloseClick = () => {
        closePopUp(0, () => {
            this.setCookieForPopup();
        });
    }

    // auto show popup
    autoShowPopup = () => {
        const _self = this;
        this.show(function () {
            if (_.isUndefined(_self.checkCookieIsExpired())) {
                setTimeout(() => {
                    _self.popupAdsContainer.css('display', 'flex');
                }, _self.timeToShowPopUp);
            }
        });
    };
}
