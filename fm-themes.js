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

function handleInteriorNews() {
    $('.interior-news .HLLandingControl .Content ul li').each(function () {
        handleAjaxCall(this);
        var byline = $(this).find('.ByLine');
        var byLineLink = $(byline).find('a[id*="Name"]');
        if (byLineLink.length === 0) {
            var trimmedByline = $(byline).text().trim().slice(2, $(byline).text().trim().length);
            $(byline).text(trimmedByline);
        }        
    });
}

$(function () {
    handleInteriorPageTitles();
    handleTestimonials();
    handleInteriorNews();
});