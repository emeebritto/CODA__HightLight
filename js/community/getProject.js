var communityPag = document.querySelector(".communityPag");
var boxNoContent = document.querySelector(".box__noContent");
let projectWithoutPrivacy = [];
var cnpc = 1;

new function () {
    showProject()
}

function showProject() {

	var verification = localStorage.getItem("onCoda " + 0);

	if (verification != null){

	    let projectCommunity = []
	    projectWithoutPrivacy = [];
	    for(let i = 0; i < localStorage.length; i++) {
	    	if (localStorage.getItem("onCoda " + i) != null){
	            projectCommunity.push(JSON.parse(localStorage.getItem("onCoda " + i)))	    		
	    	}
	    }

	    projectCommunity.forEach(project => {
	        const card = createCard(project)
        	communityPag.innerHTML += card
	        const codigoHtml = communityPag.querySelector(`[data-id="${project.onCoda}"]`)
	        projectWithoutPrivacy.push(communityPag.querySelector(`[data-id="${project.onCoda}"]`))
	        codigoHtml.querySelector('code').innerText = project.detalhesDoproject.code
	        addHighLight(project);
	    })

	}

	if (verification == null){
	    boxNoContent.style.display="inline-block";
	}
}

function createCard(project) {
	var dateNF = timeSince(project.detalhesDoproject.timepost);

    const card = `
        <div class="demoBlock" data-id="${project.onCoda}" style=${project.detalhesDoproject.orderList}>
        	<section class="painel_border__CodePost" style="border-color: ${project.detalhesDoproject.selectedColor}">

        		<div class="contentSendFor">
		            <img class="contentSendFor__perfil_img" src="${project.detalhesDoproject.user.imgUser}">
		            <p class="contentSendFor__perfil_name">${project.detalhesDoproject.user.nameUser}</p>
		            <p class="contentSendFor__timePost">${dateNF}</p>
		            <section class="box_bookmark">
		                <img class="contentSendFor__iconBookmark" src="assets/icons/bookmark_border_white_24dp.svg">
		            </section>
        		</div>

        		<section class="Info_project_Community">
				    <p class="descriptionProject">${project.detalhesDoproject.projectDescription}</p>
		        </section>

		        <section class="box_codePreview_FeedBacks">
		        	<div class="field_feedbacks">
		        		<div class="field_feedbacks__reports">
		        			<img class="icon_report" src="assets/icons/flag_white_24dp.svg">
		        			<p class="Text_ReportPost">Report</p>
		        		</div>
		        		<div class="field_feedbacks__commits">
		        			<img class="icons_feedback icon_commits" src="assets/icons/icon_feedBack.svg">
		        			<p class="num_feedbacks num_commits">0</p>
		        		</div>
		        		<div class="field_feedbacks__likes">
		        			<img class="icons_feedback icon_likes" src="assets/icons/icon_like.svg">
		        			<p class="num_feedbacks num_likes">0</p>
		        		</div>
		        	</div>
					<div class="painel_code__codePreview">
						<div class="box__buttons_decoration">
							<div class="button__decoration__red buttons__decoration"></div>
							<div class="button__decoration__yellow buttons__decoration"></div>
							<div class="button__decoration__green buttons__decoration"></div>
							<section class="label_language">
							    <label class="label_tagCode">${project.detalhesDoproject.selectedLanguagem}</label>										
							</section>
						</div>
						<div class="field_code">
						    <code class="campo__code hljs ${project.detalhesDoproject.selectedLanguagem}"></code>									
						</div>
					</div>
				</section>

		    </section>
        </div>
    `
    return card
}

function addHighLight(project){
    highlightActive(project);
}

function highlightActive(project) {
	const codigoHtml = communityPag.querySelector(`[data-id="${project.onCoda}"]`);
	const code = codigoHtml.querySelector('code');
    hljs.highlightBlock(code);
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " h ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " min ago";
  }
  return Math.floor(seconds) + " sec ago";
}
var aDay = 24*60*60*1000;

/*---------------------------------------------------------------------------------------*/

var boxFilter = document.querySelector(".community_filterlanguagen");
var btnFilterActive = document.querySelector(".filter_btn__active");

boxFilter.addEventListener("click", function(){
	if (event.target != boxFilter){
		btnFilterActive.classList.remove("filter_btn__active");
		event.target.classList.add("filter_btn__active");
		postFilter();
	}
});

var primaryClick = 0;
function postFilter(){
	if (primaryClick == 1){
	    for (var i = 0; i < projectWithoutPrivacy.length; i++) {
	    	postID = "onCoda " + i;
	        hhh = communityPag.querySelector(`[data-id="${postID}"]`);
	        if (hhh != null){
	            hhh.remove();	        	
	        }
	    }
	    showProject()
	}

	var verificationTwo = projectWithoutPrivacy.length;

	btnFilterActive = document.querySelector(".filter_btn__active");
	for (var i = 0; i < projectWithoutPrivacy.length; i++) {
        postID = "onCoda " + i;
		postFocus = communityPag.querySelector(`[data-id="${postID}"]`);
		tagCode = postFocus.querySelector(".label_tagCode");
		if (btnFilterActive.textContent == "All") {
			break
		}
		if (tagCode.textContent != btnFilterActive.textContent){
            communityPag.querySelector(`[data-id="${postID}"]`).remove();
            verificationTwo = verificationTwo -1;		
		}
	}
    primaryClick = 1;
    console.log(verificationTwo);
    if (verificationTwo == 0){
    	boxNoContent = document.querySelector(".box__noContent");
    	boxNoContent.style.display="inline-block";
    }
    if (verificationTwo != 0){
    	boxNoContent = document.querySelector(".box__noContent");
    	boxNoContent.style.display="none";
    }
}

// project.detalhesDoproject.projectName
// project.detalhesDoproject.projectDescription
// project.detalhesDoproject.selectedLanguagem
// project.detalhesDoproject.code
// project.detalhesDoproject.selectedColor
// project.detalhesDoproject.RGBmode
// project.detalhesDoproject.privacyMode