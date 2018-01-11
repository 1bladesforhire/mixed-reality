<style>
    @media only screen and (min-width: 768px) {
        .exp-singlestack-v2 #search {
            width: 85px;
        }
        .exp-singlestack-v2 #search::before {
            float: left;
            margin-left: 1px;
        }
        .exp-singlestack-v2 #search::after {
            content: 'Search';
            float: right;
            position: relative;
            top: -2px;
            font-family: inherit;
            font-size: 15px;
        }
        .exp-singlestack-v2 #uhf-shopping-cart .shopping-cart-text {
            font-size: 15px;
            position: relative;
            top: -1px;
            margin-left: 5px;
        }
        .exp-singlestack-v2 form.c-search.exp-expand #search::after {
            display: none;
        }
        .exp-singlestack-v2 form.c-search.exp-expand #search {
            width: inherit;
        }
        .exp-singlestack-v2 #uhf-shopping-cart {
            margin-right: 14px !important;
            margin-left: 8px !important;
            width: inherit;
        }
        .exp-singlestack-v2 #meControl .msame_Header_name {
            display: block;
            color: rgba(0, 0, 0, 0.6);
            margin-top: -1px;
        }
        .exp-singlestack-v2 #search::after {
            font-size: 13px;
            left: -4px;
            top: 0;
        }
        .exp-singlestack-v2 #uhf-shopping-cart .shopping-cart-text {
            font-size: 13px;
            top: 0px;
        }
    }
    
    @media only screen and (min-width: 1400px) {
        .exp-singlestack-v2 #cli_shellHeaderSearchInput {
            display: none;
        }
        .exp-singlestack-v2 .exp-expand #cli_shellHeaderSearchInput {
            display: block;
        }
    }
    
    @media only screen and (max-width: 1399px) {
        .exp-singlestack-v2 .c-uhfh .c-search {
            min-width: 92px;
        }
        /*
	.exp-singlestack-v2 .c-uhfh .c-search{
		min-width: 40px;
	}
  .exp-singlestack-v2 #search::after,
  .exp-singlestack-v2 #uhf-shopping-cart .shopping-cart-text,
  .exp-singlestack-v2 #meControl .msame_Header:not(.msame_unauth) .msame_Header_name{
    display: none !important;
  }
  .exp-singlestack-v2 .exp-menu-trigger .exp-menu-label{
	  padding-left:0 !important;
	  visibility: hidden;
	  font-size: 0 !important;
  }
  .exp-singlestack-v2 .exp-menu-trigger{
	  width: 20px;
  }
  .exp-singlestack-v2 #search{
	  width: 35px !important;
	  margin-right: 4px;
  }
  */
    }
    
    @media only screen and (max-width: 767px) {
        .exp-singlestack-v2 form.c-search.exp-expand #search,
        .exp-singlestack-v2 #search {
            width: auto;
        }
        .exp-singlestack-v2 #uhf-shopping-cart .shopping-cart-text,
        .exp-singlestack-v2 #search::after {
            display: none !important;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .exp-singlestack-v2 #meControl .msame_Header_name {
            float: right;
            padding-left: 6px;
        }
        .exp-singlestack-v2 #meControl .msame_Header_pic .msame_Header_piccont {
            padding-right: 0;
            margin-top: 6px;
        }
        .exp-singlestack-v2 #meControl .msame_Header_pic .msame_Header_picframe {
            width: 25px !important;
            height: 25px !important;
        }
        .exp-singlestack-v2 #meControl .msame_Header_pic .msame_Header_picframe>img {
            width: 100% !important;
            height: 100% !important;
        }
        .exp-singlestack-v2 .exp-not-signedin #meControl .msame_Header_name,
        .exp-singlestack-v2 #meControl .msame_Header_name {
            font-size: 13px;
            margin-top: 0px;
        }
        .exp-singlestack-v2 #meControl .msame_Header_name {
            display: inline-block !important;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-label {
            font-size: 13px;
            padding-left: 25px;
        }
        .exp-singlestack-v2 #meControl .msame_Header.msame_unauth {
            margin-left: 1px;
        }
        .exp-singlestack-v2 #cli_shellHeaderSearchInput {
            font-size: 13px;
        }
        .exp-singlestack-v2 #meControl:hover .msame_Header.msame_unauth .msame_Header_name,
        .exp-singlestack-v2 #uhf-shopping-cart:hover .shopping-cart-text,
        .exp-singlestack-v2 .exp-menu-trigger:hover .exp-menu-label,
        .exp-singlestack-v2 #search:hover:after {
            text-decoration: underline;
        }
        .exp-singlestack-v2 #meControl:hover .msame_Header.msame_unauth .msame_Header_name {
            display: block !important;
        }
        /* End 13px for ME controls */
        /* Menu Button */
        .exp-singlestack-v2 .exp-expanded .exp-menu-trigger {
            display: none;
            margin-left: 10px;
        }
        .exp-singlestack-v2 .exp-menu-trigger {
            line-height: 46px;
            display: inline-block;
            margin-right: 8px;
            margin-top: 2px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-label {
            padding-left: 23px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad {
            position: relative;
            top: 2px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad>span {
            width: 4px;
            height: 4px;
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-2 {
            left: 6px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-3 {
            left: 12px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-4 {
            top: 6px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-5 {
            left: 6px;
            top: 6px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-6 {
            left: 12px;
            top: 6px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-7 {
            top: 12px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-8 {
            left: 6px;
            top: 12px;
        }
        .exp-singlestack-v2 .exp-menu-trigger .exp-menu-pad .exp-9 {
            left: 12px;
            top: 12px;
        }
        /* Theme -- Light */
        .exp-singlestack-v2 .theme-light .exp-menu-trigger {
            color: rgba(0, 0, 0, 0.6) !important;
        }
        .exp-singlestack-v2 .theme-light #meControl .msame_Header_name,
        .exp-singlestack-v2 .theme-light #search,
        .exp-singlestack-v2 .theme-light .exp-menu-trigger .exp-menu-label,
        .exp-singlestack-v2 .theme-light #uhf-shopping-cart {
            color: #000 !important;
        }
        .exp-singlestack-v2 .theme-light .exp-menu-trigger .exp-menu-pad>span {
            background-color: #000;
        }
        /* Theme -- Dark */
        .exp-singlestack-v2 .theme-dark .exp-menu-trigger {
            color: rgba(255, 255, 255, 255.6) !important;
        }
        .exp-singlestack-v2 .theme-dark #meControl .msame_Header_name,
        .exp-singlestack-v2 .theme-dark #search,
        .exp-singlestack-v2 .theme-dark .exp-menu-trigger .exp-menu-label,
        .exp-singlestack-v2 .theme-dark #uhf-shopping-cart {
            color: #dcdcdc !important;
        }
        .exp-singlestack-v2 .theme-dark .exp-menu-trigger .exp-menu-pad>span {
            background-color: #dcdcdc;
        }
    }
    
    @media only screen and (min-width: 1400px) {
        .exp-singlestack-v2 .f-search-opened .c-uhfh-gnav {
            display: block;
        }
    }
    
    @media only screen and (max-width: 767px) {
        .exp-singlestack-v2 .exp-menu-trigger {
            display: none;
        }
    }
    
    @media only screen and (min-width: 768px) {
        /* Search */
        .exp-singlestack-v2 .js-global-head.f-search-opened .exp-menu-trigger {
            display: none !important;
        }
        /* L1 Dropdowns */
        .exp-singlestack-v2 .c-uhf-menu ul {
            font-size: 13px;
        }
        /* Mega Menu */
        .exp-singlestack-v2 .exp-uhf-singlestack .uhf-cancel.c-glyph.glyph-cancel {
            float: right;
            margin-top: -25px;
            border: none;
            font-size: 25px;
            margin-right: 17px;
            background: transparent;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-uhf-hr {
            width: calc(100% - 48px);
            height: 2px;
            margin-left: 24px;
            margin-top: 5px;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack {
            position: absolute;
            margin-left: -25px;
            max-width: calc(1600px + 10%) !important;
            width: calc(100% + 50px) !important;
            border-style: solid;
            border-width: 1px 1px 2px;
            animation: fadeIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            padding-top: 45px;
            top: 0;
            left: 0;
            z-index: 699;
            line-height: normal;
            cursor: default;
            font-size: 13px;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .js-paddle-items li {
            display: inline-block;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack[aria-hidden="true"] {
            display: none;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-uhf-g-nav #More-navigation {
            display: none;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout>ul {
            border-style: solid;
            border-width: 0px 1px 2px 1px;
            top: 100%;
            display: flex;
            flex-flow: row wrap;
            white-space: nowrap;
            max-width: calc(1600px + 10%) !important;
            width: calc(100% + 2px) !important;
            position: absolute;
            padding: 0;
            margin-left: -1px;
            height: auto !important;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout ul>li>button {
            display: block;
            padding-right: 30px;
            padding-left: 24px;
            padding-top: 18px;
            padding-bottom: 18px;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout .f-sub-menu a {
            display: block;
            padding-left: 24px;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout .f-multi-column-info {
            text-align: center;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout .f-multi-column-info a {
            padding-left: 24px;
            padding-top: 18px;
            padding-bottom: 18px;
            display: block;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout li {
            width: 16%;
            min-width: 175px;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout li.f-multi-column-info {
            width: 100%;
        }
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout a:hover,
        .exp-singlestack-v2 .exp-uhf-singlestack .exp-more-flyout a:focus {
            text-decoration: underline;
        }
        .exp-singlestack-v2 #uhfLogo {
            z-index: 700;
        }
        .exp-singlestack-v2 #uhf-g-nav {
            display: none !important;
        }
        /* Theme -- Light */
        .exp-singlestack-v2 .theme-light .exp-uhf-singlestack .exp-uhf-hr {
            background: #e6e6e6;
        }
        .exp-singlestack-v2 .theme-light .exp-uhf-singlestack {
            border-color: rgba(0, 0, 0, 0.05) rgba(0, 0, 0, 0.05) #000;
            background: #f2f2f2;
            color: #262626;
        }
        .exp-singlestack-v2 .theme-light .exp-uhf-singlestack .exp-more-flyout>ul {
            border-color: rgba(0, 0, 0, 0.05) rgba(0, 0, 0, 0.05) #000;
            background: #f2f2f2;
        }
        /* Theme -- Dark */
        .exp-singlestack-v2 .theme-dark .exp-uhf-singlestack .exp-uhf-hr {
            background: #2e2e2e;
        }
        .exp-singlestack-v2 .theme-dark .exp-uhf-singlestack {
            border-color: rgba(255, 255, 255, .05) rgba(255, 255, 255, .05) #fff;
            background: #232323;
            color: #dcdcdc;
        }
        .exp-singlestack-v2 .theme-dark .exp-uhf-singlestack .exp-more-flyout>ul {
            border-color: rgba(255, 255, 255, .05) rgba(255, 255, 255, .05) #fff;
            background: #232323 !important;
        }
        .exp-singlestack-v2 .c-uhfh .theme-dark .f-multi-column .f-multi-column-info>a {
            color: #fff !important;
        }
    }
    /* Config -- Media Query Changes Per Site */
    
    @media only screen and (min-width: 1775px) {
        .exp-singlestack-v2 #headerRegion .c-uhfh {
            position: relative;
        }
        .exp-singlestack-v2 #headerRegion .c-uhfh .js-cat-head {
            display: inline-block;
            height: 49px;
            left: 0;
            margin-left: 187px;
            padding: 0;
            position: absolute;
            top: 1px;
            width: auto;
        }
        .exp-singlestack-v2 .js-global-head.f-search-opened+.js-cat-head {
            display: none !important;
        }
        .exp-singlestack-v2 .js-cat-head .js-primary-paddle,
        .exp-singlestack-v2 .js-cat-head .js-secondary-paddle {
            display: none !important;
        }
    }
    
    @media only screen and (max-width: 1774px) {
        .exp-singlestack-v2 .c-uhfh .js-cat-head {
            margin-left: 0 !important;
        }
        .exp-singlestack-v2 #uhfCatLogo:hover::before {
            width: calc(100% - 39px);
        }
        .exp-singlestack-v2 #uhfCatLogo {
            padding-left: 15px !important;
        }
    }
    /* End Config */
    /* L1 Styling */
    
    @media only screen and (min-width: 768px) {
        .exp-singlestack-v2 #headerRegion .c-uhfh .js-cat-head button {
            font-size: 13px;
        }
        .exp-singlestack-v2 #uhfCatLogo {
            border: 1px solid transparent;
            margin: 1px 0 1px 1px;
            padding: 0 25px 0 11px;
            outline-offset: -1px !important;
        }
        .exp-singlestack-v2 #uhfCatLogo::before {
            width: calc(100% - 36px);
            bottom: 12px;
        }
        .exp-singlestack-v2 #uhf-c-nav .c-uhf-menu:first-of-type {
            margin-left: -5px;
        }
        .exp-singlestack-v2 #uhfCatLogo::after {
            position: absolute;
            right: 0;
            top: 13px;
            width: 10px;
        }
        .exp-singlestack-v2 #uhfCatLogo span {
            font-size: 13px;
            font-weight: 700;
            line-height: 46px;
        }
        .exp-singlestack-v2 #uhf-c-nav .c-uhf-menu {
            padding-left: 3px;
        }
        .exp-singlestack-v2 #uhf-c-nav .c-uhf-menu>button {
            padding: 0 32px 0 11px;
            outline-offset: -1px !important;
        }
        .exp-singlestack-v2 #uhf-c-nav .c-uhf-menu>button::before {
            width: calc(100% - 43px);
            bottom: 12px;
        }
        .exp-singlestack-v2 #uhf-c-nav .c-uhf-menu>button::after {
            right: 12px;
        }
        .exp-singlestack-v2 .js-cat-head .c-uhf-nav-link {
            border: 1px solid transparent;
            font-size: 13px;
            line-height: 46px;
            margin: 1px 0;
            padding: 0 12px;
            outline-offset: -1px !important;
        }
        .exp-singlestack-v2 .js-cat-head .c-uhf-nav-link.f-hidden,
        .exp-singlestack-v2 #uhf-c-nav .c-uhf-menu>button.f-hidden {
            opacity: 1 !important;
        }
        .exp-singlestack-v2 .js-cat-head .c-uhf-nav-link::before {
            width: calc(100% - 24px);
            bottom: 12px;
        }
        .exp-singlestack-v2 .c-uhfh .theme-light.js-cat-head .c-call-to-action,
        .exp-singlestack-v2 .c-uhfh .theme-dark.js-cat-head .c-call-to-action {
            background: none !important;
            outline-color: transparent !important;
            border: 1px solid transparent;
            font-size: 13px;
            line-height: 46px;
            margin: 1px 0;
            padding: 0 12px;
            color: #262626 !important;
            max-height: 48px !important;
            outline-offset: -1px !important;
        }
        .exp-singlestack-v2 .c-uhfh .theme-light.js-cat-head .c-call-to-action.c-glyph:hover,
        .exp-singlestack-v2 .c-uhfh .theme-dark.js-cat-head .c-call-to-action.c-glyph:hover {
            background-color: transparent !important;
            border-color: transparent !important;
            border-width: 1px !important;
        }
        .exp-singlestack-v2 .c-uhfh .theme-light.js-cat-head .c-call-to-action.c-glyph:focus,
        .exp-singlestack-v2 .c-uhfh .theme-dark.js-cat-head .c-call-to-action.c-glyph:focus {
            background-color: transparent !important;
            border-color: transparent !important;
            border-width: 1px !important;
        }
        .exp-singlestack-v2 .c-uhfh .theme-light.js-cat-head .c-call-to-action.c-glyph:focus {
            outline: #000 dashed 1px !important;
        }
        .exp-singlestack-v2 .c-uhfh .theme-dark.js-cat-head .c-call-to-action.c-glyph:focus {
            outline: #fff dashed 1px !important;
        }
        .exp-singlestack-v2 .c-uhfh .theme-light.js-cat-head .c-call-to-action.c-glyph:focus span,
        .exp-singlestack-v2 .c-uhfh .theme-dark.js-cat-head .c-call-to-action.c-glyph:focus span {
            text-decoration: none !important;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action .exp-text-transform-hide {
            display: none !important;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action .exp-text-transform::first-letter {
            text-transform: capitalize;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action .exp-text-transform {
            position: relative;
            letter-spacing: 0;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action .exp-text-transform::before {
            background: currentColor;
            content: "";
            display: none;
            height: 2px;
            position: absolute;
            bottom: 12px;
            width: 100%;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action:hover .exp-text-transform::before {
            display: block;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action:after {
            display: none !important;
        }
        .exp-singlestack-v2 .js-cat-head .c-call-to-action.c-glyph:focus {
            border-color: transparent !important;
        }
    }
</style>

<header role="banner" class="c-uhfh context-uhf js" itemscope="itemscope" data-header-footprint="en-us/surface/surface-header-sitemuse" itemtype="http://schema.org/Organization">
    <div class="theme-light js-global-head f-closed " data-m="{"cN":"Universal Header_cont","cT":"Container","id":"c4c1m1r1a1","sN":4,"aN":"c1m1r1a1"}">
        <div class="c-uhfh-gcontainer">
            <button class="c-action-trigger c-glyph glyph-global-nav-button" aria-label="Header navigation menu" aria-expanded="false" data-m="{"cN":"Mobile menu button_nonnav","id":"nn1c4c1m1r1a1","sN":1,"aN":"c4c1m1r1a1"}"></button>
            <button class="c-action-trigger c-glyph glyph-arrow-htmllegacy" aria-label="Close search" aria-expanded="false" data-m="{"cN":"Close Search_nonnav","id":"nn2c4c1m1r1a1","sN":2,"aN":"c4c1m1r1a1"}"></button>
            <a data-m="{"cN":"GlobalNav_Logo_cont","cT":"Container","id":"c4c4c1m1r1a1","sN":4,"aN":"c4c1m1r1a1"}" id="uhfLogo" class="c-logo" itemprop="url" href="https://www.microsoft.com" aria-label="Microsoft" ms.title="microsoft"><img itemprop="logo" itemscope="itemscope" class="c-image" alt="Microsoft" src="https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png" role="none" ms.title="microsoft">
                <span aria-hidden="true">Microsoft</span>
            </a>
            <div class="f-mobile-title"><button class="c-action-trigger c-glyph glyph-chevron-left" aria-label="See more menu options" data-m="{"cN":"Mobile back button_nonnav","id":"nn5c4c1m1r1a1","sN":5,"aN":"c4c1m1r1a1"}"></button>
                <span data-global-title="Microsoft home" class="js-mobile-title">Surface</span><button class="c-action-trigger c-glyph glyph-chevron-right" aria-label="See more menu options" data-m="{"cN":"Mobile forward button_nonnav","id":"nn6c4c1m1r1a1","sN":6,"aN":"c4c1m1r1a1"}"></button></div>
            <button class="c-action-trigger c-glyph glyph-chevron-left js-primary-paddle" data-m="{"cN":"Previous_nonnav","id":"nn7c4c1m1r1a1","sN":7,"aN":"c4c1m1r1a1"}" aria-label="Show previous" tabindex="-1" style="display: none;"></button>
            <nav id="uhf-g-nav" class="c-uhfh-gnav" aria-labelledby="uhfLogo" role="navigation" data-m="{"cN":"Global nav_cont","cT":"Container","id":"c8c4c1m1r1a1","sN":8,"aN":"c4c1m1r1a1"}" style="display: block;">
                <ul class="js-paddle-items" role="none">
                    <li style="transition: margin 0.667s cubic-bezier(0.16, 1, 0.29, 0.99);"><a id="shellmenu_0" class="c-uhf-nav-link" href="https://products.office.com/en-us/home?v=1" data-m="{"cN":"GlobalNav_Office_nav","id":"n1c8c4c1m1r1a1","sN":1,"aN":"c8c4c1m1r1a1"}" ms.title="office">Office</a></li>
                    <li>
                        <a id="shellmenu_1" class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/" data-m="{"cN":"GlobalNav_Windows_nav","id":"n2c8c4c1m1r1a1","sN":2,"aN":"c8c4c1m1r1a1"}" ms.title="windows">Windows</a>
                    </li>
                    <li>
                        <a id="shellmenu_2" class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/surface" data-m="{"cN":"GlobalNav_Surface_nav","id":"n3c8c4c1m1r1a1","sN":3,"aN":"c8c4c1m1r1a1"}" ms.title="surface">Surface</a>
                    </li>
                    <li>
                        <a id="shellmenu_3" class="c-uhf-nav-link" href="https://www.xbox.com/en-us?v=1" data-m="{"cN":"GlobalNav_Xbox_nav","id":"n4c8c4c1m1r1a1","sN":4,"aN":"c8c4c1m1r1a1"}" ms.title="xbox">Xbox</a>
                    </li>
                    <li>
                        <a id="shellmenu_4" class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/sale?icid=gm_nav_L0_salepage" data-m="{"cN":"GlobalNav_Deals_nav","id":"n5c8c4c1m1r1a1","sN":5,"aN":"c8c4c1m1r1a1"}" ms.title="deals">Deals</a>
                    </li>
                    <li>
                        <a id="l1_support" class="c-uhf-nav-link" href="https://support.microsoft.com/en-us" data-m="{"cN":"GlobalNav_Support_nav","id":"n6c8c4c1m1r1a1","sN":6,"aN":"c8c4c1m1r1a1"}" ms.title="support">Support</a>
                    </li>
                    <li>
                        <div class="c-uhf-menu js-nav-menu"><button id="More-navigation" aria-expanded="false" aria-haspopup="true" data-m="{"cN":"GlobalNav_More_nonnav","id":"nn7c8c4c1m1r1a1","sN":7,"aN":"c8c4c1m1r1a1"}" style="white-space:nowrap">More</button>
                            <ul class="f-multi-column f-multi-column-6" aria-labelledby="More-navigation" aria-hidden="true" data-m="{"cN":"More_cont","cT":"Container","id":"c8c8c4c1m1r1a1","sN":8,"aN":"c8c4c1m1r1a1"}" role="none">
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c1c8c8c4c1m1r1a1","sN":1,"aN":"c8c8c4c1m1r1a1"}">
                                    <button id="Software-navigation" aria-expanded="true" data-m="{"id":"nn1c1c8c8c4c1m1r1a1","sN":1,"aN":"c1c8c8c4c1m1r1a1"}" tabindex="-1">Software</button>
                                    <ul aria-labelledby="Software-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_Software_WindowsApps_cont","cT":"Container","id":"c2c1c8c8c4c1m1r1a1","sN":2,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_8" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/windows-10-apps" data-m="{"cN":"GlobalNav_More_Software_WindowsApps_nav","id":"n1c2c1c8c8c4c1m1r1a1","sN":1,"aN":"c2c1c8c8c4c1m1r1a1"}" ms.title="windows apps">Windows apps</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_OneDrive_cont","cT":"Container","id":"c3c1c8c8c4c1m1r1a1","sN":3,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_9" class="js-subm-uhf-nav-link" href="https://onedrive.live.com/about/en-us/" data-m="{"cN":"GlobalNav_More_Software_OneDrive_nav","id":"n1c3c1c8c8c4c1m1r1a1","sN":1,"aN":"c3c1c8c8c4c1m1r1a1"}" ms.title="onedrive">OneDrive</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_Outlook_cont","cT":"Container","id":"c4c1c8c8c4c1m1r1a1","sN":4,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_10" class="js-subm-uhf-nav-link" href="https://outlook.live.com/owa/" data-m="{"cN":"GlobalNav_More_Software_Outlook_nav","id":"n1c4c1c8c8c4c1m1r1a1","sN":1,"aN":"c4c1c8c8c4c1m1r1a1"}" ms.title="outlook">Outlook</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_Skype_cont","cT":"Container","id":"c5c1c8c8c4c1m1r1a1","sN":5,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_11" class="js-subm-uhf-nav-link" href="https://www.skype.com/en/" data-m="{"cN":"GlobalNav_More_Software_Skype_nav","id":"n1c5c1c8c8c4c1m1r1a1","sN":1,"aN":"c5c1c8c8c4c1m1r1a1"}" ms.title="skype">Skype</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_OneNote_cont","cT":"Container","id":"c6c1c8c8c4c1m1r1a1","sN":6,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_12" class="js-subm-uhf-nav-link" href="https://www.onenote.com/" data-m="{"cN":"GlobalNav_More_Software_OneNote_nav","id":"n1c6c1c8c8c4c1m1r1a1","sN":1,"aN":"c6c1c8c8c4c1m1r1a1"}" ms.title="onenote">OneNote</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cN":"PCsAndDevices_cont","cT":"Container","id":"c2c8c8c4c1m1r1a1","sN":2,"aN":"c8c8c4c1m1r1a1"}"><button id="PCs&amp;Devices-navigation" aria-expanded="true" data-m="{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn1c2c8c8c4c1m1r1a1","sN":1,"aN":"c2c8c8c4c1m1r1a1"}" tabindex="-1">PCs &amp; Devices  </button>
                                    <ul aria-labelledby="PCs&amp;Devices-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_PCsAndDevices_PCsAndTablets_cont","cT":"Container","id":"c2c2c8c8c4c1m1r1a1","sN":2,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_14" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/devices" data-m="{"cN":"GlobalNav_More_PCsAndDevices_PCsAndTablets_nav","id":"n1c2c2c8c8c4c1m1r1a1","sN":1,"aN":"c2c2c8c8c4c1m1r1a1"}" ms.title="pcs &amp; tablets">PCs &amp; tablets</a>
                                        </li>
                                        <li data-m="{"cN":"More_PCAndDevices_Accessories_cont","cT":"Container","id":"c3c2c8c8c4c1m1r1a1","sN":3,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_15" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/accessories/en-us" data-m="{"cN":"GlobalNav_More_PCAndDevices_Accessories_nav","id":"n1c3c2c8c8c4c1m1r1a1","sN":1,"aN":"c3c2c8c8c4c1m1r1a1"}" ms.title="accessories">Accessories</a>
                                        </li>
                                        <li data-m="{"cN":"More_PCsAndDevices_VMAndMixedReality_cont","cT":"Container","id":"c4c2c8c8c4c1m1r1a1","sN":4,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_16" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/virtualreality?icid=TopNavVirtualReality" data-m="{"cN":"GlobalNav_More_PCsAndDevices_VMAndMixedReality_nav","id":"n1c4c2c8c8c4c1m1r1a1","sN":1,"aN":"c4c2c8c8c4c1m1r1a1"}" ms.title="vr &amp; mixed reality">VR &amp; mixed reality</a>
                                        </li>
                                        <li data-m="{"cN":"More_PCsAndDevices_MicrosoftHololens_cont","cT":"Container","id":"c5c2c8c8c4c1m1r1a1","sN":5,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_17" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/hololens" data-m="{"cN":"GlobalNav_More_PCsAndDevices_MicrosoftHololens_nav","id":"n1c5c2c8c8c4c1m1r1a1","sN":1,"aN":"c5c2c8c8c4c1m1r1a1"}" ms.title="microsoft hololens">Microsoft HoloLens</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c3c8c8c4c1m1r1a1","sN":3,"aN":"c8c8c4c1m1r1a1"}"><button id="Entertainment-navigation" aria-expanded="true" data-m="{"id":"nn1c3c8c8c4c1m1r1a1","sN":1,"aN":"c3c8c8c4c1m1r1a1"}" tabindex="-1">Entertainment</button>
                                    <ul aria-labelledby="Entertainment-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"Products_DevicesAndXbox_XboxAndGames_cont","cT":"Container","id":"c2c3c8c8c4c1m1r1a1","sN":2,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_19" class="js-subm-uhf-nav-link" href="https://www.xbox.com/en-us/games/xbox-one?xr=shellnav&amp;v=1" data-m="{"cN":"GlobalNav_Products_DevicesAndXbox_XboxAndGames_nav","id":"n1c2c3c8c8c4c1m1r1a1","sN":1,"aN":"c2c3c8c8c4c1m1r1a1"}" ms.title="xbox games">Xbox games</a>
                                        </li>
                                        <li data-m="{"cN":"Entertainment_PCGames_cont","cT":"Container","id":"c3c3c8c8c4c1m1r1a1","sN":3,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_20" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/windows-10-games" data-m="{"cN":"GlobalNav_Entertainment_PCGames_nav","id":"n1c3c3c8c8c4c1m1r1a1","sN":1,"aN":"c3c3c8c8c4c1m1r1a1"}" ms.title="pc games">PC games</a>
                                        </li>
                                        <li data-m="{"cN":"More_Entertainment_WindowsDigitalGames_cont","cT":"Container","id":"c4c3c8c8c4c1m1r1a1","sN":4,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_21" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/games/windows?icid=TopNavWindowsGames" data-m="{"cN":"GlobalNav_More_Entertainment_WindowsDigitalGames_nav","id":"n1c4c3c8c8c4c1m1r1a1","sN":1,"aN":"c4c3c8c8c4c1m1r1a1"}" ms.title="windows digital games">Windows digital games</a>
                                        </li>
                                        <li data-m="{"cN":"More_Entertainment_MoviesAndTV_cont","cT":"Container","id":"c5c3c8c8c4c1m1r1a1","sN":5,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_22" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/movies-and-tv?icid=TopNavMoviesAndTv" data-m="{"cN":"GlobalNav_More_Entertainment_MoviesAndTV_nav","id":"n1c5c3c8c8c4c1m1r1a1","sN":1,"aN":"c5c3c8c8c4c1m1r1a1"}" ms.title="movies &amp; tv">Movies &amp; TV</a>
                                        </li>
                                        <li data-m="{"cN":"More_Entertainment_Books_cont","cT":"Container","id":"c6c3c8c8c4c1m1r1a1","sN":6,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_23" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/books" data-m="{"cN":"GlobalNav_More_Entertainment_Books_nav","id":"n1c6c3c8c8c4c1m1r1a1","sN":1,"aN":"c6c3c8c8c4c1m1r1a1"}" ms.title="books">Books</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c4c8c8c4c1m1r1a1","sN":4,"aN":"c8c8c4c1m1r1a1"}"><button id="Business-navigation" aria-expanded="true" data-m="{"id":"nn1c4c8c8c4c1m1r1a1","sN":1,"aN":"c4c8c8c4c1m1r1a1"}" tabindex="-1">Business</button>
                                    <ul aria-labelledby="Business-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_Business_MicrosoftAzure_cont","cT":"Container","id":"c2c4c8c8c4c1m1r1a1","sN":2,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_25" class="js-subm-uhf-nav-link" href="https://azure.microsoft.com/en-us/" data-m="{"cN":"GlobalNav_More_Business_MicrosoftAzure_nav","id":"n1c2c4c8c8c4c1m1r1a1","sN":1,"aN":"c2c4c8c8c4c1m1r1a1"}" ms.title="microsoft azure">Microsoft Azure</a>
                                        </li>
                                        <li data-m="{"cN":"More_Business_MicrosoftDynamics365_cont","cT":"Container","id":"c3c4c8c8c4c1m1r1a1","sN":3,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_26" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/dynamics365/home" data-m="{"cN":"GlobalNav_More_Business_MicrosoftDynamics365_nav","id":"n1c3c4c8c8c4c1m1r1a1","sN":1,"aN":"c3c4c8c8c4c1m1r1a1"}" ms.title="microsoft dynamics 365">Microsoft Dynamics 365</a>
                                        </li>
                                        <li data-m="{"cN":"Business_Microsoft365_cont","cT":"Container","id":"c4c4c8c8c4c1m1r1a1","sN":4,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_27" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-365/?omkt=en-US" data-m="{"cN":"GlobalNav_Business_Microsoft365_nav","id":"n1c4c4c8c8c4c1m1r1a1","sN":1,"aN":"c4c4c8c8c4c1m1r1a1"}" ms.title="microsoft 365">Microsoft 365</a>
                                        </li>
                                        <li data-m="{"cN":"Products_ForBusiness_CloudPlatform_cont","cT":"Container","id":"c5c4c8c8c4c1m1r1a1","sN":5,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_28" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/server-cloud/" data-m="{"cN":"GlobalNav_Products_ForBusiness_CloudPlatform_nav","id":"n1c5c4c8c8c4c1m1r1a1","sN":1,"aN":"c5c4c8c8c4c1m1r1a1"}" ms.title="cloud platform">Cloud platform</a>
                                        </li>
                                        <li data-m="{"cN":"More_Business_Enterprise_cont","cT":"Container","id":"c6c4c8c8c4c1m1r1a1","sN":6,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_29" class="js-subm-uhf-nav-link" href="https://enterprise.microsoft.com/en-us/" data-m="{"cN":"GlobalNav_More_Business_Enterprise_nav","id":"n1c6c4c8c8c4c1m1r1a1","sN":1,"aN":"c6c4c8c8c4c1m1r1a1"}" ms.title="enterprise">Enterprise</a>
                                        </li>
                                        <li data-m="{"cN":"More_Business_DataPlatform_cont","cT":"Container","id":"c7c4c8c8c4c1m1r1a1","sN":7,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_30" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/sql-server/ " data-m="{"cN":"GlobalNav_More_Business_DataPlatform_nav","id":"n1c7c4c8c8c4c1m1r1a1","sN":1,"aN":"c7c4c8c8c4c1m1r1a1"}" ms.title="data platform">Data platform</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c5c8c8c4c1m1r1a1","sN":5,"aN":"c8c8c4c1m1r1a1"}"><button id="Developer&amp;IT-navigation" aria-expanded="true" data-m="{"id":"nn1c5c8c8c4c1m1r1a1","sN":1,"aN":"c5c8c8c4c1m1r1a1"}" tabindex="-1">Developer &amp; IT  </button>
                                    <ul aria-labelledby="Developer&amp;IT-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_DeveloperAndIT_.Net_cont","cT":"Container","id":"c2c5c8c8c4c1m1r1a1","sN":2,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_32" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/net/" data-m="{"cN":"GlobalNav_More_DeveloperAndIT_.Net_nav","id":"n1c2c5c8c8c4c1m1r1a1","sN":1,"aN":"c2c5c8c8c4c1m1r1a1"}" ms.title=".net">.NET</a>
                                        </li>
                                        <li data-m="{"cN":"More_DevelopersAndIT_VisualStudio_cont","cT":"Container","id":"c3c5c8c8c4c1m1r1a1","sN":3,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_33" class="js-subm-uhf-nav-link" href="https://www.visualstudio.com/" data-m="{"cN":"GlobalNav_More_DevelopersAndIT_VisualStudio_nav","id":"n1c3c5c8c8c4c1m1r1a1","sN":1,"aN":"c3c5c8c8c4c1m1r1a1"}" ms.title="visual studio">Visual Studio</a>
                                        </li>
                                        <li data-m="{"cN":"More_DeveloperAndIT_WindowsDevCenter_cont","cT":"Container","id":"c4c5c8c8c4c1m1r1a1","sN":4,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_34" class="js-subm-uhf-nav-link" href="https://developer.microsoft.com/en-us/windows" data-m="{"cN":"GlobalNav_More_DeveloperAndIT_WindowsDevCenter_nav","id":"n1c4c5c8c8c4c1m1r1a1","sN":1,"aN":"c4c5c8c8c4c1m1r1a1"}" ms.title="windows dev center">Windows Dev Center</a>
                                        </li>
                                        <li data-m="{"cN":"More_DeveloperAndIT_Docs.microsoft.com_cont","cT":"Container","id":"c5c5c8c8c4c1m1r1a1","sN":5,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_35" class="js-subm-uhf-nav-link" href="https://docs.microsoft.com/en-us/" data-m="{"cN":"GlobalNav_More_DeveloperAndIT_Docs.microsoft.com_nav","id":"n1c5c5c8c8c4c1m1r1a1","sN":1,"aN":"c5c5c8c8c4c1m1r1a1"}" ms.title="docs">Docs</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c6c8c8c4c1m1r1a1","sN":6,"aN":"c8c8c4c1m1r1a1"}"><button id="Other-navigation" aria-expanded="true" data-m="{"id":"nn1c6c8c8c4c1m1r1a1","sN":1,"aN":"c6c8c8c4c1m1r1a1"}" tabindex="-1">Other</button>
                                    <ul aria-labelledby="Other-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"Other_MicrosoftStore_cont","cT":"Container","id":"c2c6c8c8c4c1m1r1a1","sN":2,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_37" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/home" data-m="{"cN":"GlobalNav_Other_MicrosoftStore_nav","id":"n1c2c6c8c8c4c1m1r1a1","sN":1,"aN":"c2c6c8c8c4c1m1r1a1"}" ms.title="microsoft store">Microsoft Store</a>
                                        </li>
                                        <li data-m="{"cN":"Products_SoftwareAndServices_FreeDownloadsAndSecurity_cont","cT":"Container","id":"c3c6c8c8c4c1m1r1a1","sN":3,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_38" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/download/default.aspx" data-m="{"cN":"GlobalNav_Products_SoftwareAndServices_FreeDownloadsAndSecurity_nav","id":"n1c3c6c8c8c4c1m1r1a1","sN":1,"aN":"c3c6c8c8c4c1m1r1a1"}" ms.title="free downloads &amp; security">Free downloads &amp; security</a>
                                        </li>
                                        <li data-m="{"cN":"Products_ForStudentsAndEducators_Education_cont","cT":"Container","id":"c4c6c8c8c4c1m1r1a1","sN":4,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_39" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/education" data-m="{"cN":"GlobalNav_Products_ForStudentsAndEducators_Education_nav","id":"n1c4c6c8c8c4c1m1r1a1","sN":1,"aN":"c4c6c8c8c4c1m1r1a1"}" ms.title="education">Education</a>
                                        </li>
                                        <li data-m="{"cN":"More_Other_Store_Locations_cont","cT":"Container","id":"c5c6c8c8c4c1m1r1a1","sN":5,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_40" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/locations/find-a-store?icid=TopNavStoreLocations" data-m="{"cN":"GlobalNav_More_Other_Store_Locations_nav","id":"n1c5c6c8c8c4c1m1r1a1","sN":1,"aN":"c5c6c8c8c4c1m1r1a1"}" ms.title="store locations" ms.ea_name="buy intent" ms.ea_action="locate">Store locations</a>
                                        </li>
                                        <li data-m="{"cN":"Store_More_GiftCards_cont","cT":"Container","id":"c6c6c8c8c4c1m1r1a1","sN":6,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_41" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/gift-cards" data-m="{"cN":"GlobalNav_Store_More_GiftCards_nav","id":"n1c6c6c8c8c4c1m1r1a1","sN":1,"aN":"c6c6c8c8c4c1m1r1a1"}" ms.title="gift cards">Gift cards</a>
                                        </li>
                                        <li data-m="{"cN":"More_Other_HolidayGiftGuide_cont","cT":"Container","id":"c7c6c8c8c4c1m1r1a1","sN":7,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a id="shellmenu_42" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/holiday-gift-guide?icid=gm_fy18_hol_gg_uhf_L0_other" data-m="{"cN":"GlobalNav_More_Other_HolidayGiftGuide_nav","id":"n1c7c6c8c8c4c1m1r1a1","sN":1,"aN":"c7c6c8c8c4c1m1r1a1"}" ms.title="holiday gift guide">Holiday gift guide</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-multi-column-info"><a data-m="{"cN":"View all_nav","id":"n7c8c8c4c1m1r1a1","sN":7,"aN":"c8c8c4c1m1r1a1"}" href="https://www.microsoft.com/en-us/sitemap.aspx" aria-label="View all" class="c-glyph" ms.title="view all">View all</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <button class="c-action-trigger c-glyph glyph-chevron-right js-secondary-paddle" data-m="{"cN":"Next_nonnav","id":"nn9c4c1m1r1a1","sN":9,"aN":"c4c1m1r1a1"}" aria-label="Show next" tabindex="-1" style="display: none;"></button>
            <div class="c-uhfh-actions" data-m="{"cN":"Header actions_cont","cT":"Container","id":"c10c4c1m1r1a1","sN":10,"aN":"c4c1m1r1a1"}">
                <a href="javascript:void(0);" class="exp-menu-trigger" aria-expanded="false" ms.title="menuofficewindowssurfacexboxdealssupportsof">
                    <span class="exp-menu-pad">
                        <span class="exp-1"></span>
                        <span class="exp-2"></span>
                        <span class="exp-3"></span>
                        <span class="exp-4"></span>
                        <span class="exp-5"></span>
                        <span class="exp-6"></span>
                        <span class="exp-7"></span>
                        <span class="exp-8"></span>
                        <span class="exp-9"></span>
                    </span>
                    <span class="exp-menu-label">Menu</span>
                    <div class="exp-uhf-singlestack" aria-hidden="true">
                        <button class="uhf-cancel c-glyph glyph-cancel"></button>
                        <div class="exp-uhf-g-nav">
                            <ul class="js-paddle-items" role="none">
                                <li><a class="c-uhf-nav-link" href="https://products.office.com/en-us/home?v=1" data-m="{"cN":"GlobalNav_Office_nav","id":"n1c8c4c1m1r1a1","sN":1,"aN":"c8c4c1m1r1a1"}" ms.title="office">Office</a></li>
                                <li><a class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/" data-m="{"cN":"GlobalNav_Windows_nav","id":"n2c8c4c1m1r1a1","sN":2,"aN":"c8c4c1m1r1a1"}" ms.title="windows">Windows</a></li>
                                <li><a class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/surface" data-m="{"cN":"GlobalNav_Surface_nav","id":"n3c8c4c1m1r1a1","sN":3,"aN":"c8c4c1m1r1a1"}" ms.title="surface">Surface</a></li>
                                <li><a class="c-uhf-nav-link" href="https://www.xbox.com/en-us?v=1" data-m="{"cN":"GlobalNav_Xbox_nav","id":"n4c8c4c1m1r1a1","sN":4,"aN":"c8c4c1m1r1a1"}" ms.title="xbox">Xbox</a></li>
                                <li><a class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/sale?icid=gm_nav_L0_salepage" data-m="{"cN":"GlobalNav_Deals_nav","id":"n5c8c4c1m1r1a1","sN":5,"aN":"c8c4c1m1r1a1"}" ms.title="deals">Deals</a></li>
                                <li><a class="c-uhf-nav-link" href="https://support.microsoft.com/en-us" data-m="{"cN":"GlobalNav_Support_nav","id":"n6c8c4c1m1r1a1","sN":6,"aN":"c8c4c1m1r1a1"}" ms.title="support">Support</a></li>
                            </ul>
                        </div>
                        <div class="exp-uhf-hr"></div>
                        <div class="exp-more-flyout">
                            <ul class="f-multi-column f-multi-column-6" aria-labelledby="More-navigation" aria-hidden="true" data-m="{"cN":"More_cont","cT":"Container","id":"c8c8c4c1m1r1a1","sN":8,"aN":"c8c4c1m1r1a1"}" role="none" style="height: 2px;">
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c1c8c8c4c1m1r1a1","sN":1,"aN":"c8c8c4c1m1r1a1"}"><button aria-expanded="true" data-m="{"id":"nn1c1c8c8c4c1m1r1a1","sN":1,"aN":"c1c8c8c4c1m1r1a1"}" tabindex="-1">Software</button>
                                    <ul aria-labelledby="Software-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_Software_WindowsApps_cont","cT":"Container","id":"c2c1c8c8c4c1m1r1a1","sN":2,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/windows-10-apps" data-m="{"cN":"GlobalNav_More_Software_WindowsApps_nav","id":"n1c2c1c8c8c4c1m1r1a1","sN":1,"aN":"c2c1c8c8c4c1m1r1a1"}" ms.title="windows apps">Windows apps</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_OneDrive_cont","cT":"Container","id":"c3c1c8c8c4c1m1r1a1","sN":3,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://onedrive.live.com/about/en-us/" data-m="{"cN":"GlobalNav_More_Software_OneDrive_nav","id":"n1c3c1c8c8c4c1m1r1a1","sN":1,"aN":"c3c1c8c8c4c1m1r1a1"}" ms.title="onedrive">OneDrive</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_Outlook_cont","cT":"Container","id":"c4c1c8c8c4c1m1r1a1","sN":4,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://outlook.live.com/owa/" data-m="{"cN":"GlobalNav_More_Software_Outlook_nav","id":"n1c4c1c8c8c4c1m1r1a1","sN":1,"aN":"c4c1c8c8c4c1m1r1a1"}" ms.title="outlook">Outlook</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_Skype_cont","cT":"Container","id":"c5c1c8c8c4c1m1r1a1","sN":5,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.skype.com/en/" data-m="{"cN":"GlobalNav_More_Software_Skype_nav","id":"n1c5c1c8c8c4c1m1r1a1","sN":1,"aN":"c5c1c8c8c4c1m1r1a1"}" ms.title="skype">Skype</a>
                                        </li>
                                        <li data-m="{"cN":"More_Software_OneNote_cont","cT":"Container","id":"c6c1c8c8c4c1m1r1a1","sN":6,"aN":"c1c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.onenote.com/" data-m="{"cN":"GlobalNav_More_Software_OneNote_nav","id":"n1c6c1c8c8c4c1m1r1a1","sN":1,"aN":"c6c1c8c8c4c1m1r1a1"}" ms.title="onenote">OneNote</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cN":"PCsAndDevices_cont","cT":"Container","id":"c2c8c8c4c1m1r1a1","sN":2,"aN":"c8c8c4c1m1r1a1"}">
                                    <button aria-expanded="true" data-m="{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn1c2c8c8c4c1m1r1a1","sN":1,"aN":"c2c8c8c4c1m1r1a1"}" tabindex="-1">PCs &amp; Devices  </button>
                                    <ul aria-labelledby="PCs&amp;Devices-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_PCsAndDevices_PCsAndTablets_cont","cT":"Container","id":"c2c2c8c8c4c1m1r1a1","sN":2,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/devices" data-m="{"cN":"GlobalNav_More_PCsAndDevices_PCsAndTablets_nav","id":"n1c2c2c8c8c4c1m1r1a1","sN":1,"aN":"c2c2c8c8c4c1m1r1a1"}" ms.title="pcs &amp; tablets">PCs &amp; tablets</a>
                                        </li>
                                        <li data-m="{"cN":"More_PCAndDevices_Accessories_cont","cT":"Container","id":"c3c2c8c8c4c1m1r1a1","sN":3,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/accessories/en-us" data-m="{"cN":"GlobalNav_More_PCAndDevices_Accessories_nav","id":"n1c3c2c8c8c4c1m1r1a1","sN":1,"aN":"c3c2c8c8c4c1m1r1a1"}" ms.title="accessories">Accessories</a>
                                        </li>
                                        <li data-m="{"cN":"More_PCsAndDevices_VMAndMixedReality_cont","cT":"Container","id":"c4c2c8c8c4c1m1r1a1","sN":4,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/virtualreality?icid=TopNavVirtualReality" data-m="{"cN":"GlobalNav_More_PCsAndDevices_VMAndMixedReality_nav","id":"n1c4c2c8c8c4c1m1r1a1","sN":1,"aN":"c4c2c8c8c4c1m1r1a1"}" ms.title="vr &amp; mixed reality">VR &amp; mixed reality</a>
                                        </li>
                                        <li data-m="{"cN":"More_PCsAndDevices_MicrosoftHololens_cont","cT":"Container","id":"c5c2c8c8c4c1m1r1a1","sN":5,"aN":"c2c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/hololens" data-m="{"cN":"GlobalNav_More_PCsAndDevices_MicrosoftHololens_nav","id":"n1c5c2c8c8c4c1m1r1a1","sN":1,"aN":"c5c2c8c8c4c1m1r1a1"}" ms.title="microsoft hololens">Microsoft HoloLens</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c3c8c8c4c1m1r1a1","sN":3,"aN":"c8c8c4c1m1r1a1"}"><button aria-expanded="true" data-m="{"id":"nn1c3c8c8c4c1m1r1a1","sN":1,"aN":"c3c8c8c4c1m1r1a1"}" tabindex="-1">Entertainment</button>
                                    <ul aria-labelledby="Entertainment-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"Products_DevicesAndXbox_XboxAndGames_cont","cT":"Container","id":"c2c3c8c8c4c1m1r1a1","sN":2,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.xbox.com/en-us/games/xbox-one?xr=shellnav&amp;v=1" data-m="{"cN":"GlobalNav_Products_DevicesAndXbox_XboxAndGames_nav","id":"n1c2c3c8c8c4c1m1r1a1","sN":1,"aN":"c2c3c8c8c4c1m1r1a1"}" ms.title="xbox games">Xbox games</a>
                                        </li>
                                        <li data-m="{"cN":"Entertainment_PCGames_cont","cT":"Container","id":"c3c3c8c8c4c1m1r1a1","sN":3,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/windows-10-games" data-m="{"cN":"GlobalNav_Entertainment_PCGames_nav","id":"n1c3c3c8c8c4c1m1r1a1","sN":1,"aN":"c3c3c8c8c4c1m1r1a1"}" ms.title="pc games">PC games</a>
                                        </li>
                                        <li data-m="{"cN":"More_Entertainment_WindowsDigitalGames_cont","cT":"Container","id":"c4c3c8c8c4c1m1r1a1","sN":4,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/games/windows?icid=TopNavWindowsGames" data-m="{"cN":"GlobalNav_More_Entertainment_WindowsDigitalGames_nav","id":"n1c4c3c8c8c4c1m1r1a1","sN":1,"aN":"c4c3c8c8c4c1m1r1a1"}" ms.title="windows digital games">Windows digital games</a>
                                        </li>
                                        <li data-m="{"cN":"More_Entertainment_MoviesAndTV_cont","cT":"Container","id":"c5c3c8c8c4c1m1r1a1","sN":5,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/movies-and-tv?icid=TopNavMoviesAndTv" data-m="{"cN":"GlobalNav_More_Entertainment_MoviesAndTV_nav","id":"n1c5c3c8c8c4c1m1r1a1","sN":1,"aN":"c5c3c8c8c4c1m1r1a1"}" ms.title="movies &amp; tv">Movies &amp; TV</a>
                                        </li>
                                        <li data-m="{"cN":"More_Entertainment_Books_cont","cT":"Container","id":"c6c3c8c8c4c1m1r1a1","sN":6,"aN":"c3c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/books" data-m="{"cN":"GlobalNav_More_Entertainment_Books_nav","id":"n1c6c3c8c8c4c1m1r1a1","sN":1,"aN":"c6c3c8c8c4c1m1r1a1"}" ms.title="books">Books</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c4c8c8c4c1m1r1a1","sN":4,"aN":"c8c8c4c1m1r1a1"}"><button aria-expanded="true" data-m="{"id":"nn1c4c8c8c4c1m1r1a1","sN":1,"aN":"c4c8c8c4c1m1r1a1"}" tabindex="-1">Business</button>
                                    <ul aria-labelledby="Business-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_Business_MicrosoftAzure_cont","cT":"Container","id":"c2c4c8c8c4c1m1r1a1","sN":2,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://azure.microsoft.com/en-us/" data-m="{"cN":"GlobalNav_More_Business_MicrosoftAzure_nav","id":"n1c2c4c8c8c4c1m1r1a1","sN":1,"aN":"c2c4c8c8c4c1m1r1a1"}" ms.title="microsoft azure">Microsoft Azure</a>
                                        </li>
                                        <li data-m="{"cN":"More_Business_MicrosoftDynamics365_cont","cT":"Container","id":"c3c4c8c8c4c1m1r1a1","sN":3,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/dynamics365/home" data-m="{"cN":"GlobalNav_More_Business_MicrosoftDynamics365_nav","id":"n1c3c4c8c8c4c1m1r1a1","sN":1,"aN":"c3c4c8c8c4c1m1r1a1"}" ms.title="microsoft dynamics 365">Microsoft Dynamics 365</a>
                                        </li>
                                        <li data-m="{"cN":"Business_Microsoft365_cont","cT":"Container","id":"c4c4c8c8c4c1m1r1a1","sN":4,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-365/?omkt=en-US" data-m="{"cN":"GlobalNav_Business_Microsoft365_nav","id":"n1c4c4c8c8c4c1m1r1a1","sN":1,"aN":"c4c4c8c8c4c1m1r1a1"}" ms.title="microsoft 365">Microsoft 365</a>
                                        </li>
                                        <li data-m="{"cN":"Products_ForBusiness_CloudPlatform_cont","cT":"Container","id":"c5c4c8c8c4c1m1r1a1","sN":5,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/server-cloud/" data-m="{"cN":"GlobalNav_Products_ForBusiness_CloudPlatform_nav","id":"n1c5c4c8c8c4c1m1r1a1","sN":1,"aN":"c5c4c8c8c4c1m1r1a1"}" ms.title="cloud platform">Cloud platform</a>
                                        </li>
                                        <li data-m="{"cN":"More_Business_Enterprise_cont","cT":"Container","id":"c6c4c8c8c4c1m1r1a1","sN":6,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://enterprise.microsoft.com/en-us/" data-m="{"cN":"GlobalNav_More_Business_Enterprise_nav","id":"n1c6c4c8c8c4c1m1r1a1","sN":1,"aN":"c6c4c8c8c4c1m1r1a1"}" ms.title="enterprise">Enterprise</a>
                                        </li>
                                        <li data-m="{"cN":"More_Business_DataPlatform_cont","cT":"Container","id":"c7c4c8c8c4c1m1r1a1","sN":7,"aN":"c4c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/sql-server/ " data-m="{"cN":"GlobalNav_More_Business_DataPlatform_nav","id":"n1c7c4c8c8c4c1m1r1a1","sN":1,"aN":"c7c4c8c8c4c1m1r1a1"}" ms.title="data platform">Data platform</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c5c8c8c4c1m1r1a1","sN":5,"aN":"c8c8c4c1m1r1a1"}"><button aria-expanded="true" data-m="{"id":"nn1c5c8c8c4c1m1r1a1","sN":1,"aN":"c5c8c8c4c1m1r1a1"}" tabindex="-1">Developer &amp; IT  </button>
                                    <ul aria-labelledby="Developer&amp;IT-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"More_DeveloperAndIT_.Net_cont","cT":"Container","id":"c2c5c8c8c4c1m1r1a1","sN":2,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/net/" data-m="{"cN":"GlobalNav_More_DeveloperAndIT_.Net_nav","id":"n1c2c5c8c8c4c1m1r1a1","sN":1,"aN":"c2c5c8c8c4c1m1r1a1"}" ms.title=".net">.NET</a>
                                        </li>
                                        <li data-m="{"cN":"More_DevelopersAndIT_VisualStudio_cont","cT":"Container","id":"c3c5c8c8c4c1m1r1a1","sN":3,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.visualstudio.com/" data-m="{"cN":"GlobalNav_More_DevelopersAndIT_VisualStudio_nav","id":"n1c3c5c8c8c4c1m1r1a1","sN":1,"aN":"c3c5c8c8c4c1m1r1a1"}" ms.title="visual studio">Visual Studio</a>
                                        </li>
                                        <li data-m="{"cN":"More_DeveloperAndIT_WindowsDevCenter_cont","cT":"Container","id":"c4c5c8c8c4c1m1r1a1","sN":4,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://developer.microsoft.com/en-us/windows" data-m="{"cN":"GlobalNav_More_DeveloperAndIT_WindowsDevCenter_nav","id":"n1c4c5c8c8c4c1m1r1a1","sN":1,"aN":"c4c5c8c8c4c1m1r1a1"}" ms.title="windows dev center">Windows Dev Center</a>
                                        </li>
                                        <li data-m="{"cN":"More_DeveloperAndIT_Docs.microsoft.com_cont","cT":"Container","id":"c5c5c8c8c4c1m1r1a1","sN":5,"aN":"c5c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://docs.microsoft.com/en-us/" data-m="{"cN":"GlobalNav_More_DeveloperAndIT_Docs.microsoft.com_nav","id":"n1c5c5c8c8c4c1m1r1a1","sN":1,"aN":"c5c5c8c8c4c1m1r1a1"}" ms.title="docs">Docs</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-sub-menu js-nav-menu" data-m="{"cT":"Container","id":"c6c8c8c4c1m1r1a1","sN":6,"aN":"c8c8c4c1m1r1a1"}"><button aria-expanded="true" data-m="{"id":"nn1c6c8c8c4c1m1r1a1","sN":1,"aN":"c6c8c8c4c1m1r1a1"}" tabindex="-1">Other</button>
                                    <ul aria-labelledby="Other-navigation" aria-hidden="false" role="none">
                                        <li data-m="{"cN":"Other_MicrosoftStore_cont","cT":"Container","id":"c2c6c8c8c4c1m1r1a1","sN":2,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/home" data-m="{"cN":"GlobalNav_Other_MicrosoftStore_nav","id":"n1c2c6c8c8c4c1m1r1a1","sN":1,"aN":"c2c6c8c8c4c1m1r1a1"}" ms.title="microsoft store">Microsoft Store</a>
                                        </li>
                                        <li data-m="{"cN":"Products_SoftwareAndServices_FreeDownloadsAndSecurity_cont","cT":"Container","id":"c3c6c8c8c4c1m1r1a1","sN":3,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/download/default.aspx" data-m="{"cN":"GlobalNav_Products_SoftwareAndServices_FreeDownloadsAndSecurity_nav","id":"n1c3c6c8c8c4c1m1r1a1","sN":1,"aN":"c3c6c8c8c4c1m1r1a1"}" ms.title="free downloads &amp; security">Free downloads &amp; security</a>
                                        </li>
                                        <li data-m="{"cN":"Products_ForStudentsAndEducators_Education_cont","cT":"Container","id":"c4c6c8c8c4c1m1r1a1","sN":4,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/education" data-m="{"cN":"GlobalNav_Products_ForStudentsAndEducators_Education_nav","id":"n1c4c6c8c8c4c1m1r1a1","sN":1,"aN":"c4c6c8c8c4c1m1r1a1"}" ms.title="education">Education</a>
                                        </li>
                                        <li data-m="{"cN":"More_Other_Store_Locations_cont","cT":"Container","id":"c5c6c8c8c4c1m1r1a1","sN":5,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/locations/find-a-store?icid=TopNavStoreLocations" data-m="{"cN":"GlobalNav_More_Other_Store_Locations_nav","id":"n1c5c6c8c8c4c1m1r1a1","sN":1,"aN":"c5c6c8c8c4c1m1r1a1"}" ms.title="store locations" ms.ea_name="buy intent" ms.ea_action="locate">Store locations</a>
                                        </li>
                                        <li data-m="{"cN":"Store_More_GiftCards_cont","cT":"Container","id":"c6c6c8c8c4c1m1r1a1","sN":6,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/gift-cards" data-m="{"cN":"GlobalNav_Store_More_GiftCards_nav","id":"n1c6c6c8c8c4c1m1r1a1","sN":1,"aN":"c6c6c8c8c4c1m1r1a1"}" ms.title="gift cards">Gift cards</a>
                                        </li>
                                        <li data-m="{"cN":"More_Other_HolidayGiftGuide_cont","cT":"Container","id":"c7c6c8c8c4c1m1r1a1","sN":7,"aN":"c6c8c8c4c1m1r1a1"}">
                                            <a class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/holiday-gift-guide?icid=gm_fy18_hol_gg_uhf_L0_other" data-m="{"cN":"GlobalNav_More_Other_HolidayGiftGuide_nav","id":"n1c7c6c8c8c4c1m1r1a1","sN":1,"aN":"c7c6c8c8c4c1m1r1a1"}" ms.title="holiday gift guide">Holiday gift guide</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="f-multi-column-info">
                                    <a data-m="{"cN":"View all_nav","id":"n7c8c8c4c1m1r1a1","sN":7,"aN":"c8c8c4c1m1r1a1"}" href="https://www.microsoft.com/en-us/sitemap.aspx" aria-label="View all" class="c-glyph" ms.title="view all">View all</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <form class="c-search" autocomplete="off" id="searchForm" name="searchForm" role="search" action="https://www.microsoft.com/en-us/search/result.aspx" method="GET" data-seautosuggest="{"queryParams":{"market":"en-us","clientId":"7F27B536-CF6B-4C65-8638-A0F8CBDFCA65","sources":"Microsoft-Terms,Iris-Products,DCatAll-Products","counts":"5,1,5"},"familyNames":{"Apps":"App","Books":"Book","Bundles":"Bundle","Devices":"Device","Fees":"Fee","Games":"Game","MusicAlbums":"Album","MusicTracks":"Song","MusicVideos":"Video","MusicArtists":"Artist","OperatingSystem":"Operating System","Software":"Software","Movies":"Movie","TV":"TV","CSV":"Gift Card","VideoActor":"Actor"}}" data-seautosuggestapi="https://www.microsoft.com/services/api/v3/suggest" data-m="{"cN":"GlobalNav_Search_cont","cT":"Container","id":"c1c10c4c1m1r1a1","sN":1,"aN":"c10c4c1m1r1a1"}" aria-expanded="false"><input data-m="{"cN":"SearchBox_nav","id":"n2c1c10c4c1m1r1a1","sN":2,"aN":"c1c10c4c1m1r1a1"}" id="cli_shellHeaderSearchInput" aria-label="Search Microsoft.com" role="combobox" aria-autocomplete="list" aria-controls="universal-header-search-auto-suggest-transparent" aria-owns="universal-header-search-auto-suggest-ul" type="search" name="q" placeholder="Search Microsoft.com">
                    <div class="x-screen-reader" aria-live="assertive"></div><button id="search" aria-label="Search" class="c-glyph" data-m="{"cN":"Search_nav","id":"n3c1c10c4c1m1r1a1","sN":3,"aN":"c1c10c4c1m1r1a1"}" data-bi-dnt="true"></button>
                    <div class="m-auto-suggest" id="universal-header-search-auto-suggest-transparent" role="group">
                        <ul class="c-menu" id="universal-header-search-auto-suggest-ul" aria-hidden="true" data-bi-dnt="true" data-js-auto-suggest-position="default" role="listbox" data-tel="jsll" data-m="{"cN":"search suggestions_cont","cT":"Container","id":"c4c1c10c4c1m1r1a1","sN":4,"aN":"c1c10c4c1m1r1a1"}"></ul>
                        <ul class="c-menu f-auto-suggest-no-results" aria-hidden="true" data-js-auto-suggest-postion="default" data-js-auto-suggest-position="default" tabindex="0">
                            <li class="c-menu-item"><span tabindex="-1">No results</span></li>
                        </ul>
                    </div>
                </form>
                <a id="uhf-shopping-cart" aria-label="0 items in shopping cart" class="c-action-trigger c-glyph glyph-shopping-cart" href="https://www.microsoft.com/en-us/store/buy" data-m="{"cN":"GlobalNav_Cart_nav","bhvr":82,"id":"n2c10c4c1m1r1a1","sN":2,"aN":"c10c4c1m1r1a1"}" ms.title="0">
                    <span class="shopping-cart-amount x-hidden" aria-hidden="true">0</span>
                    <span class="shopping-cart-text">Cart</span>
                </a>
                <iframe id="shell-cart-count" data-src="//www.microsoft.com/store/buy/cartcount" style="display: none"src="//www.microsoft.com/store/buy/cartcount"></iframe>
                <div id="meControl" class="c-me" data-signinsettings="{"containerId":"meControl","enabled":true,"headerHeight":48,"debug":false,"extensibleLinks":[],"userData":{"idp":"msa","firstName":"","lastName":"","memberName":"","cid":"","authenticatedState":"3"},"rpData":{"preferredIdp":"msa","msaInfo":{"signInUrl":"","signOutUrl":"","meUrl":"https://login.live.com/me.srf?wa=wsignin1.0"},"aadInfo":{"signOutUrl":"","appId":null,"siteUrl":null,"blockMsaFed":true}}}" data-m="{"cN":"GlobalNav_Account_cont","cT":"Container","id":"c3c10c4c1m1r1a1","sN":3,"aN":"c10c4c1m1r1a1"}">
                    <div class="msame_Header" role="button" tabindex="0" aria-label="Your account" aria-expanded="false" aria-haspopup="true" data-mc-m="{"id":"headerClick","aN":"Me Control Header","cT":"Button"}" "=" style="height: 48px;">
                        <span class="msame_screen_reader">Your account</span>
                        <div aria-hidden="true">
                            <div class="msame_Header_name msame_TxtTrunc " style="line-height: 48px; display: block;">R</div>
                            <div class="msame_Header_pic">
                                <div class="msame_Header_piccont " style="padding-top: 6px; padding-bottom: 6px;">
                                    <div class="msame_Header_picframe" style="height: 36px; width: 36px;">
                                        <img role="presentation " src="https://mem.gfx.ms/me/MeControl/9.1.17346.1/msa_enabled.png" style="height: 36px; width: 36px;">
                                    </div>
                                </div>
                            </div>
                            <div class="msame_Header_chev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="theme-light js-cat-head " itemprop="brand" itemscope="itemscope" itemtype="http://schema.org/Brand" data-m="{"cN":"UHF category nav_cont","cT":"Container","id": "c5c1m1r1a1","sN":5,"aN":"c1m1r1a1"}" style="margin-left: 267.5px;">
        <div>
            <a id="uhfCatLogo" class="c-logo x-hidden-focus" href="https://www.microsoft.com/en-us/surface" aria-label="Surface " itemprop="url" data-m="{"cN":"Surface_nav","id":"n1c5c1m1r1a1","sN":1,"aN":"c5c1m1r1a1"}" ms.title="surface"><span class="x-hidden-focus">Surface</span></a><a id="buy-now" class="c-call-to-action c-glyph exp-transformed" aria-label="Shop now at the Microsoft Store " data-m="{"cN":"SHOP NOW","id":"n2c5c1m1r1a1","sN":2,"aN":"c5c1m1r1a1"}" href="https://www.microsoftstore.com/store/msusa/en_US/cat/All-Surface/categoryID.69403400" data-bi-prtnm="ms store " data-bi-type="referral " data-bi-bhvr="PARTNERREFERRAL" ms.title="shop now" ms.link_type="ms store" ms.prod="cid69403400" ms.ea_name="buy " style="display: block;"><span class="exp-text-transform-hide">SHOP NOW</span><span class="exp-text-transform">shop now</span></a><button class="c-action-trigger c-glyph glyph-chevron-left js-primary-paddle" aria-label="Scroll left " title="Scroll left " data-m="{"cN":"Previous_nonnav","id": "nn3c5c1m1r1a1","sN":3,"aN":"c5c1m1r1a1"}" tabindex="-1 " style="display: none;"></button><button class="c-action-trigger c-glyph glyph-chevron-right js-secondary-paddle" aria-label="Scroll right " title="Scroll right " data-m="{"cN":"Next_nonnav","id": "nn4c5c1m1r1a1","sN":4,"aN":"c5c1m1r1a1"}" tabindex="-1 " style="display: block;"></button>
            <nav id="uhf-c-nav " role="navigation" aria-labelledby="uhfCatLogo" class="js-paddle-items"><a id="mobileHomeLink" class="c-uhf-nav-link x-uhf-zero-width" href="https://www.microsoft.com/en-us/surface " data-m="{ " id": "n5c5c1m1r1a1","sN":5,"aN":"c5c1m1r1a1"}" ms.title="home " style="transition: margin 0.667s cubic-bezier(0.16, 1, 0.29, 0.99); margin-left: 0px;">Home</a>
                <div class="c-uhf-menu js-nav-menu " role="none"><button id="shellmenu_43" aria-expanded="false" aria-haspopup="true " data-m="{"cN":"CatNav_Home_nonnav","id":"nn6c5c1m1r1a1","sN":6,"aN":"c5c1m1r1a1"}">Devices</button>
                    <ul class="" aria-labelledby="shellmenu_43" aria-hidden="true " data-m="{"cN":"Home_cont","cT":"Container","id":"c7c5c1m1r1a1","sN":7,"aN":"c5c1m1r1a1"}" role="none">
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"Surface Pro_cont","cT":"Container","id":"c1c7c5c1m1r1a1","sN":1,"aN":"c7c5c1m1r1a1"}"><button id="NEWSurfacePro-navigation" aria-expanded="false " data-m="{"cN":"CatNav_Surface Pro_nonnav","id":"nn1c1c7c5c1m1r1a1","sN":1,"aN":"c1c7c5c1m1r1a1"}">NEW Surface Pro</button>
                            <ul aria-labelledby="NEWSurfacePro-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN":"Overview_cont","cT":"Container","id":"c2c1c7c5c1m1r1a1","sN":2,"aN":"c1c7c5c1m1r1a1"}">
                                    <a id="shellmenu_45" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro/overview" data-m="{"cN":"CatNav_Overview_nav","id":"n1c2c1c7c5c1m1r1a1","sN":1,"aN":"c2c1c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Tech Specs_cont","cT":"Container","id":"c3c1c7c5c1m1r1a1","sN":3,"aN":"c1c7c5c1m1r1a1"}">
                                    <a id="shellmenu_46" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro/tech-specs " data-m="{"cN":"CatNav_Tech Specs_nav","id":"n1c3c1c7c5c1m1r1a1","sN":1, "aN": "c3c1c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"Forbusiness_cont","cT":"Container","id":"c4c1c7c5c1m1r1a1","sN":4,"aN":"c1c7c5c1m1r1a1"}">
                                    <a id="shellmenu_47" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro/for-business" data-m="{"cN":"CatNav_Forbusiness_nav","id":"n1c4c1c7c5c1m1r1a1","sN":1,"aN":"c4c1c7c5c1m1r1a1"}" ms.title="for business">For business</a>
                                </li>
                                <li data-m="{"cN":"Support_cont","cT":"Container","id":"c5c1c7c5c1m1r1a1","sN":5,"aN":"c1c7c5c1m1r1a1"}">
                                    <a id="shellmenu_48" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface/en-us/support " data-m="{"cN":"CatNav_Support_nav","id":"n1c5c1c7c5c1m1r1a1","sN":1,"aN":"c5c1c7c5c1m1r1a1"}" ms.title="support">Support</a>
                                </li>
                            </ul>
                        </li>
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"Surface Laptop_cont","cT":"Container","id":"c2c7c5c1m1r1a1","sN":2,"aN":"c7c5c1m1r1a1"}"><button id="SurfaceLaptop-navigation" aria-expanded="false " data-m="{"cN":"CatNav_Surface Laptop_nonnav","id":"nn1c2c7c5c1m1r1a1","sN":1,"aN":"c2c7c5c1m1r1a1"}">Surface Laptop</button>
                            <ul aria-labelledby="SurfaceLaptop-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN":"Overview_cont","cT":"Container","id":"c2c2c7c5c1m1r1a1","sN":2,"aN":"c2c7c5c1m1r1a1"}">
                                    <a id="shellmenu_50" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-laptop/overview " data-m="{"cN":"CatNav_Overview_nav","id":"n1c2c2c7c5c1m1r1a1","sN":1,"aN":"c2c2c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Innovation_cont","cT":"Container","id":"c3c2c7c5c1m1r1a1","sN":3,"aN":"c2c7c5c1m1r1a1"}">
                                    <a id="shellmenu_51" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-laptop/innovation " data-m="{"cN":"CatNav_Innovation_nav","id":"n1c3c2c7c5c1m1r1a1","sN":1,"aN":"c3c2c7c5c1m1r1a1"}" ms.title="innovation">Innovation</a>
                                </li>
                                <li data-m="{"cN": "Tech specs_cont","cT":"Container","id":"c4c2c7c5c1m1r1a1","sN":4,"aN":"c2c7c5c1m1r1a1"}">
                                    <a id="shellmenu_52" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-laptop/tech-specs" data-m="{"cN":"CatNav_Tech specs_nav","id":"n1c4c2c7c5c1m1r1a1","sN":1,"aN":"c4c2c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"For business_cont","cT":"Container","id":"c5c2c7c5c1m1r1a1","sN":5,"aN":"c2c7c5c1m1r1a1"}">
                                    <a id="shellmenu_53" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-laptop/for-business " data-m="{"cN":"CatNav_For business_nav","id":"n1c5c2c7c5c1m1r1a1","sN":1,"aN":"c5c2c7c5c1m1r1a1"}" ms.title="for business">For business</a>
                                </li>
                                <li data-m="{"cN":"Support_cont","cT":"Container","id":"c6c2c7c5c1m1r1a1","sN":6,"aN":"c2c7c5c1m1r1a1"}">
                                    <a id="shellmenu_54" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface/en-us/support" data-m="{"cN":"CatNav_Support_nav","id":"n1c6c2c7c5c1m1r1a1","sN":1,"aN":"c6c2c7c5c1m1r1a1"}" ms.title="support">Support</a>
                                </li>
                            </ul>
                        </li>
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"Surface-book-2_cont","cT":"Container","id":"c3c7c5c1m1r1a1","sN":3,"aN":"c7c5c1m1r1a1"}"><button id="NEWSurfaceBook2-navigation" aria-expanded="false " data-m="{"cN":"CatNav_Surface-book-2_nonnav","id":"nn1c3c7c5c1m1r1a1","sN":1,"aN":"c3c7c5c1m1r1a1"}">NEW Surface Book 2</button>
                            <ul aria-labelledby="NEWSurfaceBook2-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN":"Overview_cont","cT":"Container","id":"c2c3c7c5c1m1r1a1","sN":2,"aN":"c3c7c5c1m1r1a1"}">
                                    <a id="shellmenu_56" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book-2/overview" data-m="{"cN":"CatNav_Overview_nav","id":"n1c2c3c7c5c1m1r1a1","sN":1,"aN":"c2c3c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Innovation_cont","cT":"Container","id":"c3c3c7c5c1m1r1a1","sN":3,"aN":"c3c7c5c1m1r1a1"}">
                                    <a id="shellmenu_57" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book-2/innovation " data-m="{"cN":"CatNav_Innovation_nav","id":"n1c3c3c7c5c1m1r1a1","sN":1,"aN":"c3c3c7c5c1m1r1a1"}" ms.title="innovation">Innovation</a>
                                </li>
                                <li data-m="{"cN":"Tech specs_cont","cT":"Container","id":"c4c3c7c5c1m1r1a1","sN":4,"aN":"c3c7c5c1m1r1a1"}">
                                    <a id="shellmenu_58" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book-2/tech-specs" data-m="{"cN":"CatNav_Tech specs_nav","id":"n1c4c3c7c5c1m1r1a1","sN":1,"aN":"c4c3c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"Forbusiness_cont","cT":"Container","id":"c5c3c7c5c1m1r1a1","sN":5,"aN":"c3c7c5c1m1r1a1"}">
                                    <a id="shellmenu_59" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book-2/for-business " data-m="{"cN":"CatNav_Forbusiness_nav","id":"n1c5c3c7c5c1m1r1a1","sN":1,"aN":"c5c3c7c5c1m1r1a1"}" ms.title="for business">For business</a>
                                </li>
                            </ul>
                        </li>
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"surface-studio_cont","cT":"Container","id":"c4c7c5c1m1r1a1","sN":4,"aN":"c7c5c1m1r1a1"}"><button id="SurfaceStudio-navigation" aria-expanded="false " data-m="{"cN":"CatNav_surface-studio_nonnav","id":"nn1c4c7c5c1m1r1a1","sN":1,"aN":"c4c7c5c1m1r1a1"}">Surface Studio</button>
                            <ul aria-labelledby="SurfaceStudio-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN": "Overview_cont","cT":"Container","id":"c2c4c7c5c1m1r1a1","sN":2,"aN":"c4c7c5c1m1r1a1"}">
                                    <a id="shellmenu_61" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-studio/overview " data-m="{"cN": "CatNav_Overview_nav","id":"n1c2c4c7c5c1m1r1a1","sN":1,"aN":"c2c4c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Innovation_cont","cT":"Container","id":"c3c4c7c5c1m1r1a1","sN":3,"aN":"c4c7c5c1m1r1a1"}">
                                    <a id="shellmenu_62" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-studio/innovation " data-m="{"cN":"CatNav_Innovation_nav","id":"n1c3c4c7c5c1m1r1a1","sN":1,"aN":"c3c4c7c5c1m1r1a1"}" ms.title="innovation">Innovation</a>
                                </li>
                                <li data-m="{"cN":"Tech specs_cont","cT":"Container","id":"c4c4c7c5c1m1r1a1","sN":4,"aN":"c4c7c5c1m1r1a1"}">
                                    <a id="shellmenu_63" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-studio/tech-specs" data-m="{"cN":"CatNav_Tech specs_nav","id":"n1c4c4c7c5c1m1r1a1","sN":1,"aN":"c4c4c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"Forbusiness_cont","cT":"Container","id":"c5c4c7c5c1m1r1a1","sN":5,"aN":"c4c7c5c1m1r1a1"}">
                                    <a id="shellmenu_64" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-studio/for-business " data-m="{"cN":"CatNav_Forbusiness_nav","id":"n1c5c4c7c5c1m1r1a1","sN":1,"aN":"c5c4c7c5c1m1r1a1"}" ms.title="for business">For business</a>
                                </li>
                                <li data-m="{"cN":"Support_cont","cT":"Container","id":"c6c4c7c5c1m1r1a1","sN":6,"aN":"c4c7c5c1m1r1a1"}">
                                    <a id="shellmenu_65" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface/en-us/support" data-m="{"cN":"CatNav_Support_nav","id":"n1c6c4c7c5c1m1r1a1","sN":1,"aN":"c6c4c7c5c1m1r1a1"}" ms.title="support">Support</a>
                                </li>
                            </ul>
                        </li>
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"Surface Pro 4_cont","cT":"Container","id":"c5c7c5c1m1r1a1","sN":5,"aN":"c7c5c1m1r1a1"}"><button id="SurfacePro4-navigation" aria-expanded="false " data-m="{"cN":"CatNav_Surface Pro 4_nonnav","id":"nn1c5c7c5c1m1r1a1","sN":1,"aN":"c5c7c5c1m1r1a1"}">Surface Pro 4</button>
                            <ul aria-labelledby="SurfacePro4-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN":"Overview_cont","cT":"Container","id":"c2c5c7c5c1m1r1a1","sN":2,"aN":"c5c7c5c1m1r1a1"}">
                                    <a id="shellmenu_67" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro-4/overview" data-m="{"cN":"CatNav_Overview_nav","id":"n1c2c5c7c5c1m1r1a1","sN":1,"aN":"c2c5c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Innovation_cont","cT":"Container","id":"c3c5c7c5c1m1r1a1","sN":3,"aN":"c5c7c5c1m1r1a1"}">
                                    <a id="shellmenu_68" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro-4/innovation " data-m="{"cN":"CatNav_Innovation_nav","id":"n1c3c5c7c5c1m1r1a1","sN":1, "aN": "c3c5c7c5c1m1r1a1"}" ms.title="innovation">Innovation</a>
                                </li>
                                <li data-m="{"cN":"Compare to Mac_cont","cT":"Container","id":"c4c5c7c5c1m1r1a1","sN":4,"aN":"c5c7c5c1m1r1a1"}">
                                    <a id="shellmenu_69" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro-4/compare-to-mac" data-m="{"cN":"CatNav_Compare to Mac_nav","id":"n1c4c5c7c5c1m1r1a1","sN":1,"aN":"c4c5c7c5c1m1r1a1"}" ms.title="compare to mac">Compare to Mac</a>
                                </li>
                                <li data-m="{"cN":"Tech Specs_cont","cT":"Container","id":"c5c5c7c5c1m1r1a1","sN":5,"aN":"c5c7c5c1m1r1a1"}">
                                    <a id="shellmenu_70" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro-4/tech-specs " data-m="{"cN":"CatNav_Tech Specs_nav","id":"n1c5c5c7c5c1m1r1a1","sN":1,"aN": "c5c5c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"Forbusiness_cont","cT":"Container","id":"c6c5c7c5c1m1r1a1","sN":6,"aN":"c5c7c5c1m1r1a1"}">
                                    <a id="shellmenu_71" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro-4/for-business " data-m="{"cN":"CatNav_Forbusiness_nav","id":"n1c6c5c7c5c1m1r1a1","sN":1,"aN":"c6c5c7c5c1m1r1a1"}" ms.title="for business ">For business</a>
                                </li>
                                <li data-m="{"cN":"Support_cont","cT":"Container","id":"c7c5c7c5c1m1r1a1","sN":7,"aN":"c5c7c5c1m1r1a1"}">
                                    <a id="shellmenu_72" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface/en-us/support " data-m="{"cN":"CatNav_Support_nav","id":"n1c7c5c7c5c1m1r1a1","sN":1,"aN":"c7c5c7c5c1m1r1a1"}" ms.title="support">Support</a>
                                </li>
                            </ul>
                        </li>
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"Surface-book_cont","cT":"Container","id":"c6c7c5c1m1r1a1","sN":6,"aN":"c7c5c1m1r1a1"}"><button id="SurfaceBook-navigation" aria-expanded="false " data-m="{"cN":"CatNav_Surface-book_nonnav","id":"nn1c6c7c5c1m1r1a1","sN":1,"aN":"c6c7c5c1m1r1a1"}">Surface Book</button>
                            <ul aria-labelledby="SurfaceBook-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN":"Overview_cont","cT":"Container","id":"c2c6c7c5c1m1r1a1","sN":2,"aN":"c6c7c5c1m1r1a1"}">
                                    <a id="shellmenu_74" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book/overview" data-m="{"cN":"CatNav_Overview_nav","id":"n1c2c6c7c5c1m1r1a1","sN":1,"aN":"c2c6c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Innovation_cont","cT":"Container","id":"c3c6c7c5c1m1r1a1","sN":3,"aN":"c6c7c5c1m1r1a1"}">
                                    <a id="shellmenu_75" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book/innovation " data-m="{"cN":"CatNav_Innovation_nav","id":"n1c3c6c7c5c1m1r1a1","sN":1, "aN": "c3c6c7c5c1m1r1a1"}" ms.title="innovation">Innovation</a>
                                </li>
                                <li data-m="{"cN":"Compare to Mac_cont","cT":"Container","id":"c4c6c7c5c1m1r1a1","sN":4,"aN":"c6c7c5c1m1r1a1"}">
                                    <a id="shellmenu_76" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book/compare-to-mac" data-m="{"cN":"CatNav_Compare to Mac_nav","id":"n1c4c6c7c5c1m1r1a1","sN":1,"aN":"c4c6c7c5c1m1r1a1"}" ms.title="compare to mac">Compare to Mac</a>
                                </li>
                                <li data-m="{"cN":"Tech specs_cont","cT":"Container","id":"c5c6c7c5c1m1r1a1","sN":5,"aN":"c6c7c5c1m1r1a1"}">
                                    <a id="shellmenu_77" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book/tech-specs " data-m="{"cN":"CatNav_Tech specs_nav","id":"n1c5c6c7c5c1m1r1a1","sN":1,"aN": "c5c6c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"Forbusiness_cont","cT":"Container","id":"c6c6c7c5c1m1r1a1","sN":6,"aN":"c6c7c5c1m1r1a1"}">
                                    <a id="shellmenu_78" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-book/for-business " data-m="{"cN":"CatNav_Forbusiness_nav","id":"n1c6c6c7c5c1m1r1a1","sN":1,"aN":"c6c6c7c5c1m1r1a1"}" ms.title="for business">For business</a>
                                </li>
                                <li data-m="{"cN":"Support_cont","cT":"Container","id":"c7c6c7c5c1m1r1a1","sN":7,"aN":"c6c7c5c1m1r1a1"}">
                                    <a id="shellmenu_79" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface/en-us/support " data-m="{"cN":"CatNav_Support_nav","id":"n1c7c6c7c5c1m1r1a1","sN":1,"aN":"c7c6c7c5c1m1r1a1"}" ms.title="support">Support</a>
                                </li>
                            </ul>
                        </li>
                        <li class="f-sub-menu js-nav-menu " data-m="{"cN":"SurfaceHub_cont","cT":"Container","id":"c7c7c5c1m1r1a1","sN":7,"aN":"c7c5c1m1r1a1"}"><button id="SurfaceHub-navigation" aria-expanded="false " data-m="{"cN":"CatNav_SurfaceHub_nonnav","id":"nn1c7c7c5c1m1r1a1","sN":1,"aN":"c7c7c5c1m1r1a1"}">Surface Hub</button>
                            <ul aria-labelledby="SurfaceHub-navigation" aria-hidden="true " role="none">
                                <li data-m="{"cN":"Overview_cont","cT":"Container","id":"c2c7c7c5c1m1r1a1","sN":2,"aN":"c7c7c5c1m1r1a1"}">
                                    <a id="shellmenu_81" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-hub/overview" data-m="{"cN":"CatNav_Overview_nav","id":"n1c2c7c7c5c1m1r1a1","sN":1,"aN":"c2c7c7c5c1m1r1a1"}" ms.title="overview">Overview</a>
                                </li>
                                <li data-m="{"cN":"Tech specs_cont","cT":"Container","id":"c3c7c7c5c1m1r1a1","sN":3,"aN":"c7c7c5c1m1r1a1"}">
                                    <a id="shellmenu_82" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-hub/tech-specs " data-m="{"cN":"CatNav_Tech specs_nav","id":"n1c3c7c7c5c1m1r1a1","sN":1, "aN": "c3c7c7c5c1m1r1a1"}" ms.title="tech specs">Tech specs</a>
                                </li>
                                <li data-m="{"cN":"Apps_cont","cT":"Container","id":"c4c7c7c5c1m1r1a1","sN":4,"aN":"c7c7c5c1m1r1a1"}">
                                    <a id="shellmenu_83" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-hub/apps" data-m="{"cN":"CatNav_Apps_nav","id":"n1c4c7c7c5c1m1r1a1","sN":1,"aN":"c4c7c7c5c1m1r1a1"}" ms.title="apps">Apps</a>
                                </li>
                                <li data-m="{"cN":"Support_cont","cT":"Container","id":"c5c7c7c5c1m1r1a1","sN":5,"aN":"c7c7c5c1m1r1a1"}">
                                    <a id="shellmenu_84" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/en-us/products/surface-devices/surface-hub " data-m="{"cN":"CatNav_Support_nav","id":"n1c5c7c7c5c1m1r1a1","sN":1,"aN": "c5c7c7c5c1m1r1a1"}" ms.title="support">Support</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="c-uhf-menu js-nav-menu " role="none"><button id="shellmenu_85" aria-expanded="false" aria-haspopup="true " data-m="{"cN":"CatNav_Accessories_nonnav","id":"nn8c5c1m1r1a1","sN":8,"aN":"c5c1m1r1a1"}">Accessories</button>
                    <ul class="" aria-labelledby="shellmenu_85" aria-hidden="true " data-m="{"cN":"Accessories_cont","cT":"Container","id":"c9c5c1m1r1a1","sN":9,"aN":"c5c1m1r1a1"}" role="none">
                        <li data-m="{"cN":"viewallaccessories_cont","cT":"Container","id":"c1c9c5c1m1r1a1","sN":1,"aN":"c9c5c1m1r1a1"}">
                            <a id="viewallaccessories" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse " data-m="{"cN":"CatNav_viewallaccessories_nav","id":"n1c1c9c5c1m1r1a1","sN":1,"aN":"c1c9c5c1m1r1a1"}" ms.title="view all accessories">View all accessories</a>
                        </li>
                        <li data-m="{"cN":"surface-dial_cont","cT":"Container","id":"c2c9c5c1m1r1a1","sN":2,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_87" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/surface-dial " data-m="{"cN":"CatNav_surface-dial_nav","id":"n1c2c9c5c1m1r1a1","sN":1,"aN":"c2c9c5c1m1r1a1"}" ms.title="surface dial">Surface Dial</a>
                        </li>
                        <li data-m="{"cN":"PenAndMice_cont","cT":"Container","id":"c3c9c5c1m1r1a1","sN":3,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_88" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse#penandmice" data-m="{"cN":"CatNav_PenAndMice_nav","id":"n1c3c9c5c1m1r1a1","sN":1,"aN":"c3c9c5c1m1r1a1"}" ms.title="pen &amp; mice">Pen &amp; mice</a>
                        </li>
                        <li data-m="{"cN":"Keyboards_cont","cT":"Container","id":"c4c9c5c1m1r1a1","sN":4,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_89" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse#KeyboardCovers " data-m="{"cN":"CatNav_Keyboards_nav","id":"n1c4c9c5c1m1r1a1","sN":1,"aN":"c4c9c5c1m1r1a1"}" ms.title="keyboards">Keyboards</a>
                        </li>
                        <li data-m="{"cN":"Skins_cont","cT":"Container","id":"c5c9c5c1m1r1a1","sN":5,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_90" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse#skin" data-m="{"cN":"CatNav_Skins_nav","id":"n1c5c9c5c1m1r1a1","sN":1,"aN":"c5c9c5c1m1r1a1"}" ms.title="marimekko for microsoft surface">Marimekko for Microsoft Surface</a>
                        </li>
                        <li data-m="{"cN":"Powerdocks_cont","cT":"Container","id":"c6c9c5c1m1r1a1","sN":6,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_91" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse#poweranddocks " data-m="{"cN":"CatNav_Powerdocks_nav","id":"n1c6c9c5c1m1r1a1","sN":1,"aN": "c6c9c5c1m1r1a1"}" ms.title="power &amp; docks">Power &amp; docks</a>
                        </li>
                        <li data-m="{"cN":"Adapters_cont","cT":"Container","id":"c7c9c5c1m1r1a1","sN":7,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_92" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse#adapters " data-m="{"cN":"CatNav_Adapters_nav","id":"n1c7c9c5c1m1r1a1","sN":1,"aN":"c7c9c5c1m1r1a1"}" ms.title="adapters">Adapters</a>
                        </li>
                        <li data-m="{"cN":"microsoftcomplete_cont","cT":"Container","id":"c8c9c5c1m1r1a1","sN":8,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_93" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface/en-us/accessories/browse#microsoftcomplete " data-m="{"cN":"CatNav_microsoftcomplete_nav","id":"n1c8c9c5c1m1r1a1","sN":1,"aN":"c8c9c5c1m1r1a1"}" ms.title="accidental damage coverage">Accidental damage coverage</a>
                        </li>
                        <li data-m="{"cN":"controllers_cont","cT":"Container","id":"c9c9c5c1m1r1a1","sN":9,"aN":"c9c5c1m1r1a1"}">
                            <a id="shellmenu_94" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/accessories/browse#controllers " data-m="{"cN":"CatNav_controllers_nav","id":"n1c9c9c5c1m1r1a1","sN":1,"aN":"c9c9c5c1m1r1a1"}" ms.title="controllers">Controllers</a>
                        </li>
                    </ul>
                </div>
                <div class="c-uhf-menu js-nav-menu " role="none"><button id="shellmenu_95" aria-expanded="false" aria-haspopup="true " data-m="{"cN":"CatNav_Compare_nonnav","id":"nn10c5c1m1r1a1","sN":10,"aN": "c5c1m1r1a1"}">Compare</button>
                    <ul class="" aria-labelledby="shellmenu_95" aria-hidden="true " data-m="{"cN":"Compare_cont","cT":"Container","id":"c11c5c1m1r1a1","sN":11,"aN":"c5c1m1r1a1"}" role="none">
                        <li data-m="{"cN":"HelpMeChoose_cont","cT":"Container","id":"c1c11c5c1m1r1a1","sN":1,"aN":"c11c5c1m1r1a1"}">
                            <a id="shellmenu_96" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/help-me-choose" data-m="{"cN":"CatNav_HelpMeChoose_nav","id":"n1c1c11c5c1m1r1a1","sN":1,"aN":"c1c11c5c1m1r1a1"}" ms.title="help me choose">Help me choose</a>
                        </li>
                        <li data-m="{"cN":"CompareDevices_cont","cT":"Container","id":"c2c11c5c1m1r1a1","sN":2,"aN":"c11c5c1m1r1a1"}">
                            <a id="shellmenu_97" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/compare-devices " data-m="{"cN":"CatNav_CompareDevices_nav","id":"n1c2c11c5c1m1r1a1","sN":1,"aN":"c2c11c5c1m1r1a1"}" ms.title="comparedevice specs">Compare device specs</a>
                        </li>
                    </ul>
                </div>
                <a id="shellmenu_98" class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/overview " data-m="{"cN":"CatNav_ForBusiness_nav","id":"n12c5c1m1r1a1","sN":12,"aN": "c5c1m1r1a1"}" ms.title="for business">For business</a>
                <div class="c-uhf-menu js-nav-menu " role="none"><button id="Experience Surface" aria-expanded="false" aria-haspopup="true " data-m="{"cN":"CatNav_Experience-Surface_nonnav","id":"nn13c5c1m1r1a1","sN":13,"aN":"c5c1m1r1a1"}">Experience Surface</button>
                    <ul class="" aria-labelledby="Experience Surface" aria-hidden="true " data-m="{"cN":"Experience-Surface_cont","cT":"Container","id":"c14c5c1m1r1a1","sN":14,"aN":"c5c1m1r1a1"}" role="none">
                        <li data-m="{"cN":"AtSchool_cont","cT":"Container","id":"c1c14c5c1m1r1a1","sN":1,"aN":"c14c5c1m1r1a1"}">
                            <a id="shellmenu_100" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/for-students" data-m="{"cN":"CatNav_AtSchool_nav","id":"n1c1c14c5c1m1r1a1","sN":1,"aN":"c1c14c5c1m1r1a1"}" ms.title="for students">For students</a>
                        </li>
                        <li data-m="{"cN":"CreatedonSurface_cont","cT":"Container","id":"c2c14c5c1m1r1a1","sN":2,"aN":"c14c5c1m1r1a1"}">
                            <a id="shellmenu_101" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/created-on-surface " data-m="{"cN":"CatNav_CreatedonSurface_nav","id":"n1c2c14c5c1m1r1a1","sN":1,"aN":"c2c14c5c1m1r1a1"}" ms.title="created on surface">Created on Surface</a>
                        </li>
                        <li data-m="{"cN":"NFL_cont","cT":"Container","id":"c3c14c5c1m1r1a1","sN":3,"aN":"c14c5c1m1r1a1"}">
                            <a id="shellmenu_102" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/nfl" data-m="{"cN":"CatNav_NFL_nav","id":"n1c3c14c5c1m1r1a1","sN":1,"aN":"c3c14c5c1m1r1a1"}" ms.title="in the nfl">In the NFL</a>
                        </li>
                        <li data-m="{"cN":"Innovations_cont","cT":"Container","id":"c4c14c5c1m1r1a1","sN":4,"aN":"c14c5c1m1r1a1"}">
                            <a id="shellmenu_103" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/innovations " data-m="{"cN":"CatNav_Innovations_nav","id":"n1c4c14c5c1m1r1a1","sN":1,"aN":"c4c14c5c1m1r1a1"}" ms.title="innovation">Innovation</a>
                        </li>
                    </ul>
                </div>
                <a id="callchat" class="c-uhf-nav-link" href="/surface/en-us/" data-m="{"cN":"CatNav_ClickToChat_nav","id":"n15c5c1m1r1a1","sN":15,"aN":"c5c1m1r1a1"}" style="display: inline-block;" ms.title="click to chat">Click to chat</a><a id="shellmenu_105" class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/buy" data-m="{"cN":"CatNav_WhereToBuy_nav","id":"n16c5c1m1r1a1","sN":16,"aN":"c5c1m1r1a1"}" ms.title="whereto buy">Where to buy</a>
                <a id="shellmenu_106" class="c-uhf-nav-link f-hidden" href="http://support.microsoft.com/surface" data-m="{"cN":"CatNav_Support_nav","id":"n17c5c1m1r1a1","sN":17,"aN":"c5c1m1r1a1"}" ms.title="support">Support</a>
                <a id="mobile-buy-now" class="c-uhf-nav-link x-hidden x-visible-vp2-block x-visible-vp1-block f-hidden" href="https://www.microsoftstore.com/store/msusa/en_US/cat/All-Surface/categoryID.69403400" data-m="{"cN":"CatNav_Shopnow at the Microsoft Store_nav","id":"n18c5c1m1r1a1","sN":18,"aN":"c5c1m1r1a1"}" data-bi-prtnm="ms store" data-bi-type="referral" data-bi-bhvr="PARTNERREFERRAL" ms.title="shop now" ms.link_type="ms store" ms.prod="cid69403400" ms.ea_name="buy">SHOP NOW</a>
            </nav>
        </div>
    </div>
</header>