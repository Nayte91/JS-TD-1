/* 
    Avant, cette variable était dans la fonction addOptionTag. Je l'ai sortie pour l'utiliser plus globalement, notamment tout en bas avec .addEventListener. 
*/
const masterSelector = document.getElementById('master-selector')
const masterTableBody = document.getElementById('master-table').getElementsByTagName('tbody')[0]

const addOptionTagToMaster = (text) => {
    let element = document.createElement("option")
    
    element.text = text
    element.value = text

    masterSelector.add(element, null)
}

/* 
    Fonction pour remplir le menu déroulant des maîtres dynamiquement.
    Se lance au chargement de la page.
    Etudiée à l'étape 1. J'y ai rajouté une valeur par défaut, comme demandé dans une des variations possibles.
*/
const populateMasterSelector = () => {
    addOptionTagToMaster("-- Please choose a master --")

    doggletData.forEach(row => addOptionTagToMaster(row.firstName))
}

/*
    Tu vas utiliser cette fonction dans ta boucle pour afficher une propriété dans le tableau !
    2 arguments, ne renvoit rien. Facile.
*/
const addRowToMasterTable = (left, right) => masterTableBody.innerHTML += "<tr><td>" + left + "</td><td>" + right + "</td></tr>"

/* Fonction pour vider le tableau. Pas d'argument, ne renvoit rien. */
const resetMasterTable = () => masterTableBody.innerHTML = ""

/*
    Cette fonction reçoit un paramètre, une string qui contient le prénom du maître sélectionné.
    Elle ne doit rien renvoyer (tout du moins ça ne sert à rien de return quelque chose ^^).
    
    Tu vas écrire dans cette fonction !
    1. De quoi vider le tableau,
    2. Un filter() pour sélectionner le maître adéquat,
    3. Une boucle pour passer à travers les propriétés de ce maître,
    4. Une condition pour ne pas afficher une propriété qui serait un array (en l'occurrence les chiens).
*/
const fillMasterTable = (selectedMasterFirstName) => {
    /* Au dessus de ton code */

    /* En dessous de ton code */
}

/* 
    ci-dessous, c'est le bout de code qui dit qu'au chargement de la page, on doit exécuter la fonction ci-dessus, populateMasterSelector.
    l'objet 'window' représente l'onglet du navigateur (ça fait partie de l'API des navigateurs internet, tout comme 'document' que tu retrouves plus haut). 
    Sa méthode addEventListener permet de déclencher une fonction (2ème argument) lorsqu'un évènement particulier se produit, ici la fin du chargement de la page.
 */
window.addEventListener('load', populateMasterSelector())
masterSelector.addEventListener('change', (e) => fillMasterTable(e.target.value))