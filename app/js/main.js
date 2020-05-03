$(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button class="animated fadeInDownBig arrows arrows-right"></button>',
        nextArrow: '<button class="animated fadeInDownBig arrows arrows-left"></button>',
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    arrows: false,
                }
            },
        ]
    });


    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 620) {
            $('.header').addClass('black').animate();
            timer = 2000

        }
        else {
            $('.header').removeClass('black');
        }
    });
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1000) {
            $('.skill__info-line-result').addClass('--on')
        }
    });
    let timer = setTimeout(function MySetInterval() {
        $('.fact__item-number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }, 2000);
    new WOW().init();
})