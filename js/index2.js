const field_Code = document.querySelector('.field_code')
const code_languagem = document.querySelector('.label_tagCode')

function selectedLanguagem() {
    const code = field_Code.querySelector('code')
    field_Code.innerHTML = `<code class="preview hljs ${code_languagem.textContent}" contenteditable="true" aria-label="editor"></code>`
    field_Code.firstChild.innerText = code.innerText
}

window.addEventListener('load', () => {
    selectedLanguagem()
    highlightActive()
})

function highlightActive() {
	const code = field_Code.querySelector('code');
    hljs.highlightBlock(code);
}