const loginSpan = document.getElementById("login")
const registerSpan = document.getElementById("register")
const loginDivFullScreen = document.getElementById("logindivfullscreen")
const registerDivFullScreen = document.getElementById("registerdivfullscreen")
const loginButton = document.getElementById("loginbutton")
const registerButton = document.getElementById("registerbutton")
const cartButton = document.getElementById("carticon")
const cartDivFullScreen = document.getElementById("shoppingcartfullscreen")
const productsButton = document.getElementById("productsspan")
const mainContent = document.querySelector("main")
const homeButton = document.getElementById("homespan")

const showLogin = () => {
	if(loginDivFullScreen.style.display === "flex") {
		loginDivFullScreen.style.display = "none"
	} else {
		loginDivFullScreen.style.display = "flex"
	}
}

const showRegister = () => {
	if(registerDivFullScreen.style.display === "flex") {
		registerDivFullScreen.style.display = "none"
	} else {
		registerDivFullScreen.style.display = "flex"
	}
}

const showCart = () => {
	if(cartDivFullScreen.display === "flex") {
		shoppingcartfullscreen.style.display = "none"
	} else {
		cartDivFullScreen.style.display = "flex"
	}
}

const showProducts = () => {
	mainContent.style.display = "none";
	document.getElementById("ido").style.display = "block";
}

const showHome = () => {
	document.getElementById("ido").style.display = "none";
	mainContent.style.display = "block";
}

loginSpan.addEventListener("click", showLogin)
window.onclick = function(event) {
    if (event.target == loginDivFullScreen || event.target == registerDivFullScreen || event.target == cartDivFullScreen) {
        loginDivFullScreen.style.display = "none";
	registerDivFullScreen.style.display = "none";
	cartDivFullScreen.style.display = "none";
    }
}
registerSpan.addEventListener("click", showRegister)
loginButton.addEventListener("click", showLogin)
registerButton.addEventListener("click", showRegister)
cartButton.addEventListener("click", showCart)
productsButton.addEventListener("click", showProducts)
homeButton.addEventListener("click", showHome)
