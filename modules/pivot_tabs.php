<section class="c-pivot pad-feature" id="pivot-top" data-grid="col-12">
    <div class="sticky-tabs" role="tablist">
        <div data-grid="col-12">
            <div class="product x-type-left" data-grid="col-2">
                <h3 class="c-heading-6">Windows Mixed Reality</h3>
            </div>
            <div role="tablist"  class="f-center x-type-center" data-grid="col-8">
                <a class="f-active pivot-scroll" role="tab" tabindex="0" aria-controls="overview" >Overview</a>
                <a role="tab" class="pivot-scroll" aria-controls="tech-specs">Tech specs</a>
                <a role="tab" class="pivot-scroll" aria-controls="reviews">Reviews</a>
                <a role="tab" class="pivot-scroll" aria-controls="compatability">Compatablitiy</a>
            </div>
            <div class="buy-box x-type-right" data-grid="col-2">
                <a class="c-call-to-action">Buy Now</a>
            </div>
        </div>
    </div>
    <section id="overview" role="tabpanel" aria-hidden="false" data-grid="container">
        <?php include('feature_set1.php');?>
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
        <h3 class="c-heading-3">Compatability</h3>
        <p class="c-paragraph-3">Check your compatabliity aqui.</p>
    </section>
</section>