(function($) {
    'use strict';
    $(window).load(function() {
        // console.log('Inside jQuery add_add_new_to_mb.js');
        // in case the WP site is in a subdirectory, this should return the base - similar to using WP: site_url()
        let siteURL = window.ajaxurl.split('wp-admin')[0];
        let aanConfig = {
            useModal: true,
            modalParams: '&TB_iframe=true',
            modalWidth: '600',
            modalHeight: '550',
            tagNameParam: '&tag-name=',
            postUrl: siteURL + 'wp-admin/post-new.php?post_type=',
            taxoUrl: siteURL + 'wp-admin/edit-tags.php?taxonomy=',
            linkText: 'Add New',
            linkClass: 'button button-small add-add-new-button cardinalpm-button',
            linkStyle: ''
        }
        jQuery('div.rwmb-field[class*="add-add-new"]').each(function() {
            let $thisSelect = jQuery(this).find('select.rwmb-select_advanced');
            let useModal = jQuery(this).hasClass('add-add-new-modal') || aanConfig.useModal;
            let useWindow = jQuery(this).hasClass('add-add-new-window');
            if (!!useWindow) useModal = false;
            let options = $thisSelect.data('options');
            // only continue if the field is select2 and has options
            if (options) {
                // console.warn(options);
                // should be 'taxonomy_advanced' or 'post'
                let type = options['ajax_data']['field']['type'];
                let query_args = options['ajax_data']['field']['query_args'];
                // should be the post/tax type name: foreman, project-manager, contact, customer, etc
                let post_type = (type === 'post') ? query_args['post_type'] : query_args['taxonomy'][0];
                // console.warn(useModal, options, type, query_args, post_type);
                let linkText = aanConfig.linkText ? aanConfig.linkText : 'Add New';
                let linkStyle = aanConfig.linkStyle ? aanConfig.linkStyle : ' ';
                let hrefID = `${post_type}_add_new_btn`;
                let classAttr = 'class="' + (useModal ? ' thickbox ' : ' ') + aanConfig.linkClass + '"';
                let targetAttr = !useModal ? 'target="_blank"' : ' ';
                let modalParams = aanConfig.modalParams + '&width=' + aanConfig.modalWidth + '&height=' + aanConfig.modalHeight;
                let baseUrl = (type === 'post') ? aanConfig.postUrl : aanConfig.taxoUrl;
                let addNewUrl = baseUrl + post_type + aanConfig.tagNameParam + '0' + (useModal ? modalParams : '');
                let $hrefElem = jQuery(`<a href="${addNewUrl}" ${targetAttr} ${classAttr} id="${hrefID}" style="${linkStyle}">${linkText}</a>`);
                $hrefElem.on('click', function(e) {
                    let $thisBtn = jQuery(this);
                    if (window.__CardinalTempDoNormalClick) {
                        window.__CardinalTempDoNormalClick = false;
                        let tb_unload_count = 1;
                        let showSelect2onClose = function showSelect2onClose() {
                            if (tb_unload_count > 1) {
                                tb_unload_count = 1;
                            } else {
                                jQuery(window).unbind('tb_unload', showSelect2onClose);
                                tb_unload_count = tb_unload_count + 1;
                                $thisBtn.attr('href').replace(window.__CardinalTempNewTagName, '0');
                                $thisSelect.trigger('focus');
                                $thisSelect.select2('open');
                                window.__CardinalTempNewTagName = '';
                            }
                        };
                        jQuery(window).bind('tb_unload', showSelect2onClose);
                    } else {
                        e.preventDefault();
                        window.__CardinalTempDoNormalClick = true;
                        let zroTagNameParam = aanConfig.tagNameParam + '0';
                        let newTagNameParam = aanConfig.tagNameParam + (window.__CardinalTempNewTagName.length ? window.__CardinalTempNewTagName : '0');
                        let newHref = $thisBtn.attr('href').replace(zroTagNameParam, newTagNameParam);
                        // let zroHref = $thisBtn.attr('href').replace(newTagNameParam, zroTagNameParam);
                        $thisBtn.attr('href', newHref).trigger('click');
                    }
                    // let dataHref = jQuery(this).data('href');
                });
                $thisSelect.next().after($hrefElem);
            }
        });
        window.__CardinalTempDoNormalClick = false;
        window.__CardinalTempNewTagName = '';
        jQuery('.select2.select2-container, input.select2-search__field').on('focus click', function() {
            window.__CardinalTempNewTagName = '';
        });
        jQuery('body').on('keyup', 'input.select2-search__field', function() {
            let tagName = jQuery(this).val();
            window.__CardinalTempNewTagName = tagName || '';
        });
    });
})(jQuery);
