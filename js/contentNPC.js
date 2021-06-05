var vnpc = localStorage.getItem("cnpc00");

if (vnpc == null){
	var nameUser = ['maria', 'pedro', 'Gghosh12', 'nomad3n', 'js9876', 'joanajo'];
	var description = [
	`meu primeiro code`, 
	`camparação - js VS jquery`,
	`Como puedo detectar el movimiento de mi scrollbar`,
	`Geolocation API`,
	`Using Emojis in HTML

	Emojis are also characters from the UTF-8 alphabet:

	😄 is 128516
	😍 is 128525
	💗 is 128151`,
	`HTML Layout Elements`
	];
	var codeLanguagem = ['Python', 'JavaScript', 'JavaScript', 'JavaScript', 'HTML', 'HTML']
	var timepostUser = [`1622709918563`, `1622797245345`, `1622797908334`, `1622796810452`, `1622797245345`, `1622797908334`]
	var colorPostUser = [`#26BB17`, `#17BBB1`, `#1835C6`, `#770BD6`, `#D5D22D`, `#DB1249`]
	var codeUser = [
	`print("olá Mundo")`,

	`1.	JavaScript is an interpreted language and is written in C. It’s a combination of ECMA script and DOM (Document Object Model).
	While JQuery Uses the resources that are provided by JavaScript to make things easier. It is a light-weight JavaScript library. It has only the DOM.`,

	`// Detectamos cuando el usuario desplace la pantalla
	window.onscroll = function (){
	    // Obtenemos la posicion del scroll en pantall
	    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

	    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
	    if(scroll > 300 && scroll < 400){
	        console.log("Pasaste la posicion 300 del scroll");
	    }
	}`,

	`var x = document.getElementById("demo");
	function getLocation() {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(showPosition);
	  } else {
	    x.innerHTML = "Geolocation is not supported by this browser.";
	  }
	}

	function showPosition(position) {
	  x.innerHTML = "Latitude: " + position.coords.latitude +
	  "<br>Longitude: " + position.coords.longitude;
	}`,

	`<!DOCTYPE html>
	<html>
		<head>
		   <meta charset="UTF-8">
		</head>
		<body>

		   <h1>My First Emoji</h1>

		   <p>&#128512;</p>

	    </body>
	</html>`,

	`<header> - Defines a header for a document or a section
	<nav> - Defines a set of navigation links
	<section> - Defines a section in a document
	<article> - Defines an independent, self-contained content
	<aside> - Defines content aside from the content (like a sidebar)
	<footer> - Defines a footer for a document or a section
	<details> - Defines additional details that the user can open and close on demand
	<summary> - Defines a heading for the <details> element`
	]


	for(var i = 0; i < nameUser.length; i++){

		var project = createProject(i);
        setLocalStorage(project);

		function createProject(i) {

		    let project = {'onCommunity': applyIdCommunity(), 'detalhesDoproject': {'projectName': "none", 'projectDescription': description[i], 'selectedLanguagem': codeLanguagem[i], 'code': codeUser[i], 'selectedColor': colorPostUser[i], 'RGBmode': "none", 'privacyMode': "3", 'timepost': timepostUser[i], 'orderList': applyOrder()}
		    }
		    return project;
		}

		function applyIdCommunity() {
			for (var i = 0; i <= localStorage.length; i++) {
				var verificaoNPC = localStorage.getItem("onCommunity " + i);
				if (verificaoNPC == null){
				    return "onCommunity " + i;
				}
			}
		}

		function applyOrder() {
		    for (var i = 0; i <= localStorage.length; i++) {
		        var verifyOrderNPC = localStorage.getItem("onCommunity " + i);
		        if (verifyOrderNPC == null){
		            var temp = 99999 - i;
		            return "order:" + temp;
		        }
		    }
		}


		function setLocalStorage(objetoJson) {
		    localStorage.setItem(objetoJson.onCommunity, JSON.stringify(objetoJson));
		}
	}
	localStorage.setItem("cnpc00", "cnpcKey");
}
