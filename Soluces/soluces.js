/* fonction qui crée un élément HTML option, en fonction du texte envoyé.
peu ou prou : "<option value="text">text</option>"
On pourra ensuite l'insérer dans le sélecteur pour faire un joli menu déroulant. */
const createOption = (text) => {
    let element = document.createElement("option");
    element.text = element.value = text;

    return element;
}

const populateSelector = (selectorId, dataArray, index) => {
    let selector = document.getElementById(selectorId);
    selector.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.text = "--Please choose a " + selectorId + "--";
    selector.add(defaultOption, null);
    
    dataArray.map(row => {
        /* row est un object, mais les propriétés d'un object peuvent être appelées
        avec . ou avec []. Ici, [index] permet d'appeler dynamiquement,
        en fonction d'un index qui change. 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation */
        selector.add(createOption(row[index]), null);
    });
}

const populateMasterSelector = (selectorId, dataArray) => {
    populateSelector(selectorId, dataArray, 'firstName');
}

const populateDogSelector = (selectorId, dataArray) => {
    populateSelector(selectorId, dataArray, 'name');
}

const populateTableBody = (tableBodyId, dataObject) => {
    let tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = "";

    for (const prop in dataObject) {
        /* le if teste si la propriété que l'on va lire n'est pas un tableau ou un objet.
        En JavaScript, tableau ou objet renvoient 'object' quand on demande son type avec typeof ! 
        https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof#description */ 
        if (typeof dataObject[prop] !== 'object') { 
            let newLine = "<tr><td>" + prop + "</td><td>" + dataObject[prop] + "</td></tr>"
            tableBody.innerHTML += newLine;
        }
    }
}

populateMasterSelector('master', doggletData);
populateTableBody('master-table-body', doggletData[0]);
populateDogSelector('dog', doggletData[0].dogs)
populateTableBody('dog-table-body', doggletData[0].dogs[0])