var myPosts = selected(".myPosts");
var boxNoContentMyPost = selected(".box__noContent_myPost");
var userLoged = "Emerson_Britto";
let projectWithRGB = [];

new function () {
    showProject()
}

function showProject() {

	if (localStorage.getItem("loginActive000") == null){
		selected(".box__nologged_myPost").style.display="";
		return
	}

    selected(".highLightbyNameUser").textContent = `Posted by "${accountActive.dataUser.nameUser}"`;

    let projectUser = []
    projectWithRGB = [];
    for(let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(`by ${userLoged} ` + i) != null){
            projectUser.push(JSON.parse(localStorage.getItem(`by ${userLoged} ` + i)))	    		
    	}
    }

    if (projectUser.length == 0) {boxNoContentMyPost.style.display="inline-block"; return};

    projectUser.forEach(project => {
        const card = createCard(project)
    	myPosts.innerHTML += card
        const codigoHtmlMyPost = myPosts.querySelector(`[data-id="${project.onPrivacy}"]`)

        if (project.detalhesDoproject.RGBmode == "on"){
        	projectWithRGB.push(project.onPrivacy);
        }

        codigoHtmlMyPost.querySelector('code').innerText = project.detalhesDoproject.code
        addHighLight(project);
		
		if (project.detalhesDoproject.privacyMode == 1) {
			boxFeedbacks = codigoHtmlMyPost.querySelector(".field_feedbacks");
			codePreview = codigoHtmlMyPost.querySelector(".painel_code__codePreview");
			boxFeedbacks.classList.add("field_feedbacks__Off");
			boxFeedbacks.classList.remove("field_feedbacks");
			codePreview.classList.add("painel_code__codePreview__NoFeed");
		}
    })
    applyRGB();
    postLiked();
}

function applyRGB(){
	setInterval(function(){
		for(var i = 0; i < projectWithRGB.length; i++){
        	postCaptured = myPosts.querySelector(`[data-id="${projectWithRGB[i]}"]`);
        	postborderColor = postCaptured.querySelector(".painel_border__CodePost");
		    rr = Math.floor(Math.random() * 161);
		    gg = Math.floor(Math.random() * 161);
		    bb = Math.floor(Math.random() * 161);
		    formatacaoRGB = 'rgb('+ rr + "," + gg + "," + bb +')' ;
		    postborderColor.style.borderColor = formatacaoRGB;
		}
	},2000)
}

function postLiked(){
	if (localStorage.getItem("loginActive000") == null) {return}
	likedBy = JSON.parse(localStorage.getItem(`likedBy ${accountActive.dataUser.nameUser}`));
    likedBy.forEach(function(postLiked){
    	redirectPost = JSON.parse(localStorage.getItem(postLiked));
    	postLiked = myPosts.querySelector(`[data-id="${redirectPost.onPrivacy}"]`);
    	if (postLiked != null){
    	    postLiked.querySelector(".icon_likes").src="assets/icons/icon_like.svg";    		
    	}
    })
}

function addHighLight(project){
    highlightActive(project);
}

function highlightActive(project) {
	const codigoHtmlMyPost = myPosts.querySelector(`[data-id="${project.onPrivacy}"]`);
	const code = codigoHtmlMyPost.querySelector('code');
    hljs.highlightBlock(code);
}
