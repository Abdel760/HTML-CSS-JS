/* -----------------------------------------------------------------------------------
                                         ~ LES ÉVENEMENTS ~ 

    Les évenements vont me permettre de déclencher une fonction,
    c'est-à-dire : une série d'instructions suite à une action
    de mon utilisateur

    OBJECTIF : Être en mesure de capturer cet évenements,
    afin d'éxecuter une fonction.

    Les Évenements : MOUSE (Souris)
        click : au clic sur un élement
        mouseenter : La souris passe au dessus de la zone qu'occupe un élement 
        mouseleave : la souris sort de cette zone

    Les Évenements : KEYBOARD (Clavier)
        keydown : une touche du clavier est enfoncée
        keyup : une touche a été relaché

    Les Évenements : WINDOW (Fenêtre)
        scroll : défilement de la fenêtre
        resize : redimensionnement de la fenêtre
    
    Les Évenements : FORM (Formulaire)
        change : pour les élements <input>, <select> et <textarea>
        submit : à l'envoi (soumission) d'un formulaire

    Les Évenements : DOCUMENT
        DOMContentLoaded : Éxecute lorsque le document HTML est complètement chargé 
        sans attendre le CSS et les images.

-------------------------------------------------------------------------------------*/

/* ----------------------------------------------------------
                ~ LES ÉCOUTEURS D'ÉVENEMENT ~           

    Pour attacher un évenement à un élement, ou autrement dit 
    pour déclarer un écouteur d'évenement qui se chargera de 
    lancer une action,  c'est une fonction pour un évenement 
    donné, je vais utiliser la syntaxe suivante : 

-----------------------------------------------------------*/

var p = document.getElementById('MonParagraphe');
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris

    // -- 1 : Je défini une fonction chargée d'éxecuter cette action
    function changeColorRed() {
        p.style.color = "red"
    }

    // -- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction au déclenchement de l'évenement au (click)
    p.addEventListener('click', changeColorRed);

/* ----------------------------------------------------------
                         ~ ÉXERCICE ~           


-----------------------------------------------------------*/

// -- Création du champ Input
var input = document.createElement('input');

// -- Attribution d'un attribut
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez un contenu...');

// -- Ajout de l'élement de la page
document.body.appendChild(input);

// -------------------------------
function voirSaisieInput() {
    alert(input.value);
}

input.addEventListener('change', voirSaisieInput);