var hearder = document.querySelector(".inSroll");
var arrowUp = document.querySelector(".circle_arrowUp");

document.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if (scroll > 164){
        hearder.style.display="";
        arrowUp.style.display="";
    }
    if (scroll < 164){
        hearder.style.display="none";
        arrowUp.style.display="none"
    }
})

document.querySelector(".circle_arrowUp").addEventListener("click", function(){
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});