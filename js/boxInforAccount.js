boxInfoAccountActive = false;

document.getElementById("nav_link__account").addEventListener("click", function(){
	console.log("0");
	document.querySelector(".box_inforAccount").style.display="";
	if(!boxInfoAccountActive){
	    setTimeout(function(){boxInfoAccountActive = true;}, 100);
	}
})

document.querySelector(".box_inforAccount_logOut").addEventListener("click", function(){
	localStorage.removeItem("loginActive000");
	window.location.reload();
})

document.querySelector('body').addEventListener("click", function(){
	if (event.target != document.querySelector(".box_inforAccount_logOut") && event.target != document.querySelector(".box_inforAccount") && boxInfoAccountActive == true && event.target != document.getElementById("nav_link__account")){
		document.querySelector(".box_inforAccount").style.display="none";
		boxInfoAccountActive = false;
	}
})