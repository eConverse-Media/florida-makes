$(function () {
    $('.library-entry .user-content-hashtag').wrapAll('<div class="tags-list" />');
    var tags = $('.tags-list');
    $(tags).insertAfter('.library-link');
});