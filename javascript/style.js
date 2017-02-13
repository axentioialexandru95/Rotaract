$(document).ready(function() {

AOS.init();

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass('big');
    }
    else {
        $(".navbar").removeClass('big');
    }
});

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

});