let mBtn = document.querySelector(".m-btn");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownMenuLinks = document.querySelector(".dropdown-menu-links");
let mobileImage1 = document.querySelector("#img-1");
let mobileImage2 = document.querySelector("#img-2");
let mobileImage3 = document.querySelector("#img-3");
let mobileImage4 = document.querySelector("#img-4");
let mobileImage5 = document.querySelector("#img-5");
let mobileImage6 = document.querySelector("#img-6");
let mobileImage7 = document.querySelector("#img-7");
let mobileImage8 = document.querySelector("#img-8");
mBtn.addEventListener("click", () => {
	mBtn.classList.toggle("close");
	if(mBtn.classList.contains("close")) {
		mBtn.style.background = "url(images/icon-close.svg) no-repeat center";
		mBtn.style.backgroundSize = "contain";
		dropdownMenu.style.display = "block";
	} else {
		mBtn.style.background = "url(images/icon-hamburger.svg) no-repeat center"
		mBtn.style.backgroundSize = "contain";
		dropdownMenu.style.display = "none";
	}
});
let media = window.matchMedia("(max-width: 771px)");
function myfunc(media) {
	if(media.matches) {
		mobileImage1.src = "images/mobile/image-deep-earth.jpg";
		mobileImage2.src = "images/mobile/image-night-arcade.jpg";
		mobileImage3.src = "images/mobile/image-soccer-team.jpg";
		mobileImage4.src = "images/mobile/image-grid.jpg";
		mobileImage5.src = "images/mobile/image-from-above.jpg";
		mobileImage6.src = "images/mobile/image-pocket-borealis.jpg";
		mobileImage7.src = "images/mobile/image-curiosity.jpg";
		mobileImage8.src = "images/mobile/image-fisheye.jpg";
	} else {
		mobileImage1.src = "images/desktop/image-deep-earth.jpg";
		mobileImage2.src = "images/desktop/image-night-arcade.jpg";
		mobileImage3.src = "images/desktop/image-soccer-team.jpg";
		mobileImage4.src = "images/desktop/image-grid.jpg";
		mobileImage5.src = "images/desktop/image-from-above.jpg";
		mobileImage6.src = "images/desktop/image-pocket-borealis.jpg";
		mobileImage7.src = "images/desktop/image-curiosity.jpg";
		mobileImage8.src = "images/desktop/image-fisheye.jpg";
	}
}
myfunc(media);
media.addEventListener("change", function() {myfunc(media)});