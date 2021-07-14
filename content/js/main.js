$(window).on("scroll", function() {
  if($(window).scrollTop() > 65) {
      $(".main-header").addClass("active");
  } else {
     $(".main-header").removeClass("active");
  }
});


$(document).ready(function() {
  $(".partner-slider").slick({    
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 800,
    dots: false,
    arrows:false,
});
	$(".hero-slider").slick({    
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 800,
        dots: true,
        arrows:false,
        centerMode: true,
        centerPadding: '0px',

  });
  
 
	
    });
    var scrollToTopBtn = document.getElementById("toTop")
    var rootElement = document.documentElement
    function scrollToTop() {
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)