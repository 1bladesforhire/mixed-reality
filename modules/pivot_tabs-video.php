<section class="c-pivot pad-feature" id="pivot-top" data-grid="col-12">
    <div class="sticky-tabs" role="tablist">
        <div data-grid="col-12">
            <div class="product" data-grid="col-2">
                <h3 class="c-heading-6">Acer Headset</h3>
            </div>
            <div  class="f-center x-type-center" data-grid="col-8">
                <button class="c-flipper f-previous" aria-hidden="true" tabindex="-1"></button>
                <header role="tablist" >
                    <a class="f-active pivot-scroll" role="tab" tabindex="0" aria-controls="overview" >Overview</a>
                    <a role="tab" class="pivot-scroll" aria-controls="tech-specs">Tech specs</a>
                    <a role="tab" class="pivot-scroll" aria-controls="reviews">Reviews</a>
                    <a role="tab" class="pivot-scroll" aria-controls="compatability">Compare</a>
                </header>
                <button class="c-flipper f-next" aria-hidden="true" tabindex="-1"></button>
            </div>
            <div class="buy-box" data-grid="col-2">
                <div class="c-price price-info">
                    <div class="c-price">

                        <div class="price-text srv_price">
                            <span aria-label="Price" class="x-hidden-focus">$299.99</span>
                        </div>

                        <div class="srv_microdata" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                            <meta itemprop="price" content="119.99">
                            <meta itemprop="priceCurrency" content="USD">
                        </div>
                        <a class="c-call-to-action c-glyph">Buy Now</a>
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
    <section id="compatability" role="tabpanel" aria-hidden="true" data-grid="container">
       
        <p class="c-paragraph-3">Compare WMR Headsets</p>
    </section>
</section>