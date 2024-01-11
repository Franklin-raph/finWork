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
			faqItems.forEach(otherItem => {
				if (otherItem !== item && otherItem.classList.contains('open')) {
					otherItem.classList.remove('open');
					otherItem.querySelector('.faq-answer').style.maxHeight = '0';
				}
			});

			item.classList.toggle('open');
			const answer = item.querySelector('.faq-answer');
			answer.style.maxHeight = item.classList.contains('open') ? answer.scrollHeight + 'px' : '0';
			console.log(answer.scrollHeight);
		});
	});

// FAQ ENDS



// PAST WORK STARTS

const pastFaqItems = document.querySelectorAll('.past-faq-item');

pastFaqItems.forEach(item => {
	const question = item.querySelector('.past-faq-question');

	question.addEventListener('click', () => {
		pastFaqItems.forEach(otherItem => {
			if (otherItem !== item && otherItem.classList.contains('open')) {
				otherItem.classList.remove('open');
				otherItem.querySelector('.past-faq-answer').style.maxHeight = '0';
			}
		});

		item.classList.toggle('open');
		const answer = item.querySelector('.past-faq-answer');
		answer.style.maxHeight = item.classList.contains('open') ? answer.scrollHeight + 'px' : '0';
	});
});

// PAST WORK STARTS


let slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function changeSlide() {
 slides[currentIndex].style.opacity = 0;
 currentIndex = (currentIndex + 1) % slides.length;
 slides[currentIndex].style.opacity = 1;
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds