/*!
  http://www.amged.me/
  jQuery #bitlify v0.1
	(c) 2014 Amged Osman
	The MIT License (MIT)
  Copyright (c) 2014 Amged Osman
*/
(function($) {
	$.fn.bitlifyer = function(options) {
		var settings = $.extend(
		{
        conterDiv   : '',
            url     : 'http://amged.me/',
            login   : "amgedosman",
            apikey  : "R_13c8109400054ac68d7c6526bd97ea69",
            domain  : 'j.mp',
            //format  : 'jsonp',
            //version : '2.0.1'
    }, options );
    
    //trim url / remove extra spaces!
    settings.url = settings.url.trim();
     
    if (!/^(f|ht)tps?:\/\//i.test(settings.url)){
                       settings.url =  'http://' +  settings.url;
    }
                    
                    
   if(aonDebug){
      $('#debug').append(
                         '<p class="text-success">' +
                         '<strong>we came before bitlyUrl, and settings.url: ' +  settings.url + ' </strong>' +
                         '</p>');
   }//END aonDebug        
                                  
    var bitlyUrl = 'http://api.bit.ly/v3/shorten?longUrl='+ encodeURIComponent(settings.url) + '&login='+ settings.login + '&apiKey=' + settings.apikey + '&domain=' + settings.domain;
    
 if(aonDebug){
  $('#debug').append(
                       '<p class="text-success">' +
                       'we came before ajax call, <strong>bitlyUrl: ' +  bitlyUrl + ' </strong>' +
                       '</p>');
  }//END aonDebug       
               
  return $.ajax({
                url         : bitlyUrl,
                dataType    : 'jsonp',
                timeout     : 5000,
                cache       : false,
                error       : function(x) {
                if(aonDebug){
                                            jQuery('#debug').append( "<br /> " +
                                             '<p class="text-danger">' +
                                             '<strong>errorCode</strong>' + x.errorCode  + '<strong>errorMessage</strong>' + x.errorMessage +
                                             '</p>');
                                         }//END aonDebug
                
                 },
                success     : function(v) {
                   if(aonDebug){
                     $('#debug').append(
                         '<p class="text-success">' +
                         '<strong>this is function success in $ajax({});</strong> The short url: ' + v.data.url + ' ' +
                         '</p>');
                   }//END aonDebug
                }
            });
  	};
})(jQuery);