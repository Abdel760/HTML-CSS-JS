// -- Déclarer un Tableau Numérique
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau numérique
monTableau[0] = "Hugo";
monTableau[1] = "Nathan";
monTableau[2] = "Lou";

// -- Afficher le contenu de mon tableau dans la console.
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[1]); // -- Nathan
console.log(monTableau); // -- Affiche toutes les données.

// -- Déclarer et Affecter des valeurs à un Tableau Numérique
var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et Affecter des Valeurs à un Objet.
// : (Pas de Tableau Associatif en JS)

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 27  
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Je vais créer 2 tableaux numériques
var listeDePrenoms = ["Hugo", "Rodrigue", "Benjamin"];
var listeDeNoms    = ["LIEGEARD", "NOUEL", "JOURAND"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes
    // 2 tableaux précédents.

var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher sur ma pagele Nom et Prénom de Rodrigue.
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

    /* -------------------------------------------------\
    |                    EXERCICE 😍😜                 |   
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |   Créez un Tableau à 2 dimensions appelé          |
    |   "AnnuaireDesStagiaires" qui contiendra          |
    |   toutes les coordoonnées pour chaque stagiaire.  |
    |                                                   |
    |   Ex. Nom, Prénom, Tel                            |
    \------------------------------------------------- */

// -- Correction : 🙊

var AnnuaireDesStagiaires = [
    {prenom: "Hugo", nom: "LIEGEARD", tel: "0783 97 15 15"},
    {prenom: "Benjamin", nom: "JOURAND", tel: "XXXX XX XX XX"},
    {prenom: "Hocine", nom: "ALILI", tel: "XXXX XX XX XX"}
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0]['prenom']);
console.log(AnnuaireDesStagiaires[1].prenom);
console.log(AnnuaireDesStagiaires[2].prenom);

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                          email   : "wf3@hl-media.fr",
                          adresse : {
                                        ville  : "Ducos",
                                        cp     : 97224,
                                        region : "Martinique",
                                        pays   : "France"
                                    },
                          tel     : {
                                        fixe : "0596 108 328",
                                        fax  : "0596 108 632",
                                        port : "0783 97 15 15"
                                    }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                          email   : "wellcommunication.net@gmail.com",
                          adresse : {
                                        ville  : "Fort-de-France",
                                        cp     : 97200,
                                        region : "Martinique",
                                        pays   : "France"
                                    },
                          tel     : {
                                        fixe : "0596 XXX XXX",
                                        fax  : "",
                                        port : "0696 07 04 34"
                                    }
                      }
    },

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.fixe);
console.log(Contacts[1].coordonnees.tel.fixe);

/* ---------------------------
  😁  AJOUTER UN ELEMENT  🙃 
---------------------------- */

var Couleurs = ["Rouge", "Jaune", "Vert"];

// -- Si je souhaite ajouter un élément dans mon tableau
// -- Je fait appel à la fonction push() qui me renvoi le
    // nombre d'éléments de mon tableau.

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// -- NB : La fonction unshift() permet d'ajouter un ou
    // plusieurs éléments en début de tableau.

/* --------------------------------------------
    RECUPERER ET SORTIR LE DERNIER ELEMENT 😞
-------------------------------------------- */

// -- La fonction pop() me permet de supprimer le dernier
    // élément de mon tableau et d'en récupérer la valeur.

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// -- La même chose est possible avec le premier élément...
    // en utilisant la fonction shift();

// -- NB : La fonction splice() vous permet de faire sortir
    // un ou plusieurs éléments de votre tableau.