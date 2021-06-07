var blockCheck = document.querySelector(".block_checkbox");
blockCheck.value = false;
checkRobot = true;

blockCheck.addEventListener("click", function(){
    if (checkRobot == false){
        blockCheck.classList.remove('block_checkbox__Checked')
        blockCheck.value = false;
        checkRobot = true;
        releaseAcess();
        return
    }
    if (checkRobot == true){
        blockCheck.classList.add('block_checkbox__Checked')
        blockCheck.value = true;
        checkRobot = false;
        releaseAcess();
        return
    }
})