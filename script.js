const closePopUpButton = document.querySelector('.close-popup');
const closePopUp = document.querySelector('.popup-subs');

closePopUpButton.addEventListener('click', () => {

	closePopUp.classList.add('popup-subs-active');

});