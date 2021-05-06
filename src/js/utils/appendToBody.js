const appendToBody = (slug, template, cb = () => {}) => {
    const check = window.location.href.includes(slug);
    if (check) {
        $('body').append(template);
        if (_.isFunction(cb)) {
            cb();
        }
    }
};

export default appendToBody;
