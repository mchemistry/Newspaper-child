import PublicGoogleSheetsParser from 'public-google-sheets-parser';


const possitiveColor = '#009933';
const negativeColor = '#f00';
const GoogleSheetUrl = '1ihvhVrZiDMnfld8ZedjSeUdPsaJqc7Bg2vZzYox9JRI';
const parser = new PublicGoogleSheetsParser();
const chart1Setting = {
    title: 'Biểu đồ tổng dự trữ càng quỹ SPDR GOLD TRUST (Đơn vị: Tấn)',
    fontSize: 8,
    tooltipsTitle: 'Số lượng',
    unit: null,
    num: 4
};

const chart2Setting = {
    title: 'Lượng vàng mua vào/Bán ra theo ngày của Quỹ SPDR (Đơn vị: Tấn)',
    fontSize: 10,
    tooltipsTitle: 'Số lượng',
    unit: 'Tấn',
    num: 4,
};

export {
    possitiveColor,
    negativeColor,
    GoogleSheetUrl,
    parser,
    chart1Setting,
    chart2Setting
};
