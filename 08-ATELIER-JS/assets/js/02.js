// -- Déclarer un Tableau Numérique
var monTableau = [];
var myArray    = new Array;

//-- Affecter des valeurs à un tableau numérique
monTableau[0] = "Hugo";
monTableau[1] = "Nathan";
monTableau[2] = "Lou";

// -- Afficher le contenu de mon tableau dans la console
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[1]); // -- Nathan
console.log(monTableau[2]); // -- Lou
console.log(monTableau);    // -- Affiche toutes les données

// -- Déclarer et Affecter des valeurs à un tableau Numérique
var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"]
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et Affecter des Valeurs à un objet
// : (Pas de tableau Associatif en JS)

var Coordonnee = {
    prenom : "Abdel-illah",
    nom : "BOUKHATEB",
    age : 21
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Je vais créer 2 tableaux numériques
var listeDePrenoms = ["Hugo", "Rodrigue", "Benjamin"];
var listeDeNoms    = ["LIEGEARD", "NOUEL", "JOURAND"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux précédents
var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher sur ma page le Nom et Prénom de Rodrigue
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

    /* --------------------------------------------------------
                         ~ EXERCICE ~
        
        fdsf

    ----------------------------------------------------------*/

// -- Correction

var AnnuaireDesStagiaires = [
    {prenom: "Abdel-illah", nom: "BOUKHATEB", tel: "06 51 37 69 19"},
    {prenom: "Hugo", nom: "LIEGEARD", tel: "07 83 97 15 15"},
    {prenom: "JM", nom: "BISSICK", tel: "XX XX XX XX XX"},
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].prenom);
console.log(AnnuaireDesStagiaires[1].prenom);
console.log(AnnuaireDesStagiaires[2].prenom);

document.write(AnnuaireDesStagiaires[0][1]);

/*-------------------------------------
|        ~ AJOUTER UN ÉLEMENT ~       |
-------------------------------------*/

var Couleurs = ["Rouge", "Jaune", "Vert"];

// -- Si je souhaite ajouter un élément dans mon tableau
// -- Je fait appel à la fonction push() qui me renvoi le nombre d'éléments de mon tableau.
console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// -- NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.

/*---------------------------------------------------------
|        ~ RÉCUPÉRER ET SORTIR LE DERNIER ÉLEMENT ~       |
---------------------------------------------------------*/

// -- La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur
var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// -- La même chose est possible avec le premier élément en utilisant la fonction shift();
// -- NB : La fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau