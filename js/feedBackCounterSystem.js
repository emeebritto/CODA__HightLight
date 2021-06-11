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
    console.log("1")

	parenteContent = liked.parentElement.parentElement.parentElement.parentElement;
	console.log(parenteContent)

	likedBy = JSON.parse(localStorage.getItem(`likedBy ${accountActive.dataUser.nameUser}`));

	console.log("2")

	/*for(var i = 1; i < likedBy.length; i++){*/
	likedBy.forEach(function(postLiked){
		redirect = JSON.parse(localStorage.getItem(parenteContent.dataset.id));
		console.log("6")
		if (postLiked == redirect.onCoda) {
			console.log("3")
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

	console.log("4")

	postTarget = JSON.parse(localStorage.getItem(parenteContent.dataset.id));
	console.log(postTarget)

	likedBy.push(postTarget.onCoda);
	console.log("5")

	postTarget.detalhesDoproject.numLikes = postTarget.detalhesDoproject.numLikes + 1;
	target.src="assets/icons/icon_like.svg";
	liked.querySelector(".num_likes").textContent = postTarget.detalhesDoproject.numLikes;
	localStorage.setItem(`likedBy ${accountActive.dataUser.nameUser}`, JSON.stringify(likedBy));
	console.log(`likedBy ${accountActive.dataUser.nameUser}`)

	localStorage.setItem(postTarget.onCoda, JSON.stringify(postTarget));
	console.log(postTarget.onCoda)

	if (localStorage.getItem("loginActive000") != null && postTarget.onPrivacy != undefined){
	    localStorage.setItem(postTarget.onPrivacy, JSON.stringify(postTarget));
	    console.log(postTarget.onPrivacy)
	}
}
