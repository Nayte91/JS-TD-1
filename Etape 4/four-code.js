/* 
    Avant, cette variable était dans la fonction addOptionTag. Je l'ai sortie pour l'utiliser plus globalement, notamment tout en bas avec .addEventListener. 
*/
const masterSelector = document.getElementById('master')
const masterTableBody = document.getElementById('master-table').getElementsByTagName('tbody')[0]
const dogSelector = document.getElementById('dog')

const addOptionTag = (text) => {
    let element = document.createElement("option")
    element.text = element.value = text

    masterSelector.add(element, null)
}

/* 
    Fonction pour remplir le menu déroulant des maîtres dynamiquement.
    Se lance au chargement de la page.
    Etudiée à l'étape 1. J'y ai rajouté une valeur par défaut, comme demandé dans une des variations possibles.
*/
const populateMasterSelector = () => {
    let defaultOption = document.createElement("option");
    defaultOption.text = "-- Please choose a master --";
    masterSelector.add(defaultOption, null)

    doggletData.forEach(row => addOptionTag(row.firstName));
}

/* 
    Fonction pour remplir le menu déroulant des chiens dynamiquement.
    Se lance à la sélection d'un maître.
*/
const populateDogSelector = () => {
    let defaultOption = document.createElement("option");
    defaultOption.text = "-- Please choose a dog --";
    dogSelector.add(defaultOption, null)

    // doggletData.forEach(row => addOptionTag(row.firstName));
}

/*
    Tu vas utiliser cette fonction dans ta boucle pour afficher une propriété dans le tableau !
    2 arguments, ne renvoit rien. Facile.
*/
const addTableRow = (left, right) => masterTableBody.innerHTML += "<tr><td>" + left + "</td><td>" + right + "</td></tr>"

/* Fonction pour vider le tableau. Pas d'argument, ne renvoit rien. */
const resetTable = () => masterTableBody.innerHTML = ""

/*
    Rempli le tableau des maitres avec les propriétés de l'objet maitre sélectionné.
    Cette fonction reçoit un paramètre, une string qui contient le prénom du maître sélectionné.
    Elle ne renvoie rien.
*/
const fillMasterTable = (selectedMasterFirstName) => {
    resetTable()

    let filteredMaster = doggletData.filter(master => master.firstName === selectedMasterFirstName)[0]
    
    for (const property in filteredMaster) {
        if (typeof filteredMaster[property] !== 'object') {
            addTableRow(property, filteredMaster[property])
        }
    }
}

/* 
    ci-dessous, c'est le bout de code qui dit qu'au chargement de la page, on doit exécuter la fonction ci-dessus, populateMasterSelector.
    l'objet 'window' représente l'onglet du navigateur (ça fait partie de l'API des navigateurs internet, tout comme 'document' que tu retrouves plus haut). 
    Sa méthode addEventListener permet de déclencher une fonction (2ème argument) lorsqu'un évènement particulier se produit, ici la fin du chargement de la page.
 */
window.addEventListener('load', populateMasterSelector())
masterSelector.addEventListener('change', (e) => {
    fillMasterTable(e.target.value)
    populateDogSelector()
})