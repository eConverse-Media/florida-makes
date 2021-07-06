$(function () {
    var name = $('.HLWelcomeHeader .panel-body h4').text(),
        greeting = '<div class="greeting"><span>Welcome back, </span><a href="profile">' + name + '!</a></div>',
        linkToInbox = '/network/members/profile/myaccount/inbox/',
		unreadEmailCount = $('a[id^="Welcome_Details_MessagesCount"]').length !== 0 ? parseInt($('a[id^="Welcome_Details_MessagesCount"]').text()) : 0,
        emailContent = '<div class="email-content"><a href ="' + linkToInbox + '">' + unreadEmailCount + '</a></div>',
        progressBar = $('div[id*="CompleteBarProgress"]').clone(),
        progressText = '<span class="progress-text">Profile Completion</span>';

    // create the first column
    $('.member-dashboard-img').wrap('<div class="user-details" />')
    $('.user-details').append(greeting);
    $('.member-dashboard-img').append(emailContent);
    if (!!($.trim($(progressBar).html()))) {
        $(progressBar).insertAfter('.user-details');
        $(progressText).insertAfter('.user-details');
    }

    $('.dashboard-link').wrapAll('<div class="dashboard-links" />');
});