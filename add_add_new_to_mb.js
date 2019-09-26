// console.log('Init add_add_new_to_mb.js');
// when DOM is ready...
jQuery(function() {

  // console.log('Inside jQuery add_add_new_to_mb.js');

  let runScript = setTimeout(function() {
    let aanConfig = {
      useModal: true,
      modalParams: '&TB_iframe=true&width=600&height=550',
      baseUrl: '/app/wp-admin/post-new.php?post_type=',
      linkText: 'Add New',
      linkClass: 'button',
      linkStyle: 'margin-left:1rem;'
    }

    // find any meta-box select_advanced/select2 fields and add the link
    jQuery('.rwmb-select_advanced + .select2').each(function() {
      // console.log('Inside select2 loop add_add_new_to_mb.js');
      let options = jQuery(this).prev().data('options');
      let type = options['ajax_data']['field']['type'];
      let post_type = options['ajax_data']['field']['query_args']['post_type'];

      if (type === 'post') {
        let linkText = aanConfig.linkText ? aanConfig.linkText : 'Add New';
        let linkStyle = aanConfig.linkStyle ? aanConfig.linkStyle : ' ';
        let classAttr = 'class="' + (aanConfig.useModal ? ' thickbox ' : ' ') + aanConfig.linkClass + '"';
        let targetAttr = !aanConfig.useModal ? 'target="_blank"' : ' ';
        let addNewUrl = aanConfig.baseUrl + post_type + (aanConfig.useModal ? aanConfig.modalParams : '');
        let aHrefElem = jQuery(`<a href="${addNewUrl}" ${targetAttr} ${classAttr} style="${linkStyle}">${linkText}</a>`);
        jQuery(this).after(aHrefElem);
      }
    });
  }, 2500);

});