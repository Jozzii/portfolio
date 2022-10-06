/*/ Swiperjs Initializer
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	keyboard: {
	  enabled: true,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });
  */
// jQuery Initializer
$(document).ready(function() {




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

	// $('.js--wp-4').waypoint(function(direction) {
	// 	$('.js--wp-4').addClass('animated slideInUp');
	// }, {
	// 	offset: '64%'
	// });


	// test
	


});


