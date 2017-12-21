jQuery(function() {

    // Scroll to Pivot top
    $('a.pivot-scroll').on("click", function() {
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
    });

    $('#vid-slides a, #vid-slides button').on('click', function() {

        setTimeout(function() {
            target = $('#vid-slides a.f-active').attr('aria-controls');
            whichToStart = target.substr(0, target.indexOf(" "));
            document.getElementById(whichToStart).getElementsByTagName('video')[0].play();
        }, 50);
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
    var button = document.getElementById("embed1");
    var video = document.getElementById("vid1");
    if (video.paused) {
        video.play();
        button.classList.remove("glyph-play");
        button.classList.add("glyph-pause");
        video.setAttribute("controls", "controls");
    } else {
        video.pause();
        button.classList.add("glyph-play");
        button.classList.remove("glyph-pause");
        video.setAttribute("controls", "false");
    }

}

function restart() {
    var video = document.getElementById("vid1play");
    video.currentTime = 0;
}

//scroll play video
$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('#vid-slides li .f-active video');
    var tolerancePixel = 40;

    function checkMedia() {
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) {
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);
});

// Function to reveal lightbox and add YouTube autoplay
function revealVideo(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1'; // adding autoplay to the URL
    document.getElementById(div).style.display = 'block';
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', ''); // removing autoplay form url
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
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