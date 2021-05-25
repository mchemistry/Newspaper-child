const possitiveColor = '#009933';
const negativeColor = '#f00';

const Utils = {
    convertDataToColor: data => data.map(number => (number >= 0 ? possitiveColor : negativeColor)),
};

export default Utils;
