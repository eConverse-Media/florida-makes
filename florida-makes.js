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

    // handle newsletter
    $('.col-md-6:empty').closest('.newsletter-wrapper').hide();
}

$(function () {
    handleTopTextLinks();
    handleHeader();
    handleHomepagePermissions();
});