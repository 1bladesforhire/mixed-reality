jQuery(function() {

    // Scroll to Pivot top
    $('a.pivot-scroll').on("click", function() {
        //     $('html, body').scrollTo('#overview', 400, 'easeOutQuart');
        // });
        $('html, body').animate({
            scrollTop: $("#pivot-top").offset().top + 20
        }, 500);
        return true;
    });
    // Call sticky tabs
    $('.sticky-tabs').stickThis();

    $(window).on('load', function() {

        if ($('main').hasClass('optionb')) {

            $('body').addClass('b_video');
        }
    })
});