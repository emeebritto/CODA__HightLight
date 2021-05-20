var bordeColor = document.querySelector(".painel__border");
var selectorColor = document.querySelector(".personalization__selectorColor");
var selectColor = "";

function shiftColor() {
	selectColor = selectorColor.value;
	bordeColor.style.backgroundColor = selectColor;
}