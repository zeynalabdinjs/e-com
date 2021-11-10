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

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // OWL SLIDER
    $('.category-slider').owlCarousel({
        loop:true,
        margin:4,
        nav:true,
        autoplay:false,  
        dots:false,
        navText:['<i class="feather-arrow-left-circle"></i>','<i class="feather-arrow-right-circle"></i>'],
        autoWidth:true,
        rtl:true
    })

    $('.slider-banner').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        autoplay:false,  
        dots:true,
        navText:['<i class="feather-chevron-left"></i>','<i class="feather-chevron-right"></i>'],
        items:1,
        rtl:true
    })
    $('.product-banner').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        autoplay:false,  
        dots:true,
        navText:['<i class="feather-chevron-left"></i>','<i class="feather-chevron-right"></i>'],
        items:1,
        rtl:true
    })
    $('.slider-banner-2').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        autoplay:false,  
        dots:false,
        navText:['<i class="feather-chevron-left"></i>','<i class="feather-chevron-right"></i>'],
        autoWidth:true,
        rtl:true
    })

    $('.slider-banner-3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:false,  
        dots:true,
        navText:['<i class="feather-chevron-left"></i>','<i class="feather-chevron-right"></i>'],
        items:3,
        center: true,
        rtl:true
    })

    $('.banner-slider-3').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:false,  
        dots:false,
        navText:['<i class="feather-arrow-left-circle"></i>','<i class="feather-arrow-right-circle"></i>'],
        items:3,
        rtl:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            749:{
                items:3,
                nav:true
            }
        }
    })

    $('.banner-slider-4').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:false,  
        dots:false,
        navText:['<i class="feather-arrow-left-circle"></i>','<i class="feather-arrow-right-circle"></i>'],
        items:4,
        rtl:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            749:{
                items:4,
                nav:true
            }
        }
    })

    $('.banner-slider-5').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:false,  
        dots:false,
        navText:['<i class="feather-arrow-left-circle"></i>','<i class="feather-arrow-right-circle"></i>'],
        items:5,
        rtl:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            749:{
                items:4,
                nav:true
            },
            1023:{
                items:5,
                nav:true
            }
        }
    })
    

    
    $(".nav-item-toggle").on({
        mouseenter: function () {
            $(this).children().addClass('show');
        },
        mouseleave: function () {
            $(this).children().removeClass('show');
        }
    });
    
    $('.toggle-nav').on('click', function () {
        $('.navigation,.main-content,.nav-header').toggleClass('menu-active');
        return false;
    });
    $('.wishlist-btn').on('click', function () {
        $(this).find('i').toggleClass('text-grey-500 text-success');
        return false;
    });

    $('.category-card').on('click', function () {
        $('.category-card').removeClass('active');
        $(this).addClass('active');
        return false;
    });


    // navigation slide menu mobile
    $('.nav-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.navigation').toggleClass('nav-active');
    });
    $('.close-nav').on('click', function () {
        $('.navigation').removeClass('nav-active');
        return false;
    });
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    
    $('input[name="color-radio"]').on('change', function () {
        if (this.checked) {
          $('body').removeClass('color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid');
          $('body').addClass('color-theme-' + $(this).val());
        }
    });

    $('#checkout').on('click', function () {
        $('.cart-box').fadeOut(0);
        $('.checkout-box').fadeIn();
    });
    $('#payment').on('click', function () {
        $('.checkout-box').fadeOut(0);
        $('.payment-box').fadeIn();
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

