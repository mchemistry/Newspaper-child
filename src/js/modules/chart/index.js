// Register the plugin to all charts:

import Chart from 'apexcharts';
import { GoogleSheetUrl, parser } from './const';
import Config from './config';

// Chart.plugins.register(ChartDataLabels);

const renderChart = (elementId, nameOfSheet, setting) => ({
    render: () => {
        const elem = $(`#${elementId}`);
        if (elem.length) {
            parser.parse(GoogleSheetUrl, nameOfSheet).then((items) => {
                // eslint-disable-next-line no-unused-vars
                // console.log(items);
                const ctx = elem.get(0);
                const myChart = new Chart(ctx, new Config(items, setting));
                myChart.render();
            });
        }
    }
});


export default renderChart;
