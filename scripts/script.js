
$(function () {

  ScrollReveal().reveal('.portfolioItemContainer', {delay: 200})

  $('a').smoothScroll({
    offset: 0,      
    speed: 1000
  });

  $('.navTop').on('click', function() {
    $.smoothScroll({
    scrollTarget: '#header',
    speed: 1000
    })
  });

});