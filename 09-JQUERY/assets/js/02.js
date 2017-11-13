/* ----------------------------------------------
            ~ LES SÉLECTEURS JQUERY ~            
-----------------------------------------------*/

// -- Format : $('selecteur')
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function() {
    // -- DOM READY !
    // -- LesFlemmards.js
    function l(e) {
        console.log(e);
    }

    // -- Sélectionner les balises SPAN :

        // -- Version JavaScript
        l(document.getElementsByTagName('span'));

        // -- Version jQuery
        l($('span'));

    // -- Sélectionner mon menu :

        // -- Version JavaScript
        l(document.getElementsById('menu'));
        
        // -- Version jQuery
        l($('menu'));

    // -- Sélectionner une Classe :

        // -- Version JavaScript
        l(document.getElementsByClassName('MaClasse'));
        
        // -- Version jQuery
        l($('MaClasse'));

    // -- Sélectionner un Attribut :

        // -- Version jQuery
        l($('href="https://www.google.fr'));
});