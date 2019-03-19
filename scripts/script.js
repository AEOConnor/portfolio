
$(function () {

  ScrollReveal().reveal('.portfolioItemContainer', {delay: 200})

  ScrollReveal().reveal('.section', { delay: 200 })

  $('.aboutLink').on('click', function() {
    console.log("hi")
    $.smoothScroll({
      scrollTarget: '#about',
      speed: 1000
    })
  })

  $('.portfolioLink').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#portfolio',
      speed: 1000
    })
  })

  $('.skillsLink').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#skills',
      speed: 1000
    })
  })

  $('.contactLink').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#contact',
      speed: 1000
    })
  })

  $('.navTop').on('click', function() {
    $.smoothScroll({
    scrollTarget: '#header',
    speed: 1000
    })
  });

});