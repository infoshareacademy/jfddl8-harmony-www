$(document).ready(function(){
  let scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    } 
    
  }); 
  
});

const id1 = document.getElementById('id1')
const id2 = document.getElementById('id2')
const id3 = document.getElementById('id3')
const id4 = document.getElementById('id4')
const id5 = document.getElementById('id5')
const id6 = document.getElementById('id6')

console.log(id1.offsetTop

addEventListener('scroll', function(){
  if (id1.offsetTop !== 0){
    id1.removeClass('current-pos')
  }else if(id1.offsetTop<id2.offsetTop){

  }
})



