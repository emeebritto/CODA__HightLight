var blockCheck = document.querySelector(".block_checkbox");
blockCheck.value = "0";
check = 2;

blockCheck.addEventListener("click", function(){
    if (check == 1){
        blockCheck.classList.remove('block_checkbox__Checked')
        blockCheck.value = "0";
        console.log(blockCheck.value);
        check = 2;
        return
    }
    if (check == 2){
        blockCheck.classList.add('block_checkbox__Checked')
        blockCheck.value = "1";
        console.log(blockCheck.value);
        check = 1;
        return
    }
})