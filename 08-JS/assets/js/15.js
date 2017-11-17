// -- Déclaré un Tableau Numérique
var Prenoms = ["Nabila", "Charles", "Teva", "Carole", "Hanane", "Johrdane", "Rudy", "Abdoulaye", "Karim", "Ovidiu", "Lies-John"];

// -- Aperçu dans la console.
console.log(Prenoms);

// -- Si je veux connaitre le nombre d'éléments (Prénoms) de mon tableau ?
var NombreElementsDansMonTableau = Prenoms.length;
console.log(NombreElementsDansMonTableau);

// -- Pour récupérer une valeur dans un tableau numérique j'utilise son indice.
console.log(Prenoms[6]); // -- Rudy
console.log(Prenoms[4]); // -- Hanane
console.log(Prenoms[8]); // -- Karim

// --
var i = 9;
console.log(Prenoms[i]);

// -- Pour i = 0 (Au départ i vaut 0) ; tant que i < (est strictement inférieur à) NombreElementsDansMonTableau (Prenoms.length) ; alors i++ (J'incrémente successivement i de 1 a chaque boucle);
for(i = 0 ; i < NombreElementsDansMonTableau ; i++) {

    // -- Tous ce qui est situé à l'intérieur des accolades, sera dans la boucle.
    console.log("Ici, i = " + i);
    console.log(Prenoms[i]);
    console.log("---");

}

// -- Voyons maintenant comment procéder avec des objets

var Contact = {
  //"INDICE"    : "VALEUR",
    "prenom"    : "Hugo",
    "nom"       : "LIEGEARD",
    "telephone" : "0783971515"
};

// -- Aperçu dans la console.
console.log(Contact);

// -- Pour récupérer les valeurs d'un objet j'utilise le "." suivi de l'INDICE
console.log("Prénom = " + Contact.prenom);
console.log("Nom = " + Contact.nom);
console.log("Téléphone = " + Contact.telephone);

// -- Si je souhaite avoir plusieurs contacts...

// -- Ici, "Contacts" est un tableau numérique. J'aurais donc des indices numérique. 0, 1, 2, 3...
var Contacts =  [
    // -- Dans mon tableau numérique, au lieu de stocker des chaines de caractères, je "stock" des objets...
    "Hugo",
    "Patrick",
    "Adrien",
    {
      //"INDICE"    : "VALEUR",
        "prenom"    : "Hugo",
        "nom"       : "LIEGEARD",
        "telephone" : "0783971515"
    },
    {
      //"INDICE"    : "VALEUR",
        "prenom"    : "Patrick",
        "nom"       : "ISOLA",
        "telephone" : "xxxxxxxxxx"
    }
];

// -- Aperçu dans la console de mon tableau de Contacts
console.log(Contacts);

// -- Comment accéder aux valeurs de mon objet, dans le tableau numérique...

    // -- 1. D'abord je récupère mon objet
    console.log(Contacts[3]);

    // -- 2. Pour accéder aux valeurs de mon objet
    console.log("Prénom = " + Contacts[3].prenom);
    console.log("Nom = " + Contacts[3].nom);
    console.log("Téléphone = " + Contacts[3].telephone);

    // -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet située à l'indice 3 de mon tableau numérique "Contacts".  

    console.log("---");
    var j = 4;
    console.log("Prénom = " + Contacts[j].prenom);
    console.log("Nom = " + Contacts[j].nom);
    console.log("Téléphone = " + Contacts[j].telephone);

    // -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet située à l'indice 4 de mon tableau numérique "Contacts". 

    // -- Comment parcourir mon tableau avec des objets.
    // -- Supposons le tableau suivant :

    var Etudiants = [
        {"nomcomplet"  : "Hugo LIEGEARD",    "classe"    : "Terminale S"},
        {"nomcomplet"  : "Lies-John",        "classe"    : "Maternelle"},
        {"nomcomplet"  : "Karim IHADADENE",  "classe"    : "Crèche"},
        {"nomcomplet"  : "Adrien CENTONZE",  "classe"    : "PoleS"},
    ];

    // -- Regardons la console.
    console.log(Etudiants);

    // -- Si je veux connaitre le nombre d'etudiants :
    var NombreEtudiants = Etudiants.length;
    console.log("Nombre d'Etudiants = " + NombreEtudiants);

    // -- Pour parcourir notre tableau numérique.
    for(i = 0 ; i < NombreEtudiants ; i++) {
        console.log("Ici, i = " + i);
        console.log(Etudiants[i]);
        console.log(Etudiants[i].nomcomplet);
        console.log(Etudiants[i].classe);
        console.log("---");
    }