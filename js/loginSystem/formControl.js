var password = document.getElementById("passwordRegister")
  , confirm_password = document.getElementById("rePasswordRegister");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("different passwords!");
  }else{
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


document.querySelector(".block_checkbox").addEventListener("click", function(){
	var protectCLick = document.querySelector(".protectClick");
	var btn_confirm = document.querySelector(".SignUp");
	if(blockCheck.value == true){
		protectCLick.style.display="none";
		btn_confirm.style.color="";
		btn_confirm.style.backgroundColor="";
		return
	}
	if(blockCheck.value == false){
		protectCLick.style.display="";
		btn_confirm.style.color="#979797";
		btn_confirm.style.backgroundColor="#0F146D";
		return
	}
})

function getData() {
	nameUser = document.getElementById("nameUserRegister");
	mailUser = document.getElementById("emailRegister");
    passwordUser = document.getElementById("passwordRegister");
	console.log("1");
	const account = createAccount();
    setSessionStorage(account);
}

function createAccount() {
    var daten = Date.now();
	console.log("2");
    let account = {'idUser': applyId(), 'dataUser': {'nameUser': nameUser.value, 'mailUser': mailUser.value, 'passwordUser': passwordUser.value}
    }
    return account;
}

function applyId() {
	console.log("3");
    verifitionId = Math.floor(Math.random() * 999999999);
    return verifitionId;

}

function setSessionStorage(objetoJson) {
	console.log("4");
    sessionStorage.setItem(objetoJson.dataUser.mailUser, JSON.stringify(objetoJson));
}