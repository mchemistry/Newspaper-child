// import listenDOMLoaded from './utils/listenDomLoaded';
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
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';

import PublicGoogleSheetsParser from 'public-google-sheets-parser';

window.$ = jQuery;

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

// eslint-disable-next-line no-unused-vars
const ctx = $('#myChart'); const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, -2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const spreadsheetId = '1ihvhVrZiDMnfld8ZedjSeUdPsaJqc7Bg2vZzYox9JRI';
const parser = new PublicGoogleSheetsParser();
parser.parse(spreadsheetId).then((items) => {
    // items should be [{ a: 1, b: 2, c: 3 },{ a: 4, b: 5, c: 6 },{ a: 7, b: 8, c: 9 }]
    console.log(items);
});
parser.parse(spreadsheetId, 'Sheet2').then((items) => {
    // items should be [{ a: 10, b: 20, c: 30 }, { a: 40, b: 50, c: 60 }, { a: 70, b: 80, c: 90 }]
    console.log(items);
});
