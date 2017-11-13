$('#MonFormulaire').on('submit', function(event) {
    // -- Cette fonction anonyme sera éxecuter à la soumission du formulaire.

    // -- Permet d'annuler l'action par défaut du submit du formulaire.
    event.preventDefault();

    // -- On remplace notre formulaire par le paragraphe ci-dessus
    $(this).replaceWith("<p>Bonjour, voici votre demande :" + $('fieldset').val() + " !</p>");
});