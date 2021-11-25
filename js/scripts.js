$(document).ready(function() {
    "use strict";

    PageScroll();




    // Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    handlePreloader();

    //                 <-- NAVBAR
    window.onscroll = function() { myFunction() };

    // Get the navbar
    var navbar = document.getElementById("lower-header");
    var mobile_navbar = document.getElementById("header-menu-mob");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    var mobile_sticky = mobile_navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("active")

        } else {
            navbar.classList.remove("active");

        }
        if (window.pageYOffset >= mobile_sticky) {
            mobile_navbar.classList.add("active")
        } else {
            mobile_navbar.classList.remove("active")
        }
    }
    //                   NAVBAR -->


    // Category MENU

    $(".my-menu ul li, .overlay")
        .mouseenter(function() {
            $(".overlay").addClass("active")
        })
        .mouseleave(function() {
            $(".overlay").removeClass("active")
        })



    var myJson = $.getJSON("../data/db.json", function(data) {
        $(".my-menu>ul>li:nth-child(1)").mouseenter(data, function() {
            $(".overlay>ul>li").remove();
            $.each(data[0].Children, function(i) {
                $(".overlay>ul").append(`<li><a href="">${data[0].Children[i].name}</a></li>`)
            })
            $(".sub-menu-name").text(data[0].name);
            $(".overlay").css("background", data[0].background)

        })

        $(".my-menu>ul>li:nth-child(2)").mouseenter(data, function() {
            $(".overlay>ul>li").remove();
            $.each(data[1].Children, function(i) {
                $(".overlay>ul").append(`<li><a href="">${data[1].Children[i].name}</a></li>`)
            })
            console.log(data[1].name)
            $(".overlay").css("background", data[1].background)
            $(".sub-menu-name").text(data[1].name);

        })
    })


    $(function() {
        $(".wish-list").on("click", function() {
            $(this).find('i').toggleClass("active");
        })
    })




    $(".category-mobile").on("click", () => {
        $(".category-mobile").toggleClass("active");
        $(".mobile-overlay").toggleClass("active");
    })

    $(".categories li").on("click", () => {
        $(".subcategories").addClass("active");
    })
    $(".back").on("click", () => {
        $(".subcategories").removeClass("active");
    })










    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // OWL SLIDER
    $('.category-slider').owlCarousel({
        loop: true,
        margin: 4,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ['<i class="feather-arrow-left-circle"></i>', '<i class="feather-arrow-right-circle"></i>'],
        autoWidth: true
    })

    $('.slider-banner').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        autoplay: false,
        dots: true,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        items: 1,
    })
    $('.product-banner').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: false,
        dots: true,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        items: 1,
    })
    $('.slider-banner-2').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        autoWidth: true
    })

    $('.slider-banner-3').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        dots: true,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        items: 3,
        center: true,
    })

    $('.banner-slider-3').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ['<i class="feather-arrow-left-circle"></i>', '<i class="feather-arrow-right-circle"></i>'],
        items: 3,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            749: {
                items: 3,
                nav: true
            }
        }
    })

    $('.banner-slider-4').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ['<i class="feather-arrow-left-circle"></i>', '<i class="feather-arrow-right-circle"></i>'],
        items: 4,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            749: {
                items: 4,
                nav: true
            }
        }
    })

    $('.banner-slider-5').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ['<i class="feather-arrow-left-circle"></i>', '<i class="feather-arrow-right-circle"></i>'],
        items: 5,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            749: {
                items: 4,
                nav: true
            },
            1023: {
                items: 5,
                nav: true
            }
        }
    })



    $(".nav-item-toggle").on({
        mouseenter: function() {
            $(this).children().addClass('show');
        },
        mouseleave: function() {
            $(this).children().removeClass('show');
        }
    });

    $('.toggle-nav').on('click', function() {
        $('.navigation,.main-content,.nav-header').toggleClass('menu-active');
        return false;
    });

    // $('.wishlist-btn').on('click', function() {
    //     $(this).find('i').toggleClass('active');
    //     return false;
    // });


    $('.category-card').on('click', function() {
        $('.category-card').removeClass('active');
        $(this).addClass('active');
        return false;
    });





    // navigation slide menu mobile
    $('.nav-menu').on('click', function() {
        $(this).toggleClass('active');
        $('.navigation').toggleClass('nav-active');
    });
    $('.close-nav').on('click', function() {
        $('.navigation').removeClass('nav-active');
        return false;
    });


    // $('.nav-link').on('click', function() {
    //     $('.nav-link').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });


    $('input[name="color-radio"]').on('change', function() {
        if (this.checked) {
            $('body').removeClass('color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid');
            $('body').addClass('color-theme-' + $(this).val());
        }
    });




    $('#checkout').on('click', function() {
        $('.cart-box').fadeOut(0);
        $('.checkout-box').fadeIn();
    });
    $('#payment').on('click', function() {
        $('.checkout-box').fadeOut(0);
        $('.payment-box').fadeIn();
    });

    $(window).on('load', function() {
        $('#modalSubscribe').modal('show');
    });





});





function PageScroll() {
    $(".scroll-tiger").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        $('.overlay-section').removeClass('active');
        e.preventDefault();

    });
}