// JavaScript Document

$(document).ready(function() {
	
	var img_src = "";
	var new_src = "";
	
	function isRetina(){
		return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
	}
	
	var img_width = "";
	var img_height = "";
	
	if(isRetina()) {
		$(document).find('img.mobile').each(function() {
			img_src = $(this).attr('src');
			new_src = $(this).attr('data-retina');
			img_width = $(this).width();
			img_height = $(this).height();
			
			$(this).attr('src', new_src);
			$(this).width(img_width);
			$(this).height(img_height);
		});
	}
	
	/*$(".region").on("click touchstart", function(event) {
		event.preventDefault();
		var target = $(event.target);
		if(target.is("a")) {;
			// do nothing
		} else if (target.is("img")) { 
			if(target.hasClass("ontouch")) {
				if(isRetina()) {
					new_src = target.attr('data-retina-on');
				} else {
					new_src = target.attr('data-on');	
				}
				
				target.attr('src', new_src);
				target.height("100%");
				target.width("100%");
			}
		} else {
			window.location.href = $(this).attr("data-destination");
		}
	});*/
	
	$(".rollover").hover(function(){
		img_src = $(this).attr('src'); 
		new_src = $(this).attr('data-rollover'); 
		$(this).attr('src', new_src); 
		$(this).attr('data-rollover', img_src);
	},
	
	function(){
		$(this).attr('src', img_src);
		$(this).attr('data-rollover', new_src); 
	});
	
	var cache = new Array();
	
	$(".rollover").each(function(){
		var cacheImage = document.createElement('img');
		cacheImage.src = $(this).attr('data-rollover');
		cache.push(cacheImage);
	});
	

});