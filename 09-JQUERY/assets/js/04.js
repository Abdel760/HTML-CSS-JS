// -- 1. Cacher le formulaire
$('MonFormulaire').on('submit', function(event) {
    // -- Cette fonction anonyme sera éxecuter à la soumission du formulaire.

    // -- Permet d'annuler l'action par défaut du submit du formulaire.
    event.preventDefault();
});