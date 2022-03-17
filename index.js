const share = document.querySelector(".share");
const popUp = document.querySelector(".pop-up");

share.addEventListener("click", ()=>{
	popUp.classList.toggle("pop-up-active");
	share.classList.toggle("share-mobile-active");
});