/* ------------------------------------------------------------
            ~ LE CHAINAGE DE MÉTHODE AVEC JQUERY ~            
-------------------------------------------------------------*/

$(function() {
    // -- Je souhaite cacher toutes les div de ma page HTML
    // console.log($('div'));

    $('div').hide('slow', function (){
        // -- Une fois que la méthode hide() est terminée, mon alerte peut s'éxecuter
        alert('Fin du Hide');

        // -- NB : La fonction s'éxecutera pour l'ensemble des élements du sélecteur

        // -- CSS
        $('div').css('background', 'yellow');
        $('div').css('color', 'red');

        // -- Je fais réapparitre mes DIV's
        $('div').show('slow');

    }); // Fin fonction anonyme       
        
    // -- En utilisant le chaine de méthode, vous pouvez faire s'enchaîner plusieurs fonctions les unes après les autres...
    $('p').hide(1000).css('color', 'blue').css('font-size', '20px').delay(2000).show(500);
        
    // -- MAIS, C'EST ENCORE TROP LONG !!!
    $('p').hide(1000).css({color : 'green', 'font-size' : '20px'}).delay(2000).show(500); 
});