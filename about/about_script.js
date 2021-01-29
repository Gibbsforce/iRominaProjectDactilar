// general first navbar

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

// slider for about page

const backgoundAboutSlider = () => {

    	var slides = document.querySelectorAll('.about-background-pictures');
    	var buttons = document.querySelectorAll('.about-background-navigation-button');

    	let currentSlide = 1;

    	// manual slider

    	var manualNav = (manual) => {

    		slides.forEach((slide) => {

    			slide.classList.remove('active');

    			buttons.forEach((button) => {
    				button.classList.remove('active');
    			});
    		});

    		slides[manual].classList.add('active');
    		buttons[manual].classList.add('active');

    	}

    	buttons.forEach((button, i) => {

    		button.addEventListener("click", () => {

    			manualNav(i);
    			currentSlide = i;

    		});
    	});

    	// automatic slider

    	var repeat = (/*activeClass*/) => {

    		let active = document.getElementsByClassName('active');
    		let i = 1;

    		var repeater = () => {

    			setTimeout(function(){

    				[...active].forEach((activeSlide) => {

    					activeSlide.classList.remove('active');

    				});

    				slides[i].classList.add('active');
    				buttons[i].classList.add('active');
    				i++;

    				if(slides.length == i){
    					i = 0;
    				}

    				if(i >= slides.length){
    					return;
    				}

    				repeater();

    			}, 2500);
    		}

    		repeater();
    	}

    	repeat();
};

const centerLastText = () => {

    const aboutMessageText = document.querySelector(".about-message-text")

    aboutMessageText.style.textAlignLast = "center";
    aboutMessageText.style.MozTextAlignLast = "center";

};

const about = () => {

    firstNavBarCel();
    backgoundAboutSlider ();
    centerLastText ();

};

about ();