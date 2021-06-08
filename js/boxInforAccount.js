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
	console.log("1");
	if (event.target != document.querySelector(".box_inforAccount_logOut") && event.target != document.querySelector(".box_inforAccount") && boxInfoAccountActive == true && event.target != document.getElementById("nav_link__account")){
		console.log("2");
		document.querySelector(".box_inforAccount").style.display="none";
		boxInfoAccountActive = false;
	}
})