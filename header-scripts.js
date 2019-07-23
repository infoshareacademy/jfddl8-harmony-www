$(document).ready(function () {
  let scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});

const windowTop = $(window).scroll(function () {
  const scrollTop = $(window).scrollTop()
  const scroll = $(window).scrollTop() + $(window).height()

  const top1 = $('#appinfo1').offset().top
  const top2 = $('#features').offset().top
  const top3 = $('#carusel').offset().top
  const top4 = $('#team').offset().top


  if (scrollTop == 0) {
    $('#appinfo-link').removeClass('current-pos')
  } else if (scroll < top1 && top2 > scroll) {
    $('#appinfo-link').addClass('current-pos')
    $('#features-link').removeClass('current-pos')
  } else if (scroll < top2 && top3 > scroll) {
    $('#features-link').addClass('current-pos')
    $('#appinfo-link').removeClass('current-pos')
    $('#carusel-link').removeClass('current-pos')
  } else if (scroll < top3 && top4 > scroll) {
    $('#carusel-link').addClass('current-pos')
    $('#features-link').removeClass('current-pos')
    $('#team-link').removeClass('current-pos')
  } else if (scroll < top4) {
    $('#team-link').addClass('current-pos')
    $('#carusel-link').removeClass('current-pos')
  }
})

$("#appinfo-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#appinfo").offset().top},
      'slow');
})

$("#features-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#features").offset().top},
      'slow');
})

$("#carusel-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#carusel").offset().top},
      'slow');
})
$("#team-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#team").offset().top},
      'slow');
})