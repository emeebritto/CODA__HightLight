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
    imgUser = getImg();
    let account = {'idUser': applyId(), 'dataUser': {'nameUser': nameUser.value, 'mailUser': mailUser.value, 'passwordUser': passwordUser.value, 'creationDate': daten, 'imgUser': `assets/imgUsers/${imgUser}.png`}
    }
    return account;
}

function applyId() {
	console.log("3");
    verifitionId = Math.floor(Math.random() * 999999999);
    return verifitionId;
}

function getImg(){
    imglist = ["default_one", "default_two", "default_three", "default_four", "default_five"];
    luck = Math.floor(Math.random() * 5);
    return imglist[luck];
}

function setLocalStorage(objetoJson) {
	console.log("4");
    localStorage.setItem(objetoJson.dataUser.mailUser, JSON.stringify(objetoJson));
    nameUserList = JSON.parse(localStorage.getItem("nameUserList"));
    nameUserList.push(objetoJson.dataUser.nameUser);
    localStorage.setItem("nameUserList", JSON.stringify(nameUserList));
    localStorage.setItem("loginActive000", objetoJson.dataUser.mailUser);
    window.location.replace("index.html");
}