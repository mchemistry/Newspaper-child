const appendToBody = (slug, template, cb = () => {}) => {
    const check = window.location.href.includes(slug);
    if (check) {
        $('body').append(template);
        cb();
    }
};

export default appendToBody;
