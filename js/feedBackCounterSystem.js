if (localStorage.getItem("loginActive000") != null && localStorage.getItem(`likedBy ${accountActive.dataUser.nameUser}`) == null){
	likedBy = [];
	localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));
}

var liked="";
var target="";
var parenteContent="";
var postTarget="";
var redirect="";
var xreturn="";

function markLike() {
    "use strict"

    xreturn = false;

	if (localStorage.getItem("loginActive000") == null){
		alert("You must be logged in to like this post");
		return
	}

	liked = event.target.parentNode;
    target = event.target;

	parenteContent = liked.parentElement.parentElement.parentElement.parentElement;

	likedBy = JSON.parse(localStorage.getItem(`likedBy ${accountActive.dataUser.nameUser}`));

	likedBy.forEach(function(postLiked){
		redirect = JSON.parse(localStorage.getItem(parenteContent.dataset.id));
		if (postLiked == redirect.onCoda) {
			postTarget = JSON.parse(localStorage.getItem(parenteContent.dataset.id));
	        postTarget.detalhesDoproject.numLikes = postTarget.detalhesDoproject.numLikes - 1;
	        target.src="assets/icons/favorite_border_white_24dp.svg";
	        liked.querySelector(".num_likes").textContent = postTarget.detalhesDoproject.numLikes;
	        localStorage.setItem(postTarget.onCoda, JSON.stringify(postTarget));
	        localStorage.setItem(postTarget.onPrivacy, JSON.stringify(postTarget));
	        likedBy.splice(postTarget.onCoda);
	        localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));
	        xreturn = true;
	        return
		}
	})

	if(xreturn == true){return}

	postTarget = JSON.parse(localStorage.getItem(parenteContent.dataset.id));

	likedBy.push(postTarget.onCoda);

	postTarget.detalhesDoproject.numLikes = postTarget.detalhesDoproject.numLikes + 1;
	target.src="assets/icons/icon_like.svg";
	liked.querySelector(".num_likes").textContent = postTarget.detalhesDoproject.numLikes;
	localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));

	localStorage.setItem(postTarget.onCoda, JSON.stringify(postTarget));

	if (localStorage.getItem("loginActive000") != null && postTarget.onPrivacy != undefined){
	    localStorage.setItem(postTarget.onPrivacy, JSON.stringify(postTarget));
	}
}
