(function(){
  var borderColor  = document.querySelector('.painel__border'),
      color = document.querySelector('input[type=color]');
  
  color.addEventListener('input', function(){

    borderColor.style.backgroundColor = this.value;
  });
  
})();

var searchBar = document.querySelector(".top__search");

searchBar.addEventListener("input", function(){
    if (searchBar.value == "/clearStorage"){
        localStorage.clear();
        alert("O localStorage foi resetado com sucesso");
        searchBar.value = "";
    }
})

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

