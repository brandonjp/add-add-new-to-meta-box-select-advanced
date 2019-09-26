# add-add-new-to-meta-box-select-advanced
A VERY quickly made plugin that adds an 'Add New' link after any Meta Box Select Advanced field that uses select2 for selecting related posts.

Trying to satisfy my needs described here: https://metabox.io/support/topic/is-it-possible-to-inline-add-a-new-record-on-a-related-post-type/



## About
My clients needed the ability to add a new post if it didn't already exist in the Meta Box Select Advanced dropdown. So this hacky solution opens the "Add New Post" page for whatever custom post type the select field is using. Then the user can save (publish) the new entry, close the window that opened up & do a search for what they just added and the ajax query should pick it up. 

This is an EXTREMELY quick and simple solution. It has lots of potential for error, but it works great for my uses. 

** You're probaby gonna want to edit the `addNewUrl` variable to match your WP site path. (Our WP is installed in a sub-directory, hence the `/app/wp-admin...` -- you might not need the '/app' part.)

Contributors: Brandon Pfeiffer - @brandonjp - brandonjp.com
Donate something: https://www.paypal.me/brandonjp
