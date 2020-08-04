<?php
/*
Plugin Name: Add 'Add New' to Meta Box Select Advanced Fields
Plugin URI: http://brandonjp.com
Description: Add 'Add New' to Meta Box Select Advanced Fields
Version: 0.1.30
Author: Brandon Pfeiffer
Author URI: http://brandonjp.com

Text Domain: add-add-new-to-meta-box-select-advanced

With help from:
 * https://www.exratione.com/2018/02/the-easiest-javascript-modal-for-administrative-pages-in-wordpress-4/
 * https://codex.wordpress.org/Javascript_Reference/ThickBox
 * http://rizqy.me/create-modal-box-on-wordpress-dashboard/
 */

function add_add_new_to_mb_admin_enqueue()
{

    $screen = get_current_screen();

    // load on the NEW and EDIT screens of all post types
    if ('post' === $screen->base) {
        add_thickbox();
        wp_enqueue_script('add_add_new_to_mb_script', plugin_dir_url(__FILE__) . 'add_add_new_to_mb.js?v=0.1.30');
    }

}

add_action('admin_enqueue_scripts', 'add_add_new_to_mb_admin_enqueue');
