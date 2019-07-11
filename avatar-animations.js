$(window).scroll(function() {
  var position = $(".authors").offset();
  var scroll = $(window).scrollTop();

  if (scroll >= position.top - 400) {
    setTimeout(animate, 1000);
    function animate() {
      $("#am").addClass("rotate");
      $("#br").addClass("rotate");
      $("#aw").addClass("rotate");
    }
  }
});
