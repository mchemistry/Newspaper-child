const initAcorridon = () => {
    $('.accordion-title').each(function () {
        $(this).click(() => {
            // console.log('cliecked');
            $(this).parent().toggleClass('active-accordion');
        });
    });
};

export default initAcorridon;
