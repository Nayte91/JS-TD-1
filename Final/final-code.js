const masterSelector = document.getElementById('master-selector')
const dogSelector = document.getElementById('dog-selector')
const masterTableBody = document.getElementById('master-table').getElementsByTagName('tbody')[0]
const dogTableBody = document.getElementById('dog-table').getElementsByTagName('tbody')[0]

/* fonction qui crée un élément HTML option, en fonction du texte envoyé.
peu ou prou : "<option value="text">text</option>"
On pourra ensuite l'insérer dans le sélecteur pour faire un joli menu déroulant. */
const addOptionTag = (selector, text, isDefault = false) => {
    let element = document.createElement("option")

    element.text = text
    element.value = isDefault ? '' : text

    selector.add(element, null)
}

const populateSelector = (data, selector) => {
    let name = selector.getAttribute('data-name')
    let property = selector.getAttribute('data-carried')

    selector.innerHTML = ''

    addOptionTag(selector, '-- Please choose a ' + name + ' --', true)

    /* row est un object, mais les propriétés d'un object peuvent être appelées
    avec . ou avec [] ! Ici, [index] permet d'appeler dynamiquement,
    en fonction d'un index qui change. 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation */
    data.forEach(row => addOptionTag(selector, row[property]))
}

const addTableRow = (tableBody, property, value) => tableBody.innerHTML += "<tr><td>" + property + "</td><td>" + value + "</td></tr>"

const fillTable = (data, tableBody) => {
    tableBody.innerHTML = ''

    for (const property in data) {
        /* le if teste si la propriété que l'on va lire n'est pas un tableau ou un objet.
        En JavaScript, tableau ou objet renvoient 'object' quand on demande son type avec typeof ! 
        https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof#description */ 
        ('object' !== typeof data[property]) && addTableRow(tableBody, property, data[property])
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
    https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event 
*/
window.addEventListener('load', populateSelector(doggletData, masterSelector))
masterSelector.addEventListener('change', (e) => {
    dogTableBody.innerHTML = dogSelector.innerHTML = masterTableBody.innerHTML = ''
    
    if (e.target.value) {
        filteredMaster = doggletData.filter(master => master.firstName === e.target.value)[0]

        fillTable(filteredMaster, masterTableBody)
        populateSelector(filteredMaster.dogs, dogSelector)
    }
})
dogSelector.addEventListener('change', e => {
    filteredDog = filteredMaster.dogs.filter(dog => dog.name === e.target.value)[0]
    fillTable(filteredDog, dogTableBody)
})
