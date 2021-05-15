const randomWithTimeout = (arr, timeout) => {
    const filterArr = [...arr];
    return new Promise((resolve) => {
        setInterval(() => {
            resolve(filterArr[Math.floor(Math.random() * filterArr.length)]);
        }, timeout);
    });
};

export default randomWithTimeout;
