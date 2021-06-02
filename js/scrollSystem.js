var hearder = document.querySelector(".inSroll");
var scroll = window.scrollY;

document.addEventListener("scroll", function(){
    scroll = window.scrollY;
    if (scroll > 164){
        hearder = document.querySelector(".inSroll");
        hearder.style.display="flex";
        console.log("Condição executada");
    }
    if (scroll < 164){
        hearder = document.querySelector(".inSroll");
        hearder.style.display="none";
        console.log("Condição 2 executada");
    }
})

