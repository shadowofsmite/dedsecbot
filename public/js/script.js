var scrollTo = function(identifier, speed) {
 $('html, body').animate({
     scrollTop: $(identifier).offset().top
 }, speed || 1000);
}
