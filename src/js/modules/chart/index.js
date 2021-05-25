

import PublicGoogleSheetsParser from 'public-google-sheets-parser';
import Chart from 'chart.js/auto';
import Utils from './utils';


const spreadsheetId = '1ihvhVrZiDMnfld8ZedjSeUdPsaJqc7Bg2vZzYox9JRI';
const parser = new PublicGoogleSheetsParser();
parser.parse(spreadsheetId, 'Trang Tính2').then((items) => {
    const labels = items.map(item => Utils.filterDate(item['Ngày']));
    const dataGold = items.map(item => Number(Utils.filterDate(item['Mua/Bán(tấn)'])));
    console.log(dataGold);
    const data = {
        labels,
        datasets: [{
            label: 'Tấn',
            data: dataGold,
            backgroundColor: Utils.convertDataToColor(dataGold),
        }]
    };

    const options = {
        responsive: false,
        scales: {
            y: {
                max: Math.max(...dataGold) + 10,
                min: Math.min(...dataGold) - 10
            }
        },
        title: {
            display: true,
            text: 'Lượng vàng mua vào/bán ra theo ngày của Quỹ SPDR(Đơn vị: Tấn)'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },

    };

    const ctx = $('#myChart2')[0].getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
        type: 'bar',
        data,
        options
    });
});

// eslint-disable-next-line no-unused-var

export default myChart;
