<section class="c-pivot pad-feature" id="pivot-top" data-grid="col-12">
    <div class="sticky-tabs" role="tablist">
        <div data-grid="col-12">
            <div class="product" data-grid="col-2">
                <h3 class="c-heading-6">Acer Headset</h3>
            </div>
            <div  class="f-center x-type-center" data-grid="col-7">
                <button class="c-flipper f-previous" aria-hidden="true" tabindex="-1"></button>
                <header role="tablist" >
                    <a class="f-active pivot-scroll" role="tab" tabindex="0" aria-controls="overview" >Overview</a>
                    <a role="tab" class="pivot-scroll" aria-controls="tech-specs">Tech specs</a>
                    <a role="tab" class="pivot-scroll" aria-controls="reviews">Reviews</a>
                    <a role="tab" class="pivot-scroll" aria-controls="comparison">Compare</a>
                </header>
                <button class="c-flipper f-next" aria-hidden="true" tabindex="-1"></button>
            </div>
            <div class="buy-box" data-grid="col-3">
                <div class="c-price price-info">
                    <div class="c-price">

                        <div class="price-text srv_price">
                            <span aria-label="Price" class="x-hidden-focus">$399.99</span>
                        </div>

                        <div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                            <meta itemprop="price" content="399.99">
                            <meta itemprop="priceCurrency" content="USD">
                        </div>
                        <div class="price-span">
                            <a class="c-call-to-action c-glyph" href="https://www.microsoft.com/en-us/store/d/acer-windows-mixed-reality-headset-with-motion-controllers/8TTSF1Q97HKP?tduid=(fc4f690a8f14f695bd5c959379216b79)(261853)(2939310)(wtbs_5a31778228ebd67eb3e8f850)()&activetab=pivot:overviewtab">Buy Now</a>
                        </div>
                    </div>
                
            </div>  
            </div>
        </div>
    </div>
    <section id="overview" role="tabpanel" aria-hidden="false" data-grid="container" class="pad-6x">
        <?php include('feature_left_video.php');?>
    </section>
    <section id="tech-specs" role="tabpanel" aria-hidden="true" data-grid="container">
        
        <?php
            include('system_requirements.php');
        ?>
    </section>
    <section id="reviews" role="tabpanel" aria-hidden="true" data-grid="container">
       
        <?php 
            include('ratings.php');
        ?>
    </section>
    <section id="comparison" role="tabpanel" aria-hidden="true" data-grid="container">
        <?php
            include('comparison.php');
        ?>
        
    </section>
</section>