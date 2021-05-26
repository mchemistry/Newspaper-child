import listenDOMLoaded from './utils/listenDomLoaded';
// import Form from './modules/contactForm';
// import ShareSocials from './modules/shareSocials';
// // import PopUpAds from './modules/ads';
// import appendMaps from './utils/appendMaps';
// // import AutoPopup from './modules/popup/autoPopupWIthCookie';
// import initAccordion from './modules/accordion';
// import HandleButtonsPrice from './modules/handleButtonsPrice';
// import PRICING_TITLE from './constants/pricing-title';
// import appendToBody from './utils/appendToBody';
// import TEMPLATE from './constants/template';
// import inputWithSearch from './modules/search';

// listenDOMLoaded(() => {
//     appendToBody('/', TEMPLATE.POPUP, null);
//     const footerForm = new Form('footer');
//     const contactForm = new Form('contact');
//     // eslint-disable-next-line new-cap
//     const searchInput = new inputWithSearch('search-career', 'career', null);
//     searchInput.search();
//     footerForm.init();
//     contactForm.init();
//     // eslint-disable-next-line no-unused-vars
//     const shareSocials = new ShareSocials();
//     // eslint-disable-next-line no-unused-vars
//     // const pricePopUpAds = new PopUpAds('price');
//     // pricePopUpAds.init();
//     // const autoPopup = new AutoPopup(
//     //     'https://i.ibb.co/VvQWrL1/GI-1100-000-D.png',
//     //     'main',
//     //     0.5,
//     //     3000,
//     //     '/lien-he.html'
//     // );
//     // autoPopup.autoShowPopup();

//     const regCompanyButtons = new HandleButtonsPrice(
//         'company',
//         PRICING_TITLE.reg_company
//     );
//     const changeInfoCompanyButtons = new HandleButtonsPrice(
//         'company-info',
//         PRICING_TITLE.company_info
//     );
//     regCompanyButtons.listenButtonPriceClick();
//     changeInfoCompanyButtons.listenButtonPriceClick();

//     // append map to body
//     appendMaps();
//     // console.log('okie');
//     // init accordion
//     initAccordion();
// });

// eslint-disable-next-line no-undef


// eslint-disable-next-line no-unused-vars
import RenderChart from './modules/chart/index';
import { chart1Setting, chart2Setting } from './modules/chart/const';
// eslint-disable-next-line no-unused-vars
// import GGAPI from './modules/ggSheet';


const chart1 = new RenderChart('myChart1', 'Trang Tính1', chart2Setting);
const chart2 = new RenderChart('myChart2', 'Trang Tính2', chart1Setting);

listenDOMLoaded(() => {
    chart1.render();
    chart2.render();
});
window.$ = jQuery;
