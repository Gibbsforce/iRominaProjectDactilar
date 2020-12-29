//const slide = document.querySelector('.item-image');
//const slideImages = document.querySelectorAll('.item-image img');
//const backButton = document.querySelector('#back-button');
//const nextButton = document.querySelector('#next-button');
//let counter = 1;
//const size = slideImages[0].clientWidth;
//slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//nextButton.addEventListener('click', () => {
//	if (counter >= slideImages.length - 1) return;
//	slide.style.transition = "transform 0.4s ease-in-out";
//	counter++;
//	slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//});
//backButton.addEventListener('click', () => {
//	if (counter <= 0) return;
//	slide.style.transition = "transform 0.4s ease-in-out";
//	counter--;
//	slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//});
//slide.addEventListener('transitionend', () => {
//	if (slideImages[counter].id === 'last-image'){
//		slide.style.transition = "none";
//		counter = slideImages.length -2;
//		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//	}
//	if (slideImages[counter].id === 'first-image'){
//		slide.style.transition = "none";
//		counter = slideImages.length - counter;
//		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//	}
//});
//hours coding this and she made me delete it :'(
//window.onload = function() {
//  if(!window.location.hash) {
//      window.location = window.location + '#loaded';
//      window.location.reload();
//  }
//}; //refreshing automatically in order to fix bugs, maybe not a good idea but working

//dom for image selector
const firstShortcutImage = document.querySelector("#first-image-selector");
const secondShortcutImage = document.querySelector("#second-image-selector");
const thirdShortcutImage = document.querySelector("#third-image-selector");
const firstImage = document.querySelector("#first-image");
const secondImage = document.querySelector("#second-image");
const thirdImage = document.querySelector("#third-image");

firstShortcutImage.addEventListener("click", () => {
	firstImage.style.opacity = "1";
	secondImage.style.opacity = "0";
	thirdImage.style.opacity = "0";
	firstImage.style.zIndex = "4";
	secondImage.style.zIndex = "0";
	thirdImage.style.zIndex = "0";
	firstShortcutImage.style.opacity = ".5";
	secondShortcutImage.style.opacity = "1";
	thirdShortcutImage.style.opacity = "1";
});

secondShortcutImage.addEventListener("click", () => {
	firstImage.style.opacity = "0";
	secondImage.style.opacity = "1";
	thirdImage.style.opacity = "0";
	firstImage.style.zIndex = "0";
	secondImage.style.zIndex = "4";
	thirdImage.style.zIndex = "0";
	firstShortcutImage.style.opacity = "1";
	secondShortcutImage.style.opacity = ".5";
	thirdShortcutImage.style.opacity = "1";
});

thirdShortcutImage.addEventListener("click", () => {
	firstImage.style.opacity = "0";
	secondImage.style.opacity = "0";
	thirdImage.style.opacity = "1";
	firstImage.style.zIndex = "0";
	secondImage.style.zIndex = "0";
	thirdImage.style.zIndex = "4";
	firstShortcutImage.style.opacity = "1";
	secondShortcutImage.style.opacity = "1";
	thirdShortcutImage.style.opacity = ".5";
});//maybe gotta use loops here, but meh

const firstNavBarCel = () => {

	const firstNavBarCelButton = document.querySelector(".firstnavbar-cel-button");
	const firstNavBarLinks = document.querySelector(".firstnavbar-links");
	const navCelLinks = document.querySelectorAll(".firstnavbar-links li");

	firstNavBarCelButton.addEventListener("click", () => {

		firstNavBarLinks.classList.toggle("firstnavbar-active");

		navCelLinks.forEach((link, index) => {

			if(link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `fadingNavCel 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		firstNavBarCelButton.classList.toggle("toggle");	
	});
}

firstNavBarCel();