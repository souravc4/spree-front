$(window).on("load", function(){
    $("#loader").fadeOut(), $("#loader-wrapper").delay(200).fadeOut("slow");
});
$(document).ready(function(){
    
    var isMobile = !!("ontouchstart" in window);

    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['land', 'football', 'cricket', 'basketball', 'volleyball', 'badminton', 'tennis', 'tabletennis', 'squash', 'carrom', 'chess', 'powerlifting', 'kabaddi', 'handball'],
        easing: 'linear',
        css3: true,
        afterRender: function(){
            $('#menu').css("display", "none");
            $('#pagepiling').css("margin-left", "0");
            $('#pagepiling .pp-section').css("width", "100%");

            $(".sidebar-toggle").css("display", "none");
        },
        afterLoad: function(anchorLink){
            if(anchorLink == 'land'){
                $('#menu').css("display", "none");
                $('#pagepiling').css("margin-left", "0");
                $('#pagepiling .pp-section').css("width", "100%");

                $(".sidebar-toggle").css("display", "none"); 
                $('#pagepiling .section').css("padding-left", "0");

                $(".sidebar-toggle i").attr("class", "fa fa-bars fa-2x");
            }
            else{
                $('#menu').css("display", "block");
                if(isMobile){
                    $('#menu').css("display", "none");
                    $(".sidebar-toggle").css("display", "block");
                    $('.pp-tableCell .container-fluid').css("margin-left", "0");
                    $(".sidebar-toggle i").attr("class", "fa fa-bars fa-2x");
                }

            }
        },
    });
    $.fn.pagepiling.setAllowScrolling(false);
    // menu toggle
    $('.sidebar-toggle').click(function(){
        var icon = $(".sidebar-toggle i").attr("class");
        if(icon == "fa fa-times-circle-o fa-2x"){
            $(".sidebar-toggle i").attr("class", "fa fa-bars fa-2x"); 

            $('#menu').css("display", "none");
            $('.pp-tableCell .container-fluid').css("margin-left", "0");
        }
        else{
            $(".sidebar-toggle i").attr("class", "fa fa-times-circle-o fa-2x");

            $('#menu').css("display", "block");
            $('.pp-tableCell .container-fluid').css("margin-left", "18%");
        }
    });
    // eve tabs
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
    // slider js
    $('.event-slider').unslider({
        autoplay: true,
        arrows: false,
        nav: false,
        keys: false
    });

    if(!isMobile){
        // call material js 
        $.material.init();
        // tilt js
        $('.cont').tilt({
            glare: true,
            maxGlare: 0.4,
            scale:1.15
        })
        // eve info
        $('.col-xs-3 a').hover(function(){
            var ename = $(this).attr("href");
            ename = ename.slice(1, (ename.length));
            $("#eve-name p").text(ename);
        });
        // velocity code for section1 animation
        function r(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        $.Velocity.defaults.easing = "linear";
        var dotsCount = 8, dotsHtml = "", $count = $("#count"), $dots;

        for (var i = 0; i < dotsCount; i++){
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


