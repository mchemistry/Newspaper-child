// listen DOM loaded
const listenDOMLoaded = (cb) => {
    // eslint-disable-next-line no-unused-vars
    jQuery(document).ready(($) => {
        if (_.isFunction(cb)) {
            cb();
        }
    });
};

export default listenDOMLoaded;
