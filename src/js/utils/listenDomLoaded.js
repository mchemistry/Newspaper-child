const listenDOMLoaded = (cb) => {
    // eslint-disable-next-line no-unused-vars
    jQuery(document).ready(($) => {
        cb();
    });
};

export default listenDOMLoaded;
