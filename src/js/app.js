// import $ from 'jquery';
import listenDOMLoaded from './utils/listenDomLoaded';
import Form from './modules/contactForm';
import ShareSocials from './modules/shareSocials';
import PopUpAds from './modules/ads';
import appendMaps from './utils/appendMaps';
import initAccordion from './modules/accordion';

listenDOMLoaded(() => {
    const popupForm = new Form('pop-up');
    const footerForm = new Form('footer');
    const contactForm = new Form('contact');
    popupForm.init();
    footerForm.init();
    contactForm.init();
    // eslint-disable-next-line no-unused-vars
    const shareSocials = new ShareSocials();
    // eslint-disable-next-line no-unused-vars
    const pricePopUpAds = new PopUpAds('price');
    pricePopUpAds.init();

    // append map to body
    appendMaps();

    // init accordion
    initAccordion();
});

// eslint-disable-next-line no-undef
window.$ = jQuery;
