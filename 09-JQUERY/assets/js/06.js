/* ------------------------------------
  LES SELECTEURS D'ENFANTS EN JQUERY
--------------------------------------*/

// -- Initialisation de jQuery
$(function() {

    // -- Les Flemards.js
    function l(e) {
        console.log(e);
    } 

    // -- Je souhaite selectionner toutes mes divs
    l($('div'))

    // -- Je souhaite selectionner mon menu
    l($('nav'))

    // -- Je souhaite tous les éléments descendants direct (enfants) qui sont dans le menu.
    l($('nav').children())

    // -- Je souhaite parmi ces enfants, uniquement les éléments "ul"
    l($('nav').children('ul'))

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('nav').children('ul').find('li'))

    // -- Je souhaite récupérer uniquement le 2ème élément de mes "li"
    l($('nav').children('ul').find('li').eq(1))

    // -- Je souhaite connaitre le voisin immediat de mon menu
    l($('nav').next())
    l($('nav').next().next()) //-- Le voisin du Voisin
    l($('nav').prev()) // -- Le voisin d'avant

    // -- LES PARENTS
    l($('nav').parent())

});