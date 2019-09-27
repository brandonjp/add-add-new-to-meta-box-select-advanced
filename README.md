# add-add-new-to-meta-box-select-advanced
A VERY quickly made plugin that adds an 'Add New' link after any Meta Box Select Advanced field that uses select2 for selecting related posts.

Trying to satisfy my needs described here: https://metabox.io/support/topic/is-it-possible-to-inline-add-a-new-record-on-a-related-post-type/

* For use with Meta Box – https://metabox.io/


## What It Does
`add-add-new-to-meta-box-select-advanced.php` adds Thickbox & custom JS to the Post Edit & New screens.
`add_add_new_to_mb.js` places an "Add New" button (after a setTimeout) immediately following any Select Advanced field, for "post" types only (doesn't work for adding new Users or Terms, etc).


## Usage for End Users / WP Admin
If a user does not find the related post in the Select Advanced field:

  * User can click the "Add New" button
  * A modal (or new window) will open to the "Add New" screen for the related post type
  * User can add a new post, then close the modal/window
  * User can then search for the post they just added and it will display in the Select Advanced field


## For Developers
You can customize a few options in the `add_add_new_to_mb.js` file. Look for the `aanConfig` object (that stands for '**a**dd **A**dd **N**ew **c**onfig').

You will definitely want to customize the `baseUrl` to match your WP site. If your site is just in the root of your domain, remove the `/app` from the beginning of the `baseUrl`. 

Here are the other `aanConfig` options:
  * `useModal`: _boolean_ - determines if the "Add New" screen opens in a modal or in a new window, if set to `true` it a modal will open, if `false` a new window will open (Default: `true`)
  * `modalParams`: _string_ - currently this is pretty much irrelevant, but I were to improve the script to load an actual modal view of the Add New screen, then this would be a required parameter (Default: `'&TB_iframe=true'`)
  * `modalWidth`: _string_ or _number_ - the width of the modal (Default: `'600'`)
  * `modalHeight`: _string_ or _number_ - the height of the modal (Default: `'550'`)
  * `baseUrl`: _string_ - the relative path to the Add New screen for you WP site (Default: `'/app/wp-admin/post-new.php?post_type='`)
  * `linkText`: _string_ - the text that will display inside the anchor element (Default: `'Add New'`)
  * `linkClass`: _string_ - any classes you want to add to the anchor element, remove `button` if you would rather just show a plain text link *Note: `thickbox` class is automatically added if `useModal` is `true`* (Default: `'button'`)
  * `linkStyle`: _string_ - any inline styles you want to apply to the anchor element (Default: `'margin-left:1rem;'`)


## Misc References
These are for my memory and easy access later:
  * https://codex.wordpress.org/Javascript_Reference/ThickBox
  * https://developer.wordpress.org/reference/functions/iframe_header/
  * https://developer.wordpress.org/reference/functions/iframe_footer/
  * https://metabox.io/support/topic/is-it-possible-to-inline-add-a-new-record-on-a-related-post-type/
  * https://www.exratione.com/2018/02/the-easiest-javascript-modal-for-administrative-pages-in-wordpress-4/
  * http://rizqy.me/create-modal-box-on-wordpress-dashboard/



## What & Why
My clients needed the ability to add a new post if it didn't already exist in the Meta Box Select Advanced dropdown. So this hacky solution opens the "Add New Post" page for whatever custom post type the select field is using. Then the user can save (publish) the new entry, close the window that opened up & do a search for what they just added and the ajax query should pick it up. 

This is an EXTREMELY quick and simple solution. It has lots of potential for error, but it works great for my uses. 

Contributors: Brandon Pfeiffer - @brandonjp - brandonjp.com
Donate something: https://www.paypal.me/brandonjp
