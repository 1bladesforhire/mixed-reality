$(function() {

    // Scroll to Anchor
    $('.scroll-to').click(function() {
        var top = $('body').find($(this).attr('href')).offset().top + (-72);
        $('html, body').animate({
            scrollTop: top
        }, 1000, 'easeOutQuart');
        return false;
    });

    // Scroll to Pivot top
    $('.pivot-scroll').on("click", function() {
        $('html, body').scrollTo('#pivot-tab', 400, 'easeOutQuart');
    });

    // Call sticky tabs
    $('.sticky-tabs').stickThis();

});

// window.onload = function() {
//     var hashValue = window.location.hash.substr(1);
//     if (hashValue == 'tech-specs') {
//         // set f-active on tab
//         $('.main-tabs').each('a').removeClass('f-active').attr('aria-hidden', 'true');
//         $('a.techSpecTab').addClass('f-active').attr('aria-hidden', 'false');
//         // set aria-hidden false on third tab, true on other tabs
//     } else if (hashValue = 'overview') {
//         // set properties back to default state
//         $('.main-tabs').each('a').removeClass('f-active').attr('aria-hidden', 'true');
//         $('a.overviewTab').addClass('f-active').attr('aria-hidden', 'false');
//     }
// }