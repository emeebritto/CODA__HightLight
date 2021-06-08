if (localStorage.getItem("loginActive000") == null){
	document.getElementById("nav_link__SignUpIn").style.display="";
	document.getElementById("nav_link__account").style.display="none";
}else{
	document.getElementById("nav_link__SignUpIn").style.display="none";
	var loginKey = localStorage.getItem("loginActive000");
	var accountActive = JSON.parse(localStorage.getItem(loginKey));
	document.getElementById("nav_link__account").style.display="";
	document.getElementById("box_titleSection_account").textContent = accountActive.dataUser.nameUser;
	document.querySelector(".box_inforAccount_nameUser").textContent = accountActive.dataUser.nameUser;
	document.querySelector(".imgUser").src = accountActive.dataUser.imgUser;
	document.querySelector(".box_inforAccount_imgAccount").src = accountActive.dataUser.imgUser;
	document.querySelector(".box_inforAccount_idUser").textContent = `ID: ${accountActive.idUser}`;
	
}