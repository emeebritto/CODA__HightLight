var save__btn = document.querySelector(".personalization__buttonSave");
var projectName = document.querySelector(".myProject__name");
var projectDescription = document.querySelector(".myProject__description");
var selectedColor = document.querySelector('input[type=color]');
var rgb__btn = document.querySelector(".modoRGB__icon");
var blockCheck = document.querySelector(".block_checkbox");
var codeField = document.querySelector(".wrapper_code");
var nameUser = "Emerson_Britto";
var imgUser = nameUser;

/*----------------------------------------------------------------------------------------*/

save__btn.addEventListener("click", function(){
    if(localStorage.getItem("loginActive000") == null){
        document.getElementById("box_alert__NoLogged").style.display="";
        document.querySelector(".nav_float").style.display="none";
        return
    }

    nameUser = accountActive.dataUser.nameUser;
    imgUser = accountActive.dataUser.imgUser;

    save__btn.classList.add("loading-upload");
    setTimeout(function(){save__btn.classList.remove("loading-upload")}, 5000);

    if (projectName.value == ""){ projectName.value = "My Code in " + languagem.value };
    if (projectDescription.value == ""){ projectDescription.value = ". . ." };


    var rgb = hexToRGBA(selectedColor.value);
    var rgbSemVirgula = rgb.replace(/,/g, "  ");
    var rgbNumComBarra = rgbSemVirgula.replace("rgba(", "    ");
    var rgbNum = rgbNumComBarra.replace(")", "  ");
    var rgbRstr = rgbNum.substring(0, 7);
    var rgbGstr = rgbNum.substring(7, 12);
    var rgbBstr = rgbNum.substring(12, 18);
    var rNum = parseInt(rgbRstr);
    var gNum = parseInt(rgbGstr);
    var bNum = parseInt(rgbBstr);

    if (rNum > 150){ rNum = rNum - (rNum - 150); }     
    if (gNum > 150){ gNum = gNum - (gNum - 150); }
    if (bNum > 150){ bNum = bNum - (bNum - 150); }

    RGBResult = 'rgb('+ rNum + "," + gNum + "," + bNum +')' ;



    if (typeof(Storage) !== "undefined") {
        const project = createProject();
        setLocalStorage(project);
        return
    } else {
        console.log('localStorage - Browser incompatible');
        return
    }
});

function createProject() {
    var daten = Date.now();
    let project = {'onCoda': applyCodaId(), 'onPrivacy': applyId(), 'detalhesDoproject': {'projectName': projectName.value, 'projectDescription': projectDescription.value, 'selectedLanguagem': languagem.value, 'code': codeField.querySelector('code').innerText, 'selectedColor': RGBResult, 'RGBmode': rgb__btn.value, 'privacyMode': blockCheck.value, 'timepost': daten, 'orderList': applyOrder(), 'user': {'nameUser': nameUser, 'imgUser': imgUser}}
    }
    return project;
}

function applyCodaId() {
    if (blockCheck.value == 0){
        for (var i = 0; i <= localStorage.length; i++) {
            var verificao = localStorage.getItem("onCoda " + i);
            if (verificao == null){
                return "onCoda " + i;
            }
        }        
    }
    return "none";
}

function applyId() {
    for (var i = 0; i <= localStorage.length; i++) {
        var verificao = localStorage.getItem(`by ${nameUser} ` + i);
        if (verificao == null){
            return `by ${nameUser} ` + i;
        }
    }
}

function applyOrder() {
    for (var i = 0; i <= localStorage.length; i++) {
        var verifyOrder = localStorage.getItem("codaX " + i);
        if (verifyOrder == null){
            var temp = 99999 - i;
            localStorage.setItem("codaX " + i, "counterCoda")
            return "order:" + temp;
        }
    }
}


function setLocalStorage(objetoJson) {
    setTimeout(function(){document.querySelector(".alert__successfulUpload").style.display="";}, 2000);
    setTimeout(function(){document.querySelector(".alert__successfulUpload").style.display="none";}, 5300);
    projectName.value = "";
    projectDescription.value = "";
    codeField.querySelector('code').innerText = "";
    if (objetoJson.onCoda != "none"){
        localStorage.setItem(objetoJson.onCoda, JSON.stringify(objetoJson));        
    }
    localStorage.setItem(objetoJson.onPrivacy, JSON.stringify(objetoJson));
}

function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
}

/*console.log(codeField.querySelector('code').innerText);*/



/*-----------------------------------------------------------------------------------------*/




/*var x = document.getElementById("demo");

var loop = 0

function getLocation() {
    if (loop == 0){
        if (navigator.geolocation) {
            alert("THE LANGUAGEM IS BASED IN LOCATION");
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
        loop = 1;
    }
}


function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude)
}

var mandrill = require('node-mandrill')('<your API Key>'); 

function sendEmail ( _name, _email, _subject, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{email: _email , name: _name}],
            from_email: 'noreply@yourdomain.com',
            subject: _subject,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );
        else console.log(response);
    });
}

// define your own email api which points to your server.

app.post( '/api/sendemail/', function(req, res){

    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = req.body.subject;
    var _messsage = req.body.message;

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message );

});*/