const menu = document.getElementById("menu")
const left = document.getElementById("left")
const right = document.getElementById("right")
const slider = document.getElementById("slider")
const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")
const phone_v = document.getElementById("phone_v")
const phone_g = document.getElementById("phone_g")
const black_v = document.getElementById("black_v")
const black_g = document.getElementById("black_g")

menu.addEventListener("click", (event)=>{
	menu.querySelectorAll("a").forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
})

left.addEventListener("click", ()=>{
	slide2.classList.toggle("toogle")
	slider.classList.toggle("toogle_section")
})
right.addEventListener("click", ()=>{
	slide2.classList.toggle("toogle")
	slider.classList.toggle("toogle_section")
})

phone_v.addEventListener("click", ()=>{
	black_v.classList.toggle("none")
})
phone_g.addEventListener("click", ()=>{
	black_g.classList.toggle("none")
})
black_v.addEventListener("click", ()=>{
	black_v.classList.toggle("none")
})
black_g.addEventListener("click", ()=>{
	black_g.classList.toggle("none")
})