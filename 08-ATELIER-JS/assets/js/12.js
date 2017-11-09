/* --------------------------------------------------------
                         ~ LE DOM ~
        
    Le DOM est une interface de développement en JS
    pour HTML. Grâçe au DOM, je vais être en mesure 
    d'accéder / modifier mon HTML.

    L'objet "document" : c'est le point d'entré vers
    mon contenu HTML !

    Chaque page chargée dans mon navigateur à un
    objet "document"

 ----------------------------------------------------------*/

// -- Comment puis-je faire pour récupérer les différentes informations de ma page HTML ?

/*-------------------------------------------------------
|               ~ document.getElementById ~             |
|                                                       |
|   document.getElementByID() : C'est une fonction      |
|   qui vas permettre de récupérer un élement HTML      |
|   à partir de son identifiant unique : ID             |
-------------------------------------------------------*/

let bonjour = document.getElementById("Bonjour");
console.log(Bonjour);

/*----------------------------------------------------------------
|               ~ document.getElementsByClassName ~             |
|                                                               |
|   document.getElementByClassName() : C'est une fonction       |
|   qui vas permettre de récupérer un ou plusieurs élements     |
|   HTML (une liste) HTML à partir de leur classe               |
---------------------------------------------------------------*/

var contenu = document.getElementsByClassName(contenu);
console.log(contenu);

 // -- Me renvoie : un tableau JavaScript avec mes éléments HTML, ou encore autrement dit, une "Collection" d'éléments HTML

/*---------------------------------------------------------------
|               ~ document.getElementsByTagName ~               |
|                                                               |
|   document.getElementByClassName() : C'est une fonction       |
|   qui vas permettre de récupérer un ou plusieurs élements     |
|   HTML (une liste) HTML à partir de leur "nom de balise"      |
---------------------------------------------------------------*/

var span = document.getElementsByTagName("span");
console.log(span);