function fullView(){
    stopBackground();

	content = event.target;
	parentContent = content.offsetParent.parentElement.parentElement.parentElement;
	postTarget = JSON.parse(localStorage.getItem(parentContent.dataset.id));
	document.getElementById("inforUser__img").src = postTarget.detalhesDoproject.user.imgUser;
	document.getElementById("inforUser__name").textContent = postTarget.detalhesDoproject.user.nameUser;
	document.querySelector(".commit").textContent = postTarget.detalhesDoproject.projectDescription;
	document.getElementById("dateFeedbacks_numLike").textContent = postTarget.detalhesDoproject.numLikes;
	document.getElementById('dateFeedbacks_numCommit').textContent = postTarget.detalhesDoproject.numCommits;

	var cloneContent = content.cloneNode("here");
	document.querySelector(".view__semiFullScreen").style.display="";
	local = document.querySelector(".wrapper_code");
	local.appendChild(cloneContent);

	if (localStorage.getItem("loginActive000") != null){
		document.querySelector(".section__sendCommit").style.display="";
		imgUser_sendCommit = document.getElementById("imgUser_sendCommit")
		imgUser_sendCommit.src = accountActive.dataUser.imgUser;
		document.getElementById("tooltip_txt").textContent= `Logged - @${accountActive.dataUser.nameUser}`
	}else{
		document.getElementById("alertNoLogged__sendCommit").style.display="";
	}
}

function closeFullView(){
	returnBackground();
	semiTarget = document.querySelector(".view__semiFullScreen");
	semiTarget.querySelector("code").remove();
	document.querySelector(".view__semiFullScreen").style.display="none";
}

/*------------------------------------------------------------*/

function stopBackground(){
	lastPositionScroll = window.scrollY;
	console.log(lastPositionScroll);
	document.querySelector(".container").style.overflow="hidden";
	document.querySelector(".container").style.height="87vh";
	return
}

function returnBackground(){
	document.querySelector(".container").style.overflow="";
	document.querySelector(".container").style.height="";
	window.scrollTo({ left: 0, top: lastPositionScroll });
}

function showNameUserLogged(){
	setTimeout(function(){
	    document.getElementById('tooltip').style.display="";		
	},500);

}

function hideNameUserLogged(){
	document.getElementById('tooltip').style.display="none";
	setTimeout(function(){
	    document.getElementById('tooltip').style.display="none";		
	},500);
}