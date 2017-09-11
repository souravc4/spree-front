$(window).on("load", function(){
	$("#loader").fadeOut(), $("#loader-wrapper").delay(200).fadeOut("slow");
});
$(document).ready(function(){
	// call material js 
	$.material.init(); 

	var height = document.documentElement.clientHeight;
	var width = document.documentElement.clientWidth;
	var sliderCont =  document.getElementById("back-video");
	sliderCont.style.height = height+"px";
	sliderCont.style.width = width+"px";
	// form modal
	$("#formb").click(function(){
	    $("form").css("display", "block");
	    $(".outerv").css("filter", "grayscale(80%)");
	    $(".main > h3").css("color", "#606263");
	});
	$(".close").click(function(){
	    $("form").css("display", "none");
	    $("#event-screen").css("display", "none");
	    $(".outerv").css("filter", "none");
	    $(".main > h3").css("color", "#FFD933");
	});
	//
	$("#submitbtn").click(function(){
		$("#form-loader").css("display", "block");
	});
	// form handling
	$('form').submit(function(event){
		var uname = $('#name').val();
		var ucollege = $('#college').val();
		var ucity = $('#city').val();
		var uphone = $('#phone').val();
		var uemail = $('#email').val();
		var usports = $('#sports option:selected').text();

		event.preventDefault();
		$.ajax({
			url: '/',
			type: 'POST',
			data: {
				name: uname,
				college: ucollege,
				city: ucity,
				phone: uphone,
				email: uemail,
				sports: usports
			},
			success: function(response){
				setTimeout(function(){
					$(".close").click();
				},200);
				console.log(response);
				if(response == true){
					$("#formb").text("REGISTERED");
					$("#form-loader").css("display", "none");
					$(".alert").velocity("fadeIn", { delay: 400, duration: 1200 })
    						   .velocity("fadeOut", { delay: 1000, duration: 1000 });
				}
			}
		});
	});
	// event screen
	$("#event-link").click(function(){
	    $("#event-screen").css("display", "block");
	});
});