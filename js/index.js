var bordeColor = document.querySelector(".painel__border");
var selectorColor = document.querySelector(".personalization__selectorColor");
var selectColor = "";

function shiftColor() {
	selectColor = selectorColor.value;
	bordeColor.style.backgroundColor = selectColor;
}

const fieldCode = document.querySelector('.wrapper_code')
const languagem = document.querySelector('.personalization__selectorLanguagem')
const button = document.querySelector('.button__viewHightLight')

function selectedLanguagem() {
    const codigo = fieldCode.querySelector('code')
    fieldCode.innerHTML = `<code class="preview hljs ${languagem.value}" contenteditable="true" aria-label="editor"></code>`
    fieldCode.firstChild.innerText = codigo.innerText
}

window.addEventListener('load', function(){
    selectedLanguagem()
    highlightActive()    
});

languagem.addEventListener('change', () => {
    selectedLanguagem()
    highlightActive()
})

button.addEventListener('click', () => {
    highlightActive()
})

function highlightActive() {
	const codigo = fieldCode.querySelector('code');
    hljs.highlightBlock(codigo);
}
