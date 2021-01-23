//selecting items

const all = document.querySelector("#all");
const hats = document.querySelector("#hats");
const scarves = document.querySelector("#scarves");
const jewelry = document.querySelector("#jewelry");
const readyToWear = document.querySelector("#ready-to-wear");

//defining objects per items

const theHats = document.querySelectorAll(".hats-web");
const theScarves = document.querySelectorAll(".scarves-web");
const theJewelry = document.querySelectorAll(".jewelry-web");
const theWear = document.querySelectorAll(".ready-to-wear-web");

const removeItems = () => {


	removeHats = () => {

		for (var i = 0; i < theHats.length; i++) {
			theHats[i].style.display = "none";
		};

	};

	removeScarves = () => {

		for (var i = 0; i < theScarves.length; i++) {
			theScarves[i].style.display = "none";
		};

	};

	removeJewelryWeb = () => {

		for (var i = 0; i < theJewelry.length; i++) {
			theJewelry[i].style.display = "none";
		};

	};

	removeWear = () => {

		for (var i = 0; i < theWear.length; i++) {
			theWear[i].style.display = "none";
		};

	};

};

const addItems = () => {


	addHats = () => {

		for (var i = 0; i < theHats.length; i++) {
		theHats[i].style.display = "block";
		};

	};

	addScarves = () => {

		for (var i = 0; i < theScarves.length; i++) {
			theScarves[i].style.display = "block";
		};

	};

	addJewelryWeb = () => {

		for (var i = 0; i < theJewelry.length; i++) {
			theJewelry[i].style.display = "block";
		};

	};

	addWear = () => {

		for (var i = 0; i < theWear.length; i++) {
			theWear[i].style.display = "none";
		};

	};

};

const controlItems = () => {

	all.addEventListener("click", () => {

		addItems(addHats(), addScarves(), addJewelryWeb(), addWear());

	});

	hats.addEventListener("click", () => {

		addItems(addHats(), addScarves(), addJewelryWeb());
		removeItems(removeHats(), removeScarves(), removeJewelryWeb(), removeWear());
		addHats();

	});

	scarves.addEventListener("click", () => {

		addItems(addHats(), addScarves(), addJewelryWeb());
		removeItems(removeHats(), removeScarves(), removeJewelryWeb(), removeWear());
		addScarves();

	});

	jewelry.addEventListener("click", () => {

		addItems(addHats(), addScarves(), addJewelryWeb());
		removeItems(removeHats(), removeScarves(), removeJewelryWeb(), removeWear());
		addJewelryWeb();

	});

	readyToWear.addEventListener("click", () => {

		addItems(addHats(), addScarves(), addJewelryWeb());
		removeItems(removeHats(), removeScarves(), removeJewelryWeb(), removeWear());
		addWear();

	});

};

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

const secondNavBarCel = () => {

const category = document.querySelector(".category");
const categoryCel = document.querySelector(".category-cel");

	category.addEventListener("click", () => {

		categoryCel.classList.toggle("category-cel-active");

	});
}

const shop = () => {

	controlItems ();
	removeItems ();
	addItems ();
	firstNavBarCel ();
	secondNavBarCel ();

}

shop ();