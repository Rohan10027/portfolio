// here we use simply jquery
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',//selector hai i.e. we use dot operator
        dotsClass:'dots'//custom class de rahe here so no dot required
    });
})