const portraitFigure = document.querySelector(".hero-portrait");
const portraitImage = portraitFigure?.querySelector("img");

function revealPortrait() {
	portraitFigure?.classList.remove("is-loading");
	portraitFigure?.classList.add("is-loaded");
}

if (portraitImage) {
	if (portraitImage.complete) {
		requestAnimationFrame(revealPortrait);
	} else {
		portraitImage.addEventListener("load", revealPortrait, { once: true });
		portraitImage.addEventListener("error", revealPortrait, { once: true });
	}
}
