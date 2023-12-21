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



// FAQ STARTS

	const faqItems = document.querySelectorAll('.faq-item');

	faqItems.forEach(item => {
		const question = item.querySelector('.faq-question');
		
		question.addEventListener('click', () => {
			console.log(question);
			// faqItems.forEach(otherItem => {
			// 	if (otherItem !== item && otherItem.classList.contains('open')) {
			// 		otherItem.classList.remove('open');
			// 		otherItem.querySelector('.faq-answer').style.maxHeight = '0';
			// 	}
			// });

			item.classList.toggle('open');
			const answer = item.querySelector('.faq-answer');
			answer.style.maxHeight = item.classList.contains('open') ? answer.scrollHeight + 'px' : '0';
			console.log(answer.scrollHeight);
		});
	});

// FAQ ENDS