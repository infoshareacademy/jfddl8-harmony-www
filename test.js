console.log("tutut");
$(document).ready(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 1150) {
      $(".authors__author").addClass("slide-top");
    } else {
      $(".authors__author").removeClass("slide-top");
    }
  });
});
