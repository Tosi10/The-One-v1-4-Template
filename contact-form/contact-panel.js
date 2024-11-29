// JavaScript Document

// contact form panel
$(document).ready(function() {
	$("div.panel-button").click(function(){
		$("div#panel").animate({
			height: "295px"
		})
		.animate({
			height: "245px"
		}, "fast");
		$("div.panel-button").toggle();
	
	});	
	
   $("div#close-button").click(function(){
		$("div#panel").animate({
			height: "0"
		}, "fast");
		
	
   });
});


// google maps panel
$(document).ready(function() {
	$("div.panel-button-gmaps").click(function(){
		$("div#panel-gmaps").animate({
			height: "300px"
		})
		.animate({
			height: "250px"
		}, "fast");
		$("div.panel-button-gmaps").toggle();
	
	});	
	
   $("div#close-button-gmaps").click(function(){
		$("div#panel-gmaps").animate({
			height: "0"
		}, "fast");
		
	
   });
});