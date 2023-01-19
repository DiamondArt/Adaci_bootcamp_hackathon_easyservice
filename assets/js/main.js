// HOME PAGE
// PROFESSIONAL PAGE LIST
let listeProCategoriesList = document.querySelector(".liste-pro-categoriesList");
let iconsCategories = [
    'baby_changing_station',
    'directions_car',
    'light_group',
    'local_shipping',
    'valve',
    'food_bank',
    'local_florist'
]
/** Ajout des catégories */
for (const key in categories) {
    let div = document.createElement("div");
    div.classList.add("liste-pro-categorie-item");
    let span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerHTML = iconsCategories[key];
    let textNode = document.createTextNode(categories[key].libelle);

    div.appendChild(span);
    div.appendChild(textNode);
    listeProCategoriesList.appendChild(div);
}
// PROFESSIONAL DETAIL