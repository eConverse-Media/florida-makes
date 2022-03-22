function handleSearch() {
    $('.search-bar-top').insertAfter('#Logo');
    $('.search-bar-top .form-control, #searchColumn .form-control').attr('placeholder', 'Keyword Search...');
}

function handleClass(klass) {
    klass = klass.toLowerCase();
    klass = klass.replace(/\&/g, '');
    klass = $.trim(klass);
    klass = klass.replace(/\s+/g, '-');
    return klass;
}

function showService(klass) {
    $('.service-card').hide();
    $('.service-card' + klass).show();
    $('.service-button').removeClass('is-active');
    $('.service-button' + klass).addClass('is-active');
}

function handleServices() {
    $('.service-button').wrapAll('<div class="service-buttons" />');
    $('.service-card').hide();
    $('.service-card').each(function () {
        var self = $(this),
            title = $(self).find('h2').text();

        title = handleClass(title);

        $(self).addClass(title);
    });
    $('.service-button').each(function () {
        var self = $(this),
            button = $(self).find('button'),
            klass = $(button).text();

        klass = handleClass(klass);

        $(self).addClass(klass);

        $(button).attr('type', 'button');
        $(button).attr('onclick', 'showService(".' + klass + '");');
    });

    // show first service on page load
    var hasServiceButton = !!($('.service-button:first-child').html());

    if (hasServiceButton) {
        var classList = $('.service-button:first-child').attr('class').split(' '),
            classText = classList[classList.length - 1];
    
        showService('.' + classText);
    }
}

function handlePrograms() {
    $('.home .featured-program').wrapAll('<div class="featured-programs" />');
    $('.featured-program').each(function () {
        handleLink(this);
    });
}

function handleLatestNews() {
    $('.home .latest-news .HLLandingControl.SearchResults ul li').each(function() {
        var self = $(this);

        // get image
        handleAjaxCall(self);

        // wrap with link
        handleLink(self);

        // fix byline
        var byline = $(self).find('.ByLine');
        var byLineLink = $(byline).find('a[id*="Name"]');
        if (byLineLink.length === 0) {
            var trimmedByline = $(byline).text().trim().slice(2, $(byline).text().trim().length);
            $(byline).text(trimmedByline);
        }
    });
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
    $('.homepage-search .col-md-6:empty').closest('.homepage-search').hide();
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

        var eventType = $(self).find('.title-row > .col-md-9 > h4');

        $(eventType).prependTo($(self).find('.title-row > .col-md-9'));

        handleLink(self);
    });
}

function handleHomepageSearch() {
    $('.homepage-search').each(function () {
        var self = $(this);
        handleBgImage($(self).find('.search-bg'), $(self));
    });
    $('.homepage-search .SearchInputs .form-control').attr('placeholder', 'Search for something here...');
    $('.homepage-search button[id*="SearchButton"]').text('Search');
}

$(function () {
    handleSearch();
    handleServices();
    handlePrograms();
    handleLatestNews();
    handleWidgets();
    handleHomepagePermissions();
    handleEvents();
    handleHomepageSearch();
});