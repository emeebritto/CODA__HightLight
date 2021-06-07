function getData() {
	nameUser = document.getElementById("nameUserRegister");
	mailUser = document.getElementById("emailRegister");
    passwordUser = document.getElementById("passwordRegister");
	console.log("1");
	const account = createAccount();
	setLocalStorage(account);
}

function createAccount() {
    var daten = Date.now();
	console.log("2");
    let account = {'idUser': applyId(), 'dataUser': {'nameUser': nameUser.value, 'mailUser': mailUser.value, 'passwordUser': passwordUser.value, 'creationDate': daten}
    }
    return account;
}

function applyId() {
	console.log("3");
    verifitionId = Math.floor(Math.random() * 999999999);
    return verifitionId;

}

function setLocalStorage(objetoJson) {
	console.log("4");
    localStorage.setItem(objetoJson.dataUser.mailUser, JSON.stringify(objetoJson));
    nameUserList = JSON.parse(localStorage.getItem("nameUserList"));
    nameUserList.push(objetoJson.dataUser.nameUser);
    localStorage.setItem("nameUserList", JSON.stringify(nameUserList));
    window.location.replace("index.html");
}