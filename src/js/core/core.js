/*
 * Ox Scripts File
 * Author: Davs Howard
 *
 * This file should contain any js scripts you want to add to the site and will be called automatically in the footer so as not to slow the page load.
 *
*/

/*---------------------------------
	Debouncer

	Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.

	Usage:
	$(window).resize(function () {
		debouncer(function(){
			alert('Resize...');
			//...
		}, 500, "some unique string");
	});
-----------------------------------*/
var debouncer = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();


/*---------------------------------
	Mobile / breakpoint Check
-----------------------------------*/
function mobilecheck() {
	var check = false;
	(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) { check = true; } })(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

function breakpointCheck() {
	var $r = $(".responsiveChecker");

	if ($r.css("font-weight") === "500" ) {
		return 5;
    } else if ($r.css("font-weight") === "400" ) {
		return 4;
    } else if ($r.css("font-weight") === "300" ) {
		return 3;
    } else if ($r.css("font-weight") === "200" ) {
		return 2;
    } else if ($r.css("font-weight") === "100" ) {
		return 1;
    }
}


/*---------------------------------
	Smooth Scroll
-----------------------------------*/
function smoothScroll() {
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top - 75
	            }, 1000);
	            return false;
	        }
	    }
	});
}


/*---------------------------------
	Get Viewport Dimensions

	Returns object with viewport dimensions to match css in width and height properties
-----------------------------------*/
function fullscreen() {
	// Get the height and width of the viewport window
	var viewportHeight 	= $(window).height(),
		viewportWidth 	= $(window).width(),
		fullscreenEl	= $('.viewport');

	// Set any elements with .viewport to the defined height and width.
	fullscreenEl.height(viewportHeight);
	fullscreenEl.width(viewportWidth);
}


/*---------------------------------
	Responsive Videos - Requires fitvids.js
-----------------------------------*/
function responsiveVideos() {
	$('.main').fitVids();
}


/*---------------------------------
	Accordion
-----------------------------------*/
function accordion() {
	var $panes = $('.accordion > .accordion__item > .accordion__pane'),
		$title = $('.accordion > .accordion__item > .accordion__title'),
		speed = 200,
		openClass = 'is-open';

	$panes.hide();

	$title.on('click touchstart', function() {
		var $el = $(this),
			$elItem = $el.parent(),
			$elPane = $elItem.children('.accordion__pane');

		if ($elItem.hasClass(openClass)) {
			$panes.slideUp(speed);
			$elItem.removeClass(openClass);
		} else {
			$elItem.addClass(openClass);
			$panes.slideUp(speed);
			$elPane.slideDown(speed);
		}
	});
}


/*---------------------------------
	Animations - Requires waypoints.js
-----------------------------------*/
function animationInit() {
	//Disable on mobile to help GPU
	if (!mobilecheck()) {
		$('.animated').waypoint(function() {
			$(this).toggleClass($(this).data('animated'));
		}, {
			offset: 'bottom-in-view',
			triggerOnce: true
		});
	} else {
		$('.animated').removeClass('hideme');
	}

	// Disable animations on IE9
	if($("html").hasClass("lt-ie9")) {
		$(".hideme").removeClass("hideme");
	}
}

/*---------------------------------
	Carousel
	Requires owlcarousel.js

	Visit http://www.owlcarousel.owlgraphic.com/docs/started-welcome.html for more documentation.
-----------------------------------*/
function carouselInit() {
	$(".owlcarousel").owlCarousel({
		autoplay: true,
		items: 1,
		loop:true,
		nav: true,
		navText: [
			"<span class='prev' data-icon='&#xe601;'></span>",
			"<span class='next' data-icon='&#xe602;'></span>"
		],
		dots: false
	});
}

/*---------------------------------
	Navigation - primary

	Initilising menu and hamburger icon
-----------------------------------*/
function mobileMenuClick() {
	$('.hamburger').on('click touchstart', function(event) {
		event.preventDefault();

		$(this).toggleClass('is-active');
		$('body').toggleClass('open-nav');
	});
}

function mobileMenuDetach() {
	var navprimary = $('.nav__primary').detach();

	if (breakpointCheck() < 2) {
		navprimary.appendTo('.nav__mobile');
	} else {
		navprimary.appendTo('.nav__bar .row');
	}
}

/*---------------------------------
	Breaker Parallax

	Creates parallax effect on defined element but scroll speed determined by height of the background image within.
-----------------------------------*/
function breakerParallax() {
	var el 		= $('.breaker'),
		elImg 	= el.find(el+'__image');

	// If there are any found elements
	if (el[0]) {
		var viewportScrollTop 	= $(window).scrollTop(),
		    viewportHeight 		= $(window).height(),
		    viewportAdjust 		= parseInt(viewportHeight) + parseInt(viewportScrollTop),
		    elTop 				= el.offset().top.toFixed(0),
		    elHeight			= el.outerHeight(),
		    elBottom			= parseInt(elTop) + parseInt(elHeight);

		// Checks to see if element is one the page (both scrolling into and out of view)
		if (viewportAdjust >= elTop && viewportScrollTop < elBottom) {
			var elImgHeight		= elImg.height(),
				elHeightDiff	= elImgHeight - elHeight,
				offsetDiff		= parseInt(viewportHeight) + parseInt(elHeight),
				scrollDiff  	= viewportAdjust - elTop;

			var imagetranslateY = ((elHeightDiff/offsetDiff)*scrollDiff).toFixed(2);
			elImg.css('transform', 'translate3d(0, -'+imagetranslateY+'px, 0)');
		}
	}
}

jQuery(document).ready(function($){

	// ==== EXECUTE ==== //
	smoothScroll();
	responsiveVideos();
	//animationInit();
	//carouselInit();
	//breakerParallax();
	mobileMenuClick();

	// ==== SCROLL EVENTS ==== //
	$(window).on("scroll", function() {

	});

	// ==== RESIZE EVENTS ==== //
	$(window).on("resize", function() {
		debouncer(function() {

		}, 500);
	});

	// ==== ORIENTATION CHANGE EVENTS ==== //
	$(window).on("orientationchange", function() {

	});

	// ==== LOAD EVENTS ==== //
	$(window).on("load", function() {

	});
});
