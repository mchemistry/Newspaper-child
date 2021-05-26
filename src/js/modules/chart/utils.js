
const Utils = {
    // convertDataToColor: number => (number >= 0 ? possitiveColor : negativeColor),
    filterDate: date => date.replace(/[Date()]/g, '').split(',').reverse().join('/'),
    filterNumber: number => Number(number),
};

export default Utils;
