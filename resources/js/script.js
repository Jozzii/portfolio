
// jQuery Initializer
$(document).ready(function() {

	$('.js--section-services').waypoint(function(direction){
		if(direction=="down") {
			$('nav').addClass('sticky');
	
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '20%;'
	});
	
	
	/*SCROLL TO ELEMENTS*/
			$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
			// On-page links
			if (
			  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			  && 
			  location.hostname == this.hostname
			) {
			  // Figure out element to scroll to
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			  // Does a scroll target exist?
			  if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000, function() {
				  // Callback after animation
				  // Must change focus!
				  var $target = $(target);
				  $target.focus();
				});
			  }
			}
		  });
	
	
		  /*Animation*/
	
		  $('.js--wp-2').waypoint(function(direction) {
			$('.js--wp-2').addClass('animated pulse');
		}, {
			offset: '60%'
		});
	
		$('.js--wp-3').waypoint(function(direction) {
			$('.js--wp-3').addClass('animated slideInUp');
		}, {
			offset: '60%'
		});
	
		 $('.js--wp-4').waypoint(function(direction) {
			$('.js--wp-4').addClass('animated bounceInUp');
		}, {
			offset: '75%'
		 });
		
	});