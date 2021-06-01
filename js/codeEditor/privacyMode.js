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