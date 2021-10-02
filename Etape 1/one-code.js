/* 
    Cette fonction permet d'ajouter une entrée dans le menu déroulant.
    En entrée, tu lui donnes le texte que tu veux afficher dans cette entrée.
    Tu devras appeler cette fonction, elle te mâche le travail du coté du html, que tu n'as pas étudié.
    Mais tu n'y touches pas ! Sauf si tu veux l'améliorer :p
*/
const addOptionTag = (text) => {
    let masterSelector = document.getElementById('master')
    let element = document.createElement("option")
    element.text = element.value = text

    masterSelector.add(element, null)
}

/* 
    Ton code doit être dans la fonction ci-dessous !
    On sait qu'elle sera executée lors du chargement de la page, qu'elle n'a aucun paramètre, et qu'elle ne renvoit rien.
    Les datas sont dans la variable doggletData, que tu peux aller lire dans assets/data.js. Une structure que tu dois savoir lire !
    Ton but va être d'écrire un bout de code qui va ajouter un élément (option tag) dans le menu select, un pour chaque maître.
*/
const populateMasterSelector = () => {
    /* Au dessus de ton code */

    /* En dessous de ton code */
}

/* 
    ci-dessous, c'est le bout de code qui dit qu'au chargement de la page, on doit executer la fonction ci-dessus, populateMasterSelector.
    l'objet 'window' représente l'onglet du navigateur (ça fait partie de l'API des navigateurs internet, tout comme 'document' que tu retrouves plus haut). 
    Sa méthode addEventListener permet de déclencher une fonction (2ème argument) lorsqu'un évènement particulier se produit, ici la fin du chargement de la page.
 */
window.addEventListener('load', populateMasterSelector())