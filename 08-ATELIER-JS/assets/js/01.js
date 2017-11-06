// alert("WOW ! Tu es sur ma page !");

// Deux slash pour faire un commentaire uniligne

/* 
    Ici, je peux faire un commentaire
    sur plusieur lignes...

    RACCOURCI : CTRL + /
            ou  CTRL + SHIFT + /
*/

// -- 2 : Affecter une valeur
Prenom = "Abdel-illah";

// -- 3 : Afficher la Valeur de ma Variable dans la console
console.log(Prenom);

/*-------------------------------------
|       ~ LES TYPES DE VARIABLES ~    |
-------------------------------------*/

// -- Ici, "typeof" me permet de connaître le type de ma variable
console.log(typeof Prenom);

// -- Déclaration et affectation d'une valeur à une variable
var Age = 21;

// -- Afficher dans la console
console.log(Age);

// -- Vérifier son type
console.log(typeof Age);

    /* --------------------------------------------------------
                    ~ LA PORTEE DES VARIABLES ~

        Les variables déclarées directement à la racine 
        du fichier sont appelées variables "globales".

        Elles sont disponibles dans l'ensemble de votre
        document y compris dans les fonctions / boucles.

        La portée des variables globales s'arrêtent au
        fichier. Si je change de page, les variables
        n'existe plus !

        Les variables déclarer à l'intérieur d'une fonction
        sont appelées variables "locales"

        Elles sont disponibles uniquement à l'intérieur 
        de celle-ci

    ----------------------------------------------------------*/
// -- Les variables FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI/FAUX)

var unBooleen = false; // -- true
console.log(unBooleen);
console.log(typeof unBooleen);

    /* --------------------------------------------------------
                         ~ LES CONSTANTES ~
        
        La déclaration CONST permet de créer une
        constante accessivle uniquement en lecture

        Sa valeur ne pourras pas être modifiée par
        des réaffectations ultérieures.

        Une constante ne peut pas être déclarée à 
        nouveau.

        Généralement par convention, les constantes 
        sont en MAJUSCULES.

    ----------------------------------------------------------*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// -- Je ne peux pas faire cela...
// USER = "Abdel-illah";
// Uncaught TypeError: Assignment to constant variable.

    /* --------------------------------------------------------
                         ~ LA MINUTE INFO ~
        
        Au fur et à mesure que l'on affecte ou ré-affecte 
        des valeurs à une variables,celle-ci prend la 
        nouvelle valeur et le nouveau type !
        
        En JavaScript (ECMA Script), les variables sont
        auto-typées.

        Pour convertir une variable de type NUMBER en 
        STRING et STRING en NUMBER, je peux utiliser les 
        fontions natives de JavaScript.

    ----------------------------------------------------------*/

console.log("-----");

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* La fontion parseInt() pour retourner un Entier à partir
    d'une chaîne de caractère */
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

 // -- Je ré-affecte une valeur à ma variable
 unNombre = "12.55";
 console.log(unNombre);
 console.log(typeof unNombre);

 /* La fonction parsFloat permet de retourner un float
    à partir d'une chaîne de caractères */
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un nombre en STRING avec toString()
var unNombreQuiDevientString = 10; 
console.log(unNombreQuiDevientString.toString());
console.log(unNombreQuiDevientString);