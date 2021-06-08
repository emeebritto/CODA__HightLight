document.querySelector(".box__linkToRegister").addEventListener("click", function(){
    document.querySelector(".container_background__screenTwo").style.display="";
    window.scrollTo({ left: 1500, top: 0, behavior: "smooth" });
    setTimeout(function(){document.querySelector(".container_background").style.display="none";}, 500);
});

document.querySelector(".box__linkToLogin").addEventListener("click", function(){
    document.querySelector(".container_background").style.display="";
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setTimeout(function(){document.querySelector(".container_background__screenTwo").style.display="none";}, 500);
});

if (window.scrollX == 0){
    document.querySelector(".container_background__screenTwo").style.display="none";
}

if (sessionStorage.getItem("redirectLogin") != null){
    sessionStorage.removeItem("redirectLogin");
    document.querySelector(".container_background__screenTwo").style.display="";
    window.scrollTo({ left: 1500, top: 0, behavior: "smooth" });
    setTimeout(function(){document.querySelector(".container_background").style.display="none";}, 500);
}



/*------------------------------------PLUS--------------------------------------*/


function redirectMain(){
    window.location.replace("index.html");
}