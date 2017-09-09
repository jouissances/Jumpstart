/* Slideshow jQuery */

$(document).ready(function(){
    $('.jumbotron-carousel').slick({
          autoplay: true,
          arrows: false
    });

/* Scroll jQuery */

var didScroll = 0;

    $(window).scroll(function() {
        didScroll = true;
        var st = $(this).scrollTop();
        
        if (st - didScroll >= 50) {
        var navHeight = $('.navbar').css('height');
        
        $('.navbar').animate({
            top: '-' + navHeight}, 150);
        didScroll = st;
        }
        
        else {
        $('.navbar').animate({
            top: '0px'}, "fast");
        didScroll = st;
        }

    });

});