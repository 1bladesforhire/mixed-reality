$(document).ready(function() {
    $(".pmp-devices #headerCTA").length && !$(".pmp-devices #headerCTA").is(":empty") ? ($("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head .c-call-to-action.c-glyph").text($(".pmp-devices #headerCTA").text()),
        $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").attr("href", $(".pmp-devices #headerCTA").data("ctalink")),
        $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").attr("target", "_blank"),
        $("html .js-cat-head #mobile-buy-now").text($("html .js-cat-head #buy-now").text()),
        $("html .js-cat-head #mobile-buy-now").attr("href", $(".pmp-devices #headerCTA").data("ctalink"))) : $(".pmp-devices #headerCTA").is(":empty") && $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head .c-call-to-action.c-glyph").hide();
    setTimeout(function() {
        var n = window.matchMedia("(max-width: 767px)");
        n.matches ? $(".context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").css("display", "none") : ($(".context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").css("display", "block"),
            $(".pmp-devices #headerCTA").is(":empty") && $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head .c-call-to-action.c-glyph").hide())
    }, 50);
    $(window).on("resize", function() {
        setTimeout(function() {
            var n = window.matchMedia("(max-width: 767px)");
            n.matches ? $(".context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").css("display", "none") : ($(".context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").css("display", "block"),
                $(".pmp-devices #headerCTA").is(":empty") && $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head .c-call-to-action.c-glyph").hide())
        }, 50)
    })
});
$(document).ready(function() {
    $(".pmp-devices #headerCTA").length && !$(".pmp-devices #headerCTA").is(":empty") && $(".context-uhf .theme-light.js-cat-head a").each(function() {
        var t = $(this).attr("href"),
            n = t.split("/"),
            i = n[4] + "/" + n[5];
        i === "surface/buy" && $(this).hide()
    })
});


$(document).ready(function() {
    $("#headerCTA").length && !$("#headerCTA").is(":empty") && ($("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head .c-call-to-action.c-glyph").text($("#headerCTA").text()),
        $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head  .c-call-to-action.c-glyph").attr("href", $("#headerCTA").data("ctalink")),
        $("#headerCTA").data("ctaarialabel") != undefined && $("#headerCTA").data("ctaarialabel") != "" && $("#shell-category-header-cta, .context-uhf .theme-light.js-cat-head .c-call-to-action.c-glyph").attr("aria-label", $("#headerCTA").data("ctaarialabel")))
});


var siteid = "",
    skilltext = "",
    localelang = "",
    chatpath = "",
    chatbusiness = "",
    chatconsumer = "",
    lpTag = lpTag || {},
    lpMTagConfig = lpMTagConfig || {};
lpTag.vars = lpTag.vars || [];
lpTag.dbs = lpTag.dbs || [];
lpTag.sdes = lpTag.sdes || [];


$.fn.minHeight = function() {
    var i, n, t;
    try {
        if (arguments.length == 1)
            i = arguments[0],
            $(this).each(function() {
                $(this).css("min-height", i + "px")
            });
        else {
            if (arguments.length == 0)
                return n = null,
                    t = Infinity,
                    $(this).each(function() {
                        var i = $(this).innerHeight();
                        i <= t && (t = i,
                            n = $(this))
                    }),
                    n;
            console.log("error:please give appropriate parameters")
        }
    } catch (r) {
        console.log(r)
    }
};
$.fn.maxHeight = function() {
    var i, n, t;
    try {
        if (arguments.length == 1)
            i = arguments[0],
            $(this).each(function() {
                $(this).css("max-height", i + "px")
            });
        else {
            if (arguments.length == 0)
                return n = null,
                    t = 0,
                    $(this).each(function() {
                        var i = $(this).innerHeight();
                        i >= t && (t = i,
                            n = $(this))
                    }),
                    n;
            console.log("error:please give appropriate parameters")
        }
    } catch (r) {
        console.log(r)
    }
};


$(function() {
    $(window).bind("hashchange", function() {
        var t = window.location.hash,
            n;
        try {
            n = document.querySelector(t)
        } catch (i) {
            i.code == DOMException.SYNTAX_ERR && (t = t.split("&")[0],
                t != "" && (n = document.querySelector(t)))
        }
        n && (/^(?:a|select|input|button|textarea)$/i.test(n.tagName) || (n.tabIndex = -1),
            window.onload = function() {
                n.focus();
                window.scrollTo(0, n.offsetTop)
            }
        )
    }).trigger("hashchange")
});


$(document).ready(function() {
    var n = navigator.userAgent,
        t, i;
    t = n.indexOf("Mac") != -1 ? "Mac" : n.indexOf("Windows") != -1 ? "Windows" : "";
    i = n.indexOf("Safari") != -1 ? n.indexOf("Edge") != -1 ? "Edge" : n.indexOf("Chrome") != -1 ? "Chrome" : "Safari" : n.match(/Trident.*rv[ :]*11\./) ? "IE11" : n.indexOf("Firefox") != -1 ? "Firefox" : "";
    $("html").addClass(t).addClass(i)
});
$(document).ready(function() {
    $(".shell-category-header-cta-wrapper .category-cta-button, a.c-call-to-action.c-glyph.surface-bg-cta-blue").attr("role", "link")
});

$(document).ready(function() {
    function n() {
        ($("#headerCTA").hasClass("surface_av") || $("#headerCTA").hasClass("surface_ac") || $("#headerCTA").hasClass("surface_ah") || $("#headerCTA").hasClass("surface_arc_mouse")) && $("#headerCTA").attr("data-ctalink") == "" && ($("html .js-cat-head #mobile-buy-now").text($("html .js-cat-head #buy-now").text()),
            $("html .js-cat-head #buy-now,html .js-cat-head #mobile-buy-now").attr({
                "aria-disabled": "true",
                disabled: "true"
            }).removeAttr("href").addClass("surface-disabled-cta"))
    }
    $(".surface-compare-c-chart,.m-system-requirements").length && $(".surface-compare-c-chart tr,.m-system-requirements .c-table tr").each(function() {
        var n = $(this).find("td").length,
            t = 0;
        $(this).find("td").each(function() {
            t += $(this).text() == "" ? 1 : 0
        });
        n && t == n && $(this).remove()
    });
    $(".m-compare-chart").find("li").length && $(".m-compare-chart").find("li").each(function() {
        $.trim($(this).find("p").first().html()) == "" && $(this).hide()
    });
    n();
    $(window).load(function() {
        n()
    })
});