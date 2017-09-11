$(window).on("load", function(){
    $("#loader").fadeOut(), $("#loader-wrapper").delay(200).fadeOut("slow");
});
$(document).ready(function(){
    // call material js 
    $.material.init();
    
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['land', 'football', 'cricket', 'basketball', 'volleyball', 'badminton', 'tennis', 'tabletennis', 'squash', 'carrom', 'chess', 'powerlifting', 'kabaddi'],
        easing: 'linear',
        css3: true,
        loopTop: true,
        loopBottom: true,
        afterRender: function(){
            $('#menu').css("display", "none");
        },
        afterLoad: function(anchorLink){
            if(anchorLink == 'land'){
                $('#menu').css("display", "none");
            }
            else{
                $('#menu').css("display", "block");
            }
        },
    });
    // tilt js
    $('.cont').tilt({
        glare: true,
        maxGlare: 0.4,
        scale:1.15
    })
    //
    $(".highl").click(function(){
        $(".eve-container > div").css("display", "none");
        $(".highlight").css("display", "block");
    });
    $(".rulel").click(function(){
        $(".eve-container > div").css("display", "none");
        $(".rule").css("display", "block");
    });
    $(".winnerl").click(function(){
        $(".eve-container > div").css("display", "none");
        $(".winner").css("display", "block");
    });
    $(".prizel").click(function(){
        $(".eve-container > div").css("display", "none");
        $(".prize").css("display", "block");
    });
    // slider js
    $('.event-slider').unslider({
        autoplay: true,
        arrows: false,
        nav: false,
        keys: false
    });
    // velocity code for section1 animation
    var isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = !!("ontouchstart" in window);
    function r (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $.Velocity.defaults.easing = "linear";
    if(!isMobile){
        var dotsCount, dotsHtml = "", $count = $("#count"), $dots;
        dotsCount = isChrome ? 10 : 8;

        for (var i = 0; i < dotsCount; i++) {
            dotsHtml += "<div class='dot'></div>";
        }

        $dots = $(dotsHtml);
        $count.html(dotsCount);
        var $container = $("#section1back");
        var screenWidth = window.screen.availWidth,
        screenHeight = window.screen.availHeight;

        $dots.velocity({ 
            translateX: [ 
            function() { return "+=" + r(-screenWidth/2.5, screenWidth/2.5) },
            function() { return r(0, screenWidth) }
            ],
            translateY: [
            function() { return "+=" + r(-screenHeight/2.75, screenHeight/2.75) },
            function() { return r(0, screenHeight) }
            ],
            translateZ: [1, 1]
        }, { duration: 8000, delay: 300, loop: 20 })
        .velocity("reverse", { easing: "linear" })
        .appendTo($container);
    }
});


