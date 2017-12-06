var mwfVideoPlayer = function(e) {
    function t(o) { if (i[o]) return i[o].exports; var n = i[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports } var i = {}; return t.m = e, t.c = i, t.p = "", t(0) }([function(e, t, i) { var o, n;
    o = [i, t, i(3), i(4), i(32), i(18), i(17), i(19), i(20), i(16), i(22), i(7), i(2), i(31), i(1), i(28), i(15), i(5), i(30), i(29), i(27), i(26), i(24), i(25), i(6), i(23), i(21)], n = function(e, t, i, o, n, r, a, s, l, u, d, c, p, h, m, y, v, g, f, C, b, E, w, T, P, k, S) { "use strict";

        function M(e) { for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i]) }
        M(i), M(o), M(n), M(r), M(a), M(s), M(l), M(u), M(d), M(c), M(p), M(h), M(m), M(y), M(v), M(g), M(f), M(C), M(b), M(E), M(w), M(T), M(P), M(k), M(S) }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(2)], n = function(e, t, i) { "use strict"; var o = function() {
            function e() {} return e.resourcePath = "https://assets.onestore.ms/cdnfiles/external/mwf/long/v1/v1.20.2/resources", e.localResourcePath = "/resources", e.ampUrl = "//amp.azure.net/libs/amp/1.8.0/azuremediaplayer.min.js", e.continueInterval = 2e4, e.firstByteTimeoutVideoMobile = 2e4, e.firstByteTimeoutVideoDesktop = 1e4, e.defaultVolume = .75, e.checkpoints = [25, 50, 75, 95], e.playbackRates = [2, 1.5, 1.25, 1, .75, .5], e.defaultPlaybackRate = 1, e.defaultQualityMobile = i.MediaQuality.SD, e.defaultQualityTV = i.MediaQuality.SD, e.defaultQualityDesktop = i.MediaQuality.HQ, e }();
        t.PlayerConfig = o }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t], n = function(e, t) { "use strict";! function(e) { e[e.MP4 = "MP4"] = "MP4", e[e.DASH = "DASH"] = "DASH", e[e.SMOOTH = "SMOOTH"] = "SMOOTH", e[e.HLS = "HLS"] = "HLS" }(t.MediaTypes || (t.MediaTypes = {}));
        t.MediaTypes;! function(e) { e[e.HD = "HD"] = "HD", e[e.HQ = "HQ"] = "HQ", e[e.SD = "SD"] = "SD", e[e.LO = "LO"] = "LO" }(t.MediaQuality || (t.MediaQuality = {}));
        t.MediaQuality;! function(e) { e[e.BufferingFirstByteTimeout = 2e3] = "BufferingFirstByteTimeout", e[e.MediaErrorAborted = 2100] = "MediaErrorAborted", e[e.MediaErrorNetwork = 2101] = "MediaErrorNetwork", e[e.MediaErrorDecode = 2102] = "MediaErrorDecode", e[e.MediaErrorSourceNotSupported = 2103] = "MediaErrorSourceNotSupported", e[e.MediaErrorUnknown = 2104] = "MediaErrorUnknown", e[e.MediaSelectionNoMedia = 2200] = "MediaSelectionNoMedia", e[e.AmpEncryptError = 2405] = "AmpEncryptError", e[e.AmpPlayerMismatch = 2406] = "AmpPlayerMismatch" }(t.VideoErrorCodes || (t.VideoErrorCodes = {}));
        t.VideoErrorCodes }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(4), i(11), i(9), i(31), i(11), i(24)], n = function(e, t, i, o, n, r, a, s) { "use strict"; var l = function() {
            function e(t, i) { if (this.videoComponent = t, this.playerData = {}, t) { var n = "object" == typeof i ? i : {}; if (!i || !i.options) { var a = this.videoComponent.getAttribute(e.playerDataAttribute);
                        a && (n = o.parseJson(a)) }
                    this.playerData.options = new r.PlayerOptions(n.options), this.playerData.metadata = n.metadata, this.playerData.options.autoload && this.load() } } return e.prototype.setupContainer = function(t) { this.externalPlayerElement = n.selectFirstElement(e.externalPlayerContainer, this.videoComponent), this.corePlayerElement = n.selectFirstElement(e.corePlayerContainer, this.videoComponent), !this.externalPlayerElement && t && (this.externalPlayerElement = document.createElement("div"), this.externalPlayerElement.setAttribute("class", e.externalPlayerContainer), this.videoComponent.appendChild(this.externalPlayerElement)), this.updateContainerVisibility(this.corePlayerElement, t), this.updateContainerVisibility(this.externalPlayerElement, !t), n.removeInnerHtml(this.externalPlayerElement) }, e.prototype.updateContainerVisibility = function(e, t) { if (e) { var i = t ? "true" : "false";
                    e.setAttribute("aria-hidden", i) } }, e.prototype.load = function(t) { t && (a.extend(this.playerData.options, t.options), this.playerData.metadata = t.metadata), this.currentPlayer && this.dispose(), this.videoComponent.getAttribute("id") || this.videoComponent.setAttribute("id", s.PlayerUtility.random4CharString()), this.playerData.options && this.playerData.options.debug && this.videoComponent.setAttribute("data-debug", "true"); var o = this.playerData.metadata && this.playerData.metadata.playerName || e.defaultPlayerName,
                    n = o !== e.defaultPlayerName;
                this.setupContainer(n), this.currentPlayer = i.PlayerFactory.createPlayer(o, this.videoComponent, this.playerData) }, e.prototype.dispose = function() { this.currentPlayer && (this.currentPlayer.dispose(), this.currentPlayer = null), n.removeInnerHtml(this.videoComponent) }, e.prototype.play = function() { this.currentPlayer && this.currentPlayer.play() }, e.prototype.pause = function() { this.currentPlayer && this.currentPlayer.pause() }, e.prototype.mute = function() { this.currentPlayer && this.currentPlayer.mute() }, e.prototype.unmute = function() { this.currentPlayer && this.currentPlayer.unmute() }, e.selector = ".c-video-player", e.corePlayerContainer = ".f-core-player", e.externalPlayerContainer = ".f-external-player", e.playerDataAttribute = "data-player-data", e.defaultPlayerName = "coreplayer", e }();
        t.VideoPlayer = l }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(5), i(29)], n = function(e, t, i, o) { "use strict"; var n = function() {
            function e() {} return e.createPlayer = function(e, t, n) { var r; if (e) switch (e.toLowerCase()) {
                    case "youtube":
                        r = new o.YoutubePlayer(t, n); break;
                    default:
                        r = new i.CorePlayer(t, n) }
                return r || new i.CorePlayer(t, n) }, e }();
        t.PlayerFactory = n }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) {
    var o, n;
    o = [i, t, i(7), i(16), i(11), i(9), i(10), i(2), i(21), i(23), i(6), i(25), i(24), i(22), i(26), i(15), i(1), i(28), i(22)], n = function(e, t, i, o, n, r, a, s, l, u, d, c, p, h, m, y, v, g, f) {
        "use strict";
        var C = { Init: "init", Loading: "loading", Ready: "ready", Playing: "playing", Paused: "paused", Buffering: "buffering", Seeking: "seeking", Ended: "ended", Error: "error", Stopped: "stopped" },
            b = [s.MediaQuality.HD, s.MediaQuality.HQ, s.MediaQuality.SD, s.MediaQuality.LO],
            E = function() {
                function e(t, i) { var o = this;
                    this.videoComponent = t, this.canPlay = !1, this.errorMessageDisplayed = !1, this.isInFullscreen = !1, this.videoMetadata = null, this.playerOptions = null, this.isBuffering = !1, this.isWindowClosing = !1, this.isFirstTimePlayed = !0, this.isVideoMuted = !1, this.commonPlayerImpressionReported = !1, this.seekFrom = null, this.playerTechnology = null, this.nextCheckpoint = null, this.stopwatchBuffering = new c.Stopwatch, this.stopwatchLoading = new c.Stopwatch, this.stopwatchPlaying = new c.Stopwatch, this.firstByteTimer = null, this.lastVolume = 1, this.currentVideoFile = null, this.reporters = [], this.playOnDataLoad = !1, this.startTimeOnDataLoad = 0, this.locReady = !1, this.onResoucesLoaded = function() { o.initializeVideoControls(), o.locReady = !0 }, this.onMediaEvent = function(e) { if (e) switch (r.customEvent(o.videoComponent, e.type, { bubbles: e.bubbles, cancelable: e.cancelable }), e.type.toLowerCase()) {
                            case "canplay":
                            case "canplaythrough":
                                o.onVideoCanPlay(e); break;
                            case "error":
                                o.onVideoError(e); break;
                            case "play":
                                o.onVideoPlay(e); break;
                            case "pause":
                                o.onVideoPause(e); break;
                            case "seeking":
                                o.onVideoSeeking(e); break;
                            case "seeked":
                                o.onVideoSeeked(e); break;
                            case "waiting":
                                o.onVideoWaiting(e); break;
                            case "loadedmetadata":
                                o.onVideoMetadataLoaded(); break;
                            case "loadeddata":
                                o.onVideoLoadedData(); break;
                            case "timeupdate":
                                o.onVideoTimeUpdate(); break;
                            case "ended":
                                o.onVideoEnded(); break;
                            case "playing":
                                o.onVideoPlaying(); break;
                            case "volumechange":
                                o.onVideoVolumeChange(e) } }, this.onVideoPlaying = function() { o.updateState(C.Playing), o.videoControls && o.videoWrapper && o.videoControls.setDuration(o.getDuration()), o.setNextCheckpoint(), o.isFirstTimePlayed && (o.isFirstTimePlayed = !1, o.reportEvent(h.PlayerEvents.ContentStart)), d.Environment.isAndroid && (o.logMessage("re-invoking play for Android only"), o.videoWrapper.play()) }, this.onVideoWrapperLoaded = function() { return o.locReady ? (o.videoPlayer = r.selectFirstElement(".f-video-player", o.playerContainer), o.videoTag = r.selectFirstElementT("video", o.playerContainer), o.videoPlayer ? (o.restoreSettings(), o.bindEvents(), o.videoMetadata && o.videoMetadata.posterframeUrl && o.videoWrapper.setPosterFrame(o.videoMetadata.posterframeUrl), o.currentVideoFile = o.getVideoFileToPlay(), o.currentVideoFile && (o.commonPlayerImpressionReported || (o.reportEvent(h.PlayerEvents.CommonPlayerImpression), o.commonPlayerImpressionReported = !0), o.setVideoSrc(o.currentVideoFile.url, o.currentVideoFile.mediaType)), o.triggerContainer = r.selectFirstElement("section", o.videoComponent), o.triggerContainer && (o.trigger = r.selectFirstElement(".c-action-trigger", o.triggerContainer)), o.setupControlOptions(), void o.showControlsBasedOnState()) : null) : void setTimeout(function() { o.onVideoWrapperLoaded() }, 50) }, this.onBeforeUnload = function() { o.isWindowClosing = !0 }, this.onVideoWrapperLoadFailed = function() { o.displayErrorMessage({ title: o.localizationHelper.getLocalizedValue(y.playerLocKeys.standarderror) }) }, this.onMouseEvent = function(e) { if (e = r.getEvent(e), "mousemove" === e.type) o.showControlsBasedOnState();
                        else if ("mouseout" === e.type)
                            for (var t = e.toElement || e.relatedTarget; t && t.parentNode && t.parentNode !== window;) { if (t.parentNode === o || t === o) return void r.preventDefault(e);
                                t = t.parentNode } }, this.onVideoMetadataLoaded = function() { o.logMessage("onVideoMetadataLoaded()") }, this.onVideoLoadedData = function() { o.updateState(C.Ready), o.videoControls && o.videoWrapper && (o.videoControls.setDuration(o.getDuration()), o.startTimeOnDataLoad && o.startTimeOnDataLoad > 0 && o.startTimeOnDataLoad < o.getDuration() && (o.setPlayPosition(o.startTimeOnDataLoad), o.startTimeOnDataLoad = null), o.playOnDataLoad && (o.play(), o.playOnDataLoad = !1)) }, this.onVideoTimeUpdate = function() { if (o.videoWrapper) { var e = o.getCurrentTime(),
                                t = o.getDuration(); if (isNaN(e) || isNaN(t)) return; if (o.videoControls && o.videoControls.setPlayPosition(e), o.closedCaptions && o.closedCaptions.updateCaptions(e), !o.isPaused() && (o.stopwatchPlaying.hasReached(v.PlayerConfig.continueInterval) && (o.reportEvent(h.PlayerEvents.ContentContinue), o.stopwatchBuffering.reset()), o.nextCheckpoint && t > 0 && e >= t * o.nextCheckpoint / 100)) { var i = "played" + o.nextCheckpoint;
                                o.reportEvent(h.PlayerEvents.ContentCheckpoint, { checkpoint: i }), o.setNextCheckpoint() } } }, this.onVideoCanPlay = function(e) { o.canPlay = !0, o.videoControls && o.videoControls.updatePlayPauseState() }, this.onVideoError = function(e) { if (!o.isWindowClosing && o.playerState !== C.Init && o.playerState !== C.Error) { o.updateState(C.Error); var t = o.videoWrapper.getError(); if (t && t.errorCode) { var i = void 0; switch (t.errorCode) {
                                    case s.VideoErrorCodes.MediaErrorAborted:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_aborted); break;
                                    case s.VideoErrorCodes.MediaErrorNetwork:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_network); break;
                                    case s.VideoErrorCodes.MediaErrorDecode:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_decode); break;
                                    case s.VideoErrorCodes.MediaErrorSourceNotSupported:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_src_not_supported); break;
                                    case s.VideoErrorCodes.AmpEncryptError:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_amp_encrypt); break;
                                    case s.VideoErrorCodes.AmpPlayerMismatch:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_amp_player_mismatch); break;
                                    default:
                                        i = o.localizationHelper.getLocalizedValue(y.playerLocKeys.media_err_unknown_error) }
                                i = a.format(o.localizationHelper.getLocalizedValue(y.playerLocKeys.playbackerror), i); var n = p.PlayerUtility.formatContentErrorMessage(t.errorCode, i, t.message);
                                o.stopMedia(i, n) } else o.stopMedia() } }, this.onVideoPlay = function(e) { e && e.target && o.getCurrentTime() && o.reportEvent(h.PlayerEvents.Resume), o.firstByteTimer && window.clearTimeout(o.firstByteTimer); var t = d.Environment.isMobile ? v.PlayerConfig.firstByteTimeoutVideoMobile : v.PlayerConfig.firstByteTimeoutVideoDesktop;
                        t > 0 && (o.firstByteTimer = setTimeout(function() { o.getBufferedDuration() || o.playerState !== C.Buffering || (o.logMessage("Buffering stuck detected"), o.updateState(C.Error), o.stopMedia(o.localizationHelper.getLocalizedValue(y.playerLocKeys.standarderror), p.PlayerUtility.formatContentErrorMessage(s.VideoErrorCodes.BufferingFirstByteTimeout, "Time out waiting for first byte."))) }, t)) }, this.onVideoPause = function(e) { o.videoWrapper && o.videoWrapper.isSeeking() || o.playerState === C.Ended || (o.updateState(C.Paused), e && e.target && o.reportEvent(h.PlayerEvents.Pause)) }, this.onVideoSeeking = function(e) { o.playerState !== C.Ended && o.videoWrapper && o.videoWrapper.isSeeking() && (o.nextCheckpoint = null, null === o.seekFrom && (o.seekFrom = o.getCurrentTime()), o.updateState(C.Seeking)) }, this.onVideoSeeked = function(e) { var t = o.getCurrentTime();
                        o.playerState !== C.Ended && o.videoWrapper && !o.videoWrapper.isSeeking() && null !== o.seekFrom && o.seekFrom !== t && (o.setNextCheckpoint(), o.reportEvent(h.PlayerEvents.Seek, { seekFrom: o.seekFrom, seekTo: t }), o.seekFrom = null, o.updateState(o.isPaused() ? C.Paused : C.Playing)) }, this.onVideoWaiting = function(e) { o.updateState(C.Buffering) }, this.onVideoVolumeChange = function(e) { e && e.target && (o.videoWrapper.isMuted() ? (o.reportEvent(h.PlayerEvents.Mute), o.isVideoMuted = !0) : o.isVideoMuted && (o.reportEvent(h.PlayerEvents.Unmute), o.isVideoMuted = !1)), o.videoControls && o.videoControls.updateVolumeState() }, this.onVideoPlayerClicked = function(e) { o.isPlayable && (o.isPaused() ? o.play() : o.pause()) }, this.onVideoEnded = function() { o.updateState(C.Ended), o.reportEvent(h.PlayerEvents.ContentComplete), o.stopwatchPlaying.reset(), d.Environment.useNativeControls || o.stop() }, this.onFullscreenChanged = function() { var t = e.getElementInFullScreen(),
                            i = o.getFullscreenContainer();
                        t ? i !== t || o.isInFullscreen || o.onFullscreenEnter() : o.isInFullscreen && o.onFullscreenExit() }, this.onIOSFullscreenEnter = function() { o.play(), o.onFullscreenEnter() }, this.onIOSFullscreenExit = function() { o.onFullscreenExit() }, this.onFullscreenError = function() { o.isInFullscreen = !1 }, t && (this.createComponents(i), this.load(i)) }
                return e.prototype.createComponents = function(t) { if (this.playerContainer = r.selectFirstElement(e.playerContainerSelector, this.videoComponent), !this.playerContainer) { var i = '<div class="f-core-player" >\n    <video class="f-video-player" preload="metadata"></video>\n    <div class="f-video-cc-overlay" aria-hidden="true"></div>\n    ' + (t && t.options && t.options.controls ? '<div class="f-video-controls" dir="ltr" aria-hidden="true">' : "") + "\n</div>";
                        this.videoComponent.innerHTML = i, this.playerContainer = r.selectFirstElement(e.playerContainerSelector, this.videoComponent) }
                    this.videoTag = r.selectFirstElementT("video", this.playerContainer) }, e.prototype.initializeLocalization = function() { this.localizationHelper ? this.onResoucesLoaded() : (this.playerOptions.market || (this.playerOptions.market = this.videoComponent.getAttribute("data-market")), this.localizationHelper = new y.LocalizationHelper(this.playerOptions.market, this.playerOptions.resourcePath), this.localizationHelper.loadResources(this.onResoucesLoaded)) }, e.prototype.initializeReporting = function() { this.playerOptions && this.playerOptions.reporting && this.playerOptions.reporting.enabled && this.playerOptions.reporting.jsll && this.reporters.push(new m.JsllReporter(this.videoComponent)) }, e.prototype.load = function(e) { e && e.metadata && e.options && (this.updateState(C.Init), this.hideErrorMessage(), this.videoMetadata = e.metadata, this.playerOptions = e.options, this.videoMetadata && this.videoMetadata.videoFiles && this.videoMetadata.videoFiles.length && (this.playOnDataLoad = this.playerOptions.autoplay, this.startTimeOnDataLoad = this.playerOptions.startTime, this.initializeClosedCaptions(), this.initializeLocalization(), this.initializeReporting(), this.videoTag && (this.videoTag.title = this.videoMetadata.title, this.videoTag.loop = this.playerOptions.loop, this.videoMetadata.posterframeUrl && (this.videoTag.poster = this.videoMetadata.posterframeUrl)), this.videoWrapper = this.getVideoWrapper(), this.playerTechnology = "OnePlayer_" + this.videoWrapper.getWrapperName(), this.videoWrapper.load(this.videoComponent, this.onVideoWrapperLoaded, this.onVideoWrapperLoadFailed, this.onMediaEvent))) }, e.prototype.initializeVideoControls = function() { this.videoControlsContainer = r.selectFirstElement(".f-video-controls", this.videoComponent); var e = !d.Environment.useNativeControls && this.playerOptions && this.playerOptions.controls;
                    this.videoControlsContainer && (this.videoControlsContainer.setAttribute("aria-hidden", e ? "false" : "true"), e && (this.videoControls = new i.VideoControls(this.videoControlsContainer, this, this.localizationHelper))) }, e.prototype.getQualityOptions = function() { if (!this.videoMetadata.videoFiles || !this.videoMetadata.videoFiles.length) return null; for (var e = [], t = this.currentVideoFile && this.currentVideoFile.quality, i = 0, o = b; i < o.length; i++) { var n = o[i],
                            r = this.getVideoFileByQuality(n); if (r && r.url) { var a = { id: this.addIdPrefix(s.MediaQuality[n]), label: this.localizationHelper.getLocalizedValue(y.playerLocKeys["quality_" + s.MediaQuality[n].toLowerCase()]), href: r.url, selected: r.quality === t };
                            e.push(a) } } return e.length || e.push({ id: this.addIdPrefix("auto"), label: this.localizationHelper.getLocalizedValue(y.playerLocKeys.quality_auto), selected: !0 }), e }, e.prototype.getClosedCaptionOptions = function() { if (!(this.videoMetadata && this.videoMetadata.ccFiles && this.videoMetadata.ccFiles.length && this.ccOverlay && this.closedCaptions)) return null; for (var t = n.getCookie(e.cookieCcPreference), i = [], o = !1, r = 0, a = this.videoMetadata.ccFiles; r < a.length; r++) { var s = a[r],
                            l = s.locale === t;!o && l && (o = !0); var u = { id: this.addIdPrefix(s.locale), label: y.ccCultureLocStrings[s.locale], href: s.url, selected: l };
                        i.push(u) } return i.unshift({ id: this.addIdPrefix("off"), label: this.localizationHelper.getLocalizedValue(y.playerLocKeys.closecaption_off), selected: !o }), o && this.setCC(this.addIdPrefix(t)), i }, e.prototype.getPlaybackRateOptions = function() { if (!this.playerOptions || !this.playerOptions.playbackSpeed || !this.videoWrapper || "amp" === this.videoWrapper.getWrapperName()) return null; for (var t = n.getCookie(e.cookiePlaybackRate) || v.PlayerConfig.defaultPlaybackRate, i = [], o = 0, r = v.PlayerConfig.playbackRates; o < r.length; o++) { var a = r[o],
                            s = a === +t,
                            l = 1 === a ? this.localizationHelper.getLocalizedValue(y.playerLocKeys.playbackspeed_normal) : a + "x",
                            u = { id: this.addIdPrefix("rate" + a), label: l, href: "#", selected: s };
                        i.push(u) } return this.setPlaybackRate(this.addIdPrefix("rate" + t)), i }, e.prototype.getShareOptions = function() { if (this.playerOptions && this.playerOptions.share) { var e = g.SharingHelper.getShareOptionsData(this.localizationHelper, this.playerOptions, this.videoMetadata && this.videoMetadata.shareUrl); if (e && e.length) { for (var t = [], i = 0, o = e; i < o.length; i++) { var n = o[i],
                                    r = { id: this.addIdPrefix(n.id), label: n.label, href: n.url, glyph: n.glyph, image: n.image };
                                t.push(r) } return t } } }, e.prototype.setupControlOptions = function() { if (this.videoControls && this.videoMetadata) { var e = [],
                            t = this.getQualityOptions();
                        t && t.length && e.push({ category: "f-video-quality", selectable: !0, options: t, label: this.localizationHelper.getLocalizedValue(y.playerLocKeys.quality) }); var i = this.getClosedCaptionOptions();
                        i && i.length && e.push({ category: "f-video-captions", selectable: !0, options: i, label: this.localizationHelper.getLocalizedValue(y.playerLocKeys.closecaption) }); var o = this.getPlaybackRateOptions();
                        o && o.length && e.push({ category: "f-video-playback-rate", selectable: !0, options: o, label: this.localizationHelper.getLocalizedValue(y.playerLocKeys.playbackspeed) }); var n = this.getShareOptions();
                        n && n.length && e.push({ category: "f-video-share", selectable: !1, options: n, label: this.localizationHelper.getLocalizedValue(y.playerLocKeys.sharing_label) }), this.videoControls.setOptions(e) } }, e.prototype.dispose = function() { this.hideErrorMessage(), this.unbindEvents(), this.stop(), this.updateState(C.Stopped), this.videoTag = null, this.videoWrapper && this.videoWrapper.dispose() }, e.prototype.restoreSettings = function() { this.lastVolume = (parseInt(n.getCookie(e.cookieVolume), 10) || 10) / 10, this.setVolume(this.lastVolume), (this.playerOptions.mute || "1" === n.getCookie(e.cookieMute)) && (this.isVideoMuted = !0, this.mute()), this.videoControls && this.videoControls.updateVolumeState() }, e.prototype.bindEvents = function() { r.addEvents(this.videoComponent, "mousemove mouseout", this.onMouseEvent), r.addEvents(window, "onBeforeUnload", this.onBeforeUnload), this.addFullscreenEvents(), d.Environment.useNativeControls || (r.addEvent(this.videoPlayer, r.eventTypes.click, this.onVideoPlayerClicked), r.addEvent(this.ccOverlay, r.eventTypes.click, this.onVideoPlayerClicked)) }, e.prototype.unbindEvents = function() { r.removeEvents(this.videoComponent, "mousemove mouseout", this.onMouseEvent), r.removeEvents(this.videoPlayer, r.eventTypes[r.eventTypes.click], this.onVideoPlayerClicked), r.removeEvents(this.ccOverlay, r.eventTypes[r.eventTypes.click], this.onVideoPlayerClicked), r.removeEvents(window, "onBeforeUnload", this.onBeforeUnload), this.removeFullscreenEvents() }, e.prototype.setVideoSrc = function(e, t) { e && this.videoWrapper && this.videoWrapper.setSource(e, t) }, e.prototype.reportEvent = function(e, t) { var i = this.getReport(t);
                    this.logMessage("Event reported : " + h.PlayerEvents[e] + " | data : " + JSON.stringify(i)); for (var o = 0, n = this.reporters; o < n.length; o++) { var a = n[o];
                        a.reportEvent(e, i) }
                    r.customEvent(this.videoComponent, h.PlayerEvents[e], { detail: i }) }, e.prototype.getVideoWrapper = function() { for (var e = 0, t = this.videoMetadata.videoFiles; e < t.length; e++) { var i = t[e],
                            o = i.mediaType || s.MediaTypes.MP4; if (o !== s.MediaTypes.MP4 && o !== s.MediaTypes.HLS) return new u.AmpWrapper } return this.playerOptions && "amp" === this.playerOptions.corePlayer ? new u.AmpWrapper : new l.Html5VideoWrapper }, e.prototype.startControlPanelTimeout = function() { var t = this;
                    this.controlPanelTimer = window.setTimeout(function() { t.hideControlPanel() }, e.controlPanelTimeout) }, e.prototype.hideControlPanel = function() { this.controlPanelTimer && window.clearTimeout(this.controlPanelTimer), d.Environment.useNativeControls ? this.videoTag && this.videoTag.removeAttribute("controls") : this.videoControlsContainer && (r.hasClass(this.videoControlsContainer, e.hideControlsClass) || (r.removeClass(this.videoControlsContainer, e.showControlsClass), r.addClass(this.videoControlsContainer, e.hideControlsClass), this.ccOverlay && (r.removeClass(this.ccOverlay, e.fitControlsClass), this.closedCaptions && this.videoWrapper && this.closedCaptions.updateCaptions(this.getCurrentTime())))), this.videoControls && this.videoControls.prepareToHide() }, e.prototype.showControlPanel = function(t) { void 0 === t && (t = !0), this.playerOptions && !this.playerOptions.controls || (this.controlPanelTimer && window.clearTimeout(this.controlPanelTimer), d.Environment.useNativeControls ? this.videoTag && this.videoTag.setAttribute("controls", "true") : this.videoControlsContainer && !r.hasClass(this.videoControlsContainer, e.showControlsClass) && (r.removeClass(this.videoControlsContainer, e.hideControlsClass), r.addClass(this.videoControlsContainer, e.showControlsClass), this.ccOverlay && (r.addClass(this.ccOverlay, e.fitControlsClass), this.closedCaptions && this.videoWrapper && this.closedCaptions.updateCaptions(this.getCurrentTime()))), t && this.startControlPanelTimeout()) }, e.prototype.stopMedia = function(e, t) { this.logMessage("StopMedia invoked"), this.firstByteTimer && (window.clearTimeout(this.firstByteTimer), this.firstByteTimer = null), this.exitFullscreen(), e && (this.logMessage(t || e), this.updateState(C.Stopped), this.displayErrorMessage({ title: e }), this.reportEvent(h.PlayerEvents.ContentError, { errorType: "content:error", errorDesc: t || e, errorMessage: e })) }, e.prototype.setNextCheckpoint = function() { var e = this.getDuration(); if (e)
                        for (var t = 0, i = v.PlayerConfig.checkpoints; t < i.length; t++) { var o = i[t]; if (this.getCurrentTime() / e * 100 <= o) return void(this.nextCheckpoint = o) }
                    this.nextCheckpoint = null }, e.prototype.getCurrentTime = function() { return this.videoWrapper ? this.videoWrapper.getCurrentTime() : 0 }, e.prototype.getBufferedDuration = function() { var e = 0; try { e = this.videoWrapper && this.videoWrapper.getBufferedDuration() } catch (e) { this.logMessage("Caught exception while getting buffered duration. " + e.message) } return e }, e.prototype.stop = function() { this.setPlayPosition(0), this.videoControls && (this.pause(), this.videoControls.setPlayPosition(0)), this.closedCaptions && this.closedCaptions.updateCaptions(0) }, e.prototype.isPaused = function() { return !!this.videoWrapper && this.videoWrapper.isPaused() }, e.prototype.isPlayable = function() { return !!this.videoPlayer && this.canPlay }, e.prototype.play = function() { var e = this;
                    this.playerState !== C.Playing && this.playerState !== C.Error && this.playerState !== C.Stopped && (this.videoWrapper && (d.Environment.isIProduct || d.Environment.isAndroidModern ? this.videoWrapper.play() : setTimeout(function() { e.videoWrapper.play() }, 0)), this.videoControls && this.videoControls.updatePlayPauseState()) }, e.prototype.pause = function() { this.videoWrapper && this.videoWrapper.pause(), this.videoControls && this.videoControls.updatePlayPauseState() }, e.prototype.setPlayPosition = function(t) { n.isNumber(t) && this.videoWrapper && (t = Math.max(0, Math.min(t, n.isNumber(this.getDuration()) ? this.getDuration() : 0)), Math.abs(t - this.getCurrentTime()) >= e.positionUpdateThreshold && (this.setNextCheckpoint(), this.seekFrom = this.getCurrentTime(), this.videoWrapper.setCurrentTime(t))) }, e.prototype.getVolume = function() { return this.videoWrapper && this.videoWrapper.getVolume() || 0 }, e.prototype.setVolume = function(t, i) { n.isNumber(t) && this.videoWrapper && (t = Math.round(100 * Math.max(0, Math.min(t, 1))) / 100, t !== this.videoWrapper.getVolume() && (this.lastVolume = t, this.videoWrapper.setVolume(t), n.setCookie(e.cookieVolume, Math.ceil(10 * t).toString(), "/"), this.isMuted() && t > 0 && this.unmute(i), this.videoControls && this.videoControls.updateVolumeState())) }, e.prototype.getDuration = function() { return this.videoWrapper && this.videoWrapper.getDuration() || this.videoMetadata && this.videoMetadata.duration || 0 }, e.prototype.isMuted = function() { return this.videoWrapper && this.videoWrapper.isMuted() || this.isVideoMuted }, e.prototype.mute = function(t) { this.lastVolume = this.getVolume(), this.setMuted(!0), t && n.setCookie(e.cookieMute, "1", "/") }, e.prototype.unmute = function(t) { this.setMuted(!1), this.setVolume(this.lastVolume || v.PlayerConfig.defaultVolume), t && n.setCookie(e.cookieMute, "0", "/") }, e.prototype.setMuted = function(e) { this.videoWrapper && e !== this.videoWrapper.isMuted() && (e ? this.videoWrapper.mute() : this.videoWrapper.unmute()), this.videoControls && this.videoControls.updateVolumeState() }, e.isNativeFullscreenEnabled = function() { var e = document; return e.fullscreenEnabled || e.mozFullScreenEnabled || e.webkitFullscreenEnabled || e.webkitSupportsFullscreen || e.msFullscreenEnabled }, e.getElementInFullScreen = function() { var e = document; return e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement }, e.prototype.getFullscreenContainer = function() { return d.Environment.useNativeControls ? this.videoTag : this.playerContainer }, e.prototype.setFullscreen = function() { if (e.isNativeFullscreenEnabled()) { var t = this.getFullscreenContainer(),
                            i = e.getElementInFullScreen(); if (t && !i) { var o = t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullscreen || t.webkitEnterFullScreen;
                            o.call(t) } } }, e.prototype.exitFullscreen = function() { if (e.isNativeFullscreenEnabled()) { var t = this.getFullscreenContainer(),
                            i = e.getElementInFullScreen(); if (t && t === i) { var o = document,
                                n = o.cancelFullScreen || o.msExitFullscreen || o.mozCancelFullScreen || o.webkitCancelFullScreen;
                            n.call(o) } } }, e.prototype.toggleFullscreen = function() { this.isInFullscreen ? this.exitFullscreen() : this.setFullscreen() }, e.prototype.addFullscreenEvents = function() { r.addEvents(document, "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange", this.onFullscreenChanged, !1), r.addEvents(document, "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError", this.onFullscreenError, !1), this.videoTag && (r.addEvents(this.videoTag, "webkitbeginfullscreen", this.onIOSFullscreenEnter, !1), r.addEvents(this.videoTag, "webkitendfullscreen", this.onIOSFullscreenExit, !1)) }, e.prototype.removeFullscreenEvents = function() { r.removeEvents(document, "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange", this.onFullscreenChanged, !1), r.removeEvents(document, "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError", this.onFullscreenError, !1), this.videoTag && (r.removeEvents(this.videoTag, "webkitbeginfullscreen", this.onIOSFullscreenEnter, !1), r.removeEvents(this.videoTag, "webkitendfullscreen", this.onIOSFullscreenExit, !1)) }, e.prototype.onFullscreenEnter = function() { this.isInFullscreen = !0, this.reportEvent(h.PlayerEvents.FullScreenEnter) }, e.prototype.onFullscreenExit = function() { this.isInFullscreen = !1, this.reportEvent(h.PlayerEvents.FullScreenExit) }, e.prototype.initializeClosedCaptions = function() { this.ccOverlay = r.selectFirstElement(".f-video-cc-overlay", this.videoComponent), this.closedCaptions = new o.VideoClosedCaptions(this.ccOverlay) }, e.prototype.onOptionChanged = function(e) { switch (e.category) {
                        case "f-video-captions":
                            this.setCC(e.id); break;
                        case "f-video-quality":
                            this.setQuality(e.id); break;
                        case "f-video-share":
                            this.shareVideo(e); break;
                        case "f-video-playback-rate":
                            this.setPlaybackRate(e.id) } }, e.prototype.setCC = function(t) { if (this.closedCaptions) { t = this.removeIdPrefix(t); var i = null; if (t && this.videoMetadata && this.videoMetadata.ccFiles)
                            for (var o = 0, a = this.videoMetadata.ccFiles; o < a.length; o++) { var s = a[o]; if (s.locale === t) { i = s; break } }
                        this.closedCaptions.setCcLanguage(t, i ? i.url : null), n.setCookie(e.cookieCcPreference, t, "/"), r.hasClass(this.videoControlsContainer, e.showControlsClass) && r.addClass(this.ccOverlay, e.fitControlsClass) } }, e.prototype.setPlaybackRate = function(t) { if (t = this.removeIdPrefix(t), t && this.videoWrapper) { var i = "rate",
                            o = i && a.startsWith(t, i, !1) ? t.substring(i.length) : t;
                        o && (this.videoWrapper.setPlaybackRate(+o), n.setCookie(e.cookiePlaybackRate, o, "/")) } }, e.prototype.setQuality = function(t) { if (t = this.removeIdPrefix(t)) { var i = s.MediaQuality[t],
                            o = this.getVideoFileToPlay(i);
                        o && o.url && (this.currentVideoFile = o, n.setCookie(e.cookieQuality, t, "/"), this.playOnDataLoad = !this.isPaused(), this.startTimeOnDataLoad = this.getCurrentTime(), this.setVideoSrc(o.url, o.mediaType), this.reportEvent(h.PlayerEvents.VideoQualityChanged, { quality: i })) } }, e.prototype.shareVideo = function(e) { if (e && e.id) { var t = this.removeIdPrefix(e.id); if (t && e.href) switch (t) {
                            case f.shareTypes.copy:
                                g.SharingHelper.tryCopyTextToClipboard(decodeURIComponent(e.href)); break;
                            case f.shareTypes.mail:
                                window.location.href = e.href; break;
                            default:
                                window.open(e.href, "_blank") } } }, e.prototype.addIdPrefix = function(e) { var t = this.videoComponent && this.videoComponent.id ? this.videoComponent.id + "-" : null; return t && !a.startsWith(e, t, !1) ? t + e : e }, e.prototype.removeIdPrefix = function(e) { var t = this.videoComponent && this.videoComponent.id ? this.videoComponent.id + "-" : null; return t && a.startsWith(e, t, !1) ? e.substring(t.length) : e }, e.prototype.showTrigger = function() { this.triggerContainer && this.triggerContainer.setAttribute("aria-hidden", "false") }, e.prototype.hideTrigger = function() { this.triggerContainer && this.triggerContainer.setAttribute("aria-hidden", "true") }, e.prototype.displayErrorMessage = function(e) { if (e && e.title) { if (this.errorMessageDisplayed = !0, this.errorMessage) r.setText(this.errorMessage.title, e.title || ""), r.setText(this.errorMessage.message, e.message || ""), this.errorMessage.container.setAttribute("aria-hidden", "false");
                        else { this.errorMessage = {}, this.errorMessage.container = document.createElement("div"); var t = document.createElement("div");
                            this.errorMessage.title = document.createElement("p"), this.errorMessage.message = document.createElement("p"), this.errorMessage.container.setAttribute("role", "status"), this.errorMessage.title.setAttribute("class", "c-heading"), this.errorMessage.message.setAttribute("class", "c-paragraph"), e.title && r.setText(this.errorMessage.title, e.title), e.message && r.setText(this.errorMessage.message, e.message), this.errorMessage.container.appendChild(t), t.appendChild(this.errorMessage.title), t.appendChild(this.errorMessage.message), this.playerContainer.appendChild(this.errorMessage.container) }
                        this.hideTrigger() } }, e.prototype.hideErrorMessage = function() { this.errorMessage && this.errorMessage.container && (this.errorMessage.container.setAttribute("aria-hidden", "true"), this.errorMessageDisplayed = !1) }, e.prototype.getDefaultMediaQuality = function() { var t = n.getCookie(e.cookieQuality),
                        i = null; return t && (i = s.MediaQuality[t]), i || (i = d.Environment.isMobile ? v.PlayerConfig.defaultQualityMobile : d.Environment.isTV ? v.PlayerConfig.defaultQualityTV : v.PlayerConfig.defaultQualityDesktop), i }, e.prototype.getVideoFileByQuality = function(e) {
                    var t = null;
                    if (e && this.videoMetadata && this.videoMetadata.videoFiles)
                        for (var i = 0, o = this.videoMetadata.videoFiles; i < o.length; i++) {
                            var n = o[i];
                            if (n.quality === e) {
                                t = n;
                                break
                            }
                        }
                    return t
                }, e.prototype.getVideoFileByType = function(e) { var t = null; if (e && this.videoMetadata && this.videoMetadata.videoFiles)
                        for (var i = 0, o = this.videoMetadata.videoFiles; i < o.length; i++) { var n = o[i]; if (n.mediaType === e) { t = n; break } }
                    return t }, e.prototype.getVideoFileToPlay = function(e) { var t, i = e || this.getDefaultMediaQuality(),
                        o = !1,
                        n = !1;
                    this.playerOptions.useHLS && d.Environment.isIProduct && !d.Environment.isWindowsPhone && (t = this.getVideoFileByType(s.MediaTypes.HLS), t && t.url && (o = !0, n = !0)), o || (t = this.getVideoFileByQuality(i), t && t.url && (o = !0)); return o || this.currentVideoFile || (t = this.getVideoFileByType(s.MediaTypes.DASH) || this.getVideoFileByType(s.MediaTypes.SMOOTH) || this.getVideoFileByType(s.MediaTypes.MP4), t && t.url && (o = !0)), t }, e.prototype.updateState = function(e) { if (e && e !== this.playerState && this.playerState !== C.Error) { this.playerState = e, this.logMessage("Player state updated. New state: " + C[e]); var t = null; switch (this.playerState) {
                            case C.Loading:
                                t = h.PlaybackStatus.VideoOpening, this.stopwatchLoading.start(); break;
                            case C.Playing:
                                t = h.PlaybackStatus.VideoPlaying, this.stopwatchPlaying.start(), this.stopwatchBuffering.stop(), this.stopwatchLoading.stop(), this.isBuffering && this.stopwatchBuffering.getValue() && (this.isBuffering = !1, this.reportEvent(h.PlayerEvents.BufferComplete)); break;
                            case C.Paused:
                                t = h.PlaybackStatus.VideoPaused, this.stopwatchPlaying.stop(), this.stopwatchLoading.stop(); break;
                            case C.Buffering:
                                t = h.PlaybackStatus.VideoPlaying, this.stopwatchBuffering.start(), this.isBuffering = !0; break;
                            case C.Seeking:
                                this.stopwatchLoading.stop(); break;
                            case C.Ended:
                                t = h.PlaybackStatus.VideoPlayCompleted, this.stopwatchPlaying.stop(); break;
                            case C.Error:
                                t = h.PlaybackStatus.VideoPlayFailed, this.stopwatchBuffering.reset(), this.stopwatchLoading.stop(), this.stopwatchPlaying.reset() }
                        this.videoControls && (this.videoControls.updatePlayPauseState(), this.videoControls.updateVolumeState()), this.setPlaybackStatus(t), this.showControlsBasedOnState() } }, e.prototype.setPlaybackStatus = function(e) { e && this.playbackStatus !== e && (this.playbackStatus = e, this.reportEvent(h.PlayerEvents.PlaybackStatusChanged, { status: e })) }, e.prototype.showControlsBasedOnState = function() { switch (this.playerState) {
                        case C.Loading:
                        case C.Init:
                        case C.Error:
                            this.hideControlPanel(); break;
                        case C.Ready:
                        case C.Paused:
                        case C.Ended:
                        case C.Stopped:
                            this.showControlPanel(!1); break;
                        default:
                            this.showControlPanel(!0) } }, e.prototype.getReport = function(e) { var t = this.getDuration(),
                        i = { playerInstanceId: this.videoComponent.getAttribute("id"), playerTechnology: this.playerTechnology, playerType: this.videoWrapper.getPlayerTechName(), playbackStatus: h.PlaybackStatus[this.playbackStatus], totalBufferWaitTime: this.stopwatchBuffering.getValue(), bufferCount: this.stopwatchBuffering.getIntervals(), errorType: e && e.errorType, errorDesc: e && e.errorDesc, loadTime: this.stopwatchLoading.getFirstValue(), numPlayed: this.stopwatchLoading.getIntervals(), videoDuration: t, videoElapsedTime: this.getCurrentTime(), seekFrom: e && e.seekFrom, seekTo: e && e.seekTo, videoLength: 1e3 * t, videoSize: n.getDimensions(this.playerContainer), totalTimePlaying: this.stopwatchPlaying.getTotalValue(), currentInterval: this.stopwatchPlaying.getValue(), continueInterval: v.PlayerConfig.continueInterval, checkpoint: e && e.checkpoint, currentVideoFile: this.currentVideoFile, videoMetadata: this.videoMetadata, playerOptions: this.playerOptions }; return i }, e.prototype.logMessage = function(e) { this.playerOptions && this.playerOptions.debug && e && p.PlayerUtility.logConsoleMessage(e, "Core-Player : " + this.videoComponent.id) }, e.playerContainerSelector = ".f-core-player", e.showControlsClass = "f-slidein", e.hideControlsClass = "f-slideout", e.fitControlsClass = "f-overlay-slidein", e.cookieVolume = "vidvol", e.cookieMute = "vidmut", e.cookieQuality = "vidqlt", e.cookieCcPreference = "vidccpref", e.cookiePlaybackRate = "vidrate", e.positionUpdateThreshold = .1, e.controlPanelTimeout = 3500, e
            }();
        t.CorePlayer = E
    }.apply(t, o), !(void 0 !== n && (e.exports = n))
}, function(e, t, i) { var o, n;
    o = [i, t], n = function(e, t) { "use strict"; var i = function() {
            function e() {} return e.userAgent = navigator.userAgent, e.isWindowsPhone = !!e.userAgent.match(/Windows Phone/i), e.isSilk = !!e.userAgent.match(/Silk/i), e.hasSilkVersion = /\bSilk\/(\d+)\.(\d+)/.test(e.userAgent), e.silkMajor = e.hasSilkVersion ? Number(RegExp.$1) : 0, e.silkMinor = e.hasSilkVersion ? Number(RegExp.$2) : 0, e.isSilkModern = e.silkMajor > 3 || e.silkMajor >= 3 && e.silkMinor >= 5, e.isAndroid = !e.isWindowsPhone && (e.isSilk || !!e.userAgent.match(/Android/i)), e.androidVersion = /Android (\d+\.\d+)/i.test(e.userAgent) ? Number(RegExp.$1) : e.hasSilkVersion ? e.isSilkModern ? 4 : 1 : 0, e.isIPhone = !!e.userAgent.match(/iPhone/i) || !!e.userAgent.match(/iPod/i), e.isIPad = !!e.userAgent.match(/iPad/i), e.isIProduct = e.isIPad || e.isIPhone, e.isBlackBerry = !!e.userAgent.match(/BlackBerry/i), e.isHtcWindowsPhone = e.isWindowsPhone && !!e.userAgent.match(/HTC/i), e.windowsVersion = /Windows NT(\s)*(\d+\.\d+)/.test(e.userAgent) ? parseFloat(RegExp.$2) : -1, e.ieVersion = /MSIE (\d+\.\d+)/.test(e.userAgent) ? Number(RegExp.$1) : /Trident.*rv:(\d+\.\d+)/.test(e.userAgent) ? Number(RegExp.$1) : 0, e.isIEMobileModern = /\bIEMobile\/(\d+\.\d+)/.test(e.userAgent) ? Number(RegExp.$1) >= 10 : !!/Windows Phone (\d+\.\d+)/i.test(e.userAgent) && Number(RegExp.$1) >= 10, e.isAndroidModern = e.isAndroid && (e.androidVersion >= 4 || e.isSilkModern), e.isMobile = e.isIProduct || e.isAndroid || e.isBlackBerry || e.isWindowsPhone, e.useNativeControls = e.isIProduct || e.isAndroid || e.isWindowsPhone, e.isWebkit = !!e.userAgent.match(/Webkit/i), e.isFirefox = !!e.userAgent.match(/Firefox/i), e.isTV = !!e.userAgent.match(/.*SMART\-TV.*Safari\/(535\.20\+|537\.42)/), e.isWindowsRT = /^.*?\bWindows\b.*?\bARM\b.*?$/m.test(e.userAgent), e }();
        t.Environment = i }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(8), i(12), i(11), i(9), i(15)], n = function(e, t, i, o, n, r, a) { "use strict"; var s = function() {
            function e(t, n, a) { var s = this; if (this.videoControls = t, this.localizationHelper = a, this.onPlayPauseEvents = function(t) { "click" === t.type ? s.videoPlayer && (s.videoPlayer.isPaused() ? s.play() : s.pause()) : "mouseover" === t.type ? s.playTooltip && s.playTooltip.setAttribute(e.ariaHidden, "false") : "mouseout" === t.type && s.playTooltip && s.playTooltip.setAttribute(e.ariaHidden, "true") }, this.onVolumeEvents = function(e) { "click" === e.type ? r.getEventTargetOrSrcElement(e) === s.volumeButton && s.setMuted(!s.videoPlayer.isMuted()) : "mouseover" === e.type ? s.showVolumeContainer() : "mouseout" === e.type && s.hideVolumeContainer() }, this.onFullScreenEvents = function(t) { "click" === t.type ? s.videoPlayer && s.videoPlayer.toggleFullscreen() : "mouseover" === t.type ? s.fullScreenTooltip && s.fullScreenTooltip.setAttribute(e.ariaHidden, "false") : "mouseout" === t.type && s.fullScreenTooltip && s.fullScreenTooltip.setAttribute(e.ariaHidden, "true") }, this.toggleOptionsDialog = function() { s.optionsContainer && (s.odDimensions = r.getClientRect(s.odParent), "false" === s.optionsContainer.getAttribute(e.ariaHidden) ? s.hideOptionsContainer() : s.showOptionsContainer()) }, this.hideOptionsContainer = function() { s.optionsContainer && s.optionsContainer.setAttribute(e.ariaHidden, "true") }, this.onOptionsDialogClick = function(e) { e = r.getEvent(e); var t = r.getEventTargetOrSrcElement(e),
                            i = t.getAttribute("data-video-options"); if ("back" === i) return s.showOptionsContainer(), void r.preventDefault(e); if (i) { if (s.optionsContainer && s.odParent) { var o = r.selectFirstElement("ul[data-video-sub-options=" + i + "]", s.optionsContainer);
                                r.css(o, "display", "block"); var n = s.calcHeight(o);
                                r.css(s.optionsContainer, "height", n + "px"), r.css(s.odParent, "left", "-160px"), s.odSubActive = o } return void r.preventDefault(e) } if (s.odSubActive) { r.preventDefault(e); var a = t.getAttribute("data-video-selectable"); if (!a && t.firstElementChild && (t = t.firstElementChild, a = t.getAttribute("data-video-selectable")), a) { for (var l = 0, u = r.selectElements("a", s.odSubActive); l < u.length; l++) { var d = u[l];
                                    r.removeClass(d, "glyph-check-mark") }
                                r.addClasses(t, ["c-glyph", "glyph-check-mark"]) } var c = t.parentElement,
                                p = c.id || c.parentElement && c.parentElement.id,
                                h = t.getAttribute("href") || c.getAttribute("href");
                            s.videoPlayer && s.videoPlayer.onOptionChanged({ category: s.odSubActive.getAttribute("data-video-sub-options"), id: p, href: h }) }
                        s.hideOptionsContainer() }, t && n) { if (this.videoPlayer = n, this.initializeLocalization(), this.initializeComponents(), !(this.playButton && this.playTooltip && this.fullScreenButton && this.fullScreenTooltip && this.progressSliderElement && this.volumeButton && this.volumeContainer && this.volumeSliderElement && this.timeCurrent && this.timeDuration && this.optionsButton && this.optionsContainer)) return null;
                    this.updatePlayPauseState(), this.optionsDialogInit(), r.addEvents(window, "resize scroll", this.hideOptionsContainer), r.addEvents(this.playButton, "click mouseover mouseout", this.onPlayPauseEvents), r.addEvents(this.fullScreenButton, "click mouseover mouseout", this.onFullScreenEvents), r.addEvents([this.volumeButton, this.volumeContainer], "click mouseover mouseout", this.onVolumeEvents), r.addEvent(this.optionsButton, r.eventTypes.click, this.toggleOptionsDialog), i.ComponentFactory.create([{ component: o.Slider, eventToBind: "DOMContentLoaded", elements: [this.progressSliderElement, this.volumeSliderElement], callback: function(e) { e && e.length && 2 === e.length && (s.progressSlider = e[0], s.volumeSlider = e[1], s.volumeSlider.resetSlider(0, 100, 1, 100), s.progressSlider.subscribe({ onValueChanged: function(e) { return s.onProgressChanged(e) } }), s.volumeSlider.subscribe({ onValueChanged: function(e) { return s.onVolumeChanged(e) } })) } }]) } } return e.prototype.initializeComponents = function() { if (this.videoControls) { var t = this.localizationHelper.getLocalizedValue(a.playerLocKeys.seek),
                        i = this.localizationHelper.getLocalizedValue(a.playerLocKeys.more_caption),
                        o = this.localizationHelper.getLocalizedValue(a.playerLocKeys.volume),
                        n = this.localizationHelper.getLocalizedValue(a.playerLocKeys.expand); if (!this.videoControls.children.length) { var s = "<button type='button' class='f-play-pause c-glyph glyph-play' aria-label='" + this.locPlay + "'>\n    <span aria-hidden='true'>" + this.locPlay + "</span>\n</button>\n<span class='f-time'>\n    <span class='f-current-time'>00:00</span>\n    /\n    <span class='f-duration'>00:00</span>\n</span>\n<div class='c-slider f-progress'>\n    <input type='range' class='f-seek-bar' aria-label='" + t + "' value='0' min='0'>\n</div>\n<button type='button' class='f-options c-glyph glyph-more' aria-label='" + i + "'></button>\n<div class='f-options-dialog' aria-hidden='true'></div>\n<button type='button' class='f-volume-button c-glyph glyph-volume' aria-label='" + o + "'></button>\n<div class='f-volume-slider' aria-hidden='true'>\n    <div class='c-slider f-vertical'>\n        <input type='range' class='f-volume-bar f-vertical' aria-label='" + o + "' min='0' max='100' step='1' value='100'>\n    </div>\n</div>\n<button type='button' class='f-full-screen c-glyph glyph-full-screen' aria-label='" + n + "'>\n    <span aria-hidden='true'>" + n + "</span>\n</button>";
                        this.videoControls.innerHTML = s }
                    this.playButton = r.selectFirstElementT(".f-play-pause", this.videoControls), this.playButton.setAttribute(e.ariaLabel, this.locPlay), this.playTooltip = r.selectFirstElement("span", this.playButton), r.setText(this.playTooltip, this.locPlay);
                    r.selectFirstElement(".f-time", this.videoControls);
                    this.timeCurrent = r.selectFirstElement(".f-current-time", this.videoControls), this.timeDuration = r.selectFirstElement(".f-duration", this.videoControls), this.progressSliderElement = r.selectFirstElement(".c-slider.f-progress", this.videoControls), this.optionsButton = r.selectFirstElementT(".f-options", this.videoControls), this.optionsButton.setAttribute(e.ariaLabel, this.localizationHelper.getLocalizedValue(a.playerLocKeys.more_caption)), this.optionsContainer = r.selectFirstElement(".f-options-dialog", this.videoControls), this.volumeButton = r.selectFirstElementT(".f-volume-button", this.videoControls), this.volumeButton.setAttribute(e.ariaLabel, this.localizationHelper.getLocalizedValue(a.playerLocKeys.volume)), this.volumeContainer = r.selectFirstElement(".f-volume-slider", this.videoControls), this.volumeSliderElement = r.selectFirstElement(".c-slider", this.volumeContainer), this.fullScreenButton = r.selectFirstElementT(".f-full-screen", this.videoControls), this.fullScreenButton.setAttribute(e.ariaLabel, n), this.fullScreenTooltip = r.selectFirstElement("span", this.fullScreenButton), r.setText(this.fullScreenTooltip, n) } }, e.prototype.initializeLocalization = function() { this.locPlay = this.localizationHelper.getLocalizedValue(a.playerLocKeys.play), this.locPause = this.localizationHelper.getLocalizedValue(a.playerLocKeys.pause) }, e.prototype.setDuration = function(e) { n.isNumber(e) && (this.progressSlider && this.progressSlider.resetSlider(0, e), this.timeDuration && (this.timeDuration.innerHTML = n.toElapsedTimeString(e))) }, e.prototype.setPlayPosition = function(e) { n.isNumber(e) && this.progressSlider && this.progressSlider.setValue(e) }, e.prototype.setVolume = function(e) { n.isNumber(e) && this.videoPlayer && this.videoPlayer.setVolume(e, !0) }, e.prototype.setMuted = function(e) { this.videoPlayer && (e ? this.videoPlayer.mute(!0) : this.videoPlayer.unmute(!0)) }, e.prototype.updateVolumeState = function() { if (this.updateMuteGlyph(), this.videoPlayer && this.volumeSlider) { var e = this.videoPlayer.getVolume();
                    this.volumeSlider.setValue(Math.round(100 * e)) } }, e.prototype.updateMuteGlyph = function() { if (this.videoPlayer && this.volumeButton) { r.removeClasses(this.volumeButton, ["glyph-volume", "glyph-mute"]); var e = this.videoPlayer.isMuted() || 0 === this.videoPlayer.getVolume();
                    r.addClass(this.volumeButton, e ? "glyph-mute" : "glyph-volume") } }, e.prototype.prepareToHide = function() { this.hideOptionsContainer(), this.hideVolumeContainer() }, e.prototype.onProgressChanged = function(e) { if (!e) return null;
                this.videoPlayer && e.userInitiated && this.videoPlayer.setPlayPosition(e.value); var t = n.toElapsedTimeString(e.value); return this.timeCurrent && (this.timeCurrent.innerHTML = t), t }, e.prototype.onVolumeChanged = function(e) { if (!e) return null; var t = Math.round(e.value); return this.setVolume(t / 100), t.toString() }, e.prototype.play = function() { this.videoPlayer && this.videoPlayer.play() }, e.prototype.pause = function() { this.videoPlayer && this.videoPlayer.pause() }, e.prototype.updatePlayPauseState = function() { this.videoPlayer && this.playButton && (this.videoPlayer.isPlayable() ? (this.playButton.removeAttribute("disabled"), this.videoPlayer.isPaused() ? (this.playTooltip && (this.playTooltip.innerHTML = this.locPlay), r.removeClass(this.playButton, "glyph-pause"), r.addClass(this.playButton, "glyph-play"), this.playButton.setAttribute(e.ariaLabel, this.locPlay)) : (this.playTooltip && (this.playTooltip.innerHTML = this.locPause), r.removeClass(this.playButton, "glyph-play"), r.addClass(this.playButton, "glyph-pause"), this.playButton.setAttribute(e.ariaLabel, this.locPause), this.prepareToHide())) : (this.playTooltip && (this.playTooltip.innerHTML = this.locPlay), r.removeClass(this.playButton, "glyph-pause"), r.addClass(this.playButton, "glyph-play"), this.playButton.setAttribute(e.ariaLabel, this.locPlay), this.playButton.setAttribute("disabled", "disabled"))) }, e.prototype.showVolumeContainer = function() { this.volumeContainer && (this.volumeContainer.setAttribute(e.ariaHidden, "false"), this.onlyOneDialog(this.volumeContainer)) }, e.prototype.hideVolumeContainer = function() { this.volumeContainer && this.volumeContainer.setAttribute(e.ariaHidden, "true") }, e.prototype.optionsDialogInit = function() { this.optionsContainer && (this.odParent = r.selectFirstElement("ul", this.optionsContainer), this.odDimensions = r.getClientRect(this.odParent), r.addEvent(this.odParent, r.eventTypes.click, this.onOptionsDialogClick)) }, e.prototype.disposeOptionsDialog = function() { this.optionsContainer && (this.odParent = null, this.odDimensions = null, r.removeEvents(this.odParent, "click", this.onOptionsDialogClick), r.removeInnerHtml(this.optionsContainer)) }, e.prototype.showOptionsContainer = function() { this.optionsContainer && this.odParent && (this.optionsContainer.setAttribute(e.ariaHidden, "false"), r.css(this.optionsContainer, "height", this.odDimensions.height + "px"), r.css(this.optionsContainer, "overflowY", "hidden"), r.css(this.odParent, "left", "0"), this.odClearSubActive(), this.onlyOneDialog(this.optionsContainer)) }, e.prototype.onlyOneDialog = function(t) { this.optionsContainer && this.volumeContainer && "false" === this.optionsContainer.getAttribute(e.ariaHidden) && "false" === this.volumeContainer.getAttribute(e.ariaHidden) && (t === this.optionsContainer ? this.hideVolumeContainer() : this.hideOptionsContainer()) }, e.prototype.calcHeight = function(e) { if (!e || !this.videoControls) return 0; var t = r.getClientRect(e).height,
                    i = r.getClientRect(this.videoControls.parentElement),
                    o = r.getClientRect(this.videoControls),
                    n = i.height - o.height; return t > n ? (r.css(this.optionsContainer, "overflowY", "scroll"), t = n) : r.css(this.optionsContainer, "overflowY", "hidden"), t }, e.prototype.odClearSubActive = function() { this.odSubActive && (r.css(this.odSubActive, "display", "none"), this.odSubActive = null) }, e.prototype.setOptions = function(e) { if (this.optionsContainer && e && e.length) { for (var t = "", i = 0, o = e; i < o.length; i++) { for (var n = o[i], r = "", a = 0, s = n.options; a < s.length; a++) { var l = s[a];
                            r += "<li id='" + l.id + "' " + (l.selected ? "aria-selected='true'" : "") + ">\n    <a role='button' \n        class='c-action-trigger " + (l.glyph || n.selectable ? "c-glyph" : "") + " " + (l.glyph || "") + " " + (l.selected ? "glyph-check-mark" : "") + "' \n        href='" + (l.href || "#") + "'\n        " + (n.selectable ? "data-video-selectable='true'" : "") + ">\n            " + (l.image ? "<img src='" + l.image + "' alt='" + (l.imageAlt || "") + "' class='c-image'/>" : "") + "\n            " + l.label + "\n    </a>\n</li>" }
                        t += "<li>\n    <a href='" + (n.href || "#") + "' class='c-hyperlink' " + (n.options && n.options.length && n.category ? "data-video-options='" + n.category + "'" : "") + ">" + n.label + "</a>\n    " + (r ? "<ul class='c-list f-bare' data-video-sub-options='" + n.category + "'>\n        <li>\n            <a role='button' class='c-action-trigger c-glyph glyph-chevron-left' href='#' data-video-options='back'>" + n.label + "</a>\n        </li>\n        " + r + "\n    </ul>" : "") + "\n</li>" } var u = "<ul class='c-list f-bare'>\n    " + t + "\n</ul>";
                    this.disposeOptionsDialog(), this.optionsContainer.innerHTML = u, this.optionsDialogInit() } }, e.selector = ".f-video-controls", e.ariaHidden = "aria-hidden", e.ariaLabel = "aria-label", e }();
        t.VideoControls = s }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(9), i(11)], n = function(e, t, i, o) { "use strict"; var n = function() {
            function e() {} return e.create = function(t) { for (var i = 0, o = t; i < o.length; i++) { var n = o[i]; if (!n.c && !n.component) throw "factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";
                    e.createComponent(n.component || n.c, n) } }, e.createComponent = function(t, o) { if (t) { var n = o && o.eventToBind ? o.eventToBind : "",
                        r = o && o.selector ? o.selector : t.selector,
                        a = o && o.context ? o.context : null,
                        s = [],
                        l = function(e, n, r) { var l;
                            l = o.elements ? o.elements : n ? i.selectElementsT(n, a) : [document.body]; for (var u = 0, d = l; u < d.length; u++) { var c = d[u]; if (c.mwfInstances || (c.mwfInstances = {}), c.mwfInstances[e]) s.push(c.mwfInstances[e]);
                                else { var p = new t(c, r);
                                    c.mwfInstances[e] = p, s.push(p) } } }; switch (n) {
                        case "DOMContentLoaded":
                            if (!e.onDomReadyHappened) { e.domReadyFunctions.push(function() { return e.callBindFunction(t, r, l, o, s) }); break }
                            e.callBindFunction(t, r, l, o, s); break;
                        case "load":
                        default:
                            if (!e.onDeferredHappened) { e.deferredFunctions.push(function() { return e.callBindFunction(t, r, l, o, s) }); break }
                            e.callBindFunction(t, r, l, o, s) } } }, e.callBindFunction = function(t, i, n, r, a) { void 0 === r && (r = null); var s = e.getTypeName(t),
                    l = s || i || "";
                o.createPerfMarker(l + "_Begin"), n(s, i, { mwfClass: s }), o.createPerfMarker(l + "_End"), r && r.callback && r.callback(a) }, e.getTypeName = function(t) { if (t.typeName) return t.typeName; if (t.name) return t.name; var i = e.typeNameRegEx.exec(t.toString()); return i && i.length > 1 ? i[1] : void 0 }, e.enumerateComponents = function(e, t) { if (e && t) { var i = e.mwfInstances; for (var o in i)
                        if (i.hasOwnProperty(o)) { var n = i[o]; if (n && !t(o, n)) break } } }, e.typeNameRegEx = /function\s+(\S+)\s*\(/, e.onLoadTimeoutMs = 6e3, e.onDeferredHappened = !1, e.deferredFunctions = [], e.onDomReadyHappened = !1, e.domReadyFunctions = [], e }();
        t.ComponentFactory = n,
            function() { i.onDeferred(function() { n.onDeferredHappened = !0; var e = n.deferredFunctions; if (!e || e.length > 0)
                        for (var t = 0, o = e; t < o.length; t++) { var r = o[t]; "function" == typeof r && i.SafeBrowserApis.requestAnimationFrame.call(window, r) }
                    n.deferredFunctions = null }, n.onLoadTimeoutMs), i.documentReady(function() { n.onDomReadyHappened = !0; var e = n.domReadyFunctions; if (!e || e.length > 0)
                        for (var t = 0, o = e; t < o.length; t++) { var r = o[t]; "function" == typeof r && i.SafeBrowserApis.requestAnimationFrame.call(window, r) }
                    n.domReadyFunctions = null }, n.onLoadTimeoutMs) }() }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(10)], n = function(e, t, i) { "use strict";

        function o(e, t, i, o) { void 0 === o && (o = !1); for (var n = 0, r = x(e); n < r.length; n++) { var a = r[n];
                _(a, i, o, $[t]) } }

        function n(e, t, o, n) { if (void 0 === n && (n = !1), !i.isNullOrWhiteSpace(t))
                for (var r = 0, a = x(e); r < a.length; r++)
                    for (var s = a[r], l = 0, u = t.split(/\s+/); l < u.length; l++) { var d = u[l];
                        i.isNullOrWhiteSpace(d) || _(s, o, n, d) } }

        function r(e, t, o, n) { void 0 === n && (n = !1); for (var r = 0, a = x(e); r < a.length; r++)
                for (var s = a[r], l = 0, u = x(t); l < u.length; l++) { var d = u[l];
                    i.isNullOrWhiteSpace(d) || I(s, o, n, d) } }

        function a(e) { e = R(e), e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }

        function s(e, t, i, n) { void 0 === n && (n = 150); var r, a = 0,
                s = function(e) { var t = Date.now();
                    clearTimeout(r), a && t < a + n ? r = setTimeout(function() { a = t, i(e) }, n - (t - a)) : (a = t, i(e)) }; return o(e, t, s), s }

        function l(e, t, o, n, r) {
            function a(e) { var t, i = 0,
                    o = function(o) { var n = Date.now();
                        clearTimeout(t), i && n < i + r ? t = setTimeout(function() { i = n, e(o) }, r - (n - i)) : (i = n, e(o)) }; return o } if (void 0 === n && (n = !1), void 0 === r && (r = 150), !i.isNullOrWhiteSpace(t))
                for (var s = 0, l = x(e); s < l.length; s++)
                    for (var u = l[s], d = 0, c = t.split(/\s+/); d < c.length; d++) { var p = c[d]; if (!i.isNullOrWhiteSpace(p)) { var h = a(o);
                            _(u, h, n, p) } } }

        function u(e, t, i, n) { void 0 === n && (n = 150); var r, a = function(e) { window.clearTimeout(r), r = setTimeout(function() { i(e) }, n) }; return o(e, t, a), a }

        function d(e, t) { if (void 0 === t && (t = 5e3), "complete" === document.readyState) return void e.call(null); if (!document.attachEvent && "interactive" === document.readyState) return void e.call(null); var i, n, r, a = function(t) { clearTimeout(i), n && D(document, $.DOMContentLoaded, n), r && D(document, $.onreadystatechange, r), K.requestAnimationFrame.call(window, e) }; return i = setTimeout(function() { a("timedout") }, t), document.addEventListener ? (n = function() { a("domcontentloaded") }, void o(document, $.DOMContentLoaded, n, !1)) : void(document.attachEvent && (r = function() { "complete" === document.readyState && a("readystatecomplete") }, o(document, $.onreadystatechange, r, !1))) }

        function c(e, t) { void 0 === t && (t = 5e3); var i, n = setTimeout(function() { clearTimeout(n), D(window, $.load, i), e.call(null) }, t);
            i = function() { clearTimeout(n), K.requestAnimationFrame.call(window, e) }, "complete" === document.readyState ? (clearTimeout(n), e.call(null)) : o(window, $.load, i) }

        function p(e, t) {!e || i.isNullOrWhiteSpace(t) || v(e, t) || (e.classList ? e.classList.add(t) : e.className = (e.className + " " + t).trim()) }

        function h(e, t) { if (e && !i.isNullOrWhiteSpace(t))
                for (var o = 0, n = x(e); o < n.length; o++) { var r = n[o];
                    r.className && (r.className = (" " + r.className + " ").replace(" " + t.trim() + " ", " ").trim()) } }

        function m(e, t) { if (t)
                for (var i = 0, o = t; i < o.length; i++) { var n = o[i];
                    h(e, n) } }

        function y(e, t) { if (t)
                for (var i = 0, o = t; i < o.length; i++) { var n = o[i];
                    p(e, n) } }

        function v(e, t) { return !(!e || i.isNullOrWhiteSpace(t) || i.isNullOrWhiteSpace(e.className)) && (" " + e.className + " ").indexOf(" " + t.trim() + " ") > -1 }

        function g(e) { return e ? e.parentElement.removeChild(e) : e }

        function f(e, t) { return b(e, t) }

        function C(e, t) { var i = b(e, t); return i && i.length ? i[0] : null }

        function b(e, t) { if (i.isNullOrWhiteSpace(e)) return []; var o = t || document; if (/^[\#.]?[\w-]+$/.test(e)) { switch (e[0]) {
                    case ".":
                        return T(o.getElementsByClassName ? o.getElementsByClassName(e.slice(1)) : o.querySelectorAll(e));
                    case "#":
                        var n = o.querySelector(e); return n ? [n] : [] } return T(o.getElementsByTagName(e)) } return T(o.querySelectorAll(e)) }

        function E(e, t) { var i = b(e, t); return i && i.length ? i[0] : null }

        function w(e, t) { var i, o, n = t || document;
            i = e.split(","); for (var r = 0, a = i; r < a.length; r++) { var s = a[r];
                o += this.selectElements(s, n) } return o }

        function T(e) { if (!e) return []; for (var t = [], i = 0; i < e.length; i++) t.push(e[i]); return t }

        function P(e) { for (void 0 === e && (e = document.documentElement); null !== e;) { var t = e.getAttribute("dir"); if (t) return "rtl" === t ? Y.right : Y.left;
                e = e.parentElement } return Y.left }

        function k(e) { if (e) { var t = e.getBoundingClientRect(),
                    i = {}; for (var o in t) i[o] = t[o]; return "undefined" == typeof i.width && (i.width = e.offsetWidth), "undefined" == typeof i.height && (i.height = e.offsetHeight), i } }

        function S(e) { if (e) return { width: parseFloat(k(e).width) + parseFloat(M(e, "margin-left")) + parseFloat(M(e, "margin-right")), height: parseFloat(k(e).height) + parseFloat(M(e, "margin-top")) + parseFloat(M(e, "margin-bottom")) } }

        function M(e, t, o) { return e ? o || "" === o ? void(e.style[t] = o) : (o = e.style[t], i.isNullOrWhiteSpace(o) && (o = getComputedStyle(e), o = o[t]), o) : null }

        function D(e, t, i, o) { if (e && t && i)
                for (var n = 0, r = x(e); n < r.length; n++) { var a = r[n];
                    I(a, i, o, $[t]) } }

        function F(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === {}.toString.call(e) }

        function x(e) { return F(e) ? e : [e] }

        function N(e, t) { if (null == e || null == t) return null; for (var i = t.parentNode; null != i;) { if (i === e) return !0;
                i = i.parentNode } return !1 }

        function O(e) { return e ? e.innerText || e.textContent || "" : "" }

        function V(e, t) { e && null !== t && (e.textContent ? e.textContent = t : e.innerHTML = t) }

        function A(e) { e && (e.innerHTML = "") }

        function L(e) { return e = R(e), e.target || e.srcElement }

        function R(e) { return e || window.event }

        function _(e, t, i, o) { void 0 === i && (i = !1), e && (window.addEventListener ? e.addEventListener(o, t, i) : e.attachEvent("on" + o, t)) }

        function I(e, t, i, o) { void 0 === i && (i = !1), e && (window.removeEventListener ? e.removeEventListener(o, t, i) : e.detachEvent("on" + o, t)) }

        function B(e, t, i) { if (void 0 === i && (i = {}), !e || !t) return null; var o = "string" == typeof t ? t : $[t],
                n = null; return i.bubbles = "undefined" == typeof i.bubbles || i.bubbles, i.cancelable = "undefined" == typeof i.cancelable || i.cancelable, window.CustomEvent && "function" == typeof window.CustomEvent ? n = new CustomEvent(o, i) : document.createEvent ? (n = document.createEvent("CustomEvent"), n.initCustomEvent(o, i.bubbles, i.cancelable, i.detail)) : (n = document.createEventObject(), e.fireEvent("on" + o, n)), e.dispatchEvent(n), n }

        function z(e) { e.stopPropagation ? e.stopPropagation() : e.returnValue = !1 }

        function H(e) { return void 0 === e && (e = window), e.scrollY || e.pageYOffset || ("CSS1Compat" === e.document.compatMode ? e.document.documentElement.scrollTop : e.document.body.scrollTop) }

        function W(e) { if (!e) return window.document.documentElement; for (var t = e.ownerDocument.documentElement, i = e.offsetParent; i && "static" == M(i, "position");) i = i.offsetParent; return i || t }

        function U(e, t) { if (e && t) { var i = t.clientHeight,
                    o = t.scrollHeight;
                o > i && (t.scrollTop = Math.min(e.offsetTop - t.firstElementChild.offsetTop, o - i)) } }

        function q(e) { return "undefined" == typeof e.complete || "undefined" == typeof e.naturalHeight || e && e.complete && e.naturalHeight > 0 }

        function j(e) { var t = e.touches && e.touches.length ? e.touches : [e],
                i = e.changedTouches && e.changedTouches[0] || t[0]; return { x: i.clientX, y: i.clientY } }

        function Q(e, t) { for (var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e && !i.call(e, t);) e = e.parentElement; return e } var K;! function(e) { e.requestAnimationFrame = window.requestAnimationFrame || function(e) { "function" == typeof e && window.setTimeout(e, 16.7) } }(K = t.SafeBrowserApis || (t.SafeBrowserApis = {})),
        function(e) { e[e.right = 0] = "right", e[e.left = 1] = "left" }(t.Direction || (t.Direction = {})); var Y = t.Direction;! function(e) { e[e.animationend = 0] = "animationend", e[e.blur = 1] = "blur", e[e.change = 2] = "change", e[e.click = 3] = "click", e[e.DOMContentLoaded = 4] = "DOMContentLoaded", e[e.DOMNodeInserted = 5] = "DOMNodeInserted", e[e.DOMNodeRemoved = 6] = "DOMNodeRemoved", e[e.ended = 7] = "ended", e[e.error = 8] = "error", e[e.focus = 9] = "focus", e[e.focusin = 10] = "focusin", e[e.load = 11] = "load", e[e.keydown = 12] = "keydown", e[e.keypress = 13] = "keypress", e[e.keyup = 14] = "keyup", e[e.loadedmetadata = 15] = "loadedmetadata", e[e.mousedown = 16] = "mousedown", e[e.mousemove = 17] = "mousemove", e[e.mouseout = 18] = "mouseout", e[e.mouseover = 19] = "mouseover", e[e.mouseup = 20] = "mouseup", e[e.onreadystatechange = 21] = "onreadystatechange", e[e.resize = 22] = "resize", e[e.scroll = 23] = "scroll", e[e.submit = 24] = "submit", e[e.timeupdate = 25] = "timeupdate", e[e.touchstart = 26] = "touchstart", e[e.touchend = 27] = "touchend", e[e.wheel = 28] = "wheel" }(t.eventTypes || (t.eventTypes = {})); var $ = t.eventTypes;
        t.addEvent = o, t.addEvents = n, t.removeEvents = r, t.preventDefault = a, t.addThrottledEvent = s, t.addThrottledEvents = l, t.addDebouncedEvent = u, t.documentReady = d, t.onDeferred = c, t.addClass = p, t.removeClass = h, t.removeClasses = m, t.addClasses = y, t.hasClass = v, t.removeElement = g, t.selectElements = f, t.selectFirstElement = C, t.selectElementsT = b, t.selectFirstElementT = E, t.selectElementsFromSelectors = w, t.nodeListToArray = T, t.getDirection = P, t.getClientRect = k, t.getClientRectWithMargin = S, t.css = M, t.removeEvent = D, t.isArray = F, t.toArray = x, t.isDescendent = N, t.getText = O, t.setText = V, t.removeInnerHtml = A, t.getEventTargetOrSrcElement = L, t.getEvent = R, t.customEvent = B, t.stopPropagation = z, t.getScrollY = H, t.getOffsetParent = W, t.scrollElementIntoView = U, t.isImageLoadedSuccessfully = q, t.getCoordinates = j, t.getParent = Q }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t], n = function(e, t) { "use strict";

        function i(e) { return !e || !o(e) }

        function o(e) { return e ? e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") : null }

        function n(e, t, i) { return void 0 === i && (i = !0), !(!e || !t) && (i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), e.startsWith ? e.startsWith(t) : 0 === e.indexOf(t)) }

        function r(e, t, i) { return void 0 === i && (i = !0), !(!e || !t) && (i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), e.endsWith ? e.endsWith(t) : e.lastIndexOf(t) === e.length - t.length) }

        function a(e, t, i) { if (void 0 === i && (i = !0), !e || !t) return 0; var o = 0; for (i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()); e.charCodeAt(o) === t.charCodeAt(o);) o++; return o }

        function s(e) { for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i]; return e.replace(/{(\d+)}/g, function(e, i) { if (i >= t.length) return e; var o = t[i]; return "number" == typeof o || o ? "string" == typeof o ? o : o.toString() : "" }) }
        t.isNullOrWhiteSpace = i, t.trim = o, t.startsWith = n, t.endsWith = r, t.getMatchLength = a, t.format = s }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) {
    var o, n;
    o = [i, t, i(10)], n = function(e, t, i) {
        "use strict";

        function o(e) { return !isNaN(e) && "number" == typeof e }

        function n() { var e = window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth; return e }

        function r() { return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight }

        function a(e) { if (null != e) return { width: e.clientWidth, height: e.clientHeight } }

        function s(e) { var t; if (e = e || window.event, !e) return t; if (t = e.key || e.keyIdentifier, !t) return t; switch (t) {
                case "Left":
                    return "ArrowLeft";
                case "Right":
                    return "ArrowRight";
                case "Up":
                    return "ArrowUp";
                case "Down":
                    return "ArrowDown";
                case "Esc":
                    return "Escape";
                default:
                    return t } }

        function l(e) { return e = e || window.event, null == e ? null : e.which || e.keyCode || e.charCode }

        function u(e, t, i, o) { var n = ""; if (o) { var r = new Date;
                r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + r.toUTCString() }
            window.document.cookie = e + "=" + encodeURIComponent(t) + n + ("; path=" + i + ";") }

        function d(e) { if (e)
                for (var t = 0, i = document.cookie.split("; "); t < i.length; t++) { var o = i[t],
                        n = o.indexOf("="),
                        r = c(o.substring(0, n)); if (r === e) return c(o.substring(r.length + 1)) }
            return null }

        function c(e) { return e = decodeURIComponent(e.replace("/+/g", " ")), 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e }

        function p(e) { if (e && 6 === e.length) { var t = parseInt(e.substring(0, 2), 16),
                    i = parseInt(e.substring(2, 4), 16),
                    o = parseInt(e.substring(4, 6), 16); if (!isNaN(t) && !isNaN(i) && !isNaN(o)) { var n = (299 * t + 587 * i + 114 * o) / 255e3; return n >= .5 ? 2 : 1 } } return null }

        function h(e, t, i) { return !!(i && o(e) && o(t) && o(i.left) && o(i.right) && o(i.top) && o(i.bottom)) && (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom) }

        function m(e) { console && console.warn ? console.warn(e) : console && console.error && console.error(e) }

        function y(e) { /*!/#IFDEF perf_marker_global || log_define_timing */
            if (!i.isNullOrWhiteSpace(e) && window.performance && window.performance.mark) { var t = e.split(" ").join("_");
                window.performance.mark(t), window.console && window.console.timeStamp && window.console.timeStamp(t) }
        }

        function v(e) { if (!o(e) || e <= 0) return "00:00"; var t = Math.floor(e / 3600),
                i = e % 3600,
                n = Math.floor(i / 60),
                r = t > 0 ? t + ":" : ""; return e = Math.floor(i % 60), r += (n < 10 ? "0" : "") + n, r += ":" + (0 === e ? "00" : (e < 10 ? "0" : "") + e) }

        function g(e) { if (!JSON || !JSON.parse) throw new Error("JSON.parse unsupported."); if (!e) throw new Error("Invalid json."); return JSON.parse(e) }

        function f() { for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t]; for (var i = 1; i < e.length; i++)
                for (var o in e[i]) e[i].hasOwnProperty(o) && ("object" == typeof e[i][o] ? e[0][o] = f(e[0][o] || {}, e[i][o]) : e[0][o] = e[i][o]); return arguments[0] }

        function C(e, t, i, o, n) { var r = !i || i < 0 ? -1 : Number(new Date) + i;
            t = t || 100,
                function i() { var a = e(); if (a && o) o();
                    else { if (a) return; if (r === -1 || Number(new Date) < r) setTimeout(i, t);
                        else { if (!n) return;
                            n() } } }() }

        function b(e) { e = e.replace(/[\[\]]/g, "\\$&"); var t = new RegExp("[\\?&]" + e.toLowerCase() + "=([^&#]*)"),
                i = t.exec(location.search.toLowerCase()); return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " ")) }
        t.isNumber = o, t.getWindowWidth = n, t.getWindowHeight = r, t.getDimensions = a, t.getVirtualKey = s, t.getKeyCode = l, t.setCookie = u, t.getCookie = d, t.detectContrast = p, t.pointInRect = h, t.apiDeprecated = m, t.createPerfMarker = y, t.toElapsedTimeString = v, t.parseJson = g, t.extend = f, t.poll = C, t.getQSPValue = b;
        var E;
        ! function(e) {
            function t() { if (window.matchMedia) { for (var t = 0; t < e.allWidths.length; ++t)
                        if (!window.matchMedia("(min-width:" + e.allWidths[t] + "px)").matches) return t } else
                    for (var t = 0; t < e.allWidths.length; ++t)
                        if (!(n() >= e.allWidths[t])) return t; return e.allWidths.length }
            e.allWidths = [320, 540, 768, 1084, 1400, 1779], e.vpMin = e.allWidths[0], e.vpMax = 2048, e.getViewport = t }(E = t.Viewports || (t.Viewports = {}))
    }.apply(t, o), !(void 0 !== n && (e.exports = n))
}, function(e, t, i) { var o, n, r = this && this.__extends || function(e, t) {
        function i() { this.constructor = e } for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i) };
    o = [i, t, i(8), i(13), i(9), i(11)], n = function(e, t, i, o, n, a) { "use strict"; var s = function(e) {
            function t(t) { var i = this;
                e.call(this, t), this.onKeyPressed = function(e) { switch (e) {
                        case 37:
                        case 39:
                            if (!i.isVerticalSlider) { var t = i.primaryDirection === n.Direction.left ? i.stepOffset : -i.stepOffset;
                                t = 37 === e ? -t : t, i.updateThumbOffset(i.thumbOffset + t, !0, !0) } break;
                        case 38:
                        case 40:
                            if (i.isVerticalSlider) { var t = 38 === e ? i.stepOffset : -i.stepOffset;
                                i.updateThumbOffset(i.thumbOffset + t, !0, !0), n.getEvent(event).preventDefault() } break;
                        case 33:
                            var t = 2 * i.stepOffset;
                            i.updateThumbOffset(i.thumbOffset + t, !0, !0); break;
                        case 34:
                            var t = -(2 * i.stepOffset);
                            i.updateThumbOffset(i.thumbOffset + t, !0, !0); break;
                        case 36:
                            var o = parseInt(i.input.getAttribute("min"), 10) || 0;
                            i.updateThumbOffset(o, !0, !0); break;
                        case 35:
                            var r = parseInt(i.input.getAttribute("step"), 10),
                                a = i.thumbRange + r;
                            i.updateThumbOffset(a, !0, !0) } }, this.onKeyDown = function(e) { i.onKeyPressed(a.getKeyCode(n.getEvent(e))) }, this.onMouseDown = function(e) { return e = n.getEvent(e), i.setupDimensions(), n.getEventTargetOrSrcElement(e) === i.thumb ? (n.addEvent(document, n.eventTypes.mousemove, i.onMouseMove), void n.addEvent(document, n.eventTypes.mouseup, i.onMouseUp)) : void i.moveThumbTo(e.clientX, e.clientY) }, this.onMouseMove = function(e) { e = n.getEvent(e), i.moveThumbTo(e.clientX, e.clientY) }, this.onMouseUp = function(e) { n.removeEvent(document, n.eventTypes.mousemove, i.onMouseMove), n.removeEvent(document, n.eventTypes.mouseup, i.onMouseUp) }, this.onWindowResized = function(e) { i.setupDimensions() }, this.update() } return r(t, e), t.prototype.update = function() { if (this.element) { this.input = n.selectFirstElement("input", this.element), this.primaryDirection = n.getDirection(this.element), this.isVerticalSlider = n.hasClass(this.input, "f-vertical"), n.addClass(this.input, "x-screen-reader"); var e = parseInt(this.input.getAttribute("min"), 10) || 0,
                        t = parseInt(this.input.getAttribute("max"), 10) || 100,
                        i = parseInt(this.input.getAttribute("value"), 10),
                        o = parseInt(this.input.getAttribute("step"), 10);
                    this.element.children[this.element.children.length - 1] === this.input ? (this.mockSlider = document.createElement("div"), this.thumb = document.createElement("button"), this.thumb.setAttribute("role", "slider"), this.thumb.setAttribute("aria-valuemin", e.toString()), this.thumb.setAttribute("aria-valuemax", t.toString()), this.thumb.setAttribute("aria-valuenow", i.toString()), this.valueTooltip = document.createElement("span"), this.track = document.createElement("span"), this.thumb.appendChild(this.valueTooltip), this.mockSlider.appendChild(this.thumb), this.mockSlider.appendChild(this.track), this.element.appendChild(this.mockSlider), this.ignoreNextDOMChange = !0) : (this.mockSlider = this.element.children[this.element.children.length - 1], this.thumb = this.mockSlider.firstElementChild, this.valueTooltip = this.thumb.firstElementChild, this.track = this.mockSlider.children[this.mockSlider.children.length - 1]), this.halfThumbOffset = this.thumb.clientWidth / 2, this.resetSliderInternal(e, t, i, o, !0) && (n.addEvent(this.element, n.eventTypes.mousedown, this.onMouseDown), n.addEvent(this.thumb, n.eventTypes.keydown, this.onKeyDown), this.resizeListener = n.addDebouncedEvent(window, n.eventTypes.resize, this.onWindowResized)) } }, t.prototype.teardown = function() { n.removeEvent(this.element, n.eventTypes.mousedown, this.onMouseDown), n.removeEvent(this.thumb, n.eventTypes.keydown, this.onKeyDown), n.removeEvent(window, n.eventTypes.resize, this.resizeListener), this.input = null, this.mockSlider = null, this.thumb = null, this.valueTooltip = null, this.track = null, this.resizeListener = null }, t.prototype.resetSlider = function(e, t, i, o) { return this.resetSliderInternal(e, t, i, o, !1) }, t.prototype.resetSliderInternal = function(e, t, i, o, n) { return !(!a.isNumber(e) || !a.isNumber(t)) && (!(Math.max(e, t) - Math.min(e, t) <= 0) && (this.min = Math.min(e, t), this.max = Math.max(e, t), this.range = this.max - this.min, this.step = isNaN(o) ? this.range / 10 : o, this.value = Math.min(Math.max(isNaN(i) ? isNaN(this.value) ? this.min : this.value : i, this.min), this.max), this.setupDimensions(), this.updateThumbOffset(this.thumbOffset, n, !1), !0)) }, t.prototype.setValue = function(e) { return !(!a.isNumber(e) || e < this.min || e > this.max) && (e !== this.value && (this.thumbOffset = (e - this.min) * this.thumbRange / this.range + this.halfThumbOffset, this.updateThumbOffset(this.thumbOffset, !1, !1)), !0) }, t.prototype.setupDimensions = function() { this.dimensions = n.getClientRect(this.mockSlider), this.isVerticalSlider ? (this.dimensions.left -= t.hitPadding, this.dimensions.right += t.hitPadding, this.thumbRange = this.dimensions.height - this.thumb.clientWidth, this.maxThumbOffset = this.dimensions.height) : (this.dimensions.top -= t.hitPadding, this.dimensions.bottom += t.hitPadding, this.thumbRange = this.dimensions.width - this.thumb.clientWidth, this.maxThumbOffset = this.dimensions.width), this.thumbRange = Math.max(this.thumbRange, 1), this.thumbOffset = (this.value - this.min) * this.thumbRange / this.range + this.halfThumbOffset, this.stepOffset = this.thumbRange / (this.range / this.step), this.setThumbPosition() }, t.prototype.setThumbPosition = function() { var e = Math.max(0, this.thumbOffset - this.halfThumbOffset);
                n.css(this.thumb, n.Direction[this.primaryDirection], e + "px"), n.css(this.track, "width", e + "px") }, t.prototype.updateThumbOffset = function(e, t, i) { a.isNumber(e) || (e = this.thumbOffset), this.thumbOffset = Math.min(Math.max(0, e), this.maxThumbOffset); var o = 1e3 * Math.max(0, this.thumbOffset - this.halfThumbOffset) * this.range / this.thumbRange;
                o = Math.round(o) / 1e3 + this.min, this.value = Math.min(Math.max(this.min, o), this.max), this.valueTooltipText = null, this.initiatePublish({ value: this.value, internal: t, userInitiated: i }), this.valueTooltipText || (this.valueTooltipText = Math.round(this.value).toString()), isNaN(parseFloat(this.valueTooltipText)) || this.valueTooltipText.match(":") ? (this.input.setAttribute("value", o.toString()), this.thumb.setAttribute("aria-valuenow", o.toString()), this.thumb.setAttribute("aria-valuetext", this.valueTooltipText)) : (this.input.setAttribute("value", this.valueTooltipText), this.thumb.setAttribute("aria-valuenow", this.valueTooltipText)), this.valueTooltip.innerHTML = this.valueTooltipText, this.setThumbPosition() }, t.prototype.publish = function(e, t) { var i = e.onValueChanged(t);
                i && !this.valueTooltipText && (this.valueTooltipText = i) }, t.prototype.moveThumbTo = function(e, t) { if (a.pointInRect(e, t, this.dimensions)) { var i = this.dimensions.bottom - t;
                    this.isVerticalSlider || (i = this.primaryDirection === n.Direction.left ? e - this.dimensions.left : this.dimensions.right - e), this.updateThumbOffset(i, !0, !0) } }, t.init = function(e) { a.apiDeprecated("Slider.init() is deprecated, please use ComponentFactory.create() instead."), i.ComponentFactory.create([{ component: t, selector: e ? e.selector : null, eventToBind: e ? e.eventToBind : null }]) }, t.selector = ".c-slider", t.hitPadding = 20, t }(o.Publisher);
        t.Slider = s }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n, r = this && this.__extends || function(e, t) {
        function i() { this.constructor = e } for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i) };
    o = [i, t, i(14)], n = function(e, t, i) { "use strict"; var o = function(e) {
            function t(t, i) { void 0 === i && (i = null), e.call(this, t, i), this.element = t } return r(t, e), t.prototype.subscribe = function(e) { if (!e) return !1; if (this.subscribers) { if (this.subscribers.indexOf(e) !== -1) return !1 } else this.subscribers = []; return this.subscribers.push(e), !0 }, t.prototype.unsubscribe = function(e) { if (!e || !this.subscribers || !this.subscribers.length) return !1; var t = this.subscribers.indexOf(e); return t !== -1 && (this.subscribers.splice(t, 1), !0) }, t.prototype.hasSubscribers = function() { return !!this.subscribers && this.subscribers.length > 0 }, t.prototype.initiatePublish = function(e) { if (this.hasSubscribers())
                    for (var t = 0, i = this.subscribers; t < i.length; t++) { var o = i[t];
                        this.publish(o, e) } }, t.prototype.update = function() {}, t.prototype.teardown = function() {}, t }(i.ObservableComponent);
        t.Publisher = o }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(9)], n = function(e, t, i) { "use strict"; var o = function() {
            function e(t, i) { void 0 === i && (i = null), this.element = t, this.ignoreNextDOMChange = !1, e.shouldInitializeAsClass(t, i) && this.setObserver() } return e.prototype.unObserve = function() { this.modernObserver && this.modernObserver.disconnect(), i.removeEvent(this.element, i.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander), i.removeEvent(this.element, i.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler) }, e.prototype.setObserver = function() { "undefined" != typeof e.mutationObserver ? this.observeModern() : "MutationEvent" in window && this.observeObsolete() }, e.prototype.observeModern = function() { var e = this,
                    t = { childList: !0, subtree: !0 };
                this.modernObserver = new MutationObserver(function(t) { e.onModernMutations(t) }), this.modernObserver.observe(this.element, t) }, e.prototype.onModernMutations = function(e) { if (this.ignoreNextDOMChange) return void(this.ignoreNextDOMChange = !1); for (var t = !1, i = !1, o = 0, n = e; o < n.length; o++) { for (var r = n[o], a = 0, s = r.addedNodes.length; a < s; a++) 1 === r.addedNodes[a].nodeType && (t = !0, i = !0); for (var a = 0, l = r.removedNodes.length; a < l; a++) 1 === r.removedNodes[a].nodeType && (t = !0, r.removedNodes[a] !== this.element && (i = !0)) }
                t && this.teardown(), i && this.update() }, e.prototype.observeObsolete = function() { var e = this;
                this.obsoleteNodeInsertedEventHander = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeInserted, function() { e.onObsoleteNodeInserted() }), this.obsoleteNodeRemovedEventHandler = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeRemoved, function(t) { e.onObsoleteNodeRemoved(t) }) }, e.prototype.onObsoleteNodeInserted = function() { this.ignoreNextDOMChange || (this.teardown(), this.update()) }, e.prototype.onObsoleteNodeRemoved = function(e) { this.ignoreNextDOMChange || (this.teardown(), i.getEventTargetOrSrcElement(e) !== this.element && this.update()) }, e.shouldInitializeAsClass = function(t, i) { var o = t ? t.getAttribute(e.mwfClassAttribute) : null,
                    n = t ? t.getAttribute(e.initializeAttribute) : null; return "false" !== n && (!!t && (!o || !!i && o === i.mwfClass)) }, e.mwfClassAttribute = "data-mwf-class", e.initializeAttribute = "data-js-initialize", e.mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, e }();
        t.ObservableComponent = o }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(10), i(1)], n = function(e, t, i, o) { "use strict"; var n = { "az-latn-az": "az-latn", "bs-latn-ba": "bs", "gd-gb": "gd-latn", "ha-latn-ng": "ha-latn", "ig-ng": "ig-latn", "ky-kg": "ky-cyrl", "mn-mn": "mn-cyrl", "prs-arab": "prs-af", "pt-ao": "pt-pt", "pt-mz": "pt-pt", "quc-latn-gt": "qut-latn", "sd-arab-pk": "sd-arab", "sr-latn-rs": "sr-latn", "tg-cyrl-tj": "tg-cyrl", "tk-tm": "tk-latn", "tt-ru": "tt-cyrl", "ug-cn": "ug-arab", "uz-latn-uz": "uz-latn", "wo-sn": "wo-latn", "yo-ng": "yo-latn", "zh-cn": "zh-hans", "zh-tw": "zh-hant" },
            r = { af: "af", am: "am", ar: "ar", as: "as", "az-latn": "az-latn", be: "be", bg: "bg", "bn-bd": "bn-bd", "bn-in": "bn-in", bs: "bs", "ca-es-valencia": "ca-es-valencia", ca: "ca", "chr-cher": "chr-cher", cs: "cs", cy: "cy", da: "da", "de-at": "de-at", "de-ch": "de-ch", de: "de", el: "el", "en-au": "en-au", "en-ca": "en-ca", "en-gb": "en-gb", "en-in": "en-in", en: "en", "es-ar": "es-ar", "es-es": "es-es", es: "es", et: "et", eu: "eu", fa: "fa", fi: "fi", fil: "fil", "fr-be": "fr-be", "fr-ca": "fr-ca", fr: "fr", ga: "ga", "gd-latn": "gd-latn", gl: "gl", gu: "gu", "ha-latn": "ha-latn", he: "he", hi: "hi", hr: "hr", hu: "hu", hy: "hy", id: "id", "ig-latn": "ig-latn", is: "is", it: "it", ja: "ja", ka: "ka", kk: "kk", km: "km", kn: "kn", ko: "ko", kok: "kok", "ku-arab": "ku-arab", "ky-cyrl": "ky-cyrl", lb: "lb", lo: "lo", lt: "lt", lv: "lv", "mi-latn": "mi-latn", mk: "mk", ml: "ml", "mn-cyrl": "mn-cyrl", mr: "mr", ms: "ms", mt: "mt", "nb-no": "nb-no", ne: "ne", "nl-be": "nl-be", nl: "nl", nn: "nn", nso: "nso", or: "or", "pa-arab": "pa-arab", pa: "pa", pl: "pl", "prs-af": "prs-af", "pt-br": "pt-br", "pt-pt": "pt-pt", "quc-latn": "quc-latn", quz: "quz", ro: "ro", ru: "ru", rw: "rw", "sd-arab": "sd-arab", si: "si", sk: "sk", sl: "sl", sq: "sq", "sr-cyrl-ba": "sr-cyrl-ba", "sr-cyrl-rs": "sr-cyrl-rs", "sr-latn": "sr-latn", sv: "sv", sw: "sw", ta: "ta", te: "te", "tg-cyrl": "tg-cyrl", th: "th", ti: "ti", "tk-latn": "tk-latn", tn: "tn", tr: "tr", "tt-cyrl": "tt-cyrl", "ug-arab": "ug-arab", uk: "uk", ur: "ur", "uz-latn": "uz-latn", vi: "vi", "wo-latn": "wo-latn", xh: "xh", "yo-latn": "yo-latn", "zh-hans": "zh-hans", "zh-hant": "zh-hant", "zh-hk": "zh-hk", zu: "zu" },
            a = { closecaption_off: "Off", geolocation_error: "We're sorry, this video cannot be played from your current location.", media_err_aborted: "video playback was aborted", media_err_decode: "video is not readable", media_err_network: "video failed to download", media_err_src_not_supported: "video format is not supported", media_err_unknown_error: "unknown error occurred", media_err_amp_encrypt: "The video is encrypted and we do not have the keys to decrypt it.", media_err_amp_player_mismatch: "No compatible source was found for this video.", browserunsupported: "We're sorry, but your browser does not support this video.", expand: "Full Screen", mute: "Mute", nullvideoerror: "We're sorry, this video cannot be played.", pause: "Pause", play: "Play", playbackerror: "We're sorry, an error has occurred when playing video ({0}).", standarderror: "We're sorry, this video can't be played.", time: "Time", more_caption: "More", data_error: "Sorry, this video cannot be played.", seek: "Seek", unexpand: "Exit Full Screen", unmute: "Unmute", volume: "Volume", quality: "Quality", quality_hd: "HD", quality_hq: "HQ", quality_lo: "LO", quality_sd: "SD", quality_auto: "Auto", closecaption: "CC / Subtitles", close_text: "Close", playbackspeed: "Playback speed", playbackspeed_normal: "Normal", sharing_label: "Share", sharing_facebook: "Facebook", sharing_twitter: "Twitter", sharing_linkedin: "LinkedIn", sharing_skype: "Skype", sharing_mail: "Mail", sharing_copy: "Copy link" };
        t.ccCultureLocStrings = { "ar-ab": "Ø¹Ø±Ø¨ÙŠ", "ar-xm": "Ø¹Ø±Ø¨ÙŠ", "ar-ma": "Ø¹Ø±Ø¨ÙŠ", "ar-sa": "Ø¹Ø±Ø¨ÙŠ", "eu-es": "Euskara", "bg-bg": "Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸", "ca-es": "CatalÃ ", "zh-cn": "ç®€ä½“ä¸­æ–‡", "zh-hk": "ç¹é«”ä¸­æ–‡", "zh-tw": "ç¹é«”ä¸­æ–‡", "hr-hr": "Hrvatski", "cs-cz": "ÄŒeÅ¡tina", "da-dk": "Dansk", "nl-be": "Nederlands", "nl-nl": "Nederlands", "en-ab": "English", "en-aa": "English", "en-au": "English", "en-ca": "English", "en-eu": "English", "en-hk": "English", "en-in": "English", "en-id": "English", "en-ie": "English", "en-jm": "English", "en-my": "English", "en-nz": "English", "en-pk": "English", "en-ph": "English", "en-sg": "English", "en-za": "English", "en-tt": "English", "en-gb": "English", "en-us": "English", "et-ee": "Eesti", "fi-fi": "Suomi", "fr-ab": "FranÃ§ais", "fr-be": "FranÃ§ais", "fr-ca": "FranÃ§ais", "fr-fr": "FranÃ§ais", "fr-xf": "FranÃ§ais", "fr-ch": "FranÃ§ais", "gl-es": "Galego", "de-de": "Deutsch", "de-at": "Deutsch", "de-ch": "Deutsch", "el-gr": "Î•Î»Î»Î·Î½Î¹ÎºÎ¬", "he-il": "×¢×‘×¨×™×ª", "hi-in": "à¤¹à¤¿à¤‚à¤¦à¥€", "hu-hu": "Magyar", "is-is": "Ãslenska", "id-id": "Bahasa Indonesia", "it-it": "Italiano", "ja-jp": "æ—¥æœ¬èªž", "kk-kz": "ÒšÐ°Ð·Ð°Ò›", "ko-kr": "í•œêµ­ì–´", "lv-lv": "LatvieÅ¡u", "lt-lt": "LietuviÅ³", "ms-my": "Bahasa Melayu (Asia Tenggara)â€Ž", "nb-no": "Norsk (bokmÃ¥l)", "nn-no": "Norsk (nynorsk)", "fa-ir": "ÙØ§Ø±Ø³ÛŒ", "pl-pl": "Polski", "pt-br": "PortuguÃªs (Brasil)â€Ž", "pt-pt": "PortuguÃªs (Portugal)â€Ž", "ro-ro": "RomÃ¢nÄƒ", "ru-ru": "Ð ÑƒÑÑÐºÐ¸Ð¹", "sr-latn-RS": "Srpski", "sk-sk": "SlovenÄina", "sl-si": "Slovenski", "es-ar": "EspaÃ±ol", "es-cl": "EspaÃ±ol", "es-co": "EspaÃ±ol", "es-cr": "EspaÃ±ol", "es-do": "EspaÃ±ol", "es-ec": "EspaÃ±ol", "es-us": "EspaÃ±ol", "es-gt": "EspaÃ±ol", "es-hn": "EspaÃ±ol", "es-xl": "EspaÃ±ol", "es-mx": "EspaÃ±ol", "es-ni": "EspaÃ±ol", "es-pa": "EspaÃ±ol", "es-py": "EspaÃ±ol", "es-pe": "EspaÃ±ol", "es-pr": "EspaÃ±ol", "es-es": "EspaÃ±ol", "es-uy": "EspaÃ±ol", "es-ve": "EspaÃ±ol", "sv-se": "Svenska", "tl-ph": "Tagalog", "th-th": "à¹„à¸—à¸¢", "tr-tr": "TÃ¼rkÃ§e", "uk-ua": "Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°", "ur-pk": "Ø§Ø±Ø¯Ùˆ", "vi-vn": "Tiáº¿ng Viá»‡t" }, t.playerLocKeys = { closecaption_off: "closecaption_off", geolocation_error: "geolocation_error", media_err_aborted: "media_err_aborted", media_err_decode: "media_err_decode", media_err_network: "media_err_network", media_err_src_not_supported: "media_err_src_not_supported", media_err_unknown_error: "media_err_unknown_error", media_err_amp_encrypt: "media_err_amp_encrypt", media_err_amp_player_mismatch: "media_err_amp_player_mismatch", browserunsupported: "browserunsupported", expand: "expand", mute: "mute", nullvideoerror: "nullvideoerror", pause: "pause", play: "play", playbackerror: "playbackerror", standarderror: "standarderror", time: "time", more_caption: "more_caption", data_error: "data_error", seek: "seek", unexpand: "unexpand", unmute: "unmute", volume: "volume", quality: "quality", quality_hd: "quality_hd", quality_hq: "quality_hq", quality_lo: "quality_lo", quality_sd: "quality_sd", quality_auto: "quality_auto", closecaption: "closecaption", close_text: "close_text", playbackspeed: "playbackspeed", playbackspeed_normal: "playbackspeed_normal", sharing_label: "sharing_label", sharing_facebook: "sharing_facebook", sharing_twitter: "sharing_twitter", sharing_linkedin: "sharing_linkedin", sharing_skype: "sharing_skype", sharing_mail: "sharing_mail", sharing_copy: "sharing_copy" }; var s = function() {
            function e(e, t) { this.market = e, this.resPathOverride = t } return e.prototype.getLanguageFromMarket = function() { if (this.market) { var e = this.market.split("-"); if (e.length) return e[0] } return null }, e.prototype.getLocFile = function(e) { return e ? (e = n[e] || e, r[e] || r[this.getLanguageFromMarket()]) : null }, e.prototype.getCorrectResourcePath = function() { return this.resPathOverride || (o.PlayerConfig.resourcePath.indexOf("%version") === -1 ? o.PlayerConfig.resourcePath : o.PlayerConfig.localResourcePath) }, e.prototype.queueRequest = function(t) { var o = this; if (e.requestQueue[this.market]) return void e.requestQueue[this.market].push(t);
                e.requestQueue[this.market] = [t]; var n = this.getLocFile(this.market); if (!n) return void this.completeRequest(); var r = new XMLHttpRequest;
                r.onreadystatechange = function() { 4 === r.readyState && (200 === r.status && (e.resources[o.market] = JSON.parse(r.responseText)), o.completeRequest()) }, r.open("GET", i.format("{0}/{1}.json", this.getCorrectResourcePath(), n), !0), r.ontimeout = function() { console.log("ontimeout"), o.completeRequest() }, r.onerror = function() { console.log("onerror"), o.completeRequest() }, r.send() }, e.prototype.completeRequest = function() { if (e.requestQueue[this.market]) { for (var t = 0, i = e.requestQueue[this.market]; t < i.length; t++) { var o = i[t];
                        this.doCallback(o) }
                    e.requestQueue[this.market] = null } }, e.prototype.doCallback = function(e) { e && "function" == typeof e && e() }, e.prototype.loadResources = function(t) { return !this.market || e.resources[this.market] ? void this.doCallback(t) : void this.queueRequest(t) }, e.prototype.getLocalizedValue = function(t) { return t ? e.resources[this.market] && e.resources[this.market][t] || a[t] || "" : "" }, e.resources = {}, e.requestQueue = {}, e }();
        t.LocalizationHelper = s }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(17), i(9), i(11)], n = function(e, t, i, o, n) { "use strict"; var r = function() {
            function e(e) { this.element = e, this.lastPlayPosition = 0, this.ccLanguageId = null, this.resetCaptions() } return e.prototype.setCcLanguage = function(e, t) { if (this.element && e !== this.ccLanguageId) { if (this.ttmlContext = null, this.resetCaptions(), !t) return void(this.ccLanguageId = null);
                    this.ccLanguageId = e, this.loadClosedCaptions(t) } }, e.prototype.loadClosedCaptions = function(e) { var t = this; if (e) { var i = new XMLHttpRequest;
                    i.onreadystatechange = function() { 4 === i.readyState && 200 === i.status && t.onClosedCaptionsLoaded(i.responseXML || i.responseText) }, i.open("GET", e, !0), i.setRequestHeader("Accept", "text/xml, application/xml"), i.send() } }, e.prototype.onClosedCaptionsLoaded = function(t) { if (t) { this.element.setAttribute(e.ariaHidden, "false"); var o = this.element.id ? this.element.id + "-" : "",
                        r = { idPrefix: o, fontMap: { default: "Segoe ui, Arial" }, relatedMediaObjectRegion: n.getDimensions(this.element) };
                    this.ttmlContext = i.TtmlParser.parse(t, r), this.ttmlContext && (this.ttmlContext.setOwnerDocument(this.element.ownerDocument), this.ttmlContext.hasEvents() ? this.updateCaptions(this.lastPlayPosition) : this.element.setAttribute(e.ariaHidden, "true")) } }, e.prototype.updateCaptions = function(t) { if (this.lastPlayPosition = t, this.ttmlContext && this.ttmlContext.hasEvents()) { var i = Math.floor(1e3 * t);
                    this.element.setAttribute(e.ariaHidden, "false"); var r = n.getDimensions(this.element); if (this.ttmlContext.updateRelatedMediaObjectRegion(r) && this.resetCaptions(), this.ttmlContext.updateCurrentEvents(i)) { this.element.setAttribute(e.ariaHidden, "true"), o.removeInnerHtml(this.element); for (var a = 0, s = this.ttmlContext.getCues(i); a < s.length; a++) { var l = s[a];
                            this.applyUserPreferencesOverrides(l), o.css(l, "background-color", ""), this.element.appendChild(l) }
                        this.element.setAttribute(e.ariaHidden, "false") } } }, e.prototype.resetCaptions = function() { this.ttmlContext && this.ttmlContext.resetCurrentEvents(), this.element && (this.element.setAttribute(e.ariaHidden, "true"), o.removeInnerHtml(this.element)) }, e.prototype.applyUserPreferencesOverrides = function(t) { if (e.userPreferences) { if (e.userPreferences.text)
                        for (var i = 0, n = o.selectElements("p, span, br", t); i < n.length; i++) { var r = n[i]; for (var a in e.userPreferences.text) e.userPreferences.text.hasOwnProperty(a) && o.css(r, a, e.userPreferences.text[a]) }
                    if (e.userPreferences.window)
                        for (var s = 0, l = o.toArray(t.children); s < l.length; s++) { var r = l[s]; for (var a in e.userPreferences.window) e.userPreferences.window.hasOwnProperty(a) && o.css(r, a, e.userPreferences.window[a]) } } }, e.ariaHidden = "aria-hidden", e }();
        t.VideoClosedCaptions = r }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(18), i(20), i(19), i(9), i(10)], n = function(e, t, i, o, n, r, a) { "use strict"; var s = function() {
            function e() {} return e.parse = function(t, r) { t = "string" == typeof t ? e.parseXml(t) : t; var a = new i.TtmlContext; if (a.settings = new n.TtmlSettings(r), a.root = e.verifyRoot(t, a), a.body = e.getFirstElementByTagNameNS(a.root, "body", a.settings.ttmlNamespace), a.events = [], a.styleSetCache = [], a.body) { try { e.parseTtAttrs(a); var s = e.ensureRegions(a),
                            l = e.getAttributeNS(a.root, "timeBase", a.settings.ttmlParameterNamespace) || "media"; if (a.settings.supportedTimeBase.indexOf(l) !== -1) { e.processAnonymousSpans(a, a.body); var u = new o.TtmlTimeParser(a.settings.mediaFrameRate, a.settings.mediaTickRate);
                            e.applyTiming(a, a.root, { start: e.mediaStart, end: e.mediaEnd }, !0, u), e.applyStyling(a, s) } } catch (e) {}
                    a.events.push({ time: e.mediaEnd, element: null }), a.events.sort(function(e, t) { return e.time - t.time }) } return a }, e.parseXml = function(e) { var t = null; try { if (window.DOMParser) { var i = new DOMParser;
                        t = i.parseFromString(e, "application/xml") } else { var i = new ActiveXObject("Microsoft.XMLDOM");
                        i.async = !1, i.loadXML(e), t = i } } catch (e) { t = null } return t }, e.verifyRoot = function(t, i) { var o, n = t.documentElement; return "tt" === e.getLocalTagName(n) && ("http://www.w3.org/ns/ttml" !== n.namespaceURI && (i.settings.ttmlNamespace = n.namespaceURI, i.settings.ttmlStyleNamespace = i.settings.ttmlNamespace + "#styling", i.settings.ttmlParameterNamespace = i.settings.ttmlNamespace + "#parameter", i.settings.ttmlMetaNamespace = i.settings.ttmlNamespace + "#metadata"), o = n), o }, e.parseTtAttrs = function(t) { var i = e.getAttributeNS(t.root, "cellResolution", t.settings.ttmlParameterNamespace),
                    o = e.getAttributeNS(t.root, "extent", t.settings.ttmlStyleNamespace),
                    n = null; if (i) { var r = a.trim(i).split(/\s+/); if (2 === r.length) { var s = Math.round(parseFloat(r[0])),
                            l = Math.round(parseFloat(r[1]));
                        l > 0 && s > 0 && (n = { rows: l, columns: s }) } } if (n && (t.settings.cellResolution = n), o && "auto" !== o) { var u = o.split(/\s+/); if (2 === u.length && "px" === u[0].substr(u[0].length - 2) && "px" === u[1].substr(u[1].length - 2)) { var d = parseFloat(u[0].substr(0, u[0].length - 2)),
                            c = parseFloat(u[1].substr(0, u[1].length - 2));
                        t.settings.rootContainerRegionDimensions = { width: Math.round(d), height: Math.round(c) } } } }, e.ensureRegions = function(t) { t.rootContainerRegion = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "rootcontainerregion"), t.root.appendChild(t.rootContainerRegion); var i = t.settings.rootContainerRegionDimensions ? a.format("{0}px {1}px", t.settings.rootContainerRegionDimensions.width, t.settings.rootContainerRegionDimensions.height) : "auto";
                t.rootContainerRegion.setAttributeNS(t.settings.ttmlStyleNamespace, "extent", i); var o = e.getFirstElementByTagNameNS(t.root, "head", t.settings.ttmlNamespace);
                o || (o = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "head"), t.root.appendChild(o)), t.layout = e.getFirstElementByTagNameNS(o, "layout", t.settings.ttmlNamespace), t.layout || (t.layout = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "layout"), t.root.appendChild(t.layout)); var r = t.layout.getElementsByTagNameNS(t.settings.ttmlNamespace, "region"); if (!r.length) { var s = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "region");
                    s.setAttributeNS(n.xmlNS, "id", "anonymous"), s.setAttribute("data-isanonymous", "1"), t.layout.appendChild(s), t.body.setAttributeNS(t.settings.ttmlNamespace, "region", "anonymous") } return o }, e.processAnonymousSpans = function(t, i) { if (e.isTagNS(i, "p", t.settings.ttmlNamespace)) { for (var o = [], n = void 0, a = 0, s = r.nodeListToArray(i.childNodes); a < s.length; a++) { var l = s[a];
                        l.nodeType === Node.TEXT_NODE && (n !== Node.TEXT_NODE && o.push([]), o[o.length - 1].push(l)), n = l.nodeType } for (var u = 0, d = o; u < d.length; u++) { var c = d[u],
                            p = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "span");
                        p.appendChild(c[0].parentNode.replaceChild(p, c[0])); for (var h = 1; h < c.length; h++) p.appendChild(c[h]) } } for (var m = 0, y = r.nodeListToArray(i.childNodes); m < y.length; m++) { var l = y[m];
                    this.processAnonymousSpans(t, l) } }, e.applyTiming = function(t, i, o, n, a) { var s = e.getAttributeNS(i, "begin", t.settings.ttmlNamespace),
                    l = s ? a.parse(s) : o.start,
                    u = 0,
                    d = 0,
                    c = 0,
                    p = 0,
                    h = e.getAttributeNS(i, "dur", t.settings.ttmlNamespace),
                    m = e.getAttributeNS(i, "end", t.settings.ttmlNamespace); if (h || m)
                    if (h && m) { c = a.parse(h), p = a.parse(m); var y = Math.min(l + c, o.start + p);
                        u = Math.min(y, o.end) } else m ? (p = a.parse(m), u = Math.min(o.start + p, o.end)) : (c = a.parse(h), u = Math.min(l + c, o.end));
                else n && (l <= o.end ? (d = Math.max(0, o.end - l), u = o.end) : u = 0);
                u < l && (u = l), l = Math.floor(l), u = Math.floor(u), i.setAttribute("data-time-start", l.toString()), i.setAttribute("data-time-end", u.toString()), l >= 0 && t.events.filter(function(e) { return e.time === l }).length <= 0 && t.events.push({ time: l, element: i }); for (var v = l, g = 0, f = r.nodeListToArray(i.childNodes); g < f.length; g++) { var C = f[g];
                    C.nodeType === Node.ELEMENT_NODE && ("seq" !== e.getAttributeNS(i, "timeContainer", t.settings.ttmlNamespace) ? this.applyTiming(t, C, { start: l, end: u }, !0, a) : (this.applyTiming(t, C, { start: v, end: u }, !1, a), v = parseInt(C.getAttribute("data-time-end"), 10))) } }, e.applyStyling = function(t, i) { for (var o = e.getFirstElementByTagNameNS(i, "styling", t.settings.ttmlNamespace), n = o ? r.nodeListToArray(o.getElementsByTagNameNS(t.settings.ttmlNamespace, "style")) : [], a = 0, s = r.nodeListToArray(t.root.querySelectorAll("*")); a < s.length; a++) { var l = s[a];
                    this.applyStyle(t, l, n) } }, e.applyStyle = function(t, i, o) { var n = {};
                this.applyStylesheet(t.settings, n, i, o), e.applyInlineStyles(t.settings, n, i); var r = !0; for (var a in n)
                    if (n.hasOwnProperty(a)) { r = !1; break }
                r || (i.setAttribute("data-styleSet", t.styleSetCache.length.toString()), t.styleSetCache.push(n)) }, e.applyStylesheet = function(t, i, o, a) { for (var s = e.getAttributeNS(o, "style", t.ttmlNamespace), l = s ? s.split(/\s+/) : [], u = 0, d = l; u < d.length; u++)
                    for (var c = d[u], p = 0, h = a; p < h.length; p++) { var m = h[p];
                        e.getAttributeNS(m, "id", n.xmlNS) === c && (this.applyStylesheet(t, i, m, a), e.applyInlineStyles(t, i, m)) }
                if (e.isTagNS(o, "region", t.ttmlNamespace))
                    for (var y = 0, v = r.nodeListToArray(o.getElementsByTagNameNS(t.ttmlNamespace, "style")); y < v.length; y++) { var m = v[y];
                        e.applyInlineStyles(t, i, m) } }, e.applyInlineStyles = function(t, i, o) { for (var n = 0, s = r.nodeListToArray(o.attributes); n < s.length; n++) { var l = s[n];
                    l.namespaceURI === t.ttmlStyleNamespace && (i[e.getLocalTagName(l)] = a.trim(l.nodeValue)) } }, e.getLocalTagName = function(e) { return e.localName || e.baseName }, e.isTagNS = function(e, t, i) { return e.namespaceURI === i && this.getLocalTagName(e) === t }, e.getAttributeNS = function(e, t, i) { var o = e.getAttributeNS(i, t); if (!o)
                    for (var n = 0, a = r.nodeListToArray(e.attributes); n < a.length; n++) { var s = a[n]; if (s.localName === t && s.lookupNamespaceURI(s.prefix) === i) { o = s.value; break } }
                return o }, e.getFirstElementByTagNameNS = function(e, t, i) { if (e) { var o = e.getElementsByTagNameNS(i, t); if (o && o.length) return o[0] } return null }, e.mediaStart = -1, e.mediaEnd = 99999999, e }();
        t.TtmlParser = s }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) {
    var o, n;
    o = [i, t, i(17), i(19), i(9), i(10), i(11)], n = function(e, t, i, o, n, r, a) {
        "use strict";
        var s = function() {
            function e() { var t = this;
                this.translateToHtml = function(a, s, l) { var u, d, c = t.getTagNameEquivalent(a),
                        p = "",
                        h = ""; switch (c) {
                        case "ttml:region":
                            h = "cue ";
                        case "ttml:rootcontainerregion":
                        case "ttml:body":
                        case "ttml:div":
                            p = "div"; break;
                        case "ttml:p":
                            p = "p"; break;
                        case "ttml:span":
                            p = "span"; break;
                        case "ttml:br":
                            p = "br" } var m = i.TtmlParser.getAttributeNS(a, "role", t.settings.ttmlMetaNamespace);
                    m && (h += " " + m); var y = i.TtmlParser.getAttributeNS(a, "agent", t.settings.ttmlMetaNamespace); if (y && (h += " " + y), "x-ruby" === m ? p = "ruby" : "x-rubybase" === m ? p = "rb" : "x-rubytext" === m && (p = "rt"), !r.isNullOrWhiteSpace(p)) { u = e.defaultStyle(t.ownerDocument.createElement(p)), n.addClass(u, r.trim(h)); var v = i.TtmlParser.getAttributeNS(a, "title", t.settings.ttmlMetaNamespace);
                        v && u.setAttribute("title", v); var g = i.TtmlParser.getAttributeNS(a, "id", o.xmlNS);
                        g && t.settings.idPrefix && u.setAttribute("id", t.settings.idPrefix + g), "ttml:region" === c && (d = u.appendChild(e.defaultStyle(t.ownerDocument.createElement("div"))), n.css(d, "display", "table"), n.css(d, "border-spacing", "0"), n.css(d, "cell-spacing", "0"), n.css(d, "cell-padding", "0"), n.css(d, "width", "100%"), n.css(d, "height", "100%"), d = d.appendChild(e.defaultStyle(t.ownerDocument.createElement("div"))), n.css(d, "display", "table-cell"), s.displayAlign && (t.translateStyle(c, d, { displayAlign: s.displayAlign }), s.displayAlign = null)), l && "ttml:span" === c && (d = u.appendChild(e.defaultStyle(t.ownerDocument.createElement("span"))), n.css(d, "white-space", "pre")), n.css(u, "position", "static"), n.css(u, "width", "100%"), t.translateStyle(c, u, s) } return { outerNode: u, innerNode: d ? d : u } } }
            return e.prototype.setOwnerDocument = function(e) { this.ownerDocument = e }, e.prototype.updateRelatedMediaObjectRegion = function(e) { return (!this.settings.relatedMediaObjectRegion || e.width !== this.settings.relatedMediaObjectRegion.width || e.height !== this.settings.relatedMediaObjectRegion.height) && (this.settings.relatedMediaObjectRegion = { width: e.width, height: e.height }, !0) }, e.prototype.hasEvents = function() { return this.events && !!this.events.length }, e.prototype.resetCurrentEvents = function() { this.currentEvents = [] }, e.prototype.updateCurrentEvents = function(e) {
                var t = this.getTemporallyActiveEvents(e),
                    i = this.currentEvents ? this.currentEvents.length : 0,
                    o = t ? t.length : 0;
                if (i !== o) return this.currentEventsTime = e,
                    this.currentEvents = t, !0;
                if (this.currentEvents)
                    for (var n = 0; n < i; n++)
                        if (this.currentEvents[n].time !== t[n].time) return this.currentEventsTime = e, this.currentEvents = t, !0;
                return !1
            }, e.prototype.getTemporallyActiveEvents = function(e) { var t = this; return this.events.filter(function(i) { return !i.element || t.isTemporallyActive(i.element, e) }) }, e.prototype.isTemporallyActive = function(e, t) { return (parseInt(e.getAttribute("data-time-start"), 10) || 0) <= t && t < (parseInt(e.getAttribute("data-time-end"), 10) || 0) }, e.prototype.getCues = function(e) { var t = [];
                this.currentEventsTime !== e && this.updateCurrentEvents(e); for (var a = "preserve" === i.TtmlParser.getAttributeNS(this.root, "space", o.xmlNS), s = this.layout ? this.layout.getElementsByTagNameNS(this.settings.ttmlNamespace, "region") : [], l = 0, u = s; l < u.length; l++) { var d = u[l],
                        c = i.TtmlParser.getAttributeNS(d, "id", o.xmlNS),
                        p = d.getAttribute("data-isanonymous"); if (p || c) { var h = this.translate(d, this.settings.defaultRegionStyle, a, e, this.translateToHtml); if (h.outerNode) { for (var m = h.innerNode, y = h.outerNode, v = 0, g = this.events; v < g.length; v++) { var f = g[v]; if (f.element && this.isInRegion(f.element, p ? null : c)) { var C = this.prune(f.element, h.inheritableStyleSet, a, e, this.translateToHtml),
                                        b = C.prunedElement;
                                    C.hasPreservedContent || !b || r.trim(n.getText(b)).length || (b = null), b && m.appendChild(b) } } var E = "always" === y.getAttribute("data-showBackground");
                            (E || m.children.length) && (E && y.removeAttribute("data-showBackground"), t.push(y)) } } } if (t.length) { for (var w = this.translate(this.rootContainerRegion, { overflow: "hidden", padding: "0" }, !1, e, this.translateToHtml), T = 0, P = t; T < P.length; T++) { var k = P[T];
                        w.innerNode.appendChild(k) }
                    t = [], t.push(w.outerNode) } return t }, e.prototype.translate = function(e, t, i, o, n) { var r, a; if (this.isTemporallyActive(e, o)) { var s = this.getTagNameEquivalent(e); if (a = this.getComputedStyleSet(e, t, s, o), "none" !== a.display) { var l = this.getApplicableStyleSet(a, s);
                        r = n(e, l, i) } } return r ? { outerNode: r.outerNode, innerNode: r.innerNode, inheritableStyleSet: this.getInheritableStyleSet(a) } : { outerNode: null, innerNode: null, inheritableStyleSet: null } }, e.prototype.translateStyle = function(e, t, i) { for (var o in i) i[o] && this.applyStyle(t, e, o, i[o]) }, e.prototype.prune = function(e, t, r, a, s, l) { void 0 === l && (l = !1); var u, d = !1,
                    c = this.translate(e, t, r, a, s); if (null !== c.outerNode) { var p = this.getTagNameEquivalent(e);
                    u = c.outerNode; for (var h = c.innerNode, m = 0, y = n.nodeListToArray(e.childNodes); m < y.length; m++) { var v = y[m]; if (v.nodeType === Node.COMMENT_NODE);
                        else if (v.nodeType === Node.TEXT_NODE) h.appendChild(document.createTextNode(v.data)), r && "ttml:span" === p && (d = !0);
                        else { var g = r,
                                f = i.TtmlParser.getAttributeNS(v, "space", o.xmlNS);
                            f && (g = "preserve" === f); var C = this.prune(v, c.inheritableStyleSet, g, a, s, !0);
                            d = d || C.hasPreservedContent, C.prunedElement && h.appendChild(C.prunedElement) } } if (!l)
                        for (var b = e.parentNode; null !== b && b.nodeType === Node.ELEMENT_NODE && b !== this.body && (c = this.translate(b, t, r, a, s), c.outerNode);) h = c.innerNode, h.appendChild(u), u = c.outerNode, b = b.parentNode } return { prunedElement: u, hasPreservedContent: d } }, e.prototype.getComputedStyleSet = function(e, t, o, r) { var s = a.extend({}, t);
                a.extend(s, this.styleSetCache[parseInt(e.getAttribute("data-styleSet"), 10)]); for (var l = e.getElementsByTagNameNS(this.settings.ttmlNamespace, "set"), u = 0, d = n.nodeListToArray(l); u < d.length; u++) { var c = d[u];
                    this.isTemporallyActive(c, r) && i.TtmlParser.applyInlineStyles(this.settings, s, c) } if ("ttml:p" === o && "normal" === s.lineHeight) { var p = this.appendSpanFontSizes(e, this.getInheritableStyleSet(s), r, "");
                    p && (s["computed-lineHeight"] = p) } return s }, e.prototype.getApplicableStyleSet = function(e, t) { var i = {};
                e.extent && this.isStyleApplicable(t, "extent") && (i.extent = e.extent), e.color && this.isStyleApplicable(t, "color") && (i.color = e.color); for (var o in e) this.isStyleApplicable(t, o) && (i[o] = e[o]); return i }, e.prototype.isStyleApplicable = function(e, t) { switch (t) {
                    case "backgroundColor":
                    case "display":
                    case "visibility":
                        return "ttml:body ttml:div ttml:p ttml:region ttml:rootcontainerregion ttml:span ttml:br".indexOf(e) >= 0;
                    case "fontFamily":
                    case "fontSize":
                    case "fontStyle":
                    case "fontWeight":
                        return "ttml:p ttml:span ttml:br".indexOf(e) >= 0;
                    case "color":
                    case "textDecoration":
                    case "textOutline":
                    case "wrapOption":
                        return "ttml:span ttml:br".indexOf(e) >= 0;
                    case "direction":
                    case "unicodeBidi":
                        return "ttml:p ttml:span ttml:br".indexOf(e) >= 0;
                    case "displayAlign":
                    case "opacity":
                    case "origin":
                    case "overflow":
                    case "padding":
                    case "showBackground":
                    case "writingMode":
                    case "zIndex":
                        return "ttml:region ttml:rootcontainerregion".indexOf(e) >= 0;
                    case "extent":
                        return "ttml:tt ttml:region ttml:rootcontainerregion".indexOf(e) >= 0;
                    case "computed-lineHeight":
                    case "lineHeight":
                    case "textAlign":
                        return "ttml:p".indexOf(e) >= 0;
                    default:
                        return !1 } }, e.prototype.getInheritableStyleSet = function(e) { var t = {}; for (var i in e)
                    if (e.hasOwnProperty(i)) switch (i) {
                        case "backgroundColor":
                        case "computed-lineHeight":
                        case "display":
                        case "displayAlign":
                        case "extent":
                        case "opacity":
                        case "origin":
                        case "overflow":
                        case "padding":
                        case "showBackground":
                        case "unicodeBidi":
                        case "writingMode":
                        case "zIndex":
                            break;
                        default:
                            t[i] = e[i] }
                    return t }, e.prototype.appendSpanFontSizes = function(e, t, i, o) { for (var r = 0, a = n.nodeListToArray(e.childNodes); r < a.length; r++) { var s = a[r]; if (s.nodeType === Node.ELEMENT_NODE) { var l = this.getTagNameEquivalent(s); if ("ttml:span" === l) { var u = this.getComputedStyleSet(s, t, "ttml:span", i),
                                d = u.fontSize;
                            d && (o += (o ? "," : "") + d), o = this.appendSpanFontSizes(s, this.getInheritableStyleSet(u), i, o) } } } return o }, e.prototype.isInRegion = function(e, t) { if (!t) return !0; var o = i.TtmlParser.getAttributeNS(e, "region", this.settings.ttmlNamespace); if (o === t) return !0; if (!o) { for (var r = e.parentNode; null !== r && r.nodeType === Node.ELEMENT_NODE;) { var a = this.getRegionId(r); if (a) return a === t;
                        r = r.parentNode } for (var s = 0, l = n.nodeListToArray(e.getElementsByTagName("*")); s < l.length; s++) { var u = l[s]; if (this.getRegionId(u) === t) return !0 } } return !1 }, e.prototype.getRegionId = function(e) { var t; return e.nodeType === Node.ELEMENT_NODE && e.namespaceURI === this.settings.ttmlNamespace && (t = "region" === i.TtmlParser.getLocalTagName(e) ? i.TtmlParser.getAttributeNS(e, "id", o.xmlNS) : i.TtmlParser.getAttributeNS(e, "region", this.settings.ttmlNamespace)), t }, e.prototype.getTagNameEquivalent = function(e) { var t = i.TtmlParser.getLocalTagName(e),
                    o = e.namespaceURI; return o === this.settings.ttmlNamespace ? "ttml:" + t : "http://www.w3.org/1999/xhtml" === o ? t : "" }, e.prototype.applyStyle = function(t, i, o, s) { var l = s; switch (o) {
                    case "color":
                    case "backgroundColor":
                        return l = e.ttmlToCssColor(s), void n.css(t, o, l);
                    case "direction":
                    case "display":
                        return void n.css(t, o, l);
                    case "displayAlign":
                        switch (s) {
                            case "before":
                                l = "top"; break;
                            case "center":
                                l = "middle"; break;
                            case "after":
                                l = "bottom" } return void n.css(t, "vertical-align", l);
                    case "extent":
                        var u = void 0,
                            d = void 0; if ("auto" !== s) { var c = s.split(/\s+/);
                            2 === c.length && (u = this.ttmlToCssUnits(c[0], !0), d = this.ttmlToCssUnits(c[1], !1)) } return u || (u = (this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions.width : this.settings.relatedMediaObjectRegion.width).toString() + "px", d = (this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions.height : this.settings.relatedMediaObjectRegion.height).toString() + "px"), n.css(t, "position", "absolute"), n.css(t, "width", u), n.css(t, "min-width", u), n.css(t, "max-width", u), n.css(t, "height", d), n.css(t, "min-height", d), void n.css(t, "max-height", d);
                    case "fontFamily":
                        return this.settings.fontMap && this.settings.fontMap[s] && (l = this.settings.fontMap[s]), "smallCaps" === s && n.css(t, "fontVariant", "small-caps"), void n.css(t, o, l);
                    case "fontSize":
                        var p = s.split(/\s+/),
                            h = p.length > 1 ? p[1] : p[0]; return l = this.ttmlToCssFontSize(h, !1, .75, "ttml:region" === i), void n.css(t, o, l);
                    case "fontStyle":
                    case "fontWeight":
                        return void n.css(t, o, l);
                    case "lineHeight":
                        var m = "normal" === s ? s : this.ttmlToCssFontSize(s, !1); return void n.css(t, "line-height", m);
                    case "computed-lineHeight":
                        for (var y = s.split(","), v = -1, g = 0, f = y; g < f.length; g++) { var C = f[g]; if (l = this.ttmlToCssFontSize(C, !1), l && l.indexOf("px") === l.length - 2) { var d = parseFloat(l.substr(0, l.length - 2));!isNaN(d) && d > v && (v = d) } } return void(v >= 0 && n.css(t, "line-height", v + "px"));
                    case "origin":
                        if ("auto" !== s) { var c = s.split(/\s+/);
                            2 === c.length && (n.css(t, "position", "absolute"), n.css(t, "left", this.ttmlToCssUnits(c[0], !0)), n.css(t, "top", this.ttmlToCssUnits(c[1], !1))) } return;
                    case "opacity":
                        return void n.css(t, o, l);
                    case "padding":
                        var b = a.getDimensions(t),
                            p = s.split(/\s+/),
                            E = void 0,
                            w = void 0,
                            T = void 0,
                            P = void 0; switch (p.length) {
                            case 1:
                                E = this.ttmlToCssUnits(p[0], !1, b), w = this.ttmlToCssUnits(p[0], !0, b), l = r.format("{0} {1} {0} {1}", E, w); break;
                            case 2:
                                E = this.ttmlToCssUnits(p[0], !1, b), w = this.ttmlToCssUnits(p[1], !0, b), l = r.format("{0} {1} {0} {1}", E, w); break;
                            case 3:
                                E = this.ttmlToCssUnits(p[0], !1, b), w = this.ttmlToCssUnits(p[1], !0, b), T = this.ttmlToCssUnits(p[2], !1, b), l = r.format("{0} {1} {2} {1}", E, w, T); break;
                            case 4:
                                E = this.ttmlToCssUnits(p[0], !1, b), w = this.ttmlToCssUnits(p[1], !0, b), T = this.ttmlToCssUnits(p[2], !1, b), P = this.ttmlToCssUnits(p[3], !0, b), l = r.format("{0} {1} {2} {3}", E, w, T, P) } return n.css(t, "box-sizing", "border-box"), n.css(t, "border-style", "solid"), n.css(t, "border-color", "transparent"), void n.css(t, "border-width", l);
                    case "textAlign":
                        switch (s) {
                            case "start":
                                l = "left"; break;
                            case "end":
                                l = "right" } return void n.css(t, "text-align", l);
                    case "textDecoration":
                        return l = e.ttmlToCssTextDecoration(s), void n.css(t, "text-decoration", l);
                    case "textOutline":
                        return void n.css(t, "text-shadow", this.ttmlToCssTextOutline(l));
                    case "unicodeBidi":
                        switch (s) {
                            case "bidiOverride":
                                l = "bidi-override" } return void n.css(t, "unicode-bidi", l);
                    case "visibility":
                        return void n.css(t, o, l);
                    case "writingMode":
                        switch (s) {
                            case "lr":
                            case "lrtb":
                                return n.css(t, "writing-mode", "horizontal-tb"), n.css(t, "-webkit-writing-mode", "horizontal-tb"), void n.css(t, "writing-mode", "lr-tb");
                            case "rl":
                            case "rltb":
                                return n.css(t, "writing-mode", "horizontal-tb"), n.css(t, "-webkit-writing-mode", "horizontal-tb"), void n.css(t, "writing-mode", "rl-tb");
                            case "tblr":
                                return n.css(t, "text-orientation", "upright"), n.css(t, "writing-mode", "vertical-lr"), n.css(t, "-webkit-text-orientation", "upright"), n.css(t, "-webkit-writing-mode", "vertical-lr"), void n.css(t, "writing-mode", "tb-lr");
                            case "tb":
                            case "tbrl":
                                return n.css(t, "text-orientation", "upright"), n.css(t, "writing-mode", "vertical-rl"), n.css(t, "-webkit-text-orientation", "upright"), n.css(t, "-webkit-writing-mode", "vertical-rl"), void n.css(t, "writing-mode", "tb-rl") } return;
                    case "wrapOption":
                        return void n.css(t, "white-space", "noWrap" === s ? "nowrap" : "pre" === s ? "pre" : "normal");
                    case "zIndex":
                        return void n.css(t, o, l);
                    default:
                        return void n.css(t, o, l) } }, e.defaultStyle = function(t) { return n.css(t, "background-color", e.TtmlNamedColorMap.transparent), n.css(t, "offset", "0"), n.css(t, "margin", "0"), n.css(t, "padding", "0"), n.css(t, "border", "0"), t }, e.prototype.ttmlToCssUnits = function(e, t, i) { var o = e; if (e) { var n = e.charAt(e.length - 1); if ("c" === n || "%" === n) { var r = this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions : this.settings.relatedMediaObjectRegion,
                            a = parseFloat(e.substr(0, e.length - 1)),
                            s = t ? r.width : r.height,
                            l = void 0; if ("c" === n) { var u = t ? this.settings.cellResolution.columns : this.settings.cellResolution.rows;
                            l = a * s / u } else "%" === n && (i && (s = t ? i.width : i.height), l = s * a / 100);
                        l = Math.round(10 * l) / 10, o = l + "px" } } return o }, e.prototype.ttmlToCssFontSize = function(e, t, i, o) { void 0 === i && (i = 1), void 0 === o && (o = !1); var n = e; if (e) { var r = e.charAt(e.length - 1); if ("c" === r || o && "%" === r) { var a = this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions : this.settings.relatedMediaObjectRegion,
                            s = parseFloat(e.substr(0, e.length - 1)),
                            l = t ? a.width : a.height,
                            u = t ? this.settings.cellResolution.columns : this.settings.cellResolution.rows,
                            d = s * l / u; "%" === r && (d /= 100), d = Math.floor(d * i * 10) / 10, n = d + "px" } } return n }, e.prototype.ttmlToCssTextOutline = function(t) { var i = "none"; if (!r.isNullOrWhiteSpace(t) && "none" !== t) { var o, n = t.split(/\s+/),
                        a = void 0,
                        s = void 0; if (1 === n.length) a = $(this).css("color"), s = n[0], o = "";
                    else if (3 === n.length) a = n[0], s = n[1], o = n[2];
                    else if (2 === n.length) { var l = n[0].charAt(0);
                        l >= "0" && l <= "9" ? (a = $(this).css("color"), s = n[0], o = n[1]) : (a = n[0], s = n[1], o = "") } if (o = this.ttmlToCssFontSize(o, !1, .75), s = this.ttmlToCssFontSize(s, !1, .75), n = e.lengthRegEx.exec(s), n && 3 === n.length) { var u = Math.round(parseFloat(n[1])),
                            d = n[2];
                        i = ""; for (var c = -u; c <= u; c++)
                            for (var p = -u; p <= u; p++) 0 === c && 0 === p || (i += r.format("{0}{4} {1}{4} {2} {3}, ", c, p, o, e.ttmlToCssColor(a), d));
                        i && (i = i.substr(0, i.length - 2)) } } return i }, e.ttmlToCssTextDecoration = function(e) { for (var t = "", i = e.split(/\s+/), o = 0, n = i; o < n.length; o++) { var a = n[o]; switch (a) {
                        case "none":
                        case "noUnderline":
                        case "noLineThrough":
                        case "noOverline":
                            t = "none" } } for (var s = 0, l = i; s < l.length; s++) { var a = l[s]; switch (a) {
                        case "none":
                        case "noUnderline":
                        case "noLineThrough":
                        case "noOverline":
                            break;
                        case "lineThrough":
                            t += " line-through"; break;
                        default:
                            t += " " + a } } return r.trim(t) }, e.ttmlToCssColor = function(t) { var i = t; if (t = t.toLowerCase(), 0 === t.indexOf("rgba")) { var o = e.rgbaRegEx.exec(t); if (o && 5 === o.length) { var n = o[1],
                            a = o[2],
                            s = o[3],
                            l = parseInt(o[4], 10);
                        i = r.format("rgba({0},{1},{2},{3})", n, a, s, Math.round(100 * l / 255) / 100) } } else if ("#" === t.charAt(0) && 9 === t.length) { var n = parseInt(t.substr(1, 2), 16),
                        a = parseInt(t.substr(3, 2), 16),
                        s = parseInt(t.substr(5, 2), 16),
                        l = parseInt(t.substr(7, 2), 16);
                    i = r.format("rgba({0},{1},{2},{3})", n, a, s, Math.round(100 * l / 255) / 100) } else e.TtmlNamedColorMap[t] && (i = e.TtmlNamedColorMap[t]); return i }, e.lengthRegEx = /\s*(\d+\.*\d*)(.*)\s*/, e.rgbaRegEx = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/, e.TtmlNamedColorMap = { transparent: "rgba(0,0,0,0)", black: "rgba(0,0,0,1)", silver: "rgba(192,192,192,1)", gray: "rgba(128,128,128,1)", white: "rgba(255,255,255,1)", maroon: "rgba(128,0,0,1)", red: "rgba(255,0,0,1)", purple: "rgba(128,0,128,1)", fuchsia: "rgba(255,0,255,1)", magenta: "rgba(255,0,255,1)", green: "rgba(0,128,0,1)", lime: "rgba(0,255,0,1)", olive: "rgba(128,128,0,1)", yellow: "rgba(255,255,0,1)", navy: "rgba(0,0,128,1)", blue: "rgba(0,0,255,1)", teal: "rgba(0,128,128,1)", aqua: "rgba(0,255,255,1)", cyan: "rgba(0,255,255,1)" }, e
        }();
        t.TtmlContext = s
    }.apply(t, o), !(void 0 !== n && (e.exports = n))
}, function(e, t, i) { var o, n;
    o = [i, t, i(11)], n = function(e, t, i) { "use strict";
        t.xmlNS = "http://www.w3.org/XML/1998/namespace"; var o = function() {
            function e(e) { this.ttmlNamespace = "http://www.w3.org/ns/ttml", this.ttmlStyleNamespace = "http://www.w3.org/ns/ttml#styling", this.ttmlParameterNamespace = "http://www.w3.org/ns/ttml#parameter", this.ttmlMetaNamespace = "http://www.w3.org/ns/ttml#metadata", this.idPrefix = "", this.mediaFrameRate = 30, this.mediaFrameRateMultiplier = 1, this.mediaSubFrameRate = 1, this.mediaTickRate = 1e3, this.supportedTimeBase = "media", this.cellResolution = { rows: 15, columns: 32 }, this.defaultRegionStyle = { backgroundColor: "transparent", color: "#E8E9EA", direction: "ltr", display: "auto", displayAlign: "before", extent: "auto", fontFamily: "default", fontSize: "1c", fontStyle: "normal", fontWeight: "normal", lineHeight: "normal", opacity: "1", origin: "auto", overflow: "hidden", padding: "0", showBackground: "always", textAlign: "start", textDecoration: "none", textOutline: "none", unicodeBidi: "normal", visibility: "visible", wrapOption: "noWrap", writingMode: "lrtb", zIndex: "auto" }, this.fontMap = {}, this.fontMap.default = "Lucida sans typewriter, Lucida console, Consolas", this.fontMap.monospaceSerif = "Courier", this.fontMap.proportionalSerif = "Times New Roman, Serif", this.fontMap.monospaceSansSerif = "Lucida sans typewriter, Lucida console, Consolas", this.fontMap.proportionalSansSerif = "Arial, Sans-serif", this.fontMap.casual = "Verdana", this.fontMap.cursive = "Zapf-Chancery, Segoe script, Cursive", this.fontMap.smallCaps = "Arial, Helvetica", this.fontMap.monospace = "Lucida sans typewriter, Lucida console, Consolas", this.fontMap.sansSerif = "Arial, Sans-serif", this.fontMap.serif = "Times New Roman, Serif", e && i.extend(this, e) } return e }();
        t.TtmlSettings = o }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t], n = function(e, t) { "use strict"; var i = function() {
            function e(e, t) { this.mediaFrameRate = e, this.mediaTickRate = t } return e.prototype.parse = function(t) { if (!t) return 0; var i = e.absoluteTimeRegex.exec(t); if (i && i.length > 3) { var o = 60 * parseInt(i[1], 10) * 60,
                        n = 60 * parseInt(i[2], 10),
                        r = parseInt(i[3], 10),
                        a = 0; return i[5] && (a = 1e3 * parseFloat(i[4])), i[6] && (a = Math.round(parseFloat(i[6]) * this.getTimeUnitMultiplier("f"))), 1e3 * (o + n + r) + a } var s = e.relativeTimeRegex.exec(t); return s && s.length > 3 ? Math.round(parseFloat(s[1]) * this.getTimeUnitMultiplier(s[3])) : 0 }, e.prototype.getTimeUnitMultiplier = function(e) { switch (e) {
                    case "h":
                        return 36e5;
                    case "ms":
                        return 1;
                    case "m":
                        return 6e4;
                    case "s":
                        return 1e3;
                    case "f":
                        return 1e3 / this.mediaFrameRate;
                    case "t":
                        return 1e3 / this.mediaTickRate;
                    default:
                        return 0 } }, e.absoluteTimeRegex = /^(\d{1,}):(\d{2}):(\d{2})((\.\d{1,})|:(\d{2,}(\.\d{1,})?))?$/, e.relativeTimeRegex = /^(\d+(\.\d+)?)(ms|[hmsft])$/, e }();
        t.TtmlTimeParser = i }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(2), i(9), i(22), i(11)], n = function(e, t, i, o, n, r) { "use strict"; var a = function() {
            function e() { var e = this;
                this.triggerEvents = function(t) { e.onMediaEventCallback && e.onMediaEventCallback(t) } } return e.prototype.bindVideoEvents = function() { if (this.videoTag)
                    for (var e = 0, t = n.MediaEvents; e < t.length; e++) { var i = t[e];
                        o.addEvents(this.videoTag, i, this.triggerEvents) } }, e.prototype.unbindVideoEvents = function() { if (this.videoTag)
                    for (var e = 0, t = n.MediaEvents; e < t.length; e++) { var i = t[e];
                        o.removeEvents(this.videoTag, i, this.triggerEvents) } }, e.prototype.load = function(e, t, i, n) { e || (console.log("player container is null"), i && i()), this.videoTag && this.dispose(), this.playerContainer = e, this.onMediaEventCallback = n, this.videoTag = o.selectFirstElementT("video", this.playerContainer), !this.videoTag && i && (console.log("video tag not found"), i()), this.bindVideoEvents(), t && setTimeout(t, 0) }, e.prototype.play = function() { this.videoTag && this.videoTag.play() }, e.prototype.pause = function() { this.videoTag && this.videoTag.pause() }, e.prototype.isPaused = function() { return this.videoTag && this.videoTag.paused }, e.prototype.getVolume = function() { return this.videoTag ? this.videoTag.volume : 0 }, e.prototype.setVolume = function(e) { this.videoTag && (this.videoTag.volume = e) }, e.prototype.isMuted = function() { return !!this.videoTag && this.videoTag.muted }, e.prototype.mute = function() { this.videoTag && (this.videoTag.muted = !0) }, e.prototype.unmute = function() { this.videoTag && (this.videoTag.muted = !1) }, e.prototype.getCurrentTime = function() { return this.videoTag ? this.videoTag.currentTime : 0 }, e.prototype.setCurrentTime = function(e) { this.videoTag && (this.videoTag.currentTime = e) }, e.prototype.isSeeking = function() { return !!this.videoTag && this.videoTag.seeking }, e.prototype.getDuration = function() { return this.videoTag ? this.videoTag.duration : 0 }, e.prototype.getBufferedDuration = function() { var e = 0; return this.videoTag && this.videoTag.buffered && this.videoTag.buffered.length && (e = this.videoTag.buffered.end(this.videoTag.buffered.length - 1)), e }, e.prototype.setSource = function(e, t) { if (e && this.videoTag) { var i = this.videoTag.getAttribute("src");
                    e !== i && (this.videoTag.setAttribute("src", e), this.videoTag.load && this.videoTag.load()) } }, e.prototype.clearSource = function() { this.videoTag && (this.videoTag.setAttribute("src", ""), this.videoTag.load && this.videoTag.load()) }, e.prototype.setPosterFrame = function(e) { e && this.videoTag && this.videoTag.poster !== e && (this.videoTag.poster = e) }, e.prototype.getError = function() { var e; if (null !== this.videoTag && null !== this.videoTag.error) { switch (this.videoTag.error.code) {
                        case this.videoTag.error.MEDIA_ERR_ABORTED:
                            e = i.VideoErrorCodes.MediaErrorAborted; break;
                        case this.videoTag.error.MEDIA_ERR_NETWORK:
                            e = i.VideoErrorCodes.MediaErrorNetwork; break;
                        case this.videoTag.error.MEDIA_ERR_DECODE:
                            e = i.VideoErrorCodes.MediaErrorDecode; break;
                        case this.videoTag.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            e = i.VideoErrorCodes.MediaErrorSourceNotSupported; break;
                        default:
                            e = i.VideoErrorCodes.MediaErrorUnknown } return { errorCode: e } } return null }, e.prototype.setPlaybackRate = function(e) { this.videoTag && e && r.isNumber(e) && (this.videoTag.playbackRate = e) }, e.prototype.getPlayerTechName = function() { return "html5" }, e.prototype.getWrapperName = function() { return "html5video" }, e.prototype.dispose = function() { this.unbindVideoEvents(), this.clearSource() }, e }();
        t.Html5VideoWrapper = a }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t], n = function(e, t) { "use strict";
        t.MediaEvents = ["abort", "canplay", "canplaythrough", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], t.PlayerEvents = { CommonPlayerImpression: "CommonPlayerImpression", PlaybackStatusChanged: "PlaybackStatusChanged", Replay: "Replay", BufferComplete: "BufferComplete", ContentStart: "ContentStart", ContentError: "ContentError", ContentContinue: "ContentContinue", ContentComplete: "ContentComplete", ContentCheckpoint: "ContentCheckpoint", ContentLoaded3PP: "ContentLoaded3PP", Pause: "Pause", Resume: "Resume", Seek: "Seek", VideoQualityChanged: "VideoQualityChanged", Mute: "Mute", Unmute: "Unmute", InfoPaneOpened: "InfoPaneOpened", VideoTimedout: "VideoTimedout", VideoTimeUpdate: "VideoTimeUpdate", FullScreenEnter: "FullScreenEnter", FullScreenExit: "FullScreenExit", UserInteracted: "VideoUserInteracted" }, t.PlaybackStatus = { Ready: "Ready", Loading: "Loading", Loaded: "Loaded", LoadFailed: "LoadFailed", PlaybackCompleted: "PlaybackCompleted", Playbackerrored: "PlaybackErrored", VideoOpening: "VideoOpening", VideoPlaying: "VideoPlaying", VideoBuffering: "VideoBuffering", VideoPaused: "VideoPaused", VideoPlayCompleted: "VideoPlayCompleted", VideoPlayFailed: "VideoPlayFailed", VideoClosed: "VideoClosed" }, t.shareTypes = { facebook: "facebook", twitter: "twitter", linkedin: "linkedin", skype: "skype", mail: "mail", copy: "copy" } }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(2), i(9), i(22), i(24), i(11), i(1)], n = function(e, t, i, o, n, r, a, s) { "use strict"; var l = function() {
            function e() { var t = this;
                this.ampPlayer = null, this.triggerEvents = function(e) { t.onMediaEventCallback && t.onMediaEventCallback(e) }, this.setupAmpPlayer = function() { var e = o.selectFirstElementT("video", t.playerContainer);
                    e || (console.log("could not find video tag"), t.onLoadFailedCallback && t.onLoadFailedCallback()), t.ampPlayer = window.amp(e, { nativeControlsForTouch: !1, autoplay: !1, controls: !1 }, t.onAmpPlayerInit), t.bindVideoEvents(), t.onLoadedCallback && t.onLoadedCallback() }, this.onAmpPlayerInit = function() { var e = o.selectFirstElement(".f-video-player", t.playerContainer);
                    e && e.removeAttribute("style") }, e.isAmpScriptLoaded() || r.PlayerUtility.loadScript(s.PlayerConfig.ampUrl) } return e.isAmpScriptLoaded = function() { return window && window.amp }, e.prototype.bindVideoEvents = function() { if (this.ampPlayer)
                    for (var e = 0, t = n.MediaEvents; e < t.length; e++) { var i = t[e];
                        this.ampPlayer.addEventListener(i, this.triggerEvents) } }, e.prototype.unbindVideoEvents = function() { if (this.ampPlayer)
                    for (var e = 0, t = n.MediaEvents; e < t.length; e++) { var i = t[e];
                        this.ampPlayer.removeEventListener(i, this.triggerEvents) } }, e.prototype.load = function(t, i, o, n) { t || (console.log("player container is null"), o && o()), this.ampPlayer && this.dispose(), this.playerContainer = t, this.onMediaEventCallback = n, this.onLoadedCallback = i, this.onLoadFailedCallback = o, a.poll(e.isAmpScriptLoaded, e.pollingInterval, e.pollingTimeout, this.setupAmpPlayer, this.onLoadFailedCallback) }, e.prototype.play = function() { this.ampPlayer && this.ampPlayer.play() }, e.prototype.pause = function() { this.ampPlayer && this.ampPlayer.pause() }, e.prototype.isPaused = function() { return this.ampPlayer && this.ampPlayer.paused() }, e.prototype.getVolume = function() { return this.ampPlayer ? this.ampPlayer.volume() : 0 }, e.prototype.setVolume = function(e) { this.ampPlayer && this.ampPlayer.volume(e) }, e.prototype.isMuted = function() { return !!this.ampPlayer && this.ampPlayer.muted() }, e.prototype.mute = function() { this.ampPlayer && this.ampPlayer.muted(!0) }, e.prototype.unmute = function() { this.ampPlayer && this.ampPlayer.muted(!1) }, e.prototype.getCurrentTime = function() { return this.ampPlayer ? this.ampPlayer.currentTime() : 0 }, e.prototype.setCurrentTime = function(e) { this.ampPlayer && this.ampPlayer.currentTime(e) }, e.prototype.isSeeking = function() { return !!this.ampPlayer && this.ampPlayer.seeking() }, e.prototype.getDuration = function() { return this.ampPlayer ? this.ampPlayer.duration() : 0 }, e.prototype.getBufferedDuration = function() { var e = 0; if (this.ampPlayer && this.ampPlayer.buffered && this.ampPlayer.buffered().length) { var t = this.ampPlayer.buffered();
                    t.length && (e = t.end(t.length - 1)) } return e }, e.prototype.setSource = function(e, t) { if (e && this.ampPlayer && this.ampPlayer.currentSrc() !== e) { var o = "video/mp4"; switch (t) {
                        case i.MediaTypes.HLS:
                            o = "application/vnd.apple.mpegurl"; break;
                        case i.MediaTypes.DASH:
                            o = "application/dash-xml"; break;
                        case i.MediaTypes.SMOOTH:
                            o = "application/vnd.ms-sstr+xml" } var n = { src: e, type: o };
                    this.ampPlayer.src([n]) } }, e.prototype.clearSource = function() {}, e.prototype.setPosterFrame = function(e) { e && this.ampPlayer && this.ampPlayer.poster() !== e && this.ampPlayer.poster(e) }, e.prototype.getError = function() { var e = this.ampPlayer && this.ampPlayer.error(); if (e) { var t, o = window; return t = e.code & o.amp.errorCode.abortedErrStart ? i.VideoErrorCodes.MediaErrorAborted : e.code & o.amp.errorCode.networkErrStart ? i.VideoErrorCodes.MediaErrorNetwork : e.code & o.amp.errorCode.decodeErrStart ? i.VideoErrorCodes.MediaErrorDecode : e.code & o.amp.errorCode.srcErrStart ? i.VideoErrorCodes.MediaErrorSourceNotSupported : e.code & o.amp.errorCode.encryptErrStart ? i.VideoErrorCodes.AmpEncryptError : e.code & o.amp.errorCode.srcPlayerMismatchStart ? i.VideoErrorCodes.AmpPlayerMismatch : i.VideoErrorCodes.MediaErrorUnknown, { errorCode: t, message: "AMP Error Code: " + e.code } } return null }, e.prototype.setPlaybackRate = function(e) {}, e.prototype.getPlayerTechName = function() { return this.ampPlayer && this.ampPlayer.currentTechName() }, e.prototype.getWrapperName = function() { return "amp" }, e.prototype.dispose = function() { this.clearSource(), this.unbindVideoEvents(), this.ampPlayer && this.ampPlayer.dispose && this.ampPlayer.dispose(), this.ampPlayer = null }, e.pollingInterval = 50, e.pollingTimeout = 3e3, e }();
        t.AmpWrapper = l }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(10), i(2)], n = function(e, t, i, o) { "use strict"; var n = function() {
            function e() {} return e.random4CharString = function() { return (1 + Math.random()).toString(32).substring(1) }, e.loadScript = function(e) { var t = document.getElementsByTagName("script")[0],
                    i = document.createElement("script");
                i.src = e, i.async = !0, i.onload = i.onreadystatechange = function() { i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i)) }, t.parentNode.insertBefore(i, t) }, e.formatContentErrorMessage = function(e, t, n) { var r = i.format("[CE{0}]: {1}", o.VideoErrorCodes[e], t); return n && (r += i.format("; (Additional: {0})", n)), r }, e.logConsoleMessage = function(t, o) { void 0 === o && (o = "VideoPlayer"); var n = i.format("[{0}][{1}] {2}", e.toLogTime(new Date), o, t); "object" == typeof console && console.log && console.log(n) }, e.toLogTime = function(e) { e || (e = new Date); var t = e.getHours(),
                    i = e.getMinutes(),
                    o = e.getSeconds(); return t = t < 10 ? "0" + t : t, i = i < 10 ? "0" + i : i, o = o < 10 ? "0" + o : o, t + ":" + i + ":" + o }, e }();
        t.PlayerUtility = n }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t], n = function(e, t) { "use strict"; var i = function() {
            function e() { this.timestamp = null, this.timeValue = null, this.firstValue = null, this.totalValue = null, this.intervals = null } return e.prototype.start = function() { this.timestamp || (this.timestamp = new Date, this.intervals++) }, e.prototype.stop = function() { if (this.timestamp) { var e = (new Date).valueOf() - this.timestamp.valueOf();
                    this.timeValue += e, this.totalValue += e, this.firstValue || (this.firstValue = this.timeValue), this.timestamp = null } }, e.prototype.reset = function() { this.timestamp = null, this.timeValue = this.intervals = this.firstValue = this.totalValue = 0 }, e.prototype.isStarted = function() { return !!this.intervals }, e.prototype.isStopped = function() { return !!this.timestamp }, e.prototype.hasReached = function(e) { return this.getValue() >= e && (this.timestamp && (this.totalValue += (new Date).valueOf() - this.timestamp.valueOf(), this.timestamp = new Date), this.timeValue = 0, this.intervals = 0, !0) }, e.prototype.getValue = function() { var e = this.timeValue; return this.timestamp && (e += (new Date).valueOf() - this.timestamp.valueOf()), e }, e.prototype.getTotalValue = function() { var e = this.totalValue; return this.timestamp && (e += (new Date).valueOf() - this.timestamp.valueOf()), e }, e.prototype.getFirstValue = function() { return this.firstValue }, e.prototype.getIntervals = function() { return this.intervals }, e }();
        t.Stopwatch = i }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) {
    var o, n, r = this && this.__extends || function(e, t) {
        function i() { this.constructor = e } for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i) };
    o = [i, t, i(27), i(11)], n = function(e, t, i, o) {
        "use strict";
        var n = function(e) {
            function t(t) { e.call(this, t) }
            return r(t, e), t.prototype.doPing = function(e, t, i, n) { var r = this.getDefaultParams(e, i);
                o.extend(r, n), this.log("jsll - t: " + r.t + " behavior : " + t + " data : " + JSON.stringify(r)); var a = { videoObj: r },
                    s = { behavior: t, pageTags: a },
                    l = window;
                l.awa && l.awa.ct && l.awa.ct.captureContentUpdate(s) }, t.prototype.getDefaultParams = function(e, t) { var i = {}; return t && o.extend(i, t), e && (o.extend(i, { d: e.videoDuration, piid: e.playerInstanceId, plt: e.playerType, ptech: e.playerTechnology, size: e.videoSize ? e.videoSize.width + "x" + e.videoSize.height : null, vt: e.playerType, te: e.videoElapsedTime }), e.currentVideoFile && o.extend(i, { vfc: e.currentVideoFile.formatCode }), e.videoMetadata && o.extend(i, { eid: e.videoMetadata.videoId, vtitle: e.videoMetadata.title })), i }, t.prototype.onCommonPlayerImpression = function(e) { this.log("jsll - OnCommonPlayerImpression()"), this.doPing(e, null, t.usageCounters.commonPlayerImpression) }, t.prototype.onBufferComplete = function(e) { this.log("jsll - OnBufferComplete()"); var i = { bd: e.totalBufferWaitTime },
                    o = window.awa ? window.awa.behavior.VIDEOBUFFERING : null;
                this.doPing(e, o, t.usageCounters.contentBuffering, i) }, t.prototype.onContentStart = function(e) { this.log("jsll - OnContentStart()"); var i = window.awa ? window.awa.behavior.VIDEOSTART : null;
                this.doPing(e, i, t.usageCounters.contentStart) }, t.prototype.onContentContinue = function(e) { this.log("jsll - OnContentContinue()"); var i = window.awa ? window.awa.behavior.VIDEOCONTINUE : null;
                this.doPing(e, i, t.usageCounters.contentContinue) }, t.prototype.onContentCheckpoint = function(e) { this.log("jsll - OnContentCheckpoint()"); var t = { cp: e.checkpoint },
                    i = window.awa ? window.awa.behavior.VIDEOCHECKPOINT : null;
                this.doPing(e, i, null, t) }, t.prototype.onContentComplete = function(e) { this.log("jsll - OnContentComplete()"); var i = window.awa ? window.awa.behavior.VIDEOCOMPLETE : null;
                this.doPing(e, i, t.usageCounters.contentComplete) }, t.prototype.onContentError = function(e) { this.log("jsll - OnContentError()"); var i = { fi: e.currentVideoFile && e.currentVideoFile.url, et: e.errorType, etd: e.errorDesc },
                    o = window.awa ? window.awa.behavior.VIDEOERROR : null;
                this.doPing(e, o, t.usageCounters.contentError, i) }, t.prototype.onMute = function(e) { this.log("jsll - OnMute()"); var i = window.awa ? window.awa.behavior.VIDEOMUTE : null;
                this.doPing(e, i, t.usageCounters.mute) }, t.prototype.onUnmute = function(e) { this.log("jsll - OnMute()"); var i = window.awa ? window.awa.behavior.VIDEOUNMUTE : null;
                this.doPing(e, i, t.usageCounters.unmute) }, t.prototype.onPause = function(e) { this.log("jsll - OnPause()"); var i = window.awa ? window.awa.behavior.VIDEOPAUSE : null;
                this.doPing(e, i, t.usageCounters.pause) }, t.prototype.onSeek = function(e) { if (e.seekFrom !== e.seekTo) { this.log("jsll - OnSeek()"); var i = { te: e.seekFrom, st: e.seekTo },
                        o = window.awa ? window.awa.behavior.VIDEOJUMP : null;
                    this.doPing(e, o, t.usageCounters.seek, i) } }, t.prototype.onVideoQualityChanged = function(e) { this.log("jsll - OnVideoQualityChanged()"); var i = { q: e.currentVideoFile.quality };
                this.doPing(e, null, t.usageCounters.videoQuality, i) }, t.prototype.onFullScreenEnter = function(e) { this.log("jsll - OnFullScreenEnter()"); var i = window.awa ? window.awa.behavior.VIDEOFULLSCREEN : null;
                this.doPing(e, i, t.usageCounters.fullScreenEnter) }, t.prototype.onFullScreenExit = function(e) { this.log("jsll - OnFullScreenExit()"); var i = window.awa ? window.awa.behavior.VIDEOUNFULLSCREEN : null;
                this.doPing(e, i, t.usageCounters.fullScreenExit) }, t.prototype.onReplay = function(e) { this.log("jsll - OnReplay()"), this.doPing(e, null, t.usageCounters.replay) }, t.prototype.onResume = function(e) {
                this.log("jsll - OnResume()"),
                    this.doPing(e, null, t.usageCounters.resume)
            }, t.prototype.on3ppVideoLoaded = function(e) { this.log("jsll - On3ppVideoLoaded()"), this.doPing(e, null, t.usageCounters.contentImpression3PP) }, t.usageCounters = { contentBuffering: { t: "2", evt: "ContentPlay" }, contentError: { t: "20", evt: "ContentPlay" }, contentStart: { t: "21", evt: "ContentPlay" }, contentContinue: { t: "22", evt: "ContentPlay" }, contentComplete: { t: "23", evt: "ContentPlay" }, contentImpression3PP: { t: "41", evt: "ContentPlay" }, commonPlayerImpression: { t: "61", evt: "ContentPlay" }, cc: { t: "30", evt: "Click_Non-nav" }, pause: { t: "31", evt: "Click_Non-nav" }, seek: { t: "32", evt: "Click_Non-nav" }, mute: { t: "33", evt: "Click_Non-nav" }, fullScreenEnter: { t: "34", evt: "Click_Non-nav" }, info: { t: "35", evt: "Click_Non-nav" }, videoQuality: { t: "36", evt: "Click_Non-nav" }, resume: { t: "37", evt: "Click_Non-nav" }, fullScreenExit: { t: "38", evt: "Click_Non-nav" }, replay: { t: "39", evt: "Click_Non-nav" }, unmute: { t: "40", evt: "Click_Non-nav" }, facebook: { t: "51", evt: "Click_Non-nav" }, twitter: { t: "52", evt: "Click_Non-nav" }, email: { t: "53", evt: "Click_Non-nav" } }, t
        }(i.Reporter);
        t.JsllReporter = n
    }.apply(t, o), !(void 0 !== n && (e.exports = n))
}, function(e, t, i) { var o, n;
    o = [i, t, i(22), i(24)], n = function(e, t, i, o) { "use strict"; var n = function() {
            function e(e) { this.videoComponent = e, this.isDebugMode = !1, e && "true" === e.getAttribute("data-debug") && (this.isDebugMode = !0) } return e.prototype.reportEvent = function(e, t) { if (e) switch (e) {
                    case i.PlayerEvents.CommonPlayerImpression:
                        this.onCommonPlayerImpression(t); break;
                    case i.PlayerEvents.Replay:
                        this.onReplay(t); break;
                    case i.PlayerEvents.BufferComplete:
                        this.onBufferComplete(t); break;
                    case i.PlayerEvents.ContentStart:
                        this.onContentStart(t); break;
                    case i.PlayerEvents.ContentError:
                        this.onContentError(t); break;
                    case i.PlayerEvents.ContentContinue:
                        this.onContentContinue(t); break;
                    case i.PlayerEvents.ContentComplete:
                        this.onContentComplete(t); break;
                    case i.PlayerEvents.ContentCheckpoint:
                        this.onContentCheckpoint(t); break;
                    case i.PlayerEvents.ContentLoaded3PP:
                        this.on3ppVideoLoaded(t); break;
                    case i.PlayerEvents.Pause:
                        this.onPause(t); break;
                    case i.PlayerEvents.Resume:
                        this.onResume(t); break;
                    case i.PlayerEvents.Seek:
                        this.onSeek(t); break;
                    case i.PlayerEvents.VideoQualityChanged:
                        this.onVideoQualityChanged(t); break;
                    case i.PlayerEvents.Mute:
                        this.onMute(t); break;
                    case i.PlayerEvents.Unmute:
                        this.onUnmute(t); break;
                    case i.PlayerEvents.FullScreenEnter:
                        this.onFullScreenEnter(t); break;
                    case i.PlayerEvents.FullScreenExit:
                        this.onFullScreenExit(t) } }, e.prototype.log = function(e, t) { void 0 === t && (t = "Reporter"), this.isDebugMode && o.PlayerUtility.logConsoleMessage(e, t) }, e }();
        t.Reporter = n }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(9), i(15), i(22)], n = function(e, t, i, o, n) { "use strict"; var r = { "zh-cn": [n.shareTypes.facebook, n.shareTypes.twitter, n.shareTypes.linkedin, n.shareTypes.skype] },
            a = function() {
                function e() {} return e.getCurrentPageUrl = function() { var e = parent !== window,
                        t = window.location.href; return e && (t = document.referrer), t }, e.tryCopyTextToClipboard = function(e) { if (window.clipboardData) window.clipboardData.setData("text", e);
                    else { var t = document.createElement("textarea");
                        i.css(t, "position", "absolute"), i.css(t, "left", "-500px"), i.css(t, "top", "-500px"), t.value = e; var o = i.selectFirstElement("body");
                        o.appendChild(t), t.select(); try { document.execCommand("copy") } catch (e) {}
                        t.remove() } }, e.getShareOptionsData = function(t, i, a) { if (!(i && i.share && i.shareOptions && t)) return null; for (var s = [], l = encodeURIComponent(a || e.getCurrentPageUrl()), u = 0, d = i.shareOptions; u < d.length; u++) { var c = d[u]; if (c = c.toLowerCase(), !(i.market && r[i.market] && r[i.market].indexOf(c) >= 0)) switch (c) {
                            case n.shareTypes.facebook:
                                s.push({ url: "//www.facebook.com/share.php?u=" + l, id: c, label: t.getLocalizedValue(o.playerLocKeys.sharing_facebook), image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bdisplay%3Anone%3B%7D.st1%7Bdisplay%3Ainline%3B%7D.st2%7Bfill%3Anone%3B%7D.st3%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Rest_3_%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Twitter_3_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M28.4%2C8.6c-0.9%2C0.4-1.9%2C0.7-2.9%2C0.8c1-0.6%2C1.8-1.6%2C2.2-2.8c-1%2C0.6-2.1%2C1-3.2%2C1.2c-0.9-1-2.2-1.6-3.7-1.6c-2.8%2C0-5%2C2.3-5%2C5c0%2C0.4%2C0%2C0.8%2C0.1%2C1.2C11.7%2C12.2%2C8%2C10.2%2C5.5%2C7.1C5.1%2C7.9%2C4.8%2C8.8%2C4.8%2C9.7c0%2C1.8%2C1%2C3.3%2C2.3%2C4.2c-0.8%2C0-2.2-0.3-2.2-0.6c0%2C0%2C0%2C0%2C0%2C0.1c0%2C2.4%2C1.6%2C4.5%2C3.9%2C5c-0.4%2C0.1-0.9%2C0.2-1.4%2C0.2c-0.3%2C0-0.7%2C0-1-0.1c0.6%2C2%2C2.5%2C3.5%2C4.7%2C3.5c-1.5%2C1.2-3.7%2C2-6.1%2C2c-0.4%2C0-0.8%2C0-1.2-0.1c2.2%2C1.4%2C4.9%2C2.3%2C7.7%2C2.3c9.3%2C0%2C14.4-7.7%2C14.4-14.4c0-0.2%2C0-0.4%2C0-0.7C26.9%2C10.5%2C27.7%2C9.6%2C28.4%2C8.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_2%22%20class%3D%22st0%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Facebook_7_%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22White_2_%22%20class%3D%22st3%22%20d%3D%22M30.2%2C0H1.8C0.8%2C0%2C0%2C0.8%2C0%2C1.8v28.5c0%2C1%2C0.8%2C1.8%2C1.8%2C1.8h15.3V19.6h-4.2v-4.8h4.2v-3.6c0-4.1%2C2.5-6.4%2C6.2-6.4C25.1%2C4.8%2C26.6%2C5%2C27%2C5v4.3l-2.6%2C0c-2%2C0-2.4%2C1-2.4%2C2.4v3.1h4.8l-0.6%2C4.8h-4.2V32h8.2c1%2C0%2C1.8-0.8%2C1.8-1.8V1.8C32%2C0.8%2C31.2%2C0%2C30.2%2C0z%22%2F%3E%3C%2Fsvg%3E" }); break;
                            case n.shareTypes.twitter:
                                s.push({ url: "//twitter.com/share?url=" + l + "&text=", id: c, label: t.getLocalizedValue(o.playerLocKeys.sharing_twitter), image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M32%2C6.1c-1.2%2C0.5-2.5%2C0.9-3.8%2C1c1.3-0.8%2C2.3-2.1%2C2.9-3.6c-1.3%2C0.8-2.7%2C1.3-4.2%2C1.6C25.8%2C3.8%2C24.1%2C3%2C22.1%2C3c-3.6%2C0-6.5%2C3-6.5%2C6.5c0%2C0.5%2C0%2C1%2C0.1%2C1.6C10.3%2C10.8%2C5.5%2C8.2%2C2.2%2C4.2c-0.5%2C1-0.9%2C2.2-0.9%2C3.4c0%2C2.3%2C1.3%2C4.3%2C3%2C5.5c-1%2C0-2.9-0.4-2.9-0.8c0%2C0%2C0%2C0%2C0%2C0.1c0%2C3.1%2C2.1%2C5.9%2C5.1%2C6.5C6%2C19%2C5.3%2C19.1%2C4.7%2C19.1c-0.4%2C0-0.9%2C0-1.3-0.1c0.8%2C2.6%2C3.3%2C4.6%2C6.1%2C4.6c-2%2C1.6-4.8%2C2.6-7.9%2C2.6c-0.5%2C0-1%2C0-1.6-0.1c2.9%2C1.8%2C6.4%2C3%2C10%2C3c12.1%2C0%2C18.7-10%2C18.7-18.7c0-0.3%2C0-0.5%2C0-0.9C30%2C8.6%2C31.1%2C7.4%2C32%2C6.1z%22%2F%3E%3Cg%20id%3D%22Layer_2%22%3E%3C%2Fg%3E%3C%2Fsvg%3E" }); break;
                            case n.shareTypes.skype:
                                s.push({ url: "//web.skype.com/share?url=" + l + "&amp;lang=" + i.market, id: c, label: t.getLocalizedValue(o.playerLocKeys.sharing_skype), image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bdisplay%3Anone%3B%7D.st1%7Bdisplay%3Ainline%3B%7D.st2%7Bfill%3Anone%3B%7D.st3%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Layer_1_1_%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Rest_3_%22%20class%3D%22st1%22%3E%3Cg%20id%3D%22Twitter_3_%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M28.4%2C8.6c-0.9%2C0.4-1.9%2C0.7-2.9%2C0.8c1-0.6%2C1.8-1.6%2C2.2-2.8c-1%2C0.6-2.1%2C1-3.2%2C1.2c-0.9-1-2.2-1.6-3.7-1.6c-2.8%2C0-5%2C2.3-5%2C5c0%2C0.4%2C0%2C0.8%2C0.1%2C1.2C11.7%2C12.2%2C8%2C10.2%2C5.5%2C7.1C5.1%2C7.9%2C4.8%2C8.8%2C4.8%2C9.7c0%2C1.8%2C1%2C3.3%2C2.3%2C4.2c-0.8%2C0-2.2-0.3-2.2-0.6c0%2C0%2C0%2C0%2C0%2C0.1c0%2C2.4%2C1.6%2C4.5%2C3.9%2C5c-0.4%2C0.1-0.9%2C0.2-1.4%2C0.2c-0.3%2C0-0.7%2C0-1-0.1c0.6%2C2%2C2.5%2C3.5%2C4.7%2C3.5c-1.5%2C1.2-3.7%2C2-6.1%2C2c-0.4%2C0-0.8%2C0-1.2-0.1c2.2%2C1.4%2C4.9%2C2.3%2C7.7%2C2.3c9.3%2C0%2C14.4-7.7%2C14.4-14.4c0-0.2%2C0-0.4%2C0-0.7C26.9%2C10.5%2C27.7%2C9.6%2C28.4%2C8.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_2%22%20class%3D%22st1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Facebook_7_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20id%3D%22f_6_%22%20class%3D%22st3%22%20d%3D%22M18%2C26v-9h2.6l0.5-4H18v-1.9c0-1-0.2-2.1%2C1.3-2.1H21V6.1c0%2C0-1.3-0.1-2.6-0.1C15.7%2C6%2C14%2C7.7%2C14%2C10.7V13h-3v4h3v9H18z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M30.9%2C18.6C31%2C17.8%2C31%2C16.8%2C31%2C16c0-8.3-6.7-15-15-15c-1%2C0-1.8%2C0-2.6%2C0.2C12.2%2C0.3%2C10.6%2C0%2C9%2C0C4%2C0%2C0%2C4%2C0%2C9c0%2C1.6%2C0.5%2C3.2%2C1.1%2C4.5C1%2C14.2%2C1%2C15.2%2C1%2C16c0%2C8.3%2C6.7%2C15%2C15%2C15c1%2C0%2C1.8%2C0%2C2.6-0.2c1.3%2C0.8%2C2.9%2C1.1%2C4.5%2C1.1c5%2C0%2C9-4%2C9-9C32%2C21.3%2C31.7%2C19.8%2C30.9%2C18.6z%20M16.2%2C25.1c-5.1%2C0-7.5-2.6-7.5-4.5c0-1%2C0.8-1.6%2C1.8-1.6c2.2%2C0%2C1.6%2C3.2%2C5.8%2C3.2c2.1%2C0%2C3.4-1.3%2C3.4-2.4c0-0.6-0.5-1.4-1.8-1.8L13.1%2C17c-3.7-1-4.3-3-4.3-4.8c0-3.8%2C3.5-5.3%2C7-5.3c3.2%2C0%2C6.9%2C1.8%2C6.9%2C4.2c0%2C1-0.8%2C1.6-1.8%2C1.6c-1.9%2C0-1.6-2.6-5.3-2.6c-1.9%2C0-2.9%2C0.8-2.9%2C2.1s1.4%2C1.6%2C2.7%2C1.9l3.4%2C0.8c3.7%2C0.8%2C4.6%2C3%2C4.6%2C5.1C23.5%2C22.7%2C21%2C25.1%2C16.2%2C25.1z%22%2F%3E%3C%2Fsvg%3E" }); break;
                            case n.shareTypes.linkedin:
                                s.push({ url: "//www.linkedin.com/shareArticle?mini=true&url=" + l + "&title=&summary=&source=", id: c, label: t.getLocalizedValue(o.playerLocKeys.sharing_linkedin), image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bdisplay%3Anone%3B%7D.st1%7Bdisplay%3Ainline%3B%7D.st2%7Bfill%3Anone%3B%7D.st3%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Layer_1_1_%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Rest_3_%22%20class%3D%22st1%22%3E%3Cg%20id%3D%22Twitter_3_%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M28.4%2C8.6c-0.9%2C0.4-1.9%2C0.7-2.9%2C0.8c1-0.6%2C1.8-1.6%2C2.2-2.8c-1%2C0.6-2.1%2C1-3.2%2C1.2c-0.9-1-2.2-1.6-3.7-1.6c-2.8%2C0-5%2C2.3-5%2C5c0%2C0.4%2C0%2C0.8%2C0.1%2C1.2C11.7%2C12.2%2C8%2C10.2%2C5.5%2C7.1C5.1%2C7.9%2C4.8%2C8.8%2C4.8%2C9.7c0%2C1.8%2C1%2C3.3%2C2.3%2C4.2c-0.8%2C0-2.2-0.3-2.2-0.6c0%2C0%2C0%2C0%2C0%2C0.1c0%2C2.4%2C1.6%2C4.5%2C3.9%2C5c-0.4%2C0.1-0.9%2C0.2-1.4%2C0.2c-0.3%2C0-0.7%2C0-1-0.1c0.6%2C2%2C2.5%2C3.5%2C4.7%2C3.5c-1.5%2C1.2-3.7%2C2-6.1%2C2c-0.4%2C0-0.8%2C0-1.2-0.1c2.2%2C1.4%2C4.9%2C2.3%2C7.7%2C2.3c9.3%2C0%2C14.4-7.7%2C14.4-14.4c0-0.2%2C0-0.4%2C0-0.7C26.9%2C10.5%2C27.7%2C9.6%2C28.4%2C8.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_2%22%20class%3D%22st1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Facebook_7_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20id%3D%22f_6_%22%20class%3D%22st3%22%20d%3D%22M18%2C26v-9h2.6l0.5-4H18v-1.9c0-1-0.2-2.1%2C1.3-2.1H21V6.1c0%2C0-1.3-0.1-2.6-0.1C15.7%2C6%2C14%2C7.7%2C14%2C10.7V13h-3v4h3v9H18z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_3%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Skype_7_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M25.2%2C17.6c0.1-0.5%2C0.1-1.1%2C0.1-1.6c0-5.2-4.2-9.4-9.4-9.4c-0.6%2C0-1.1%2C0-1.6%2C0.1C13.5%2C6.2%2C12.5%2C6%2C11.5%2C6c-3.1%2C0-5.6%2C2.5-5.6%2C5.6c0%2C1%2C0.3%2C2%2C0.7%2C2.8c-0.1%2C0.5-0.1%2C1.1-0.1%2C1.6c0%2C5.2%2C4.2%2C9.4%2C9.4%2C9.4c0.6%2C0%2C1.1%2C0%2C1.6-0.1c0.8%2C0.5%2C1.8%2C0.7%2C2.8%2C0.7c3.1%2C0%2C5.6-2.5%2C5.6-5.6C25.9%2C19.3%2C25.7%2C18.4%2C25.2%2C17.6z%20M16%2C21.7c-3.2%2C0-4.7-1.6-4.7-2.8c0-0.6%2C0.5-1%2C1.1-1c1.4%2C0%2C1%2C2%2C3.6%2C2c1.3%2C0%2C2.1-0.8%2C2.1-1.5c0-0.4-0.3-0.9-1.1-1.1l-2.9-0.7c-2.3-0.6-2.7-1.9-2.7-3c0-2.4%2C2.2-3.3%2C4.4-3.3c2%2C0%2C4.3%2C1.1%2C4.3%2C2.6c0%2C0.6-0.5%2C1-1.1%2C1c-1.2%2C0-1-1.6-3.3-1.6c-1.2%2C0-1.8%2C0.5-1.8%2C1.3s0.9%2C1%2C1.7%2C1.2l2.1%2C0.5c2.3%2C0.5%2C2.9%2C1.9%2C2.9%2C3.2C20.6%2C20.2%2C19%2C21.7%2C16%2C21.7z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M29.6%2C0H2.4C1.1%2C0%2C0%2C1%2C0%2C2.3v27.4C0%2C31%2C1.1%2C32%2C2.4%2C32h27.3c1.3%2C0%2C2.4-1%2C2.4-2.3V2.3C32%2C1%2C30.9%2C0%2C29.6%2C0z%20M9.5%2C27.3H4.7V12h4.7V27.3z%20M7.1%2C9.9c-1.5%2C0-2.8-1.2-2.8-2.8c0-1.5%2C1.2-2.8%2C2.8-2.8c1.5%2C0%2C2.8%2C1.2%2C2.8%2C2.8C9.9%2C8.7%2C8.6%2C9.9%2C7.1%2C9.9z%20M27.3%2C27.3h-4.7v-7.4c0-1.8%2C0-4-2.5-4c-2.5%2C0-2.8%2C1.9-2.8%2C3.9v7.6h-4.7V12H17v2.1h0.1c0.6-1.2%2C2.2-2.5%2C4.5-2.5c4.8%2C0%2C5.7%2C3.2%2C5.7%2C7.3V27.3z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" }); break;
                            case n.shareTypes.mail:
                                s.push({ url: "mailto:?subject=Check out this great video&body=" + l, id: c, label: t.getLocalizedValue(o.playerLocKeys.sharing_mail), glyph: "glyph-mail" }); break;
                            case n.shareTypes.copy:
                                s.push({ url: l, id: c, label: t.getLocalizedValue(o.playerLocKeys.sharing_copy), glyph: "glyph-copy" }) } } return s }, e }();
        t.SharingHelper = a }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n, r = this && this.__extends || function(e, t) {
        function i() { this.constructor = e } for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i) };
    o = [i, t, i(30), i(24), i(22)], n = function(e, t, i, o, n) { "use strict"; var a = function(e) {
            function t(t, i) { var r = this;
                e.call(this, t, i, !0), this.playerContainer = t, this.contentStartReported = !1, this.runIfDownloadFinished = function() { window.YT && window.YT.Player ? r.OnYouTubeIframeAPIReady() : setTimeout(r.runIfDownloadFinished, 50) }, this.onPlayerStateChanged = function(e) { if (r.player) { var t = window; switch (e.data) {
                            case t.YT.PlayerState.PLAYING:
                                r.onYouTubeVideoBegin(); break;
                            case t.YT.PlayerState.ENDED:
                                r.onYouTubeVideoComplete(); break;
                            case t.YT.PlayerState.PAUSED:
                                r.setPlaybackStatus(n.PlaybackStatus.VideoPaused); break;
                            case t.YT.PlayerState.BUFFERING:
                                r.setPlaybackStatus(n.PlaybackStatus.VideoBuffering) }
                        r.log("state=" + e.data) } }, this.createElements(), this.oldOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady, window.onYouTubeIframeAPIReady = this.OnYouTubeIframeAPIReady.bind(this), o.PlayerUtility.loadScript(this.metadata && this.metadata.externalPlayerUrl || "https://www.youtube.com/iframe_api"), this.runIfDownloadFinished() } return r(t, e), t.prototype.OnYouTubeIframeAPIReady = function() { var e = { autoplay: this.playerOptions && this.playerOptions.autoplay ? "1" : "0", showinfo: "1", wmode: "window", modestbranding: 1, enablejsapi: 1, fs: 1, rel: 0, origin: encodeURIComponent(document.location.hostname) };
                this.player = new window.YT.Player(this.id, { height: "100%", width: "100%", videoId: this.metadata.videoId, events: { onStateChange: this.onPlayerStateChanged }, playerVars: e }), window.onYouTubeIframeAPIReady = this.oldOnYouTubeIframeAPIReady, this.oldOnYouTubeIframeAPIReady && (this.oldOnYouTubeIframeAPIReady(), this.oldOnYouTubeIframeAPIReady = null) }, t.prototype.onYouTubeVideoBegin = function() { this.setPlaybackStatus(n.PlaybackStatus.VideoPlaying), this.contentStartReported || (this.reportEvent(n.PlayerEvents.ContentStart), this.contentStartReported = !0) }, t.prototype.onYouTubeVideoComplete = function() { this.setPlaybackStatus(n.PlaybackStatus.PlaybackCompleted), this.reportEvent(n.PlayerEvents.ContentComplete), this.contentStartReported = !1 }, t.prototype.load = function(e) {}, t.prototype.play = function() {}, t.prototype.pause = function() {}, t.prototype.mute = function() {}, t.prototype.unmute = function() {}, t }(i.ExternalPlayerBase);
        t.YoutubePlayer = a }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(9), i(24), i(11), i(22), i(9), i(26)], n = function(e, t, i, o, n, r, a, s) { "use strict"; var l = function() {
            function e(t, o, n) { this.videoComponent = t, this.reporters = [], t && o && (this.metadata = o.metadata, this.playerOptions = o.options, this.container = i.selectFirstElementT(".f-external-player", this.videoComponent), this.container || (this.container = document.createElement("div"), this.container.setAttribute("class", e.externalDivClass), t.appendChild(this.container)), this.initializeReporting(), n ? this.reportEvent(r.PlayerEvents.CommonPlayerImpression) : this.reportEvent(r.PlayerEvents.ContentLoaded3PP)) } return e.prototype.initializeReporting = function() { this.playerOptions && this.playerOptions.reporting && this.playerOptions.reporting.enabled && this.playerOptions.reporting.jsll && this.reporters.push(new s.JsllReporter(this.videoComponent)) }, e.prototype.createElements = function() { this.id = o.PlayerUtility.random4CharString(), this.player = document.createElement("div"), this.player.setAttribute("id", this.id), this.container.appendChild(this.player) }, e.prototype.getReport = function() { var e = "3PP_" + this.metadata.playerName,
                    t = { playerTechnology: e, videoMetadata: this.metadata, playerInstanceId: this.videoComponent.getAttribute("id"), playerType: e, videoSize: n.getDimensions(this.container) }; return t }, e.prototype.setPlaybackStatus = function(e) { e && e !== this.playbackStatus && (this.playbackStatus = e, a.customEvent(this.videoComponent, r.PlayerEvents.PlaybackStatusChanged, { detail: { status: r.PlayerEvents.PlaybackStatusChanged } })) }, e.prototype.reportEvent = function(e) { var t = this.getReport();
                this.log("Event reported : " + r.PlayerEvents[e] + " | data : " + JSON.stringify(t)); for (var i = 0, o = this.reporters; i < o.length; i++) { var n = o[i];
                    n.reportEvent(e, t) }
                a.customEvent(this.videoComponent, r.PlayerEvents[e], { detail: t }) }, e.prototype.log = function(e) { this.playerOptions && this.playerOptions.debug && e && o.PlayerUtility.logConsoleMessage(e, "3PP") }, e.prototype.dispose = function() { var e = i.selectFirstElement("iframe", this.container);
                e && e.setAttribute("src", ""), setTimeout(function() { i.removeInnerHtml(this.container) }, 0) }, e.externalDivClass = "f-external-player", e }();
        t.ExternalPlayerBase = l }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(11), i(6), i(22)], n = function(e, t, i, o, n) { "use strict"; var r = function() {
            function e(e) { this.autoload = !0, this.autoplay = !0, this.startTime = 0, this.mute = !1, this.loop = !1, this.controls = !0, this.trigger = !0, this.useHLS = !0, this.debug = !1, this.reporting = { enabled: !1, jsll: !1 }, this.playbackSpeed = !1, this.share = !1, this.shareOptions = [n.shareTypes.facebook, n.shareTypes.twitter, n.shareTypes.linkedin, n.shareTypes.skype, n.shareTypes.mail, n.shareTypes.copy], i.extend(this, e), o.Environment.isMobile && (this.autoplay = !1), e && e.shareOptions && (this.shareOptions = e.shareOptions) } return e }();
        t.PlayerOptions = r }.apply(t, o), !(void 0 !== n && (e.exports = n)) }, function(e, t, i) { var o, n;
    o = [i, t, i(8), i(3)], n = function(e, t, i, o) { "use strict"; var n = function() {
            function e() {} return e }();
        t.VideoPlayerAutoInitializer = n,
            function() { i.ComponentFactory.create([{ c: o.VideoPlayer }]) }() }.apply(t, o), !(void 0 !== n && (e.exports = n)) }]);
//# sourceMappingURL=mwfVideoPlayer-main.var.min.js.map