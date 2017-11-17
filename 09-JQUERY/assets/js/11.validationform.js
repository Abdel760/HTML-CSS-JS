/**
 * Validate email function with regualr expression
 * 
 * https://paulund.co.uk/regular-expression-to-validate-email-address
 * If email isn't valid then return false
 * 
 * @param email
 * @return Boolean
 */
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

function validateTel(tel){
	var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
	var valid = telReg.test(tel);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

// -- Initialisation de jQuery
$(function() {

    // -- Ecouter a quel moment est soumis notre formulaire
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);

    $('#contact').on('submit', function(e) {
        
        // -- Arreter la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs.
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Vérification de chaque champ...

            // -- 1. Vérification du Nom
            if(nom.val().length == 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre nom.</p>').appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

            // -- 2. Vérification du Prénom
            if(prenom.val().length == 0) {
                prenom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre prenom.</p>').appendTo(prenom.parent());
            } else {
                prenom.parent().addClass('has-success');
            }

            // -- 3. Vérification du Mail
            if(!validateEmail(email.val())) {
                email.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre adresse email.</p>').appendTo(email.parent());
            } else {
                email.parent().addClass('has-success');
            }

            // -- 4. Vérification du Mail
            if(!validateTel(tel.val())) {
                tel.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre numéro de téléphone.</p>').appendTo(tel.parent());
            } else {
                tel.parent().addClass('has-success');
            }

            if($(this).find('.has-error').length == 0) {

                $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>');

            } else {

                $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez vos informations.</div>');

            }

    }); // {} on.submit

});