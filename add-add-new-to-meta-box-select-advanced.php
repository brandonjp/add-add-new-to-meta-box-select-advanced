<?php
/*
Plugin Name: Add 'Add New' to Meta Box Select Advanced Fields
Plugin URI: https://github.com/brandonjp/add-add-new-to-meta-box-select-advanced
Description: Add 'Add New' to Meta Box Select Advanced Fields
Version: 0.1.68
Author: Brandon Pfeiffer
Author URI: http://brandonjp.com

Text Domain: add-add-new-to-meta-box-select-advanced

With help from:
 * https://www.exratione.com/2018/02/the-easiest-javascript-modal-for-administrative-pages-in-wordpress-4/
 * https://codex.wordpress.org/Javascript_Reference/ThickBox
 * http://rizqy.me/create-modal-box-on-wordpress-dashboard/
 */

function add_add_new_to_mb($screen)
{
  if ( $screen == 'post-new.php' || $screen == 'post.php' ) {
    add_thickbox();
    $slug = 'add_add_new_to_mb';
    $js_file = plugin_dir_url(__FILE__).$slug.'.js';
    wp_enqueue_script($slug.'_js',$js_file, array(), '0.1.68');
  }
}

add_action('admin_enqueue_scripts', 'add_add_new_to_mb');
