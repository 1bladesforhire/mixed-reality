<section class="c-pivot pad-feature">
    <button class="c-flipper f-previous" aria-hidden="true" tabindex="-1"></button>
    <div role="tablist"  class="f-center">
        <a class="f-active" role="tab" tabindex="0" aria-controls="overview">Overview</a>
        <a role="tab" aria-controls="tech-specs">Tech Specs</a>
        <a role="tab" aria-controls="reviews">Reviews</a>
        <a role="tab" aria-controls="compatability">Compatablitiy</a>
    </div>
    <button class="c-flipper f-next" aria-hidden="true" tabindex="-1"></button>
    <section id="overview" role="tabpanel" aria-hidden="false">
        <?php include('feature_set1.php');?>
    </section>
    <section id="tech-specs" role="tabpanel" aria-hidden="true" data-grid="container">
        <h3 class="c-heading-3">Tech Specs</h3>
        <?php
            include('system_requirements.php');
        ?>
    </section>
    <section id="reviews" role="tabpanel" aria-hidden="true">
        <h3 class="c-heading-3">Section 3</h3>
        <p class="c-paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ligula nec urna dictum tempus. Mauris ac feugiat diam. Aenean eget euismod lacus, nec viverra dolor. Phasellus a lacinia dui, id iaculis ipsum. In vel malesuada odio.</p>
    </section>
    <section id="compatability" role="tabpanel" aria-hidden="true">
        <h3 class="c-heading-3">Section 4</h3>
        <p class="c-paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ligula nec urna dictum tempus. Mauris ac feugiat diam. Aenean eget euismod lacus, nec viverra dolor. Phasellus a lacinia dui, id iaculis ipsum. In vel malesuada odio.</p>
    </section>
</section>