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

});