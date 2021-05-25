
// <block:config:0>
import Utils from './utils';

const data = (items) => {
    const labels = items.map(item => Utils.filterDate(item['Ngày']));
    const dataGold = items.map(item => Number(Utils.filterDate(item['Mua/Bán(tấn)'])));
    const dataSetup = {
        labels,
        datasets: [{
            label: 'Tấn',
            data: dataGold,
            backgroundColor: Utils.convertDataToColor(dataGold),
        }]
    };
    return dataSetup;
};


const config = (items) => {
    const finalData = data(items);
    return {
        type: 'bar',
        data: finalData,
        options: {
            plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                    color: '#36A2EB'
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 0
                }
            },
            responsive: false,
            scales: {
                y: {
                    max: Math.ceil(Math.max(...finalData.datasets[0].data) + 10),
                    min: Math.floor(Math.min(...finalData.datasets[0].data) - 10)
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
            }

        }
    };
};
// </block:config>

export default config;
