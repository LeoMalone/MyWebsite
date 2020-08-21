"use strict";
var myNameSpace = function() {

    jQuery(function($) {
        var $nav = $('#customNav');
        var $win = $(window);
        var winH = $win.height();
    
        $win.on("scroll", function () {
            $nav.toggleClass("c_hide", $(this).scrollTop() < (winH - 1) );
        }).on("resize", function(){ 
           winH = $(this).height();
        });
    });
    
    $(window).on('load', function() {    
        // Initial Logo/Buttons fade in
        $("#photo").delay(500).fadeIn(2000);
        $("#name").delay(500).fadeIn(2000);
        $("#quote").delay(500).fadeIn(2000);
     });

    function scrollTo(id) {
        if (id == "top") {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        } else {
            $("html, body").animate({
                scrollTop: $(id).offset().top
            }, 1000);
        }
    }    

    return {
        scrollTo: scrollTo
    }
}();