
const Utils = {
    // convertDataToColor: number => (number >= 0 ? possitiveColor : negativeColor),
    filterDate: (date) => {
        let temp = date.replace(/[Date()]/g, '').split(',').reverse();
        temp = [temp[1], temp[0], temp[2]];
        // console.log(temp.join('/'));
        return {
            x: `${temp.join('/')}`
        };
    },
    filterNumber: number => ({ y: Number(number) }),
};

export default Utils;
