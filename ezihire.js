// $(document).ready(function(){
// $('.slideshow-container').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrow:true
// });
//$(".one-time").slick({
//   // speed: 300,
//   // slidesToShow: 1,
//   // adaptiveHeight: true,
//   // arrows: true,
//   infinite: true,
//   speed: 700,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: true,
//   slidesToShow: 1,
//   slidesToScroll: 1

// });



// const nav = document.getElementById("nav");

// button.addEventListener('click', () => {
//   nav.classList.toggle('show');
// });


let toggle = () => {
  const button = document.getElementById("toggle");

  if (button.style.display == 'block') {
    button.style.display = 'none';
    // button.classList.add('nav-none');

  }
  else {
    button.style.display = 'block';
    // button.classList.add('nav-block');
  }

}

$(document).ready(function () {
  $(".one-time").slick({
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
});