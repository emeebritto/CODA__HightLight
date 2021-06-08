openedBoxLogin = false;

document.getElementById("nav_link__SignUpIn").addEventListener("click", function(){
	console.log("0");
	document.querySelector(".box_select_SignUp_SignIn").style.display="";
	if(openedBoxLogin == false){
	    setTimeout(function(){openedBoxLogin = true;}, 100);
	}
})

function redirectlogin(){
	sessionStorage.setItem("redirectLogin", "redirectKey");
	window.location.assign("loginSystem.html");
}

function redirectSignUp(){
	window.location.assign("loginSystem.html");	
}

document.querySelector('body').addEventListener("click", function(){
	console.log("1");
	if (event.target != document.getElementById("button_signIn") && event.target != document.getElementById("button_signUp") && openedBoxLogin == true && event.target != document.getElementById("nav_link__SignUpIn")){
		console.log("2");
		document.querySelector(".box_select_SignUp_SignIn").style.display="none";
		openedBoxLogin = false;
	}
})