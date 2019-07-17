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
  const scroll = $(window).scrollTop()+$(window).height()

  const id1 = $('#id1').offset()
  const id2 = $('#id2').offset()
  const id3 = $('#id3').offset()
  const id4 = $('#id4').offset()
  const id5 = $('#id5').offset()
  const id6 = $('#id6').offset()

  if( id2.top>scroll){
    $('#id2')
  }
})
