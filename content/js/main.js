////// menu scroll //////////

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 65) {
        $(".main-header").addClass("active");
    } else {
        $(".main-header").removeClass("active");
    }
});



// const texts = ['برای شما پروژه ایجاد میکنیم.', 'ما دنیای جدیدی رو برای شما ایجاد میکنیم.', ];
// const display = document.querySelector('.typing-text');
// let textIndex = 0;
// let characterIndex = 0;
// display.classList.add('typing');

// setInterval(() => {

//     if (characterIndex === texts[textIndex].length) {
//         characterIndex = 0;
//         if (textIndex === texts.length - 1) {
//             textIndex = 0;
//         } else {
//             textIndex++;
//         }
//         display.innerHTML = '';
//         return;
//     }

//     display.innerHTML += texts[textIndex][characterIndex];
//     characterIndex++;

// }, 60);





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

    $(".customer2-slider").slick({
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
const instance = new Typewriter('#typewriter', {
    strings: ['ما پروژه ایجاد میکنیم', 'ما دنیای جدیدی را برای شما ایجاد میکنیم'],
    autoStart: true,
    loop: true,
  });

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