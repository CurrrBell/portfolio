$(document).scroll(function() {
    $('#main > #hello > #scroll-me').addClass('scroll-hidden', $(this).scrollTop() > 1);
    $('#top-nav').toggleClass('nav-scrolled', $(this).scrollTop() > 50);
    // $nav.css({"display": $(this).scrollTop()>1 ? "block":"none"});
});
