/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 

*/

// -- Tableau 3D "PremierTrimestre"
var PremierTrimestre = [];
var myArray          = new Array;

// -- Tableau 3D

var PremierTrimestre = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        moyenne     : {
                        Français   : 12,
                        Histoire   : 19,
                        Physique   : 14,
                        Art        : 2,
                        EPS        : 10,
                        }
    },
    {
        prenom      : "Abdel-illah",
        nom         : "BOUKHATEB",
        moyenne     : {
                        Français   : 10,
                        Histoire   : 12,
                        Physique   : 13,
                        Chinois    : 11,
                        }
    },
    {
        prenom      : "JM",
        nom         : "BISSICK",
        moyenne     : {
                        Français   : 14,
                        Histoire   : 8,
                        Physique   : 13,
                        Anglais    : 18,
                        }
    },
    {
        prenom      : "Nathan",
        nom         : "HEGO",
        moyenne     : {
                        Français   : 15,
                        Histoire   : 5,
                        Physique   : 12,
                        }
    },
    {
        prenom      : "David",
        nom         : "PAYEN",
        moyenne     : {
                        Français   : 13,
                        Histoire   : 7,
                        Physique   : 10,
                        EPS        : 12,
                        }
    },
];

l(PremierTrimestre);

/* -------------------------------
             CORRECTION :
-------------------------------- */

// -- Petite fonction de raccourci (lesFlemmard.js)
function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}

w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants
for(let i = 0 ; i < PremierTrimestre.length ; i++) {
    
    // -- On récupère l'Objet Etudiant de l'Itération
    let Etudiant = PremierTrimestre[i];
    
    // -- Aperçu dans la console
    l(Etudiant);

    var NombreMatiere = 0, SommeNotes = 0;

    // -- Afficher le Prénom et le Nom d'un Étudiant
    w('<li>');
        w(Etudiant.nom + " " + Etudiant.prenom);
        // -- Afficher la moyenne de l'étudiant aux différentes matières
        w('<ul>')
            for(let Matiere in Etudiant.moyenne) {
                l(Matiere);
                l(Etudiant.moyenne[Matiere]);

                NombreMatiere++;
                SommeNotes += Etudiant.moyenne[Matiere];

                w('<li>');
                    w(Matiere + " : " + Etudiant.moyenne[Matiere]);
                w('</li>');
            } // -- Fin de la boucle matière
            w('<li>');
                w("<strong>Moyenne Générale :</strong>" + (SommeNotes / NombreMatiere).toFixed(2) );
            w('</li>');
        w('</ul>');    
    w('</li>');
}
w('<ol>');