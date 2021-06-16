const section_changePassword = document.querySelector(".section_changePassword");
const optionsSelector = document.querySelector(".optionsSelector");
const dialog__DeleteAccount = document.querySelector(".dialog__DeleteAccount");

var loginKey = localStorage.getItem("loginActive000");
var	accountActive = JSON.parse(localStorage.getItem(loginKey));

document.getElementById("img_perfilUser").src = accountActive.dataUser.imgUser;
document.getElementById('box_nameUser').textContent = accountActive.dataUser.nameUser;
document.getElementById('box_idUser').textContent = `ID: ${accountActive.idUser}`;

document.getElementById("back_home").addEventListener("click", () => {
	window.location.replace("index.html");
})

document.getElementById("changePassword").addEventListener("click", () => {
	optionsSelector.style.display="none";
	section_changePassword.style.display="";
})

document.getElementById('btn_back').addEventListener("click", () => {
	optionsSelector.style.display="";
	section_changePassword.style.display="none";
})

document.getElementById("deleteAccount").addEventListener("click", () => {
	optionsSelector.style.display="none";
	dialog__DeleteAccount.style.display="";
})

document.getElementById("optionCancel").addEventListener("click", () => {
	optionsSelector.style.display="";
	dialog__DeleteAccount.style.display="none";
})

document.getElementById("optionConfirm").addEventListener("click", () => {
	if (localStorage.getItem("loginActive000") == null) {window.location.replace("index.html");}

	for (var i = 0; i < 1000; i++){
		getPost = JSON.parse(localStorage.getItem(`by ${accountActive.dataUser.nameUser} ` + i));
		if (getPost != null){localStorage.removeItem(getPost.onCoda);}
		localStorage.removeItem(`by ${accountActive.dataUser.nameUser} ` + i);
	}
	localStorage.removeItem(`likedBy ${accountActive.dataUser.nameUser}`);
	var nameUserList = JSON.parse(localStorage.getItem('nameUserList'));

    for(var i = 0; i < nameUserList.length; i++){
    	if (accountActive.dataUser.nameUser == nameUserList[i]){
    		let removed = nameUserList.splice(i, 1);
    	}
    }
	localStorage.setItem('nameUserList', JSON.stringify(nameUserList));
    localStorage.removeItem(loginKey);
    localStorage.removeItem("loginActive000");
    window.location.replace("index.html");
})