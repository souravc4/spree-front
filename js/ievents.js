$(window).on("load", function(){
    $("#loader").fadeOut(), $("#loader-wrapper").delay(200).fadeOut("slow");
});
$(document).ready(function(){
    new WOW().init();

    var scrollDiv = $("body");
    var target1 = $("#animate1");
    var target2 = $("#animate2");
	var scrollDivHeight = $("body").height();
	
    var targetTop1 = target1.offset().top;
    var targetTop2 = target2.offset().top;
	var scrollDivTop = scrollDiv.offset().top
	
    var toScroll1 = targetTop1 - scrollDivTop - scrollDivHeight;
    var toScroll2 = targetTop2 - scrollDivTop - scrollDivHeight;
    var addToClass1 = target1.attr('data-animation');
    var addToClass2 = target2.attr('data-animation');
	var visibleClass = "visible";
	
	scrollDiv.scroll(function(){
		var scrolled = $(this).scrollTop();
		if(scrolled > toScroll1){
            target1.addClass(visibleClass).addClass(addToClass1);
        }
        if(scrolled > toScroll2){
            target2.addClass(visibleClass).addClass(addToClass2);
        }
    });

    // velocity code for section1 animation
    function r(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $.Velocity.defaults.easing = "linear";
    var dotsCount = 16, dotsHtml = "", $count = $("#count"), $dots;

    for (var i = 0; i < dotsCount; i++){
        dotsHtml += "<div class='dot'></div>";
    }

    $dots = $(dotsHtml);
    $count.html(dotsCount);
    var $container = $("#backv");
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
});


