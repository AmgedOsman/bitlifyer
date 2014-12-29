/*!
  http://www.amged.me/
  jQuery #textareaCount v0.1
	The MIT License (MIT)
  Copyright (c) 2014 Amged Osman
*/
(function($) {
	$.fn.textareaCount = function(options) {
		var settings = $.extend(
		{
            t       : 140,
            l  : 0

    }, options );
  // var finalContent = settings.elm.val().length;
    $(this).text((settings.t - settings.l));
    
        if ( settings.l > settings.t ){
          $(this).removeClass('label-default').addClass('label-danger');
        } else if ( settings.l > (settings.t - 15) ){
          $(this).removeClass('label-default').removeClass('label-danger').addClass('label-warning');
        } else {
          $(this).removeClass('label-danger').removeClass('label-warning').addClass('label-default');
        }
         
  	};
})(jQuery);
