function init(){
	const nav = document.querySelector(".nav");
	const navBtn = document.querySelector(".menu-btn");
	const cancelBtn = document.querySelector(".cancel-btn");
	navBtn.onclick = ()=>{
		nav.classList.add("active");
		navBtn.classList.add("hide");
	}
	cancelBtn.onclick = ()=>{
		nav.classList.remove("active");
		navBtn.classList.remove("hide");
	}
}