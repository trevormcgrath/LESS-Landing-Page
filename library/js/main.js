$(document).ready(function() {

	console.log("jQuery v1.12.0 loaded");
	
	var size = window.innerWidth;

	console.log(size);

	$('.has-Submenu').click( function(e) {
    	e.preventDefault();
    	$(this).parent().toggleClass('tap');
	});

});