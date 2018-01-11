//XBOX rotator
$(function() {

    $('#xp-accolade-panel .no-js').removeClass('no-js');

    // Browser detection is not recommended :)
    var isIE = /* @cc_on!@*/ false || !!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia,
        isAndroid = navigator.userAgent.match(/android/i);

    if (isIE) { $('body').addClass('isIE'); }
    if (isEdge) { $('body').addClass('isEdge'); }
    if (isAndroid) { $('body').addClass('isAndroid'); }

    var winWidth = $(window).width(),
        container = $('#xp-accolade-panel'),
        staticImg = container.find('.xp-accolade-media'),
        slider = container.find('.slider'),
        scrubberContainer = container.find('.accoladeFooter .holder'),
        frameWidth = 0,
        frameHeight = 0,
        maxBreakpoint = 767,
        imgAttr = (winWidth > maxBreakpoint) ? 'data-spritesrc-xl' : 'data-spritesrc-xs',
        framesAttr = (winWidth > maxBreakpoint) ? 'data-spritenumframes-xl' : 'data-spritenumframes-xs',
        imgSrc = staticImg.attr(imgAttr),
        numFrames = staticImg.attr(framesAttr),
        imgElm,
        spriteElm,
        isLoaded = false,
        runningTime = 0,
        sliderWidth = 100;

    function onResize() {
        winWidth = $(window).width();
        goToFrame(slider[0].value);
    }
    window.addEventListener('resize', onResize);
    onResize();

    // Indicate loading state while video is loaded
    var circle = $('<div/>').addClass('circle');
    var loader = $('<div/>')
        .addClass('xp-loader')
        .append(circle.clone())
        .append(circle.clone())
        .append(circle.clone())
        .append(circle.clone())
        .append(circle.clone());
    container.addClass('xp-accolade-loading').append(loader);

    // Inject hidden img element onto page and wait for it to fully load
    imgElm = $('<img/>')
        .attr('src', imgSrc)
        .addClass('xp-spriteloader')
        .on('load', onImageLoaded)
        .appendTo(container);

    function onImageLoaded() {

        frameWidth = imgElm.width();
        frameHeight = imgElm.height() / numFrames;
        console.log(imgElm.width());
        imgElm.remove();
        loader.remove();
        scrubberContainer.show();

        spriteElm = $('<div/>')
            .addClass('xp-rotator-sprite')
            .css({
                'background-image': 'url(' + imgSrc + ')',
                'background-size': '100% ' + (numFrames * 100) + '%'
            });

        // Swap static image for sprite animation
        staticImg.after(spriteElm).hide();

        isLoaded = true;

        // update slider range to match exact number of frames and set handlers
        slider
            .attr('max', numFrames - 1)
            .val(Math.floor(numFrames / 2))
            .on('input change touchmove', playback)
            .trigger('input');
    }

    /**
     * Control playback per scrubbing
     */
    function goToFrame(pos) {
        if (isLoaded) {
            var frameCorrection = (pos == (numFrames - 1)) ? -1 : 0;
            var multiplier = winWidth / frameWidth; // assumes rotator element is full-bleed
            spriteElm.css('background-position', '0px -' + (Math.floor(pos * frameHeight * multiplier) + frameCorrection) + 'px');
        }
    };

    function playback() {
        goToFrame(this.value);
    };

});

var windowresized2 = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Fires only once.";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

$(window).resize(function() {
    windowresized2(function() {
        accPar();
    }, 200, "pageresize");
});