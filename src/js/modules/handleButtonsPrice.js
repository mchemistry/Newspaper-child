import Popup from './popup/popup';
import APP from '../constants/app';

export default class HandleButtonPrices {
    constructor(buttonElementPrefixId, pricesTitle) {
        this.buttonElementPrefixId = buttonElementPrefixId;
        this.pricesTitle = [...pricesTitle];
        this.popup = new Popup();
    }

    // listen every button in price page click
    // to show popup
    listenButtonPriceClick = () => {
        // self as globle class
        const seft = this;
        $(`[id^="${this.buttonElementPrefixId}-price-"]`).each(function (index) {
            $(this).on('click', function () {
                seft.popup.urlImageAds = seft.pricesTitle[index].url_img;
                APP.PRICE_TITLE = seft.pricesTitle[index].title;
                seft.popup.show();
            });
        });
    }
}
