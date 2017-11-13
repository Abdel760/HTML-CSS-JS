// -- Déclarer un tableau numérique
var tableau = ['Hugo', 'Abdel', 'JM', 'Nathan', 'Florent', 'Lou', 'Emilie', 'David', 'Terry', 'Etienne'];

// -- Affichage dans la console
console.log(tableau);
console.log(tableau.length);

// -- Afficher le prenom 
console.log(tableau[8]);
console.log(tableau[2]);
console.log(tableau[4]);

// -- Pour recupérer une valeur dans un tableau numérique, j'utilise son indice !

var i = 6;
console.log(tableau[i]);

for(i = 0; i < tableau.length; i++) {
    console.log(i + [" "] + tableau[i])
}

// -- Voyons comment procéder avec des objets

var contact = {
    // -- LE PRENOM EST L'INDICE :  Valeur
        prenom    : "Terry",
        nom       : "BACON",
        telephone : "0768035379"
}
console.log(contact);
console.log("Prenom : " + contact.prenom)
console.log("Nom : " + contact.nom)
console.log("Tél : " + contact.telephone)

// -- Tableau Etudiants

var Etudiants = [
    {
        nom     : "BACON",
        prenom  : "Terry",
        classe  : "Etudiant"
    },
    {
        nom     : "LIEGEAR",
        prenom  : "Hugo",
        classe  : "Formateur",
        depuis  : "des années"
    },
    {
        nom     : "BOUKHATEB",
        prenom  : "Abdel-illah",
        classe  : "Etudiant",
        depuis  : "1 mois"
    },
];

// -- Affichage dans la console
l(Etudiants);

// -- Nombre d'étudiant
function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}

