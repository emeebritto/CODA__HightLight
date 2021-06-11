(function(){
  var borderColor  = document.querySelector('.painel__border'),
      color = document.querySelector('input[type=color]'),
      body = document.querySelector('body');
  
  color.addEventListener('input', function(){

    borderColor.style.borderColor = this.value;
    document.documentElement.style.setProperty("--borderHover", this.value);
  });
  
})();

const fieldCode = document.querySelector('.wrapper_code');
const languagem = document.querySelector('.personalization__selectorLanguagem');
var lastSelect = languagem.value;
const codigo = fieldCode.querySelector('code');


function selectedLanguagem() {
    const codigo = fieldCode.querySelector('code')
    fieldCode.innerHTML = `<code class="preview hljs ${languagem.value}" contenteditable="true" aria-label="editor"></code>`
    fieldCode.firstChild.innerText = codigo.innerText

}

window.addEventListener('load', function(){
    selectedLanguagem();
});


languagem.addEventListener('change', () => {

    selectedLanguagem()
    highlightActive()
})

function highlightActive() {
    const button = document.querySelector('.button__viewHightLight');
    button.classList.add("button__viewHightLight__disable");
	const codigo = fieldCode.querySelector('code');
    hljs.highlightBlock(codigo);
}

function activeAlert(){
    const button = document.querySelector('.button__viewHightLight');
    button.classList.remove("button__viewHightLight__disable");
}

/*---------------------------------------------------------------------------------*/

document.querySelector(".box__button_Export").addEventListener("click", function(){
    var projectName = document.querySelector(".myProject__name");

    domtoimage.toBlob(document.getElementById('code')).then(function(blob){
        if (projectName.value == ""){
            projectName.value = "myCoda_Highlight ("+ languagem.value + ")";
        }
        window.saveAs(blob, projectName.value + ".png")
        if (projectName.value == "myCoda_Highlight ("+ languagem.value + ")"){
            projectName.value = "";
        }
    })

})

function testess(){

    var tl = gsap.timeline({repeat: 1, yoyo: true});

    tl.to(".nav_float", 3, {left: 340, rotate: 56}).to(".nav_float", 3, {y:123})
}