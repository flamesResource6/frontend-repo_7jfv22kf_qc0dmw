<?php
/**
 * Drone Exterior Solutions — Block theme functions
 */

if ( ! function_exists( 'drone_exterior_solutions_support' ) ) {
  function drone_exterior_solutions_support() : void {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'wp-block-styles' );
  }
}
add_action( 'after_setup_theme', 'drone_exterior_solutions_support' );

// Register block patterns category
register_block_pattern_category(
  'drone-exterior',
  array( 'label' => __( 'Drone Exterior Patterns', 'drone-exterior-solutions' ) )
);

?>