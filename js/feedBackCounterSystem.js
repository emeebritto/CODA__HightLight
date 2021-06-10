if (localStorage.getItem("loginActive000") != null && localStorage.getItem(`likedBy ${accountActive.dataUser.nameUser}`) == null){
	likedBy = [];
	localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));
}

function markLike() {
	if (localStorage.getItem("loginActive000") == null){
		alert("You must be logged in to like this post");
		return
	}

	liked = event.target.parentNode;
    target = event.target;
    console.log("1")

	parenteContent = liked.parentElement.parentElement.parentElement.parentElement;

	likedBy = JSON.parse(localStorage.getItem(`likedBy ${accountActive.dataUser.nameUser}`));

	console.log("2")

	for(var i = 0; 0 < likedBy.length; i++){
		console.log("6")
		if (likedBy[i] == parenteContent.dataset.id) {
			console.log("3")
			postTarget = JSON.parse(localStorage.getItem(parenteContent.dataset.id));
	        postTarget.detalhesDoproject.numLikes = postTarget.detalhesDoproject.numLikes - 1;
	        target.src="assets/icons/favorite_border_white_24dp.svg";
	        liked.querySelector(".num_likes").textContent = postTarget.detalhesDoproject.numLikes;
	        localStorage.setItem(postTarget.onCoda, JSON.stringify(postTarget));
	        localStorage.setItem(postTarget.onPrivacy, JSON.stringify(postTarget));
	        likedBy.splice(postTarget.onCoda);
	        localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));
	        return
		}
	}

	console.log("4")

	postTarget = JSON.parse(localStorage.getItem(parenteContent.dataset.id));
	likedBy.push(postTarget.onCoda);
	console.log("5")
	postTarget.detalhesDoproject.numLikes = postTarget.detalhesDoproject.numLikes + 1;
	target.src="assets/icons/icon_like.svg";
	liked.querySelector(".num_likes").textContent = postTarget.detalhesDoproject.numLikes;
	localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));
	localStorage.setItem(postTarget.onCoda, JSON.stringify(postTarget));
	if (localStorage.getItem("loginActive000") != null){
	    localStorage.setItem(postTarget.onPrivacy, JSON.stringify(postTarget));		
	}
}
