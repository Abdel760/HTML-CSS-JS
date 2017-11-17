/* -----------------------------
        LA CONCATENATION 😱        
-------------------------------*/

var debutDePhrase       = "Aujourd'hui ";
var dateDuJour          = new Date();
var suiteDePhrase       = ", sont présents : ";
var nombreDeStagiaires  = 21;
var finDePhrase         = " stagiaires.<br>";

// -- Nous souhaitons maintenant, grâce à la concaténation,
    // afficher tout ce petit monde, en un seul morceau !

document.write(debutDePhrase + dateDuJour.getDate() + "/" + (dateDuJour.getMonth() + 1) + "/" + dateDuJour.getFullYear() + suiteDePhrase + nombreDeStagiaires + finDePhrase);

// : Memo https://stackoverflow.com/questions/15799514/why-does-javascript-getmonth-count-from-0-and-getdate-count-from-1

/* ----------------------------------------------------------
  EXERCICE :
  Créez une concaténation à partir des éléments suivants :  
---------------------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "Hugo et j'ai ";
var age     = 27;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);