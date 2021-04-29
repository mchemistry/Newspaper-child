// import Cookies from 'js-cookie';
import APP from '../constants/app';
import closePopUp from '../utils/closePopUp';
import Form from './contactForm';

export default class PopUpAds {
    constructor(
        // elementPopUpPrefixId = APP.DEFAULT_KEY_OF_COOKIE_POPUP_SUFFIXES,
        urlImage = APP.DEFAULT_POPUP_IMG_URL
    ) {
        // declare popup
        this.popupAdsContainer = $('.price-popup-ads');

        this.urlImage = urlImage;
        // init form
        this.popUpForm = new Form('pop-up');
        // declare button close popup for
        this.btnPopupClose = $('.close-popup-btn');
    }

    // handle button close click
    handleButtonCloseClick = () => {
        closePopUp(0, () => {
            // this.setCookieForPopUp();
        });
    }

    // setCookieForPopUp = () => {
    //     Cookies.set(this.cookie_key, true, { path: this.path, expires: this.expires });
    // }

    show = () => {
        if (this.popupAdsContainer.is(':hidden')) {
            this.popupAdsContainer.css('display', 'flex');
        }
    }

    init = () => {
        this.handleButtonCloseClick();
        this.popupForm.init();
        // if (typeof this.checkCookieIsExpired() === 'undefined' && this.popupAdsContainer.is(':hidden')) {
        // if (this.popupAdsContainer.is(':hidden')) {
        //     setTimeout(() => {
        //         this.popupAdsContainer.css('display', 'flex');
        //     }, this.timeToShowPopUp);
        // }
    }
}
