function handleSearch() {
    $('.search-bar-top').insertAfter('#Logo');
    $('.search-bar-top .form-control, #searchColumn .form-control').attr('placeholder', 'Keyword Search...');
}

function handleSponsors() {
    $('.sponsor').wrapAll('<div class="sponsors" />');
}

$(function () {
    handleSearch();
    handleSponsors();
});