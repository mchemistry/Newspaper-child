import Cookies from 'js-cookie';
import APP from '../constants/app';
import closePopUp from '../utils/closePopUp';

export default class PopUpAds {
    constructor(
        elementPopUpPrefixId = APP.DEFAULT_KEY_OF_COOKIE_POPUP_SUFFIXES,
    ) {
        // declare popup
        this.popupAdsContainer = $(`.${elementPopUpPrefixId}-popup-ads`);

        // declare button close popup for
        this.btnPopupClose = $('.close-popup-btn');
        this.handleButtonCloseClick();
    }

    // handle button close click
    handleButtonCloseClick = () => {
        closePopUp(0, () => {
            this.setCookieForPopUp();
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
