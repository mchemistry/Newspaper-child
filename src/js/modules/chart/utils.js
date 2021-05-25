const possitiveColor = '#009933';
const negativeColor = '#f00';

const Utils = {
    convertDataToColor: data => data.map(number => (number >= 0 ? possitiveColor : negativeColor)),
    filterDate: date => date.replace(/[Date()]/g, '').split(',').reverse().join('/'),
    filterNumber: number => Number(number),
};

export default Utils;
