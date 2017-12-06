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
        //set styles for option b page with body class
        if ($('main').hasClass('optionb')) {

            $('body').addClass('b_video');
        }

        //set li to active class for thumb carousel
        $('#m-multi-tiles').find('a.f-active').parent().addClass('li-active');
    });

    $('#m-multi-tiles li').on('click', function() {
        $(this).addClass('li-active').siblings().removeClass('li-active');
    });

    $('#m-multi-tiles button.c-flipper').on('mouseup', function() {
        setTimeout(function() {
            $('#m-multi-tiles').find('a.f-active').parent().addClass('li-active').siblings().removeClass('li-active');
        }, 100);
        // alert('clicked');       
    });
});
window.document.onkeydown = function(e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("WMR_sizzle");
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();


}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("WMR_sizzle");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}


//Custom video player


function vidplay() {
    var video = document.getElementById("vid1");
    var button = document.getElementById("embed1");

    if (video.paused) {
        video.play();
        button.classList.remove("glyph-play");
        video.setAttribute("controls", "controls");
    } else {
        video.pause();
        button.classList.add("glyph-play");
        video.setAttribute("controls", "false");
    }

}

function restart() {
    var video = document.getElementById("vid1play");
    video.currentTime = 0;
}



// MS video player

// var playerData = {
//     options: {
//         autoplay: false,
//         mute: false,
//         loop: false,
//         market: "en-us",
//         playFullScreen: false
//     },
//     metadata: {
//         videoId: '2D3FDE10-2387-4EE6-8B7A-EBD9ED73E23B'
////secondary vid id b449aafc-09ff-5556-08b5-32c2fb368912  ??
//     }
// };

// MsOnePlayer.render(
//     'player-container', // id of the container div
//     playerData, // player data	
//     function(player) { // onPlayerReady callback function which returns back player instance on which APIs can be called
//         player.addPlayerEventListener(function(e) { console.log('player event: ' + JSON.stringify(e)) });
//     }
// );