// -- Initialisation de jQuery (DOM READY)
$(function() {
    
        // -- Déclaration de Variables
        var CollectionDeContacts = [];
    
        /* --------------------------------------------------------------
                            DECLARATION DES FONCTIONS
        -------------------------------------------------------------- */
    
        // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
        function ajouterContact(UnContact) {

            // -- Ajouter un contact dans "CollectionDeContacts"
            CollectionDeContacts.push(UnContact);

            // -- Observez l'ajout de contacts dans la collection
            console.log(CollectionDeContacts);

            // -- On cache la phrase : aucun contact
            $('.aucuncontact').hide();

            // -- Mise à jour du HTML
            $(` <tr>
                    <td>${UnContact.nom}</td>
                    <td>${UnContact.prenom}</td>
                    <td>${UnContact.email}</td>
                    <td>${UnContact.tel}</td>
                </tr>
            `).appendTo($('#LesContacts').find('tbody'));

            // -- Réinitialisation du Formulaire 
            reinitialisationDuFormulaire();

        }
    
        // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
        function reinitialisationDuFormulaire() {
            // -- En jQuery :
            $('#contact').get(0).reset();

            // -- En JS :
            // document.getElementById('contact').reset();

            // -- Autre méthode :
            // $('#contact.form-control').val("");
        }
    
        // -- Affichage d'une Notification
        function afficheUneNotification() {
            $('.alert-contact').fadeIn().delay(3000).fadeOut();
        }
    
        // -- Vérification de la présence d'un Contact dans Contacts
        function estCeQunContactEstPresent(UnEmail) {

            // -- Booleen qui indique la présence ou pas d'un contact
            let estPresent = false;

            // -- On parcourt le tableau à la recherche d'une correspondance
            for(let i = 0 ; i < CollectionDeContacts.length ; i++) {
                if(UnEmail === CollectionDeContacts[i].email) {
                    // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                    estPresent = true;
                    // -- On arrête la boucle, plus besoin de poursuivre
                    break;
                }
            }
            // -- On retourne le booleen
            return estPresent;
        }
    
        // -- Vérification de la validité d'un Email
        // : https://paulund.co.uk/regular-expression-to-validate-email-address
        function validateEmail(email){
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = emailReg.test(email);
    
            if(!valid) {
                return false;
            } else {
                return true;
            }
        }
    
        /* --------------------------------------------------------------
                        TRAITEMENT DE MON FORMULAIRE
        -------------------------------------------------------------- */
    
        // -- Détection de la soumission de mon Formulaire
        $('#contact').on('submit', function(e) {
    
            // -- Voir le contenu de l'évènement
            console.log(e);

            // -- Stopper la redirection de la page
            e.preventDefault();

            // -- Récupération des champs à vérifier
            var nom, prenom, email, tel;
            nom     = $('#nom');
            prenom  = $('#prenom');
            email   = $('#email');
            tel     = $('#tel');

            // -- Vérification des informations...
            let mesInformationsSontValides = true;
            
            // -- Vérification du Prénom
            if(nom.val().length == 0) {
                // -- Le Champ est incorrect, car il n'a pas été remplit...
                mesInformationsSontValides = false;
            }

            // -- Vérification du Nom
            if(prenom.val().length == 0) {
                // -- Le Champ est incorrect, car il n'a pas été remplit...
                mesInformationsSontValides = false;
            }

            // -- Vérification du Tel
            if(tel.val().length == 0) {
                // -- Le Champ est incorrect, car il n'a pas été remplit...
                mesInformationsSontValides = false;
            }

            // -- Vérification du Mail
            if(!validateEmail(email.val())) {
                mesInformationsSontValides = false;
            }

            if(mesInformationsSontValides) {
                
                // -- Tous est correct, Préparation du Contact
                let Contact = {
                    //clé     //valeur
                    nom     : nom.val(),
                    prenom  : prenom.val(),
                    email   : email.val(),
                    tel     : tel.val()
                };

                // -- Observons dans la console
                console.log(Contact);

                // -- Vérification avec EstCeQunContactEstPresent
                if(!estCeQunContactEstPresent(email.val())) {
                    // -- Ajout du Contact
                    ajouterContact(Contact);

                } else {                    
                    alert('ATTENTION\nCe contact est déjà présent.');
                    reinitialisationDuFormulaire();
                }

            } else {
                // -- Alert si erreur dans l'un des champs
                alert('ATTENTION\nVeuillez bien remplir tous les champs.');
            }       
    
        });
    
    }); // -- Fin de jQuery READY !