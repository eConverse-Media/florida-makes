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

function handleEvents() {
    $('.home .HLEventList ul li').each(function () {
        var self = $(this);
        
        handleLink(self);

        var h4 = $(self).find('h4'),
            h3 = $(self).find('h3');

        $(h4).insertBefore(h3);
    });
}

function handleLatestNews() {
    $('.home .latest-news .HLLandingControl.SearchResults .Content ul li').each(function() {
        var self = $(this);

        // get image
        handleAjaxCall(self);

        // wrap with link
        handleLink(self);
        
        // unwrap tags

        $(self).find('a.label-search-tag').each(function () {
            var link = $(this);

            $(link).wrapInner('<span class="news-tag" />');

            $(link).contents().unwrap();
        });

        // fix byline
        var byline = $(self).find('.ByLine');
        var byLineLink = $(byline).find('a[id*="Name"]');
        if (byLineLink.length === 0) {
            var trimmedByline = $(byline).text().trim().slice(2, $(byline).text().trim().length);
            $(byline).text(trimmedByline);
        }
    });
}

function handleQuickLinks() {
    $('.quick-link').wrapAll('<div class="quick-links" />');
    $('.quick-links-title, .quick-links').wrapAll('<div class="tile" />');
}

function handleWidgets() {
    $('.HLLandingControl .Content ul li').each(function () {
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
    $('.auth-widgets .col-md-4:empty').closest('.auth-widgets').hide();
}

function handleFeaturedContent() {
    $('.featured-content .HtmlContent > *:not(img)').wrapAll('<div class="text-container" />');
}

function handleAppending() {
    $('.append-me').each(function () {
        var self = $(this),
            prev = $(self).prev();

        $(self).appendTo(prev);
    });
}

function handleFeaturedEvent() {
    $('.featured-event .HLEventList ul li').each(function () {
        var self = $(this),
            eventContent = $(self).find('.timeAgoFormat').parent();

        $(eventContent).wrapInner('<div class="event-description" />');

        $(self).find('.event-description > h3').prependTo(eventContent);
        $(self).find('.event-description > h4').prependTo(eventContent);
        $(self).find('.event-description > .timeAgoFormat').appendTo(eventContent);

        var text = $(self).find('.event-description').text();

        text = $.trim(text);

        text = text.substring(0, 150);

        $(self).find('.event-description').text(text);

    });
}

$(function () {
    handleSearch();
    handleServices();
    handleCards();
    handlePrograms();
    handleFlexImages();
    handleEvents();
    handleLatestNews();
    handleQuickLinks();
    handleWidgets();
    handleHomepagePermissions();
    handleFeaturedContent();
    handleAppending();
    handleFeaturedEvent();
});