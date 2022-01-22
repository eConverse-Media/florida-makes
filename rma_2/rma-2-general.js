function handleSearch() {
    $('.search-bar-top').insertAfter('#Logo');
    $('.search-bar-top .form-control, #searchColumn .form-control').attr('placeholder', 'Keyword Search...');
}

function handleServices() {
    $('.service-button').wrapAll('<div class="service-buttons" />');
}

function handleCards() {
    $('.card').wrapAll('<div class="cards" />');
    $('.card').each(function () {
        var self = $(this),
            link = $(self).find('a'),
            href = $(link).attr('href'),
            target = $(link).attr('target');

        if (target == '_blank') {
            $(self).wrapInner('<a href="' + href + '" target="_blank" rel="noopener" />');
        } else {
            $(self).wrapInner('<a href="' + href + '" />');
        }

        $(link).hide();
    });
}

function handlePrograms() {
    $('.featured-program').wrapAll('<div class="featured-programs" />');
}

function handleFlexImages() {
    $('.featured-program, .featured-news').each(function () {
        var self = $(this),
            img = $(self).find('img'),
            imgSrc = $(img).attr('src');
    
        $('<div class="img-container" />').prependTo(self);
        $(self).find('.img-container').css('background-image', 'url("' + imgSrc + '")');
        $(img).hide();
    });

}

function handleLatestNews() {
    $('.latest-news .HLLandingControl.SearchResults ul li').each(function() {
        var byline = $(this).find('.ByLine');
        var byLineLink = $(byline).find('a[id*="Name"]');
        if (byLineLink.length === 0) {
            var trimmedByline = $(byline).text().trim().slice(2, $(byline).text().trim().length);
            $(byline).text(trimmedByline);
        }
    });
    $('.latest-news .Content ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow" />',
        nextArrow: '<button type="button" class="slick-arrow next-arrow" />',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

function handleSponsors() {
    $('.sponsor').wrapAll('<div class="sponsors" />');
}

$(function () {
    handleSearch();
    handleServices();
    handleCards();
    handlePrograms();
    handleFlexImages();
    handleLatestNews();
    handleSponsors();
});