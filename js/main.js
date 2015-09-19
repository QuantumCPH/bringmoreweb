$(function() {
    "use strict";




    /* ==========================================================================
   Preload
   ========================================================================== */
    
    $(window).load(function() {
        
        $("#status").fadeOut();
        
        $("#preloader").delay(1000).fadeOut("slow");
    });


    /* ==========================================================================
   Background Slideshow images
   ========================================================================== */

    $(".main").backstretch([
        "img/1.png",
        "img/2.png",
        "img/3.png",
		"img/4.png"
    ], {
        fade: 750,
        duration: 4000
    });


    /* ==========================================================================
   On Scroll animation
   ========================================================================== */
    
    if ($(window).width() > 992) {
        new WOW().init();
    };
    

    /* ==========================================================================
   Fade On Scroll
   ========================================================================== */
    
    
    if ($(window).width() > 992) {
        
        $(window).on('scroll', function() {
            $('.main').css('opacity', function() {
                return 1 - ($(window).scrollTop() / $(this).outerHeight());
            });
        });
    };
    

    /* ==========================================================================
   Tweet
   ========================================================================== */
    
    
    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');
        
        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });

    /* ==========================================================================
   countdown
   ========================================================================== */
    
    $('.countdown').downCount({
        date: '12/15/2015 12:00:00' // m/d/y
    });


    /* ==========================================================================
     sub form
     ========================================================================== */
    
      $('#mc-form').validate({
        highlight: function(element, errorClass) {
            //$(element).fadeOut(function() {
//                $(element).fadeIn();
//            });
        },
        rules: {
            name: {
                required: true,
                minlength: 2
            },
			os1: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Indtast venligst dit navn",
			
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>Indtast venligst email",
                email: "<i class='fa fa-exclamation-triangle'></i>Indtast en gyldig e-mail"
            },
			os1: {
                required: "<i class='fa fa-exclamation-triangle os-err'>V&aelig;lg venligst OS</i>"
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Indtast venligst din besked"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "http://crowdeyes.quantumcph.com/php/subscribe.php",
                success: function() {
                           var message ="Tak for din tilmelding. Vi vil holde dig opdateret.";
                   $('#mc-notification').hide().html('<span class="success"><i class="fa fa-exclamation-triangle"></i>' + message + '</span>').fadeIn("slow");
                },
                error: function() {
                   //  var message ="Vi er ikke i stand til at tegne dig p� dette tidspunkt";
                  //   $('#mc-notification').hide().html('<span class="alert"><i class="fa fa-exclamation-triangle"></i>' + message + '</span>').
					 
					 var message ="Tak for din tilmelding. Vi vil holde dig opdateret.";
                   $('#mc-notification').hide().html('<span class="success"><i class="fa fa-exclamation-triangle"></i>' + message + '</span>').
				   fadeIn("slow");
                }
            });
        }
    });

    
    
 /*  =============================================================================*/ 
//    var $form = $('#mc-form');
//    
//    $('#mc-subscribe').on('click', function(event) {
//        if (event)
//            event.preventDefault();
//        register($form);
//    });
//    
    
    
    /*
    
    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function(err) {
                $('#mc-notification').hide().html('<span class="alert">Could not connect to server. Please try again later.</span>').fadeIn("slow");
            
            },
            success: function(data) {
                
                if (data.result != "success") {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="alert"><i class="fa fa-exclamation-triangle"></i>' + message + '</span>').fadeIn("slow");
                
                } else {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="success"><i class="fa fa-envelope"></i>' + 'Awesome! We sent you a confirmation email.' + '</span>').fadeIn("slow");
                
                }
            }
        });
    }
*/

    /* ==========================================================================
     Textrotator
     ========================================================================== */
    
    
    
    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 2500
    });

    /* ==========================================================================
       Contact Form
       ========================================================================== */
    
    
    $('#contact-form').validate({
        highlight: function(element, errorClass) {
            //$(element).fadeOut(function() {
//                $(element).fadeIn();
//            });
        },
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Indtast venligst dit navn",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>Indtast venligst din e-mail",
                email: "<i class='fa fa-exclamation-triangle'></i>Indtast en gyldig e-mail."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Besked skal indeholde mindst 10 karakterer"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "http://crowdeyes.quantumcph.com/php/contact-me.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.success-cf').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                       // $('.error-cf').fadeIn();
					    $('.success-cf').fadeIn();
                    });
                }
            });
        }
    });

    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });
    
    
    $('.scroll-top a').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



});
