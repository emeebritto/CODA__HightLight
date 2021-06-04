var rgb__btn = document.querySelector(".modoRGB__icon");
color = document.querySelector('.personalization__selectorColor');
rgb__btn.value = "off";
mode = 1;
var rr = 0;
var gg = 0;
var bb = 0;

rgb__btn.addEventListener('click', function(){
    if (mode == 1){
        rgb__btn.src = "assets/icons/toggle_on_white_24dp.svg"
        rgb__btn.value = "on";
        color.style.display="none";
        mode = 2;
        intervalRgb = setInterval(modoRGB, 2000);
        return
    }
    if (mode == 2){
        rgb__btn.src = "assets/icons/toggle_off_white_24dp.svg"
        rgb__btn.value = "off";
        color.style.display="inline-block";
        mode = 1;
        clearInterval(intervalRgb);
        return
    }

});

function modoRGB(){
    borderColor  = document.querySelector('.painel__border');
    rr = Math.floor(Math.random() * 151);
    gg = Math.floor(Math.random() * 151);
    bb = Math.floor(Math.random() * 151);
    formatacaoRGB = 'rgb('+ rr + "," + gg + "," + bb +')' ;
/*    borderColor.style.backgroundColor = formatacaoRGB;*/
    borderColor.style.borderColor = formatacaoRGB;
};