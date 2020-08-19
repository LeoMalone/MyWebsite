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

    return {
        scrollTo: scrollTo
    }
}();