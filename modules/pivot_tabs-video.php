<section class="c-pivot pad-feature" id="pivot-top" data-grid="col-12">
    <div class="sticky-tabs" role="tablist">
        <div data-grid="col-12">
            <div class="product" data-grid="col-2">
                <h3 class="c-heading-6">Windows Mixed Reality</h3>
            </div>
            <div  class="f-center x-type-center" data-grid="col-8">
                <button class="c-flipper f-previous" aria-hidden="true" tabindex="-1"></button>
                <header role="tablist" >
                    <a class="f-active pivot-scroll" role="tab" tabindex="0" aria-controls="overview" >Overview</a>
                    <a role="tab" class="pivot-scroll" aria-controls="tech-specs">Tech Specs</a>
                    <a role="tab" class="pivot-scroll" aria-controls="reviews">Reviews</a>
                    <a role="tab" class="pivot-scroll" aria-controls="compatability">FAQ</a>
                </header>
                <button class="c-flipper f-next" aria-hidden="true" tabindex="-1"></button>
            </div>
            <div class="buy-box" data-grid="col-2">
                <a class="c-call-to-action">Buy Now</a>
            </div>
        </div>
    </div>
    <section id="overview" role="tabpanel" aria-hidden="false" data-grid="container" class="pad-6x">
        <?php include('feature_left_video.php');?>
    </section>
    <section id="tech-specs" role="tabpanel" aria-hidden="true" data-grid="container">
        <h3 class="c-heading-3">Tech Specs</h3>
        <?php
            include('system_requirements.php');
        ?>
    </section>
    <section id="reviews" role="tabpanel" aria-hidden="true" data-grid="container">
        <h3 class="c-heading-3">Reviews</h3>
        <?php 
            include('ratings.php');
        ?>
    </section>
    <section id="compatability" role="tabpanel" aria-hidden="true" data-grid="container">
        <h3 class="c-heading-3">FAQ</h3>
        <p class="c-paragraph-3">Questions that are asked</p>
    </section>
</section>