$(window).on("load", function(){
    $("#loader").fadeOut(), $("#loader-wrapper").delay(200).fadeOut("slow");
});
$(document).ready(function(){
    var slider = $('main').unslider({ arrows: false, keys: false });
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var $me = $(this), href = $me.attr('href');
        var $target = $('.unslider-wrap ' + href);          
        if($target.length){
            slider.unslider('animate:' + $target.index());
        }
    });
    if(location.hash){
        $('a[href^="' + location.hash + '"]').trigger('click');
    }
});
