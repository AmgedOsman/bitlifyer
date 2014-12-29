bitlifyer
=========

jQuery plugin that creates bit.ly short urls of any url pasted into textarea, styled using twitter's bootstrap


Trigger
=========
<code>
jQuery("#textareaId").bitlifyer({ url: "http://www.verylongdomain.com/and/extra/pages/"});
</code>

URLs Matching setup
=========
<code>
/*
        (^|\s)                            : ensure that we are not matching an url
                                            embeded in an other string
                                            
        (https?:\/\/)?                    : the http or https schemes (optional)
        
        [\w-]+(\.[\w-]+)+\.?              : domain name with at least two components;
                                            allows a trailing dot
                                            
        (:\d+)?                           : the port (optional)
        
        (\/\S*)?                          : the path (optional)
        
       */
</code>
Disclaimer
=========
It's my 1st code ever, and it was created to serve my needs, if you think there are roam for improvement please let me know.

Cheers from Egypt
