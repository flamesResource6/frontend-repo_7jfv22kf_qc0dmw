<?php
/**
 * Title: Hero — Animated Background
 * Slug: drone-exterior/hero
 * Categories: drone-exterior
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'assets/hero-bg.gif' ) ); ?>","dimRatio":40,"overlayColor":"charcoal","isUserOverlayColor":true,"minHeight":60,"minHeightUnit":"vh","contentPosition":"center center"} -->
<div class="wp-block-cover" style="min-height:60vh"><span aria-hidden="true" class="wp-block-cover__background has-charcoal-background-color has-background-dim-40 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="<?php echo esc_url( get_theme_file_uri( 'assets/hero-bg.gif' ) ); ?>" data-object-fit="cover"/>
  <div class="wp-block-cover__inner-container">
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"1180px"}} -->
    <div class="wp-block-group"><!-- wp:heading {"textAlign":"left","level":1} -->
    <h1 class="wp-block-heading" style="text-align:left">High-level exterior cleaning, made safe with drones</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"textColor":"light"} -->
    <p class="has-light-color has-text-color">Faster, safer, and more cost-effective than scaffolding — serving Hampshire, Surrey, West Sussex and UK-wide for commercial drone cleaning.</p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons -->
    <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"electric"} -->
    <div class="wp-block-button"><a class="wp-block-button__link has-electric-background-color has-background wp-element-button" href="/contact">Get a Quote</a></div>
    <!-- /wp:button --></div>
    <!-- /wp:buttons --></div>
    <!-- /wp:group -->
  </div>
</div>
<!-- /wp:cover -->
