jQuery(function() {

    // Scroll to Anchor
    // $('a.pivot-scroll').click(function() {
    //     $('html, body').animate({
    //         scrollTop: $('#pivot-top')
    //     }, 1000);
    //     return false;
    // });

    // Scroll to Pivot top
    $('a.pivot-scroll').on("click", function() {
        //     $('html, body').scrollTo('#overview', 400, 'easeOutQuart');
        // });
        $('html, body').animate({
            scrollTop: $("#pivot-top").offset().top
        }, 500);
        return true;
    });
    // Call sticky tabs
    $('.sticky-tabs').stickThis();

});