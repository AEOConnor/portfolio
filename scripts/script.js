$(function () {
  $('#responsiveNav').on('click', function () {
    $('.navLink').on('click', function () {
      if ($('#responsiveNav').prop("checked")) {
        $('#responsiveNav').prop("checked", false)
      }
    })

  })

  ScrollReveal().reveal('.portfolioItemContainer', { delay: 200 })

  ScrollReveal().reveal('.section', { delay: 200 })

  $('.aboutLink').on('click', function () {
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

  $('.navTop').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#header',
      speed: 1000
    })
  });


});