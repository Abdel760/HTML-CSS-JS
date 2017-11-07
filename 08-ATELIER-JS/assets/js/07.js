/* --------------------------------------------------------
                         ~ EXERCICE ~
        
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'utilisateur : Bonjour [Prénom]
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu es donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
            Bonjour [PRENOM], tu as [AGE] ! 

 ----------------------------------------------------------*/

// 1 -- Initialisation des Variables
var DateObj       = new Date();
var AnneeActuelle = DateObj.getFullYear();

// 2 -- Création de ma fonction
function Hello() {

    // 2a -- Je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?", "<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b -- Je lui demande son âge
    let age = parseInt(prompt("Hello " + prenom + " ! How old are you ?" , "<Saisir votre âge>"));
    console.log(age);
    console.log(typeof age);

    // 2c -- J'affiche une alert avec son année de naissance
    alert("AMAZING ! So you are were born in " + (AnneeActuelle - age) + " !");

    // 2d -- Affichage de ma page HTML
    document.write("Hello, " + prenom + " it's AMAZING ! You're " + age + " years old !");
}
// 3 -- Execution de ma fonction
Hello();