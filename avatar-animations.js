$(window).scroll(function() {
  var position = $(".authors").offset();
  var scroll = $(window).scrollTop();
  console.log(scroll, position.top);

  if (scroll >= position.top - 500) {

    console.log('animation start')
    setTimeout(animate, 1000);
    function animate() {
      $("#am").addClass("rotate");
      $("#br").addClass("rotate");
      $("#aw").addClass("rotate");
    }
  }
});
