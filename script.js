const menu = document.getElementById("menu")
const left = document.getElementById("left")
const right = document.getElementById("right")
const slider = document.getElementById("slider")
const slide1 = document.getElementById("slide1")


menu.addEventListener("click", (event)=>{
	menu.querySelectorAll("a").forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
})

left.addEventListener("click", ()=>{
	slide1.classList.toggle("toogle")
	slider.classList.toggle("toogle_section")
})
right.addEventListener("click", ()=>{
	slide1.classList.toggle("toogle")
	slider.classList.toggle("toogle_section")
})