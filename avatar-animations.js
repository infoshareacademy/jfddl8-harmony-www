$(window).scroll(function() {
  const position = $("#am").offset();
  const scroll = $(window).scrollTop() + $(window).height();
  const avatarHeight = $("#am").height();
  console.log(scroll, position);

  if (scroll >= position.top + avatarHeight) {
    console.log("animation start");
    setTimeout(animate, 1000);
    function animate() {
      $("#am").addClass("rotate");
      $("#br").addClass("rotate");
      $("#aw").addClass("rotate");
    }
  }
});
