/* fonction qui crée un élément HTML option, en fonction du texte envoyé.
peu ou prou : "<option value="text">text</option>"
On pourra ensuite l'insérer dans le sélecteur pour faire un joli menu déroulant. */
const createOptionTag = (text) => {
    let element = document.createElement("option")
    element.text = element.value = text

    return element
}

const populateSelector = (selector, dataArray, index, text) => {
    selector.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.text = "-- Please choose a " + text + " --";
    selector.add(defaultOption, null)
    
    /* row est un object, mais les propriétés d'un object peuvent être appelées
    avec . ou avec [] ! Ici, [index] permet d'appeler dynamiquement,
    en fonction d'un index qui change. 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation */
    dataArray.forEach((row) => selector.add(createOptionTag(row[index]), null))
}

const populateMasterSelector = (selector, dataArray) => {
    populateSelector(selector, dataArray, 'firstName', 'master')
}

const populateDogSelector = (selector, dataArray) => {
    populateSelector(selector, dataArray, 'name', 'dog')
}

const populateTableBody = (tableBody, dataObject) => {
    tableBody.innerHTML = ""

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

/*  l'objet window en JavaScript représente la fenêtre (ou l'onglet) du navigateur.
    un event est un moment où il se passe quelque chose (sans blague !).
    un eventListener est un classique en programmation, cela permet d'éxecuter du code
    quand il se passe un évènement donné.
    Ici, on ajoute donc un EventListener à la fenêtre :
        Quand la fenêtre est totalement chargée (le html, le javascript, ...) avec 'load',
        On va lancer la callable suivante,
            qui n'a pas de paramètre (d'où le ()), 
            dans laquelle on lance 3 fonctions,
            elle ne renvoit rien.
    https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event */
window.addEventListener(
    'load', 
    () => {
        populateMasterSelector(masterSelector, doggletData)
        populateDogSelector(dogSelector, doggletData[0].dogs)
        populateTableBody(dogTable, doggletData[0].dogs[0])
    }
)

masterSelector.addEventListener(
    'change', 
    (e) => {
        var selectedMasterData = doggletData.filter((master) => master.firstName == e.target.value)[0]
        populateTableBody(masterTable, selectedMasterData)
        populateDogSelector(dogSelector, selectedMasterData.dogs)
    }
)