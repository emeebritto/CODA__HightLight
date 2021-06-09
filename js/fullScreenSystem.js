function fullView(){
	content = event.target;
	parentContent = content.offsetParent.parentElement.parentElement.parentElement;
	postTarget = JSON.parse(localStorage.getItem(parentContent.dataset.id));
	document.getElementById("inforUser__img").src = postTarget.detalhesDoproject.user.imgUser;
	document.getElementById("inforUser__name").textContent = postTarget.detalhesDoproject.user.nameUser;
	document.querySelector(".commit").textContent = postTarget.detalhesDoproject.projectDescription;

	var cloneContent = content.cloneNode("here");
	document.querySelector(".view__semiFullScreen").style.display="";
	local = document.querySelector(".wrapper_code");
	local.appendChild(cloneContent);
}

function closeFullView(){
	semiTarget = document.querySelector(".view__semiFullScreen");
	semiTarget.querySelector("code").remove();
	document.querySelector(".view__semiFullScreen").style.display="none";
}

