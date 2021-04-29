const initAcorridon = () => {
    $('.accordion-item h4').each(function () {
        $(this).click(() => {
            // console.log('cliecked');
            $(this).parent().toggleClass('active-accordion');
        });
    });
};

export default initAcorridon;
