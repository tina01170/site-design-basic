$(document).ready(function() {
    /*menu*/ 
    $(".menu-toggle").click(function() {
        $(".main-navigation .nav-menu").slideToggle("slow","linear");
    });
	
	
    // Scroll to Top 
	$(window).on('scroll', function() {
		if ($(this).scrollTop() < 100) {
			$('.topbutton') .fadeOut();
		} else {
			$('.topbutton') .fadeIn();
		}
	});

	$(".topbutton").on('click',function() {
		$('html ,body').animate({scrollTop : 0},"slow");
	});


	// search
	$(".search-show").on('click',function() {
		$('.search .search-wrap .search-form').toggleClass("active");
	});

});