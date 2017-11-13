/* -----------------------------------------------------------------------------------
                              ~ LA DISPONIBILITÉ DU DOM ~ 

    A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence 
    de ma page est complètement chargé, je peux commencer à utiliser jQuery.

    Je vais mettre l'ensemble de mon code dans une fonction, cet fonction
    sera appelé AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement
    défini.

    3 façons de faire : 

-------------------------------------------------------------------------------------*/

// -- 1ère méthode
jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 2ème méthode
$(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.    
});

// -- 3ème méthode 
$(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
    alert("J'ai 21 ans !");

    // -- En JS :
    document.getElementById('TexteEnjQuery').innerHTML = "<strong>Mon Texte en JS</strong>";

    // -- En jQuery (les sélecteurs sont les mêmes qu'en CSS) :
    $('#TexteEnjQuery').html("Mon texte en JQ !");
});