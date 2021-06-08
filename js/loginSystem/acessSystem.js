var mailLogin = document.getElementById("emailLogin");
var mail ="";

mailLoginError = true;
mailLogin.addEventListener("change", function(){
	if (localStorage.getItem(mailLogin.value) == null){
		mailLoginError = true;
		return
	}else {
		mail = JSON.parse(localStorage.getItem(mailLogin.value));
		mailLoginError = false;
	}
})

var passwordLogin = document.getElementById("passwordLogin");

passwordLoginError = true;
passwordLogin.addEventListener("change", function(){
	if (passwordLogin.value != mail.dataUser.passwordUser){
		passwordLoginError = true;
	}else {
		passwordLoginError = false;
	}
})

document.querySelector(".btn_SignIn").addEventListener("click", function(){
	if (mailLoginError == true || passwordLoginError == true){
		document.querySelector(".box__alert_AccountInvalid").style.display="";
		setTimeout(function(){document.querySelector(".box__alert_AccountInvalid").style.display="none";}, 6000);
		return
	}
	localStorage.setItem("loginActive000", mail.dataUser.mailUser);
	window.location.replace("index.html");

})