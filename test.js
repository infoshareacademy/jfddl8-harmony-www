$(document).ready(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    const imgAuthor = $(".author__img")
    console.log('img author:', imgAuthor)
    console.log(scroll);
    if (scroll >= 1100) {
      imgAuthor.addClass("slide-fwd-center");
    } else {
      imgAuthor.removeClass("slide-fwd-center");
    }
  });
});
