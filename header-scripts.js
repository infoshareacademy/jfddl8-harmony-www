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

  const top0 = $('#hero').offset().top
  const top1 = $('#appinfo').offset().top
  const top2 = $('#features').offset().top
  const top3 = $('#team').offset().top
  const top4 = $('#last').offset().top


  if (scrollTop == 0) {
    $('#appinfo-link').removeClass('current-pos')
  } else if (scroll < top1 && top2 > scroll) {
    $('#appinfo-link').addClass('current-pos')
    $('#features-link').removeClass('current-pos')
  } else if (scroll < top2 && top3 > scroll) {
    $('#features-link').addClass('current-pos')
    $('#appinfo-link').removeClass('current-pos')
    $('#team-link').removeClass('current-pos')
  } else if (scroll < top3 && top4 > scroll) {
    $('#team-link').addClass('current-pos')
    $('#features-link').removeClass('current-pos')
    $('#last-link').removeClass('current-pos')
  } else if (scroll < top4) {
    $('#last-link').addClass('current-pos')
    $('#team-link').removeClass('current-pos')
  }
})
