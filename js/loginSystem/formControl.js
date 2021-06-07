if (localStorage.getItem("nUL88") == null) {
	var nameUserList = ["Emerson_Britto", "joanajo", "js9876", "nomad3n", "Gghosh12", "pedro", "maria"];
	localStorage.setItem("nameUserList", JSON.stringify(nameUserList));
	localStorage.setItem("nUL88", "codaKey");
}

nameUserRegister = document.getElementById("nameUserRegister");

var nameError = true;
nameUserRegister.addEventListener("input", function(){
	if(nameUserRegister.value.length == 0) {nameError = true; releaseAcess(); return}
	if(nameUserRegister.value.length >= 5 || nameUserRegister.value.length == 0){
		document.querySelector(".alert_Short_name").style.display="none";
		nameError = false;
	}

	nameUserList = JSON.parse(localStorage.getItem("nameUserList"));
	for (var i = 0; i < nameUserList.length; i++) {
	    if(nameUserRegister.value == nameUserList[i]){
	    	nameUserRegister.style.borderBottomColor="#991440";
	    	document.querySelector(".alert_rept_name").style.display="";
	    	nameError = true; releaseAcess();
	    	return
	    }
	    if (nameUserRegister.value != nameUserList[i]){
			nameUserRegister.style.borderBottomColor="";
			document.querySelector(".alert_rept_name").style.display="none";
			nameError = false;
	    }
	}
})

nameUserRegister.addEventListener("change", function(){
	releaseAcess();
	if(nameUserRegister.value.length < 5 && nameUserRegister.value.length != 0){
		document.querySelector(".alert_Short_name").style.display="";
		nameError = true; releaseAcess();
	}
})

/*----------------------------------------------------------*/

var mailError = true;

emailRegister = document.getElementById("emailRegister");
emailRegister.addEventListener("input", function(){
	if (localStorage.getItem(emailRegister.value) != null) {
    	emailRegister.style.borderBottomColor="#991440";
    	document.querySelector(".alert_rept_email").style.display="";
    	mailError = true; releaseAcess();
    	return
	}else {
		emailRegister.style.borderBottomColor="";
		document.querySelector(".alert_rept_email").style.display="none";
		mailError = false;
	}
})


emailRegister.addEventListener("change", function(){
	target = emailRegister.value;
	search1Result = target.toLowerCase().indexOf("@");
	search2Result = target.toLowerCase().indexOf(".com");
	if (target.length == 0){mailError = true; releaseAcess();}
	releaseAcess();
	if (search1Result <= 7 || search2Result <= search1Result || search2Result <= search1Result+5 || search2Result >= search1Result+9) {
    	emailRegister.style.borderBottomColor="#991440";
    	document.querySelector(".alert_invalid_email").style.display="";
    	mailError = true; releaseAcess();
    	return
    }
})    	
emailRegister.addEventListener("input", function(){
	target = emailRegister.value;
	search1Result = target.toLowerCase().indexOf("@");
	search2Result = target.toLowerCase().indexOf(".com");
	if (search1Result >= 7 || search2Result >= search1Result || search2Result >= search1Result+5 || search2Result <= search1Result+9) {
		emailRegister.style.borderBottomColor="";
		document.querySelector(".alert_invalid_email").style.display="none";
		mailError = false;
		return
	}	
})



/*procurada = "@";
nome = "emersonbritto987@gmail.com";
var exd = nome.toLowerCase().indexOf(".com");*/

/*---------------------------------------------------------------*/

var passwordError = true;

var password = document.getElementById("passwordRegister")
  , confirm_password = document.getElementById("rePasswordRegister");

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
	    passwordError = true; releaseAcess();	
	}
	if(password.value != confirm_password.value) {
	    document.querySelector(".alert_invalid_password").style.display="";
	    passwordError = true; releaseAcess();
	}else{
	    document.querySelector(".alert_invalid_password").style.display="none";
	    passwordError = false; releaseAcess();
	}		
}

/*----------------------------------------------------------------*/

document.querySelector(".SignUp").disabled = true;

function releaseAcess() {
	console.log("---------------");
	console.log(nameError);	
	console.log(mailError);
	console.log(passwordError);
	console.log(blockCheck.value);
	var btn_confirm = document.querySelector(".SignUp");
	if(blockCheck.value == true && passwordError == false && nameError == false && mailError == false){
		document.querySelector(".SignUp").disabled = false;
		btn_confirm.style.color="";
		btn_confirm.style.backgroundColor="";
		return
	}
	if(blockCheck.value == false || passwordError == true || nameError == true || mailError == true){
		document.querySelector(".SignUp").disabled = true;
		btn_confirm.style.color="#979797";
		btn_confirm.style.backgroundColor="#0F146D";
		return
	}
}

