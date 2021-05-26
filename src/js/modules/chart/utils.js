
const Utils = {
    // convertDataToColor: number => (number >= 0 ? possitiveColor : negativeColor),
    filterDate: date => new Date(date.replace(/[Date()]/g, '').split(',').reverse().join('/')).getTime(),
    filterNumber: number => Number(number),
};

export default Utils;
