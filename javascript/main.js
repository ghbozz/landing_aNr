// OWL

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items:1,
      margin:0,
      autoplay:true,
      loop:true,
      smartSpeed: 800,
      // autoplayHoverPause: true,
      autoHeight:true
  });
});

// BURGER MENU

const toggleActive = (event) => {
  event.currentTarget.classList.toggle('is-active')
}

const burgerMenu = document.querySelector('.hamburger')

if (burgerMenu) {
  burgerMenu.addEventListener('click', toggleActive)
}


