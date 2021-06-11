boxSearchActive = false;

document.getElementById("nav_link__search").addEventListener("click", function(){
	console.log("0");
	document.querySelector(".box__search").style.display="";
	if(!boxSearchActive){
	    setTimeout(function(){boxSearchActive = true;}, 100);
	}
})

document.querySelector('body').addEventListener("click", function(){
	if (event.target != document.querySelector(".input_search") && event.target != document.querySelector(".box__search") && boxSearchActive == true && event.target != document.getElementById("nav_link__search")){
		console.log("2");
		document.querySelector(".box__search").style.display="none";
		boxSearchActive = false;
	}
})