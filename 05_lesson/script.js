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





/// ----------------------05 LESSON SCROLL BUTTON----------------
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#myBtn').fadeIn(); // kdyz si nascrolloval 100 px, ukaz tlaca
        } else {
            $('#myBtn').fadeOut();
        }


/// UKOL!!  featurka: plovouci farma
// farmu do trid: ovlivni css tohodle bloku
// $("fixedblock").css({"position" : "fixed"})
// dosahnuli horniho okraje stranek, prirad tuhle vlastnost tride fixedblock
        if ($(this).scrollTop() > 142){
            $(".fixedblock").css({"position" : "fixed","z-index" : "9"});
        }else{
            $(".fixedblock").css({"position" : "inherit"});
            $(".fixedblock").css({"top" : "0"});

        }
    });
    $('#myBtn').click(function () {
        $('html, body').animate({scrollTop: 0}, 700);
        return false;
    })

    $("a[href^='#']").click(function () { // kdyz najdes element s mrzikou
        // Scrolltop=vzdalenost od svrchu
        // musime zjistit kde je nazev kotvy
        // najdi vzdalenost od horniho okraje atributu kotvy

        var par_a = $(this).attr('href');
        alert(par_a,h_top);
        var h_top = $(par_a).offset().top;   // jak zjistit vzdalenost od svrchu, jak se tam presunout??
        $('html,body').animate({scrollTop: h_top},700);
        return false;
    })

});



