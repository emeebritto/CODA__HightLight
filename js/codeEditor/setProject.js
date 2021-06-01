var save__btn = document.querySelector(".personalization__buttonSave");
var projectName = document.querySelector(".myProject__name");
var projectDescription = document.querySelector(".myProject__description");
var selectedColor = document.querySelector('input[type=color]');
var rgb__btn = document.querySelector(".modoRGB__icon");
var blockCheck = document.querySelector(".block_checkbox");
var codeField = document.querySelector(".wrapper_code");

/*----------------------------------------------------------------------------------------*/

save__btn.addEventListener("click", function(){

    if (projectName.value == ""){ projectName.value = "My Code in " + languagem.value };
    if (projectDescription.value == ""){ projectDescription.value = ". . ." };


    var rgb = hexToRGBA(selectedColor.value);
    console.log(rgb);
    var rgbSemVirgula = rgb.replace(/,/g, "  ");
    var rgbNumComBarra = rgbSemVirgula.replace("rgba(", "    ");
    var rgbNum = rgbNumComBarra.replace(")", "  ");
    var rgbRstr = rgbNum.substring(0, 7);
    var rgbGstr = rgbNum.substring(7, 12);
    var rgbBstr = rgbNum.substring(12, 18);
    var rNum = parseInt(rgbRstr);
    var gNum = parseInt(rgbGstr);
    var bNum = parseInt(rgbBstr);
    console.log(rNum); console.log(gNum); console.log(bNum); console.log("-----------------");


    if (rNum > 150){ rNum = rNum - (rNum - 150); }     
    if (gNum > 150){ gNum = gNum - (gNum - 150); }
    if (bNum > 150){ bNum = bNum - (bNum - 150); }

    console.log(rNum); console.log(gNum); console.log(bNum);

    RGBResult = 'rgb('+ rNum + "," + gNum + "," + bNum +')' ;



    if (typeof(Storage) !== "undefined") {
        const project = createProject();
        setLocalStorage(project);
        return
    } else {
        console.log('Browser incompatible');
        return
    }
});

function createProject() {
    var daten = Date.now();
    let project = {'onCommunity': applyIdCommunity(), 'detalhesDoproject': {'projectName': projectName.value, 'projectDescription': projectDescription.value, 'selectedLanguagem': languagem.value, 'code': codeField.querySelector('code').innerText, 'selectedColor': RGBResult, 'RGBmode': rgb__btn.value, 'privacyMode': blockCheck.value, 'timepost': daten, 'orderList': applyOrder()}
    }
    console.log(project);
    return project;
}

function applyIdCommunity() {
	for (var i = 0; i <= localStorage.length; i++) {
		var verificao = localStorage.getItem("onCommunity " + i);
		if (verificao == null){
		    return "onCommunity " + i;
		}
	}
}

function applyOrder() {
    for (var i = 0; i <= localStorage.length; i++) {
        var verifyOrder = localStorage.getItem("onCommunity " + i);
        if (verifyOrder == null){
            var temp = 99999 - i;
            return "order:" + temp;
        }
    }
}


function setLocalStorage(objetoJson) {
    console.log("project saved");
    projectName.value = "";
    projectDescription.value = "";
    localStorage.setItem(objetoJson.onCommunity, JSON.stringify(objetoJson));
}

function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
}

/*console.log(codeField.querySelector('code').innerText);*/