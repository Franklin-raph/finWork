var swiper = new Swiper(".mySwiper", {
	grabCursor: true,
	effect: "creative",
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: [0, 0, -400],
	  },
	  next: {
		translate: ["100%", 0, 0],
	  },
	},
  });

$(document).ready(function() {
	$('.carousel').carousel();
});