/* --
CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
        
En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur. 
Vous devrez préciser s'il s'agit d'une erreur au niveau du mail ou du mot de passe.    
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Jean-Christophe','nom':'MONPLAISIR','email':'jc.monplaisir@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// -- Déclaration de Variables
// -- EstCeQueLeMailEstDansLeTableau = faux;
var isEmailInArray = false;

// -- 1 : Demander à l'utilisateur son adresse email
var email = prompt("Bonjour, Quel est votre Email ?","<Saisissez votre Email>");

// -- 2 : Parcourir l'ensemble des données de mon tableau
for(i = 0 ; i < BaseDeDonnees.length ; i++) {

    // -- l(BaseDeDonnees[i].email)
    if(email == BaseDeDonnees[i].email) {
        // -- J'ai trouvé une adresse email qui correspond dans ma "BaseDeDonnees".
        isEmailInArray = true;

        // -- 3 : Je Demande le Mot de Passe
        var mdp = prompt("Quel est votre Mot de Passe ?","<Saisissez votre Mot de Passe>");

        // -- 4 : Je vérifie que le mot de passe saisie par mon utilisateur, correspond bien avec le mot de passe associé à l'indice courant du tableau.
        if(mdp == BaseDeDonnees[i].mdp) {
            // -- Mon MDP est correct, toutes les conditions sont remplis pour valider la connexion.
            w("Bonjour " + BaseDeDonnees[i].prenom + " " + BaseDeDonnees[i].nom + " !");
        } else {
            // -- Je n'ai pas pu faire correspondre les MPD
            alert("ALERTE ! ALERTE ! ALERTE !\nVotre mot de passe est incorrect.")
        }

        // -- Je profite pour arreter ma boucle
        break;

    }

} // END for

if(!isEmailInArray) {
    // -- Pas d'adresse email.
    alert("ALERTE ! ALERTE ! ALERTE !\nNous n'avons trouvée aucune correspondance avec votre adresse email.");
}