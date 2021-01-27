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

		//testing fixed on content first navbar list

		firstNavBarLinks.classList.add("fixed-active");
		firstNavBarCelButton.classList.toggle("fixed-active");

		//end testing fixed on content first navbar list
	});
}

firstNavBarCel();

const backgoundAboutSlider = () => {

    	var slides = document.querySelectorAll('.about-background-pictures');
    	var btns = document.querySelectorAll('.about-background-navigation-button');

    	let currentSlide = 1;

    	// Javascript for image slider manual navigation

    	var manualNav = function(manual){

    		slides.forEach((slide) => {

    			slide.classList.remove('active');

    			btns.forEach((btn) => {
    				btn.classList.remove('active');
    			});
    		});

    		slides[manual].classList.add('active');
    		btns[manual].classList.add('active');

    	}

    	btns.forEach((btn, i) => {

    		btn.addEventListener("click", () => {

    			manualNav(i);
    			currentSlide = i;

    		});
    	});

    	// Javascript for image slider autoplay navigation

    	var repeat = function(activeClass){

    		let active = document.getElementsByClassName('active');
    		let i = 1;

    		var repeater = () => {

    			setTimeout(function(){

    				[...active].forEach((activeSlide) => {

    					activeSlide.classList.remove('active');

    				});

    				slides[i].classList.add('active');
    				btns[i].classList.add('active');
    				i++;

    				if(slides.length == i){
    					i = 0;
    				}

    				if(i >= slides.length){
    					return;
    				}
    				repeater();
    			}, 3000);
    		}
    		repeater();
    	}
    	repeat();
};

backgoundAboutSlider ();