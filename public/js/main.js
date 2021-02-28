jQuery("document").ready(function($){
    
    window.onscroll = function () {
        if(window.pageYOffset > 140) {
            $("#header").addClass("active");
            $("#header .navbar-toggler").addClass("collapsed");
            $("#navbarNav").removeClass("show");
            
        } else {
            $("#header").removeClass("active");
        }
    }

  //OWL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
            },
        },
    });
});

