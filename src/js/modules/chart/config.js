
// <block:config:0>

import Utils from './utils';
// import { possitiveColor, negativeColor } from './const';

const data = (items) => {
    const labels = items.map(item => Utils.filterDate(item['Ngày']));
    const dataGold = items.map(item => Number(Utils.filterNumber(item['Mua/Bán(tấn)'])));
    const finalData = [];
    for (let i = 0; i < labels.length; i++) {
        finalData.push([labels[i], dataGold[i]]);
    }
    return finalData;
};


const config = (items, setting) => {
    const finalData = data(items);
    // console.log(finalData);
    // const max = Math.ceil(Math.max(...finalData.datasets[0].data) + setting.num);
    // const min = Math.ceil(Math.min(...finalData.datasets[0].data) - setting.num);
    return {
        // eslint-disable-next-line no-unused-vars
        // colors: [({ value, seriesIndex, w }) => (value <= 0 ? negativeColor : possitiveColor)],
        chart: {
            type: 'bar',
            d: 'area-datetime',
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        title: {
            // text: 'Lượng vàng mua vào/bán ra của quỹ SPDR (Đơn vị: Tấn)',
            text: `${setting.title}`,
            align: 'center',
            floating: true
        },
        dataLabels: {
            enabled: true,
            formatter(val) {
                return setting.unit ? `${val}${setting.unit}` : `${val}`;
            },
            offsetY: -24,
            style: {
                fontSize: `${setting.fontSize}px`,
                fontWeight: 'bold',
                colors: ['#304758']
            }
        },
        series: [{
            name: `${setting.tooltipsTitle}`,
            data: finalData
        }],
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        // yaxis: {
        //     max, min
        // }
    };
};

export default config;
