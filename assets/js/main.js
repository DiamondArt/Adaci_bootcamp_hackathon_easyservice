let iconsCategories = [
    'baby_changing_station',
    'directions_car',
    'light_group',
    'local_shipping',
    'valve',
    'food_bank',
    'local_florist'
]
// HOME PAGE
let sidebarUl = document.getElementById("sidebar-ul");
for (const key in categories) {
    let liTag = document.createElement('li');
    let linkTag = document.createElement('a');
    let iconTag = document.createElement('i');
    let spanTag = document.createElement('span');
    linkTag.setAttribute("href","#")
    linkTag.classList.add("nav-link");
    linkTag.classList.add("align-middle");
    linkTag.classList.add("px-0");
    spanTag.classList.add("ms-1");
    spanTag.classList.add("d-none");
    spanTag.classList.add("d-sm-inline");

    iconTag.classList.add("material-symbols-outlined");
    liTag.classList.add("nav-item");

    iconTag.appendChild(document.createTextNode(iconsCategories[key]));
    spanTag.appendChild(document.createTextNode(categories[key].libelle))
    linkTag.appendChild(iconTag);
    linkTag.appendChild(spanTag);
    liTag.appendChild(linkTag);

    sidebarUl.appendChild(liTag);
}


// PROFESSIONAL PAGE LIST
let listeProCategoriesList = document.querySelector(".liste-pro-categoriesList");

/** Ajout des catégories */
for (const key in categories) {
    let div = document.createElement("div");
    div.classList.add("liste-pro-categorie-item");
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    let span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerHTML = iconsCategories[key];
    let textNode = document.createTextNode(categories[key].libelle);

    a.appendChild(span);
    a.appendChild(textNode);
    div.appendChild(a);
    listeProCategoriesList.appendChild(div);
}

/** AJout des professionnels */
let listeProRightSide = document.querySelector(".professionnelsList");
//Lecture de la catégorie sélectionnée
let categorieSelect_id = 5;
//Tri des professionnels en fonction de la categorie
let categTrie = getProfessionnelsById(categorieSelect_id);
for (const key in professionnels) {
    let divCOl = document.createElement("div");
    divCOl.classList.add("col-md-6", "col-sm-12", "mb-3", "mb-sm-0");

    let divCard = document.createElement("div");
    divCard.classList.add("card", "liste-pro-card-element", "shadow");

    let divCardHeader = document.createElement("div");
    divCardHeader.classList.add("card-header");

    let divRow = document.createElement("div");
    divRow.classList.add("row");

    let img = document.createElement("img");
    img.classList.add("row");
    img.setAttribute("src", "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    img.classList.add("img-fluid", "rounded-circle", "img-thumbnail", "img-circle");

    
}

/**
 * Retourne la liste des professionnels de la BD en fonction de la catégorie
 * @param {*} categorie_id 
 */
function getProfessionnelsById(categorie_id) {
    let professionnelTrie = [];
    for (const professionnel of professionnels) {
        if (professionnel.categorie_id == categorie_id) {
            professionnelTrie.push(professionnel);
        }
    }
}
// PROFESSIONAL DETAIL