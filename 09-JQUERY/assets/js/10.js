// -- Initialisation de jQuery (DOM READY)
$(function(){
    var membres = [
      {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
      {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
      {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
      {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
    ];
        // -- Initialisations des variables ...
        nombreMembres = membres.length;

        // -- Récupération de différents éléments
        var pseudo       = $('#pseudo');
        var age          = $('#age');
        var email        = $('#email');
        var mdp          = $('#mdp');
        var bienvenue    = $('#Bienvenue');
        var form         = $('#form');
        var submit       = $('#submit');
        var pseudoError  = $('.pseudoError');
        var ageError     = $('.ageError');

        // -- ETAPE 1 & 3
        pseudo.on(`input`, function(e){
            // -- A. Parcourir mon tableau de membre
            for(let i = 0 ; i < nombreMembres ; i++){
                // -- B. Si la saisie d'un pseudo en cours par mon utilisateur correspond à un pseudo dans mon tableau de membre, alors sa condition s'applique
                if(pseudo.val() === membres[i].pseudo){
                    // -- C. J'ai trouvé une correspondance, je vais afficher un message d'alerte.
                    // -- J'affiche une alerte
                    pseudoError.fadeIn();
                    // -- Je vide le titre de bienvenue
                    bienvenue.text('');
                    // -- Je désactive le bouton
                    submit.attr('disabled', true);
                    // -- 
                    break;
                } else{
                    // -- On cache le pseudo et réactive le bouton
                    pseudoError.fadeOut();
                    submit.removeAttr('disabled');
                    // -- On affiche le pseudo en guise de bienvenue
                    bienvenue.text(pseudo.val());
                    };
                };
            });
        }); // -- Fin de jQuery READY 