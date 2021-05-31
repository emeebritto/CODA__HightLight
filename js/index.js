(function(){
  var borderColor  = document.querySelector('.painel__border'),
      color = document.querySelector('input[type=color]');
  
  color.addEventListener('input', function(){
/*    console.log(this.value);*/
    borderColor.style.backgroundColor = this.value;
  });
  
})();



const fieldCode = document.querySelector('.wrapper_code');
const languagem = document.querySelector('.personalization__selectorLanguagem');
var lastSelect = languagem.value;
const codigo = fieldCode.querySelector('code');

/*codigo.classList.add(preview);*/

function selectedLanguagem() {
    const codigo = fieldCode.querySelector('code')
    fieldCode.innerHTML = `<code class="preview hljs ${languagem.value}" contenteditable="true" aria-label="editor"></code>`
    fieldCode.firstChild.innerText = codigo.innerText
/*    codigo.classList.add(languagem.value);
    lastSelect = languagem.value;*/
}

window.addEventListener('load', function(){
    selectedLanguagem();
});

codigo.addEventListener('change', function(){
    console.log("mudança aqui");
    selectedLanguagem()
    highlightActive()    
});

languagem.addEventListener('change', () => {
/*    codigo.classList.remove(lastSelect);*/
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

var blockCheck = document.querySelector(".block_checkbox");
var btn_saveProject = document.querySelector(".personalization__buttonSave");
blockCheck.value = "0";
check = 2;

blockCheck.addEventListener("click", function(){
    if (check == 1){
        blockCheck.classList.remove('block_checkbox__Checked')
        btn_saveProject.textContent = "Save and Publish"
        blockCheck.value = "0";
        console.log(blockCheck.value);
        check = 2;
        return
    }
    if (check == 2){
        blockCheck.classList.add('block_checkbox__Checked')
        btn_saveProject.textContent = "Save Project"
        blockCheck.value = "1";
        console.log(blockCheck.value);
        check = 1;
        return
    }
})