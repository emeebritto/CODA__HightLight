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
    if (verificationTwo == 0){
    	boxNoContent = document.querySelector(".box__noContent");
    	boxNoContent.style.display="inline-block";
    }
    if (verificationTwo != 0){
    	boxNoContent = document.querySelector(".box__noContent");
    	boxNoContent.style.display="none";
    }
}
