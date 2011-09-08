/*!
 * jQuery stayInWebApp Plugin
 * version: 0.1 (2011-09-08)
 *
 */
 
 ;(function($) {
	//extend the jQuery object, adding $.stayInWebApp() as a function
	$.extend({
		stayInWebApp: function(selector) {
			//detect iOS full screen mode
			if(("standalone" in window.navigator) && window.navigator.standalone) {
				//if the selector is empty, default to all links
				if(!selector) {
					selector = 'a';
				}
				//bind to the click event of all specified elements
				$("body").delegate(selector,"click",function(event) {
					//get the destination of the link clicked
					var dest = $(this).attr("href");
					
					//if the destination is an absolute url, ignore it
					if(dest.substring(0,4) != 'http') {
					  //prevent default behavior (opening safari)
					  event.preventDefault();
					  //update location of the web app
					  self.location = dest;
					}
				});
			}
		} //end stayInWebApp func
	});
})( jQuery );