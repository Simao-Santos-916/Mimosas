$(document).ready(function() {
    /* Sticky navigation*/
    $('.js--section-who').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
    
    /* Scroll to button */
    $('.js--scroll-to-schedule').click(function() {
       $('html, body').animate({scrollTop: $('.js--marcacoes').offset().top}, 1000);
    });
    
    $('.js--scroll-to-contact').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });
    
    
    /* Naviagtion scroll  */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html.body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    /* Animations animate.css */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated shake');
    }, {
        offset: '50%' 
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%' 
    });
    
    /* Mobile naviagation */
    $('.js--nav-icon').click(function()  {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');
        nav.slideToggle(200);
        if (icon.hasClass('.ion-md-menu')) {
            icon.addClass('.ion-md-close');
            icon.removeClass('.ion-md-menu');
        } else {
            icon.addClass('.ion-md-menu');
            icon.removeClass('.ion-md-close');
        }
        
    });
    
    /* Map */
    
    var map = new GMaps({
      div: '.map',
      lat: 41.704917,
      lng: -8.828703
    });
    
    map.addMarker({
      lat: 41.704917,
      lng: -8.828703,
      title: 'Lima',
      infoWindow: {
        content: '<p>Localização da Clinica</p>'
        }
    });
    
});