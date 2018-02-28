$(document).ready(function(){
    var touch = $("#touch-menu"); // $ je jako jquerySelector
    var menu  = $("nav"); // find elemtn that is called nav

    $(touch).on("click",function(e){
        e.preventDefault();
        menu.slideToggle(); // hide nav on click
    });

    $(window).resize(function(){
        var w = $(window).width();
        if (w>768 && menu.is(":hidden")){
            menu.removeAttr("style");
        }
    });
    }
);