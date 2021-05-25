
// <block:config:0>
import Utils from './utils';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 0, 5, 1, 3],
        backgroundColor: Utils.convertDataToColor([12, 19, 3, 5, 1, 3]),
    }]
};


const config = {
    type: 'bar',
    data,
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 15,
                bottom: 0
            }
        },
        responsive: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        },
        onAnimationComplete() {
            const { ctx } = this.chart;
            ctx.font = this.scale.font;
            ctx.fillStyle = this.scale.textColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.datasets.forEach(function (dataset) {
                dataset.bars.forEach(function (bar, i) {
                    ctx.fillText(i + 1, bar.x, bar.y - 5);
                });
            });
        }
    },
};
// </block:config>

export default config;
