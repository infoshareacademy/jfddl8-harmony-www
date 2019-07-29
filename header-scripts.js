$(document).ready(function () {
  let scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
      $('#slider-link').removeClass('current-pos');
    }

  });

});

const windowTop = $(window).scroll(function () {
  const scroll = $(window).scrollTop()

  const top1 = $('#slider').offset().top
  const top2 = $('#features').offset().top
  const top3 = $('#premiere').offset().top
  const top4 = $('#team').offset().top


  if (scroll <= top1 && top2 > scroll) {
    $('#slider-link').addClass('current-pos')
    $('#features-link').removeClass('current-pos')
  } else if (scroll < top2 && top3 > scroll) {
    $('#features-link').addClass('current-pos')
    $('#slider-link').removeClass('current-pos')
    $('#premiere-link').removeClass('current-pos')
  } else if (scroll < top3 && top4 > scroll) {
    $('#premiere-link').addClass('current-pos')
    $('#features-link').removeClass('current-pos')
    $('#team-link').removeClass('current-pos')
  } else if (scroll < top4) {
    $('#team-link').addClass('current-pos')
    $('#premiere-link').removeClass('current-pos')
  }
})

$(".mainmenu-item__link").click(function () {
  const link = '#' + $(this).attr('data-link')
  $('html,body').animate({
    scrollTop: $(link).offset().top
  },
    'slow');
})


$(document).ready(function () {

  $(".mini-nav__cross").hide();
  $(".mini-nav__list").hide();
  $(".mini-nav__burger").click(function () {
    $(".mini-nav__list").slideToggle("slow", function () {
      $(".mini-nav__burger").hide();
      $(".mini-nav__cross").show();
    });
  });

  $(".mini-nav__cross").click(function () {
    $(".mini-nav__list").slideToggle("slow", function () {
      $(".mini-nav__cross").hide();
      $(".mini-nav__burger").show();
    });
  });

});