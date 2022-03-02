function handleInteriorPageTitles() {

    if ($('#MainCopy_ContentWrapper').hasClass('hero-h1')) {
        $('#MPOuter').addClass('hero-h1');
        $('#MainCopy_ContentWrapper').removeClass('hero-h1');
    } else {
        var headingImage = !!($('.header-bg').html()) ? $('.header-bg') : $('.default-header-bg');
    
        $('#PageTitleH1').wrap('<div class="page-heading" />');
    
        handleBgImage($(headingImage), $('.page-heading'));
    }

}

function handleTestimonials() {
    $('.testimonial').wrapAll('<div class="testimonial-slider slick-dotted" />');
    $('.testimonial-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fm fm-chevron-left" /></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fm fm-chevron-right" /></button>',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial').each(function() {
        var self = $(this);

        handleLink(self);
    });
}

$(function () {
    handleInteriorPageTitles();
    handleTestimonials();
});