<?php 
	 function my_theme_enqueue_styles() { 
		wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); 
		 // enqueue child styles
		wp_enqueue_style('child-theme', get_stylesheet_directory_uri() .'/dist/assets/css/styles.css');
	}
		
	function customize_theme() {
		wp_enqueue_script( 'jQuery_module', get_stylesheet_directory_uri(). '/dist/assets/js/bundle.js', array('jquery'), '', true);
	}
		
	add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
	add_action( 'wp_enqueue_scripts', 'customize_theme', 9999 );
 ?>