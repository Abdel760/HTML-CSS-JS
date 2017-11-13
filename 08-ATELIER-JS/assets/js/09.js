/* ----------------------------------------
                ~ LES BOUCLES~            |
-----------------------------------------*/

// -- La Boucle FOR

// -- Pour i = 1 ; tant que i <= strictement inférieur ou égale à 10 ; alors j'incrémente i de 1
for(let i = 1 ; i <= 10 ; i++) {
    document.write("<p> Instruction exécutée : <strong>" + i + "</strong></p>");
}

document.write("<hr>");
// -- La Boucle WHILE : Tant que

var j = 1;
while(j <= 10 ) {
    document.write("<p> Instruction exécutée : <strong>" + j + "</strong></p>");

    j++;
}

document.write("<hr>");

/* -------------------------------
             EXERCICE :
-------------------------------- */
// -- Supposons, le tableau suivant :
var Prenoms = ['Hugo', 'Jean', 'Matthieu', 'Luc', 'Pierre', 'Marc'];

/* CONSIGNE : Grâce à une boucle FOR, afficher la liste des prénoms du tableau suivant dans la console ou sur votre page.*/

for(let i = 1 ; i <= 10 ; i++) {
    console.log(Prenoms[i]);
}
    console.log(' - - - ');

document.write("<hr>");

    // -- 2ème façon de faire avec "lenght"
    var NbElemDansMonTableau = Prenoms.lenght;
    for(let i = 1 ; i < NbElemDansMonTableau ; i++) {
    console.log(Prenoms[i]);
    }
    // -- Même exercice avec while

    var j = 0;
    while(j < Prenoms.length) {
        console.log(Prenoms[j]);
        j++;
    }
        
        console.log(' - - - ');
    
    // -- Même exercice avec la bloucle forEach
    // -- ATTENTION A LA PERFORMANCE !!!
    
    Prenoms.forEach(affichePrenoms);
    
    function affichePrenoms(prenom, indice) {
        console.log(prenom);
    }
    
// https://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
    
// https://leftshift.io/4-javascript-optimisations-you-should-know