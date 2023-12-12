const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let img_banner = document.querySelector(".banner-img");


arrowLeft.addEventListener("click", showArrowLeft);
arrowRight.addEventListener("click", showArrowRight );


function showArrowLeft(){
	if (arrowLeft) {
		console.log("Bonjour Gauche")
	}
}
function showArrowRight(){
	if (arrowRight) {
		console.log("Bonjour Droite", img_banner)
	}
}

// Création du tableau avec les "images" et les "tagLines" à ajouter
const slides_ = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine" : "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


let numero = 0;
let numeroDot = 0;
//Ceci est l'explication du code ci dessous
//On créer une fonction "changeImg", avec comme paramètre (sens) que l'on a mis sur l'index.html. 
//on mets la variable "numero" qui est égale a lui même + (sens)
//si le numéro est supérieur à "slide.lenght - 1" alors "numéro = 0". Cette formule permet de faire en sorte que 
//la fonction changeImg sois en boucle infini.
//on fait de même pour l'inverse mais cette fois-ci inférieur a 0
//on change ensuite a la fin de la fonction en mettant "img_banner.src = ... + slides_[numéro].image"
// 														Car on récupère l'images qui correspond au numéro
function changeImg(sens){
	numero = numero + sens;
	if(numero > slides_.length - 1){
		numero = 0;
	}
	if(numero < 0 ){
		numero = slides_.length - 1;
	}
	img_banner.src = "./assets/images/slideshow/" + slides_[numero].image
	dotChanges(numero)
	sentenceChanges(numero)
	console.log("le numéro de la slide est : " + numero, "le dot actif est : " + numeroDot,
	 allDots[numeroDot], div_dotAlldots)
}
setInterval("changeImg(1)", 4000);

// Création d'un tableau allDot, pour savoir si le code est sur le bon dot qui doit être séléctionner 
const allDots = ["dot1", "dot2", "dot3", "dot4"];
// Création d'une variable changeable qui prend tout avec la class CSS ".dot"
let div_dotAlldots = document.querySelectorAll(".dot")
// On ajoute, grace a la liste des classe CSS, "dot_selected" au premier dot 
div_dotAlldots[0].classList.add("dot_selected")

// Ceci est la fonction dotChanges qui gère les dots
function dotChanges(numeroDot){
	// On s'assure que le bon dot est selectionner
	console.log(numeroDot)
	// On créer une variable pour récupérer la classe CSS "dot_selected"
	let class_DotSelect = document.getElementsByClassName("dot_selected")
	console.log(class_DotSelect)
	// On enlève au premier dot la classe CSS "dot_selected"
	class_DotSelect[0].classList.remove("dot_selected")
	// On ajoute ensuite en fonction de "numeroDot" la classe CSS "dot_selected"
	div_dotAlldots[numeroDot].classList.add("dot_selected")
}

// Ceci est la fonction qui gère le changement des "p"
function sentenceChanges(numeroSentence) {
	// On affiche sur la console si c'est le bon "p"
	console.log(numeroSentence);
	// On créer une variable qui nous permet de récupérer le "p" du HTML
	let phrasePragraphe = document.querySelector("p");
	// On ajoute les "tagLine" qui sont dans le tableau "slides_" en fonction du numéroSentence
	phrasePragraphe.innerHTML = slides_[numeroSentence].tagLine;

}


// sentence.innerHTML = slides_[slides_].tagLine;
