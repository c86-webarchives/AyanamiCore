(function($,window,document,undefined){$.fn.doubleTapToGo=function(params){if(!('ontouchstart' in window)&&!navigator.msMaxTouchPoints&&!navigator.userAgent.toLowerCase().match(/windows phone os 7/i))return!1;this.each(function(){var curItem=!1;$(this).on('click',function(e){var item=$(this);if(item[0]!=curItem[0]){e.preventDefault();curItem=item}});$(document).on('click touchstart MSPointerDown',function(e){var resetItem=!0,parents=$(e.target).parents();for(var i=0;i<parents.length;i++)
if(parents[i]==curItem[0])
resetItem=!1;if(resetItem)
curItem=!1})});return this}})(jQuery,window,document)
;