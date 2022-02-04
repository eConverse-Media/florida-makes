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

function handleQuickLinks() {
    $('.quick-link').wrapAll('<div class="quick-links" />');
    $('.quick-links-title, .quick-links').wrapAll('<div class="tile" />');
}

function handleSponsors() {
    $('.sponsor').wrapAll('<div class="sponsors" />');
}

function handleWidgets() {
    $('.HLLandingControl ul li').each(function () {
        var self = $(this),
            byline = $(self).find('.ByLine'),
            h5 = $(self).find('h5');

        if (!!($(byline).html()) &&
        !!($(h5).html())) {
            $(byline).wrap('<div class="byline-and-posted-in" />');
            $(h5).appendTo($(self).find('.byline-and-posted-in'));
            $(self).find('.byline-and-posted-in').appendTo($(self).find('> .title-row'));
        }
    });
}

function handleHomepagePermissions() {
    $('.who-we-are .col-md-4:empty').closest('.who-we-are').hide();
}

function showCommunityEvents() {
    $('.community-events').show();
    $('.all-events').hide();
    $('.all-events-button').removeClass('is-active');
    $('.community-events-button').addClass('is-active');
}
function showAllEvents() {
    $('.all-events').show();
    $('.community-events').hide();
    $('.all-events-button').addClass('is-active');
    $('.community-events-button').removeClass('is-active');
}

function handleEvents() {
    showCommunityEvents();

    $('.home .HLEventList .Content ul li').each(function () {
        var self = $(this),
            hasImg = !!($(self).find('.title-row > .col-md-3').html()),
            month = $(self).find('.date-block .calendar-month span').text();

        if (hasImg) {
            var imgContainer = $(self).find('.title-row > .col-md-3');

            handleBgImage(imgContainer, imgContainer);
        } else {
            $(self).find('.title-row > .col-md-12').removeClass('col-md-12').addClass('col-md-9');
            $(self).find('.title-row').append('<div class="col-md-3" />');
        }

        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);

        handleLink(self);
    });
}

$(function () {
    handleSearch();
    handleServices();
    handleCards();
    handlePrograms();
    handleFlexImages();
    handleLatestNews();
    handleQuickLinks();
    handleSponsors();
    handleWidgets();
    handleHomepagePermissions();
    handleEvents();
});