////// menu scroll //////////

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 65) {
        $(".main-header").addClass("active");
    } else {
        $(".main-header").removeClass("active");
    }
});


$(window).on("scroll", function() {
    if ($(window).scrollTop() > 65) {
        $(".top-nav").addClass("display-none");
    } else {
        $(".top-nav").removeClass("display-none");
    }
});


////// sliders //////////

$(document).ready(function() {

    $(".hero-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2100,
        speed: 1000,
        dots: true,
        dotsClass: 'slide-dots',
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
    });

    $(".testimonial-slider").slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 800,
        centerPadding: '0px',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    speed: 800,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    speed: 800,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });
    $(".customer-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 800,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    speed: 800,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    speed: 800,
                    dots: false,
                    arrows: false,
                }
            }
        ]

    });


});


////// type-writer////////

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-left: 2px solid #fff}";
    document.body.appendChild(css);
};



////// scrollToTopBtn //////////

var scrollToTopBtn = document.getElementById("toTop")
var rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)