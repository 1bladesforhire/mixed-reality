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
        $('html, body').scrollTo('#top-of-pivot', 400, 'easeOutQuart');
    });

    // Call sticky tabs
    $('.sticky-tabs').stickThis();
});