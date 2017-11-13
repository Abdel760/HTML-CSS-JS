/* ------------------------------------------------------------
            ~ LE CHAINAGE DE MÉTHODE AVEC JQUERY ~            
-------------------------------------------------------------*/
$(function() {

    // -- Les flemmards.js
    function l(e) {
        console.log(e);
    }

    // -- Je souhaite sélectionner toutes mes DIV's
    l($('div'))

    // -- Je souhaite sélectionner mon menu
    l($('nav'))

    // -- Je souhaite tous les élements descendant direct (enfants) qui sont dans le menu
    l($('nav').children())

    // -- Je souhaite parmi ces enfants, uniquement les éléments ul
    l($('nav').children('ul'))

    // -- Je souhaite récuperer tous les élements "li" de mon "ul"
    l($('nav').children('ul').find('li'))

    // -- Je souhaite récuperer uniquement le 2ème "li" de mon "ul"
    l($('nav').children('ul').find('li'))
    
    // -- Je souhaite connaître le voisin immédiat de mon menu
    l($('nav').next())
    l($('nav').next().next()) // Le voisin du voisin
    l($('nav').prev()) // Le voisin d'avant

    // -- Les Parents
    l($('nav').parent())
});