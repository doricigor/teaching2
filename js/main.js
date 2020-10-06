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

    let check = 0;

    $(window).scroll(function() {
        // Udaljenost count wrapera od gore
        const countFromTop = $('.js-count').offset().top;
        // Visina ekrana
        const windowHeight = window.innerHeight;
        // Razlika udaljenosti i visine ekrana
        const offset = countFromTop - windowHeight;
        // Pozicija skrola
        const windowScroll = $(window).scrollTop();

        if (check === 0 && windowScroll > offset) {
            $('.js-count-num').each(function() {
                const $this = $(this);
                const countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            check = 1;
        }
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