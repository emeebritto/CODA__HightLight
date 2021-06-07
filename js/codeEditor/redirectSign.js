document.getElementById("nav_link__SignUpIn").addEventListener("click", function(){
	document.querySelector(".box_select_SignUp_SignIn").style.display="";
})

document.getElementById("button_signUp").addEventListener("click", function(){
	window.location.assign("loginSystem.html");
})

document.getElementById("button_signIn").addEventListener("click", function(){
	sessionStorage.setItem("redirectLogin", "redirectKey");
	window.location.assign("loginSystem.html");
})