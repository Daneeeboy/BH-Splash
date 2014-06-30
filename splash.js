// JavaScript Document

$(document).ready(function() {
	
	$(".region").click(function(event) {
		var target = $(event.target);
		if(target.is("a")) {
			// link click
		} else {
			window.location.href = $(this).attr("data-destination");
		}
	});
	
	var img_src = "";
	var new_src = "";
	
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
	$(".overlay").each(function(){
	var cacheImage = document.createElement('img');
	cacheImage.src = $(this).attr('data-rollover');
	cache.push(cacheImage);
	});

});