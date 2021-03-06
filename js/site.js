$(document).scroll(function(){
    var navHeight = 80;
    var contentsMargin = 20;
    var currentPosition = window.scrollY;
    var smallMyFace = $('#top-nav .row .column');
    var bottomOfLargeMyFace = $('#main #hello .row .column').position().top + $('#main #hello .row .column').height() - navHeight;
    var trump = $('#trump').position().top - navHeight - contentsMargin;
    var Scg = $('#SCG').position().top - navHeight - contentsMargin;
    var Nih = $('#NIH').position().top - navHeight - contentsMargin;
    var trumpContents = $('#trump .contents h1');
    var ScgContents = $('#SCG .contents h1');
    var NihContents = $('#NIH .contents h1');

    currentPosition > bottomOfLargeMyFace ? smallMyFace.addClass('scrolled') : smallMyFace.removeClass('scrolled');
        
    if(currentPosition > trump ){
        trumpContents.addClass('sticky');

        if(currentPosition > Scg - 50){
            trumpContents.addClass('scrolled');
        }
        else{
            trumpContents.removeClass('scrolled');
        }
    } 
    else{
        trumpContents.removeClass('sticky');
    }

    if(currentPosition > Scg){
        ScgContents.addClass('sticky');

        if(currentPosition > Nih - 50){
            ScgContents.addClass('scrolled');
        }
        else{
            ScgContents.removeClass('scrolled');
        }
    }
    else{
        ScgContents.removeClass('sticky');
    }

    if(currentPosition > Nih){
        NihContents.addClass('sticky');

        if(currentPosition > $('#experience').position().top - navHeight - contentsMargin - 50){
            NihContents.addClass('scrolled');
        }
        else{
            NihContents.removeClass('scrolled');
        }
    }
    else{
        NihContents.removeClass('sticky');
    }

    if($(window).scrollTop() < $('#work').position().top - 110){
        $('#home').addClass('active');
        $('#my_work').removeClass('active');
        $('#projects').removeClass('active');
        $('#contact_me').removeClass('active');
    }else if($(window).scrollTop() < $('#experience').position().top - 100){
        $('#projects').addClass('active');
        $('#home').removeClass('active');
        $('#my_work').removeClass('active');
        $('#contact_me').removeClass('active');
    }else if($(window).scrollTop() < $('#contact').position().top - 100){
        $('#my_work').addClass('active');
        $('#home').removeClass('active');
        $('#projects').removeClass('active');
        $('#contact_me').removeClass('active');
    }else{
        $('#contact_me').addClass('active');
        $('#home').removeClass('active');
        $('#projects').removeClass('active');
        $('#my_work').removeClass('active');
    }
});

// Scrolly.
$(window).load(function() {

    var x = parseInt($('#top-nav').css('height'));
  
    $('#nav a, .scrolly').scrolly({
      speed: 1000,
      offset: x
    });
  
});