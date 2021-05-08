import closePopUp from '../../utils/closePopUp';
import FormPopup from '../contactForm';
import APP from '../../constants/app';


export default class Popup {
    constructor(urlImage = APP.DEFAULT_POPUP_IMG_URL) {
        this.urlImageAds = urlImage;
        this.popupAdsContainer = $('.price-popup-ads');
        this.poupForm = new FormPopup('pop-up');
        this.btnPopupClose = $('.close-popup-btn');
        this.imgOfPopup = $('#img-popup');

        // init popup
        this.handleButtonCloseClick();
        this.poupForm.init();
    }

    // handle button close popup click
    handleButtonCloseClick = () => {
        closePopUp(0, null);
    };

    // check popup is display none
    isPopupNotVisible = () => {
        return this.popupAdsContainer.css('display') == 'none';
    }


    // set image for popup
    setImgForPopup = () => {
        const notInclude = ['12.', '13.', '14.'];
        const check = notInclude.some(el => this.urlImageAds.includes(el));
        this.imgOfPopup.attr('src', this.urlImageAds);
        this.imgOfPopup.css('object-fit', 'cover');
        if (!check) {
            this.imgOfPopup.attr('height', '240px');
            this.imgOfPopup.attr('width', '340px');
        } else {
            this.imgOfPopup.attr('height', '280px');
            this.imgOfPopup.attr('width', 'auto');
        }
    };

    // visible popup
    visiblePopup = () => {
        this.popupAdsContainer.css('display', 'flex');
    }

    // show popup
    show = (cb) => {
        this.setImgForPopup();
        if (_.isFunction(cb)) {
            cb();
        } else {
            // eslint-disable-next-line no-unused-expressions
            this.isPopupNotVisible && this.visiblePopup();
        }
    };
}
