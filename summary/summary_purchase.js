const hideFirst = document.querySelector('.hide-content-0');
const hideSecond = document.querySelector('.hide-content-1');
const hideThird = document.querySelector('.hide-content-2');
const hideFourth = document.querySelector('.hide-content-3');
const hideFifth = document.querySelector('.hide-content-4');

hideFirst.style.display = "block";
hideSecond.style.display = "none";
hideThird.style.display = "none";
hideFourth.style.display = "block";
hideFifth.style.display = "none";

const getFirst = document.querySelector('.title-email-checkout');
const getSecond = document.querySelector('.title-personal-information-checkout');
const getThird = document.querySelector('.aditional-info-title');
const getFourth = document.querySelector('.payment-title');
const getFifth = document.querySelector('.review-purchase-title');

getFirst.addEventListener('click', () => {
    hideFirst.style.display = "block";
    hideSecond.style.display = "none";
    hideThird.style.display = "none";
    hideFourth.style.display = "block";
    hideFifth.style.display = "none";
});

getSecond.addEventListener('click', () => {
    hideFirst.style.display = "none";
    hideSecond.style.display = "block";
    hideThird.style.display = "none";
    hideFourth.style.display = "block";
    hideFifth.style.display = "none";
});

getThird.addEventListener('click', () => {
    hideFirst.style.display = "none";
    hideSecond.style.display = "none";
    hideThird.style.display = "block";
    hideFourth.style.display = "block";
    hideFifth.style.display = "none";
});

getFourth.addEventListener('click', () => {
    hideFirst.style.display = "none";
    hideSecond.style.display = "none";
    hideThird.style.display = "none";
    hideFourth.style.display = "block";
    hideFifth.style.display = "none";
});

getFifth.addEventListener('click', () => {
    hideFirst.style.display = "none";
    hideSecond.style.display = "none";
    hideThird.style.display = "none";
    hideFourth.style.display = "block";
    hideFifth.style.display = "block";
});

const btnFirst = document.querySelector('.summary-buttons-event');
const btnSecond = document.querySelector('.summary-buttons-event-one');
const btnThird = document.querySelector('.summary-buttons-event-two');
const btnFourth = document.querySelector('.summary-buttons-event-three');

btnFirst.addEventListener('click', () => {
    hideFirst.style.display = "none";
    hideSecond.style.display = "block";
});

btnSecond.addEventListener('click', () => {
    hideSecond.style.display = "none";
    hideThird.style.display = "block";
});

btnThird.addEventListener('click', () => {
    hideThird.style.display = "none";
});

btnFourth.addEventListener('click', () => {
    hideFifth.style.display = "block";
    hideFourth.style.display = "none";
});