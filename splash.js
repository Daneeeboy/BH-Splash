// JavaScript Document

$(document).ready(function() {
	
	var img_src = "";
	var new_src = "";
	
	function isRetina(){
		if (window.matchMedia) {
            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
            if (mq && mq.matches || (window.devicePixelRatio > 1)) {
                return true;
            } else {
                return false;
            }
        }
	}
	
	var img_width = "";
	var img_height = "";
	
	if(isRetina()) {
		alert("HIYA");
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
	
	$(".region").on("click", function(event) {
		var target = $(event.target);
		if(target.is("a")) {;
			// do nothing
		} else if($(".mobile").is(":visible")) {
			$(".region").removeClass("on");
			$(this).addClass("on");
		    if (target.is("img")) { 
				if(target.hasClass("ontouch")) {
					if(isRetina()) {
						new_src = target.attr('data-retina-on');
					} else {
						new_src = target.attr('data-on');	
					}
					
					target.attr('src', new_src);
				}
			}
		} else {
			event.preventDefault();
			window.location.href = $(this).attr("data-destination");
		}
	});
	
	$(".arrow").on("touchstart", function(event) {
		event.preventDefault();
		window.location.href = $(this).parent().parent().attr("data-destination");
	});
	
	$(".rollover").on("click", function(){
		img_src = $(this).attr('src'); 
		if(isRetina()) {
			new_src = $(this).attr('data-retina-rollover');
		} else {
			new_src = $(this).attr('data-rollover'); 
		}
		$(this).attr('src', new_src); 
		$(this).attr('data-rollover', img_src);
	});
	
	$(".rollover").hover(function(){
		img_src = $(this).attr('src'); 
		if(isRetina()) {
			new_src = $(this).attr('data-retina-rollover');
		} else {
			new_src = $(this).attr('data-rollover'); 
		}
		$(this).attr('src', new_src); 
		$(this).attr('data-rollover', img_src);
	},
	
	function(){
		$(this).attr('src', img_src);
		if(isRetina()) {
			$(this).attr('data-retina-rollover', new_src); 
		} else {
			$(this).attr('data-rollover', new_src); 
		}
	});
	
	var cache = new Array();
	
	$(".rollover").each(function(){
		var cacheImage = document.createElement('img');
		if(isRetina) {
			cacheImage.src = $(this).attr('data-retina-rollover');
		} else {
			cacheImage.src = $(this).attr('data-rollover');
		}
		cache.push(cacheImage);
	});
	
	function regionSelect(element) {
		element.addClass("on");
	}
	
	function regionDeselect(element) {
		element.removeClass("on");	
	}
	
	$(".region").hover(function() {
		regionSelect($(this));		
	}, function() {
		regionDeselect($(this));	
	});
	
	

});