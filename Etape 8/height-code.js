const masterSelector = document.getElementById('master-selector')
const dogSelector = document.getElementById('dog-selector')
const masterTableBody = document.getElementById('master-table').getElementsByTagName('tbody')[0]
const dogTableBody = document.getElementById('dog-table').getElementsByTagName('tbody')[0]

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

    data.forEach(row => addOptionTag(selector, row[property]))
}

const addTableRow = (tableBody, property, value) => tableBody.innerHTML += "<tr><td>" + property + "</td><td>" + value + "</td></tr>"

const fillTable = (data, tableBody) => {
    tableBody.innerHTML = ''

    for (const property in data) ('object' !== typeof data[property]) && addTableRow(tableBody, property, data[property])
}

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
