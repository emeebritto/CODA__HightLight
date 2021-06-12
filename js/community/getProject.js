var communityPag = document.querySelector(".communityPag");
var boxNoContent = document.querySelector(".box__noContent");
let projectWithoutPrivacy = [];
let projectWithRGB = [];
var cnpc = 1;
var likedBy ="";

new function () {
    showProject()
}

function showProject() {

	var verification = localStorage.getItem("onCoda " + 0);

	if (verification != null){

	    let projectCommunity = [];
	    projectWithoutPrivacy = [];
	    projectWithRGB = [];
	    for(let i = 0; i < localStorage.length; i++) {
	    	if (localStorage.getItem("onCoda " + i) != null){
	            projectCommunity.push(JSON.parse(localStorage.getItem("onCoda " + i)))	    		
	    	}
	    }

	    projectCommunity.forEach(project => {
	        const card = createCard(project)
        	communityPag.innerHTML += card
	        const codigoHtml = communityPag.querySelector(`[data-id="${project.onCoda}"]`)

	        if (project.detalhesDoproject.RGBmode == "on"){
	        	projectWithRGB.push(project.onCoda);
	        }

	        projectWithoutPrivacy.push(communityPag.querySelector(`[data-id="${project.onCoda}"]`))
	        codigoHtml.querySelector('code').innerText = project.detalhesDoproject.code
	        addHighLight(project);
	    })
	    applyRGB();
	    postLiked();

	}

	if (verification == null){
	    boxNoContent.style.display="inline-block";
	}
}

function applyRGB(){
	setInterval(function(){
		for(var i = 0; i < projectWithRGB.length; i++){
        	postCaptured = communityPag.querySelector(`[data-id="${projectWithRGB[i]}"]`);
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
    for (var i = 0; i < likedBy.length; i++) {
    	postLiked = communityPag.querySelector(`[data-id="${likedBy[i]}"]`);
    	if (postLiked != null){
    	    postLiked.querySelector(".icon_likes").src="assets/icons/icon_like.svg";    		
    	}
    }
}

function addHighLight(project){
    highlightActive(project);
}

function highlightActive(project) {
	const codigoHtml = communityPag.querySelector(`[data-id="${project.onCoda}"]`);
	const code = codigoHtml.querySelector('code');
    hljs.highlightBlock(code);
}

/*---------------------------------------------------------------------------------------*/
