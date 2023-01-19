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

let modal = new bootstrap.Modal(document.getElementById('exampleModal'),{keyboard:false});
window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    if(top > 2007) {
        console.log("top= ",top);
        const myModalEl = document.getElementById('exampleModal');
        // modal.show();
        // myModalEl.addEventListener('shown.bs.modal', event => {
        // // do something...
        // });
    } 
    console.log(top);
}, false);





// PROFESSIONAL PAGE LIST
// let listeProCategoriesList = document.querySelector(".liste-pro-categoriesList");

// /** Ajout des catégories */
// for (const key in categories) {
//     let div = document.createElement("div");
//     div.classList.add("liste-pro-categorie-item");
//     let span = document.createElement("span");
//     span.classList.add("material-symbols-outlined");
//     span.innerHTML = iconsCategories[key];
//     let textNode = document.createTextNode(categories[key].libelle);

//     div.appendChild(span);
//     div.appendChild(textNode);
//     listeProCategoriesList.appendChild(div);
// }
// PROFESSIONAL DETAIL