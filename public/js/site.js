$(function() {
    "use strict";
    
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length)
                return $("html, body").animate({ scrollTop: e.offset().top - 57 }, 1e3, "easeInOutExpo"), !1;
        }
    }),
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide")
    }),
    $("body").scrollspy({
        target: "#mainNav",
        offset: 57
    });
    changeMenuDesignOnScroll();
    $(window).scroll(changeMenuDesignOnScroll);
});

function includeHTML() {
    var z = document.getElementsByTagName('*');
    for (let i = 0; i < z.length; i++) {
        const element = z[i];
        
        var htmlFile = element.getAttribute('include-html');

        if (htmlFile) {
            $(element).load(htmlFile);
        }
    }
}

function changeMenuDesignOnScroll() {
    $("#mainNav").offset().top > 100 ? $("#mainNav").addClass("navbar-shrink") : $("#mainNav").removeClass("navbar-shrink");
}
