$(document).ready(function() {
    $('.js-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        appendDots: $('.js-banner-dots'),
        autoplay: false,
        arrows: false,
        rows: 0,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 3
        //         }
        //     }
        // ]
    });

    // // On resize
    // $(window).on('resize', function() {
    //     if (window.innerWidth < 992) {
    //     } else {
    //     }
    // });
    
    // // On load
    // if (window.innerWidth < 992) {
    // } else {
    // }
});