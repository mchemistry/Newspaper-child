const appendToBody = (url, template, cb = () => {}) => {
    const check = window.location.href.includes(url);
    if (check) {
        $('body').append(template);
        cb();
    }
};

export default appendToBody;
