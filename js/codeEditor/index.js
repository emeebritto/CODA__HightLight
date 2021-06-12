(function(){
  var borderColor  = document.querySelector('.painel__border'),
      color = document.querySelector('input[type=color]'),
      body = document.querySelector('body');
  
  color.addEventListener('input', function(){

/*    borderColor.style.backgroundColor = this.value;*/
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
    button.style.opacity="0%";
	const codigo = fieldCode.querySelector('code');
    hljs.highlightBlock(codigo);
}

function activeAlert(){
    const button = document.querySelector('.button__viewHightLight');
    button.style.opacity="100%";
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
