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
                        }
    },
    {
        prenom      : "Abdel-illah",
        nom         : "BOUKHATEB",
        moyenne     : {
                        Français   : 10,
                        Histoire   : 12,
                        Physique   : 13,
                        }
    },
    {
        prenom      : "JM",
        nom         : "BISSICK",
        moyenne     : {
                        Français   : 14,
                        Histoire   : 8,
                        Physique   : 13,
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
                        }
    },
];

console.log(PremierTrimestre);

// -- Premier Trimestre Hugo LIEGEARD
document.write(PremierTrimestre[0].nom);
document.write(PremierTrimestre[0].prenom);
document.write(PremierTrimestre[0].moyenne["Français"]);
document.write(PremierTrimestre[0].moyenne["Histoire"]);
document.write(PremierTrimestre[0].moyenne["Physique"]);

// -- Premier Trimestre Abdel-illah BOUKHATEB
document.write(PremierTrimestre[1].nom);
document.write(PremierTrimestre[1].prenom);
document.write(PremierTrimestre[1].moyenne["Français"]);
document.write(PremierTrimestre[1].moyenne["Histoire"]);
document.write(PremierTrimestre[1].moyenne["Physique"]);

// -- Premier Trimestre JM BISSICK
document.write(PremierTrimestre[2].nom);
document.write(PremierTrimestre[2].prenom);
document.write(PremierTrimestre[2].moyenne["Français"]);
document.write(PremierTrimestre[2].moyenne["Histoire"]);
document.write(PremierTrimestre[2].moyenne["Physique"]);

// -- Premier Trimestre Nathan HEGO
document.write(PremierTrimestre[3].nom);
document.write(PremierTrimestre[3].prenom);
document.write(PremierTrimestre[3].moyenne["Français"]);
document.write(PremierTrimestre[3].moyenne["Histoire"]);
document.write(PremierTrimestre[3].moyenne["Physique"]);

// -- Premier Trimestre David PAYEN
document.write(PremierTrimestre[4].nom);
document.write(PremierTrimestre[4].prenom);
document.write(PremierTrimestre[4].moyenne["Français"]);
document.write(PremierTrimestre[4].moyenne["Histoire"]);
document.write(PremierTrimestre[4].moyenne["Physique"]);

var PremierTrimestre = new Array();

document.write(
"<ol>"
  + "<li>" + PremierTrimestre[0] + "nom" + "</li>" 
  + "<li>" + PremierTrimestre[1] + "</li>"
  + "<li>" + PremierTrimestre[2] + "</li>" 
  + "<li>" + PremierTrimestre[3] + "</li>"
  + "<li>" + PremierTrimestre[4] + "</li>" 
  +
"</ol>"
);

