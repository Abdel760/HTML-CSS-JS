/* ----------------------------------------------------------
                ~ LA MANIPULATION DES CONTENUS ~            |
-----------------------------------------------------------*/

function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}

// -- Je souhaite récupérer mon lien ; comment procéder ?
var google = document.getElementById("google");
l(google);

// -- Maintenant, je souhaite accéder aux informations de ce lien .. Par exemple :

    // -- A : Le lien vers lequel pointe la balise
    l("Le lien vers lequel pointe la balise : ");
    l(google.href);

    // -- B : L'ID de la balise :
    l("L'ID de la balise : ");
    l(google.id);

    // -- C : La classe de la balise :
    l("La classe de la balise : ");
    l(google.className);

    // -- D : Le texte de la balise :
    l("La texte de la balise : ");
    l(google.textContent);

    // -- Maintenant, je souhaite modifier le contenu de mon lien !
    // -- Comme une variable classique, je vais simplement venir affecter une nouvelle valeur.
    google.textContent = "Mon lien vers Google !";
    
/* -------------------------------------------------------------
                ~ AJOUTER UN ÉLÉMENT DANS MA PAGE ~            |
--------------------------------------------------------------*/

// -- Nous allons utiliser 2 méthodes :

    // -- 1 : La fonction document.createElement() va permettre de générer nouvel élement dans le DOM ; que je pourrais par la suite modifier 
    // avec les méthodes que nous venons de voir

    // -- PS : Ce nouvel élement est placé en mémoire

    // -- Définition de l'élement 
    var span = document.createElement('span');

    // -- Si je souhaite lui donner un ID
    span.id = "MonSpan";

    // -- Si je souhaite lui attribuer du contenu ...
    span.textContent = "Mon Beau Texte En JS !";

    // -- La fonction appendChild() va permettre de rajouter un enfant à un élement du DOM
    google.appendChild(span);

    /*---------------------------------------------------------------------------------------------------
                                                     EXERCICE

        En partant du travail déjà réalisé sur la page.

        Créez directement dans la page une balise <h1> </h1> ayant comme contenu : "Titre de mon Article".

        Dans cette balise, vous créerez un lien vers une url de votre choix.

        BONUS : Ce lien sera de couleur Rouge et non souligné.
    ----------------------------------------------------------------------------------------------------*/

    // -- Définition de l'élement 
    var h1 = document.createElement('h1');
    
    // -- Création de la balise a
    var a = document.createElement('a');

    // -- Si je souhaite lui attribuer du contenu ...
    a.textContent = "Titre de mon Article !";

        // -- Je veux donner un lien à mon lien
        a.href="#";

        // -- Je met mon lien (a) dans mon h1
        h1.appendChild(a);

        // -- Je met mon h1 dans ma page, dans mon body
        document.body.appendChild(h1);

        // -- Couleur rouge et non souligné
        a.style.color = "red";
        // -- Je veux que mon lien ne soit pas souligné
        a.style.textDecoration = "none";
