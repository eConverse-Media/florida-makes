function handleTopTextLinks() {
    var container = $('#MPheader > div.row:first-child > .col-md-12'),
        link = $('#MPAuxNav ul.level1 li:first-child a');

    $(link).prependTo(container);
    $(link).addClass('floridamakes-network');
}

function handleHeader() {
    $('.mep-logo .HtmlContent').addClass('mep-logo').appendTo('#Logo > .col-md-12');
    $('.search-bar-top, .header-social').wrapAll('<div class="col-md-12 search-and-social" />');
    $('.search-and-social').appendTo('#Logo');
    $('.search-bar-top .form-control').attr('placeholder', 'Keyword Search...');
}

function handleHomepagePermissions() {

    // handle collaborate with us
    $('.collaborate .row-wide > .col-md-6:empty').closest('.collaborate').hide();

    // handle mission
    $('.mission-tiles > .col-md-3:empty').closest('.mission').hide();

    // handle testimonials
    $('.testimonials > .col-md-4:empty').closest('.bg-grey').hide();

    // handle newsletter
    $('.col-md-6:empty').closest('.newsletter-wrapper').hide();
}

function handleAllContentList() {
    // remove comma
    $('.HLLandingControl.SearchResults ul li').each(function() {
        var byline = $(this).find('.ByLine');
        var byLineLink = $(byline).find('a[id*="Name"]');
        if (byLineLink.length === 0) {
            var trimmedByline = $(byline).text().trim().slice(2, $(byline).text().trim().length);
            $(byline).text(trimmedByline);
        }        
    });

    // bring in image
    $('.latest-news .HLLandingControl ul li').each(function () {
        handleAjaxCall(this);
    });
}

function handleCollaborateSection() {
    $('.collaborate-link').each(function () {
        var self = $(this),
        link = $(self).find('a'),
        href = $(link).attr('href'),
        target = $(link).attr('target');

        if (target == "_blank") {
            $(self).find('.HtmlContent').wrapInner('<a href="' + href + '" target="_blank" />');
        } else {
            $(self).find('.HtmlContent').wrapInner('<a href="' + href + '" />');
        }

        $(link).wrapInner('<h5 />');
        $(link).contents().unwrap();
    });
}

function handleManufacts() {
    $('.manufact').wrapAll('<div class="manufact-wrapper" />');
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
        var self = $(this),
            a = $(self).find('a'),
            href = $(a).attr('href'),
            target = $(a).attr('target');

        if (target == "_blank") {
            $(self).wrapInner('<a href="' + href + '" target=_"blank" />');
        } else {
            $(self).wrapInner('<a href="' + href + '" />');
        }

        $(a).hide();
    });
}

$(function () {
    handleTopTextLinks();
    handleHeader();
    handleHomepagePermissions();
    handleAllContentList();
    handleCollaborateSection();
    handleManufacts();
    handleTestimonials();
});