const menu = document.getElementById("menu")
const left = document.getElementById("left")
const right = document.getElementById("right")
const slider = document.getElementById("slider")
const slide2 = document.getElementById("slide2")
const phone_v = document.getElementById("phone_v")
const phone_g = document.getElementById("phone_g")
const black_v = document.getElementById("black_v")
const black_g = document.getElementById("black_g")
const portfolio_nav = document.getElementById("portfolio_nav")
const divImages = document.getElementById("images")
const send = document.getElementById("send")
const closeBtn = document.getElementById("closeBtn")
const div = document.getElementById("hidden")
const form = document.getElementById("form")
const burger = document.getElementById("burger")
const navContainer = document.getElementById("nav-container")
const nav = document.getElementById("nav")
const navLi = document.querySelectorAll("#menu li")

form.addEventListener("submit", (event) => {
	event.preventDefault()
})

send.addEventListener("click", (event) => {
	const name = document.getElementById("name")
	const email = document.getElementById("email")
	if (name.validity.valid && email.validity.valid) {
		div.classList.remove("none")
		const input = document.getElementById("subject").value.toString()
		const textarea = document.getElementById("www").value.toString()
		const textSubmite = document.getElementById("text_subject")
		const textDescribe = document.getElementById("text_describe")
		textSubmite.innerText = input == false ? "Без темы" : `Тема: ${input}`
		textDescribe.innerText = textarea == false ? "Без описания" : `Описание: ${textarea}`
	}
})

closeBtn.addEventListener("click", () => {
	div.classList.add("none")
	form.reset()
})

burger.addEventListener("click", (event)=>{
	burger.classList.toggle("rotate")
	menu.classList.toggle("active_menu_ul")
	nav.classList.toggle("active_menu_nav")
	navLi.forEach(el => el.classList.toggle("active_menu_li"))
})

menu.addEventListener("click", (event) => {
	menu.querySelectorAll("a").forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
	burger.classList.toggle("rotate")
	menu.classList.toggle("active_menu_ul")
	nav.classList.toggle("active_menu_nav")
	navLi.forEach(el => el.classList.toggle("active_menu_li"))
})

portfolio_nav.addEventListener("click", (event) => {
	portfolio_nav.querySelectorAll("span").forEach(el => el.classList.remove("active"))
	if (event.target.classList.contains("portfolio_nav_border")) {
		event.target.classList.add("active")
		const divImages = document.getElementById("images")
		const images = document.querySelectorAll("#images img")
		let newArr = []
		images.forEach((el, index) => index === 0 ? "" : newArr.push(el.outerHTML))
		images.forEach((el, index) => index === 0 ? newArr.push(el.outerHTML) : "")
		divImages.innerHTML = newArr.join("")
	}
})

left.addEventListener("click", () => {
	slide2.classList.toggle("toogle")
	slider.classList.toggle("toogle_section")
})

right.addEventListener("click", () => {
	slide2.classList.toggle("toogle")
	slider.classList.toggle("toogle_section")
})

phone_v.addEventListener("click", () => {
	black_v.classList.toggle("none")
})

phone_g.addEventListener("click", () => {
	black_g.classList.toggle("none")
})

black_v.addEventListener("click", () => {
	black_v.classList.toggle("none")
})

black_g.addEventListener("click", () => {
	black_g.classList.toggle("none")
})

divImages.addEventListener("click", (event) => {
	divImages.querySelectorAll('#images img').forEach(el => el.classList.remove("active_img"))
	console.log(event.target)
	if (event.target.hasAttribute("alt")) {
		event.target.classList.add("active_img")
	}
})



