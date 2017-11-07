/* --------------------------------------------
                ~ LES CONDITIONS ~            |
---------------------------------------------*/

/* var MajoriteLegaleFr = 18;

if(14 >= MajoriteLegaleFr) {
    alert("Bienvenue !");
} else {
    alert("Google ...");
} */

/* ---------------------------------------------------------------------------
                                ~ EXERCICE ~                 

    Créer une fonction permettant de vérifier l'âge d'un visiteur (prompt)
    S'il à la majortité légale, alors je lui souhaite la bienvenue, sinon,
    je fais une redirection sur Google après avoir signalé le soucis.

-----------------------------------------------------------------------------*/

 // 1 -- Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// 2 -- Création de ma fonction demander son âge
function verifierAge() {
    // -- METHODE 1 :
    /* let age = prompt("Bonjour, quel âge avez-vous ?", "<Saisir votre âge>");
    age     = parseInt(age);
    return age; */

    // -- METHODE 2 :
    return parseInt(prompt("Bonjour, quel âge avez-vous ?", "<Saisir votre âge>"));
}

// 3 -- Une conditions pour vérifier si l'âge de l'utilisateur est supérieur à la MajoriteLegaleFR
if(verifierAge() >= MajoriteLegaleFR) {

    // 3.a -- J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet pour les majeurs ...")
} else {
    // 3.b -- J'effectue une redirection
    document.location.href = "http://www.google.fr" 
}
    
/* --------------------------------------------------------------------------
                     ~ LES OPÉRATEURS DE COMPARAISON ~            

    L'opérateur de comparaison "==" signifie : égale à
    il permet de vérifier que 2 variables sont identiques

    L'opérateur de comparaison "===" signifie : strictement égale à
    il vas comparer la valeur et le type de donnée

    L'opérateur de comparaison "!=" signifie : différent de

    L'opérateur de comparaison "!==" signifie : strictement différent de

-----------------------------------------------------------------------------*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";


// 1 -- Demander son E-Mail
var emailUser = prompt("Bonjour, quel est votre e-mail ?", "Saisissez votre e-mail>");

// 2 -- Je verifie si l'e-mail saisie (emailUser) correspond à celui en BDD (email)
if(emailUser === email) {
    // 2.a -- Tout est ok, je continu la vérification avec le mot de passe
    // 2.a1 -- Je demande à l'utilisateur son mot de passe
    var mdpUser = prompt("Votre mot de passe ?", "<Saisissez votre mot de passe>");

    if(mdpUser === mdp) {
        alert("Bienvenue !");
    } else { 
        alert("! ATTENTION ! Nous n'avons pas reconnu votre mot de passe !");
    }
} else {
    // 2.b -- Sinon, les e-mails ne corresponden pas, je lance une Alert ...
    alert("! ATTENTION ! Nous n'avons pas reconnu votre adresse e-mail !");
}

// -- EXEMPLE AVEC LES FONCTIONS

/**
 * Vérifie si mon utilisateur est présent en BBD
 * @param (*) emailUser
 * @param (*) mdpUser
 * @return (*) Booleen
*/

function myUserIsCorrect(emailUser,mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, quel est votre e-mail ?", "Saisissez votre e-mail>");

var mdpUser   = prompt("Votre mot de passe ?", "<Saisissez votre mot de passe>");

if(monUserEstCorrect(emailUser,mdpUser)) {
    alert("Bienvenue " + emailUser);
} else {
    alert("! ATTENTION ! E-Mail/Mot de passe incorrect !");
}

/* -----------------------------------------------------
                ~ LES OPÉRATEURS LOGIQUES ~            |
------------------------------------------------------*/

// L'opérateur ET : && ou AND
// Si la cobinaison emailUser et email correspond ET la combinaison mdpUser et mdp correspond

// Dans cette condition, les 2 doivent OBLIGATOIREMENT correspondre pour être validée

if(emailUser === email && mdpUser === mdp) { . . . }

// L'opérateur OU : || ou OR
// Si la combinaison emailUser et email correspond OU la cobinaison mdpUser et mdp correspond

// Dans cette condition, au moins l'une des deux doit correspondre pour être validée

if(emailUser === email || mdpUser === mdp) { . . . }

// L'opérateur "!" : qui signifie le CONTRAIRE DE.. ou encore NOT

var ifUserIsApprouved = true;
if(!ifUserIsApprouved) { . . . } // -- Si l'utilisateur n'est pas approuvé ...

// Reviens également à écrire
if(ifUserIsApprouved == false) { . . . }