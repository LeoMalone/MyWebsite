"use strict";
var myNameSpace = function() {

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

    jQuery(function($) {
        var $nav = $('#customNav');
        var $win = $(window);
        var winH = $win.height();   // Get the window height.
    
        $win.on("scroll", function () {
            $nav.toggleClass("c_hide", $(this).scrollTop() < (winH - 1) );
        }).on("resize", function(){ // If the user resizes the window
           winH = $(this).height(); // you'll need the new height value
        });
    });
    
    $(window).on('load', function() {    
        // Initial Logo/Buttons fade in
        $("#photo").delay(500).fadeIn(2000);
        $("#name").delay(500).fadeIn(2000);
        $("#quote").delay(500).fadeIn(2000);
     });

    return {
        scrollTo: scrollTo
    }
}();