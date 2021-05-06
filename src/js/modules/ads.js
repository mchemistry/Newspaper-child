import Cookies from 'js-cookie';
import APP from '../constants/app';

export default class PopUpAds {
    constructor(
        elementPopUpPrefixId = APP.DEFAULT_KEY_OF_COOKIE_POPUP_SUFFIXES,
        expires = APP.DEFAULT_COOKIE_EXPRIES,
        timeToShowPopUp = APP.DEFAULT_TIME_TO_SHOW_POPUP,
        path = '/'
    ) {
        this.cookie_key = `${elementPopUpPrefixId}-${APP.DEFAULT_KEY_OF_COOKIE_POPUP_SUFFIXES}`;
        this.path = path;
        this.timeToShowPopUp = timeToShowPopUp;
        this.expires = expires;

        // declare popup
        this.popupAdsContainer = $(`.${elementPopUpPrefixId}-popup-ads`);

        // declare button close popup for
        this.btnPopupClose = $('.close-popup-btn');
        this.handleButtonCloseClick();
    }

     // check cookie is expired ?
     checkCookieIsExpired = () => {
         return Cookies.get(this.cookie_key, { path: this.path });
     }

     // handle button close click
    handleButtonCloseClick = () => {
        // hide popup ads for first time render
        this.btnPopupClose.parent().hide();

        // listen button close click
        this.btnPopupClose.click(() => {
            this.btnPopupClose.parent().hide();
            this.setCookieForPopUp();
            // eslint-disable-next-line no-console
            console.log(Cookies.get(this.cookie_key));
        });
    }

    setCookieForPopUp = () => {
        Cookies.set(this.cookie_key, true, { path: this.path, expires: this.expires });
    }

    init = () => {
        if (typeof this.checkCookieIsExpired() === 'undefined' && this.popupAdsContainer.is(':hidden')) {
            setTimeout(() => {
                this.popupAdsContainer.css('display', 'flex');
            }, this.timeToShowPopUp);
        }
    }
}
