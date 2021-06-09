var myPosts = document.querySelector(".myPosts");
var boxNoContentMyPost = document.querySelector(".box__noContent_myPost");
var userLoged = "Emerson_Britto";
let projectWithRGB = [];

new function () {
    showProject()
}

function showProject() {

	if (localStorage.getItem("loginActive000") == null){
		document.querySelector(".box__nologged_myPost").style.display="";
		return
	}

    document.querySelector(".highLightbyNameUser").textContent = `Posted by "${accountActive.dataUser.nameUser}"`;

	userLoged = accountActive.dataUser.nameUser;

	var verificationUser = localStorage.getItem(`by ${userLoged} ` + 0);

	if (verificationUser != null){

	    let projectUser = []
	    projectWithRGB = [];
	    for(let i = 0; i < localStorage.length; i++) {
	        if (localStorage.getItem(`by ${userLoged} ` + i) != null){
	            projectUser.push(JSON.parse(localStorage.getItem(`by ${userLoged} ` + i)))	    		
	    	}
	    }

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
	}

	if (verificationUser == null){
	    boxNoContentMyPost.style.display="inline-block";
	}
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

function createCard(project) {

	if (project.detalhesDoproject.privacyMode == 0) {
		privacyIcon = "assets/icons/public_white_24dp.svg";
	}else {
		privacyIcon = "assets/icons/lock_white_24dp.svg";
	}

	var dateNF = timeSince(project.detalhesDoproject.timepost);

    const card = `
        <div class="demoBlock" data-id="${project.onPrivacy}" style=${project.detalhesDoproject.orderList}>
        	<section class="painel_border__CodePost" style="border-color: ${project.detalhesDoproject.selectedColor}">

        		<div class="contentSendFor">
		            <img class="contentSendFor__perfil_img" src="${project.detalhesDoproject.user.imgUser}">
		            <p class="contentSendFor__perfil_name">${project.detalhesDoproject.user.nameUser}</p>
		            <p class="contentSendFor__timePost">${dateNF}</p>
		            <section class="box_bookmark">
		                <img class="contentSendFor__privacyIcon" src=${privacyIcon}>
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
	const codigoHtmlMyPost = myPosts.querySelector(`[data-id="${project.onPrivacy}"]`);
	const code = codigoHtmlMyPost.querySelector('code');
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

