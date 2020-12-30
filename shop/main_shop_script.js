const all = document.querySelector("#all");
const hats = document.querySelector("#hats");
const scarves = document.querySelector("#scarves");
const jewelry = document.querySelector("#jewelry");
const readyToWear = document.querySelector("#ready-to-wear");

const hatsWeb0 = document.querySelector("#hats-web-0");
const hatsWeb1 = document.querySelector("#hats-web-1");
const scarves0 = document.querySelector("#scarves-web-0");
const scarves1 = document.querySelector("#scarves-web-1");
const scarves2 = document.querySelector("#scarves-web-2");
const scarves3 = document.querySelector("#scarves-web-3");
const jewelryWeb = document.querySelector("#jewelry-web");

function removeHats () {

	hatsWeb0.style.display = "none";
	hatsWeb1.style.display = "none";

};

function removeScarves () {

	scarves0.style.display = "none";
	scarves1.style.display = "none";
	scarves2.style.display = "none";
	scarves3.style.display = "none";

};

function removeJewelryWeb () {

	jewelryWeb.style.display = "none";

};

function addHats () {

	hatsWeb0.style.display = "block";
	hatsWeb1.style.display = "block";

};

function addScarves () {

	scarves0.style.display = "block";
	scarves1.style.display = "block";
	scarves2.style.display = "block";
	scarves3.style.display = "block";

};

function addJewelryWeb () {

	jewelryWeb.style.display = "block";

};

all.addEventListener("click", () => {

	addHats ();
	addScarves ();
	addJewelryWeb ();

});

hats.addEventListener("click", () => {

	addHats ();
	addJewelryWeb ();
	removeJewelryWeb ();
	addScarves ();
	removeScarves ();

});

scarves.addEventListener("click", () => {

	addScarves ();
	addHats ();
	removeHats ();
	addJewelryWeb ();
	removeJewelryWeb ();

});

jewelry.addEventListener("click", () => {

	addJewelryWeb ();
	addHats ();
	removeHats ();
	addScarves ();
	removeScarves ();

});

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

	firstNavBarCel();
	secondNavBarCel();

}

shop();