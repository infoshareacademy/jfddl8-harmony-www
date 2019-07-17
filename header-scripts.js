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
  const scroll = $(window).scrollTop() + $(window).height()

  const topId1 = $('#id1').offset().top
  const topId2 = $('#id2').offset().top
  const topId3 = $('#id3').offset().top
  const topId4 = $('#id4').offset().top
  const topId5 = $('#id5').offset().top
  const topId6 = $('#id6').offset().top


  if (scroll < topId2 && topId3 > scroll) {
    $('#a2').removeClass('current-pos')
    $('#a1').addClass('current-pos')
  } else if (scroll < topId3 && topId4 > scroll) {
    $('#a3').removeClass('current-pos')
    $('#a1').removeClass('current-pos')
    $('#a2').addClass('current-pos')
  } else if (scroll < topId4 && topId5 > scroll) {
    $('#a4').removeClass('current-pos')
    $('#a2').removeClass('current-pos')
    $('#a3').addClass('current-pos')
  } else if (scroll < topId5 && topId6 > scroll) {
    $('#a5').removeClass('current-pos')
    $('#a3').removeClass('current-pos')
    $('#a4').addClass('current-pos')
  } else if (scroll < topId6) {
    $('#a4').removeClass('current-pos')
    $('#a5').addClass('current-pos')
  }

})
