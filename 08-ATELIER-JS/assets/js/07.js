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


/*-------------------------------------
|          ~ Saisie du Prénom ~       |
-------------------------------------*/
var prenom = prompt("Saisissez votre prénom :","Prénom")
    alert("Bonjour " + prenom + " !");

/*-------------------------------------
|          ~ Saisie de Age ~          |
-------------------------------------*/

var age = prompt("Saisissez votre âge :", "Âge")
    alert("Tu es donc né en " + age + " !")