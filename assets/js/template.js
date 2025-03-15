jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};

	var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});

});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".certificate-slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function showSlide() {
        const totalSlides = document.querySelectorAll(".certificate-item").length;
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", function () {
        index++;
        showSlide();
    });

    prevBtn.addEventListener("click", function () {
        index--;
        showSlide();
    });

    // เลื่อนอัตโนมัติทุก 3 วินาที
    setInterval(() => {
        index++;
        showSlide();
    }, 4000);
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.navbar-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    menuToggle.addEventListener('click', function() {
        navbarCollapse.classList.toggle('collapse');
    });
});
