/**
 * @file
 * Implements the jQuery light gallery plugin.
 *
 * @author
 * Gert-Jan Meire
 *
 */
(function ($) {

  $.fn.extend({

    /**
     * Creates a jQuery extension function.
     *
     */
    loadLightGallery: function () {
      $(this).lightGallery({
        download: false,
        getCaptionFromTitleOrAlt: false,
        counter: false
      });

    }

  });
})(jQuery);
