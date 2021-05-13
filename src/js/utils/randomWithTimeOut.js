const randomWithTimeout = (arr, timeout) => {
    const filterArr = [...arr];
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterArr[Math.floor(Math.random() * filterArr.length)]);
        }, timeout);
    });
};

export default randomWithTimeout;
