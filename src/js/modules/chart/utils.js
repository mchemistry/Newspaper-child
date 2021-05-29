
const Utils = {
    // convertDataToColor: number => (number >= 0 ? possitiveColor : negativeColor),
    filterDate: (date) => {
        const temp = date.replace(/[Date()]/g, '').split(',').reverse().join('/');
        //
        return {
            x: `${temp}`
        };
    },
    filterNumber: number => ({ y: Number(number) }),
};

export default Utils;
