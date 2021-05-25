

import Chart from 'chart.js/auto';
import * as ChartDataLabels from './plugin';
// import Utils from './utils';
import { GoogleSheetUrl, parser } from './const';
import Config from './config';

Chart.plugins.register(ChartDataLabels);

const renderChart = (elementId, nameOfSheet) => ({
    render: () => {
        const el = $(`#${elementId}`);
        if (el.length) {
            parser.parse(GoogleSheetUrl, nameOfSheet).then((items) => {
                const ctx = el[0].getContext('2d');
                // eslint-disable-next-line no-unused-vars
                const myChart = new Chart(ctx, new Config(items));
            });
        }
    }
});

// eslint-disable-next-line no-unused-var

export default renderChart;
