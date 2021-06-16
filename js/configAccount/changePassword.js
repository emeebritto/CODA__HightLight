var actualPassword = document.getElementById("actualPassword");

var loginKey = localStorage.getItem("loginActive000");
var accountActive = JSON.parse(localStorage.getItem(loginKey));

actualPassword.addEventListener("change", () => {
	if (actualPassword.value.length == 0){actualPasswordError = true; return}
	if(actualPassword.value != accountActive.dataUser.passwordUser){
		document.getElementById("erro_inputPassword").style.display="";
		return
	}
})

actualPassword.addEventListener("input", () => {
	document.getElementById("erro_inputPassword").style.display="none";
	return
})

/*---------------------------------------------------------------------*/

var passwordError = true;

var password = document.getElementById("newPassword")
  , confirm_password = document.getElementById("reNewPassword");

var fieldFilled1 = false, fieldFilled2 = false;

password.addEventListener("change", function(){
	fieldFilled1 = true;
	if (fieldFilled2 == true){validatePassword()}
})
confirm_password.addEventListener("change", function(){
	fieldFilled2 = true;
	if (fieldFilled1 == true){validatePassword()}
})

password.addEventListener("input", function(){
    document.querySelector(".alert_invalid_password").style.display="none";
	document.querySelector(".alert_short_password").style.display="none";	
    passwordError = false;
})
confirm_password.addEventListener("input", function(){
    document.querySelector(".alert_invalid_password").style.display="none";
	document.querySelector(".alert_short_password").style.display="none";
    passwordError = false;
})

function validatePassword(){
	if (password.value.length < 8){
	    document.querySelector(".alert_short_password").style.display="";
	    passwordError = true;	
	}
	if(password.value != confirm_password.value) {
	    document.querySelector(".alert_invalid_password").style.display="";
	    passwordError = true;
	}else{
	    document.querySelector(".alert_invalid_password").style.display="none";
	    passwordError = false;
	}		
}

/*--------------------------------------------------------------------*/

document.getElementById('btn_changePassword').addEventListener("click", () => {
	if (actualPassword.value == accountActive.dataUser.passwordUser && passwordError == false){
		if (localStorage.getItem("loginActive000") == null){
			alert("Você precisa está logged para alterar uma senha");
			return
		}
		accountActive.dataUser.passwordUser = password.value;
		localStorage.setItem(loginKey, JSON.stringify(accountActive));
	    sessionStorage.setItem("redirectLogin", "redirectKey");
	    window.location.assign("loginSystem.html");
	}
})
