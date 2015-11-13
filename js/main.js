$(document).ready(function($) {

    $('.works-slider ul').slick();

	$('.page-down').click(function(){
	    $("html, body").animate({ scrollTop: $(window).scrollTop() + $(window).height()}, 600);
	    return false;
	});


	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll) {
	        $(".navbar").addClass("scrolling");
	    } else {
	        $(".navbar").removeClass("scrolling");
	    }
	});

    // On Resize
    $(window).on('resize', function(){
      adjust_fixed_height_elements_onresize();
    });

    function adjust_fixed_height_elements_onresize(){
      document_height = $(window).height();
      $('.automated').css('height', document_height + 'px');

    };

    adjust_fixed_height_elements_onresize();

	$('#our-process').click(function () {
        parent.location.hash = "our-process";
        $root.animate({
            scrollTop: $("#section6").offset().top - 61
        }, { duration: 1500,easing: 'easeOutExpo'});
        return false;
    });

 // Mmenu scroll
 // 	function stopDefAction(evt) {
	//     evt.preventDefault();
	// }

	// document.getElementById('services').addEventListener(
	//     'click', stopDefAction, false
	// );
	//$('.navbar a[href*=#]').bind('click', function(e) {
	$('.navbar a[href*=#]').click(function(e){

		e.preventDefault();

		var target = $(this).attr("href"); 

		var offset = 0;
	
		if(target == "#services")
			offset = 220;
		
		$('html, body').stop().animate({ scrollTop: $(target).offset().top + offset}, 500, function() {
		     //location.hash = target; 
		});
		
		return false;
   	});

	if ($(window).width() < 768) {
	   $('.navbar a').on('click', function(){
	   	$('.navbar-toggle').click();
	   });
	}
	//Parallax

	// $(".automated").parallax("50%", -0.8);
	// $(".services").parallax("50%", 0.8);
	// $(".footer").parallax("50%", -0.5);

	$("body").vegas({
		timer: false,
		transition: ['fade', 'fade2', 'swirlLeft', 'swirlRight', 'burn2', 'blue2', 'flash2', 'flash'],
		transitionDuration: 25000,
		delay: 10000,
	    slides: [
	        { src: "img/backgrounds/automated1.jpg" },
	        { src: "img/backgrounds/automated2.jpg" },
	        { src: "img/backgrounds/automated3.jpg" },
	        { src: "img/backgrounds/automated4.jpg" }
	    ]
	});
});