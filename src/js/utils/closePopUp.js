const closePopUp = (eq, cb) => {
    const buttonClose = $('.close-popup-btn');
    // hide popup ads for first time render
    // buttonClose.parents().eq(eq).hide();

    buttonClose.click(() => {
        buttonClose.parents().eq(eq).hide();
    });

    if (typeof cb === 'function') {
        cb();
    }
};

export default closePopUp;
