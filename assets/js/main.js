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
createSideBar();

function createSideBar() {
    for (const key in categories) {
        let liTag = document.createElement('li');
        let linkTag = document.createElement('a');
        let iconTag = document.createElement('i');
        let spanTag = document.createElement('span');
        linkTag.setAttribute("href", "#")
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
}


/** AJout des professionnels */

//Lecture de la catégorie sélectionnée
let categorieSelect_id = 1; //TODO: Recuperer via LocalStorage

//Recuêration des professionnels par categorie
let professionnelsParCategorie = getProfessionnelsById(categorieSelect_id);

let listeProRightSide = document.querySelector(".professionnelsList");

for (const professionnel of professionnelsParCategorie) {
    listeProRightSide.appendChild(createCardProfessionnelListItem(professionnel));
}

function createCardProfessionnelListItem(professionnel) {
    //console.log(professionnel);

    let divCol = document.createElement("div");
    divCol.classList.add("col-md-6");
    divCol.classList.add("mb-3");
    divCol.classList.add("mb-sm-0");

    //CARD
    let divCard = document.createElement("div");
    divCard.classList.add("card", "liste-pro-card-element", "shadow");
    divCard.style.marginBottom = "30px";
    divCard.style.border = "none";

    //CARD-HEADER
    let divCardHeader = document.createElement("div");
    divCardHeader.classList.add("card-header");
    let divRowHeader = document.createElement("div");
    divRowHeader.classList.add("row");
    let divColHeaderMd3 = document.createElement("div");
    divColHeaderMd3.classList.add("col-md-3", "col-sm-12");
    let img = document.createElement("img");
    img.classList.add("row");
    img.setAttribute("src", "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    img.classList.add("img-fluid", "rounded-circle", "img-thumbnail", "img-circle");
    let divColHeaderMd9 = document.createElement("div");
    divColHeaderMd9.classList.add("col-md-9", "col-sm-12");
    let h4 = document.createElement("h4");
    h4.textContent = professionnel.nom + " " + professionnel.prenom
    let spanFonction = document.createElement("span");
    spanFonction.textContent = professionnel.fonction;
    let spanIcon = createMaterialIcon("panorama_fish_eye");
    spanIcon.classList.add("icone-statut");
    professionnel.statut == "Disponible" ? spanIcon.classList.add("icone-statut-disponible") : spanIcon.classList.add("icone-statut-non-disponible");
    let spanSTatut = document.createElement("span");
    spanSTatut.textContent = professionnel.statut;
    professionnel.statut == "Disponible" ? spanSTatut.classList.add("icone-statut-disponible") : spanSTatut.classList.add("icone-statut-non-disponible");

    divColHeaderMd3.appendChild(img);
    divColHeaderMd9.appendChild(h4);
    divColHeaderMd9.appendChild(spanFonction);
    divColHeaderMd9.appendChild(document.createElement("br"));
    divColHeaderMd9.appendChild(spanIcon);
    divColHeaderMd9.appendChild(spanSTatut);
    divRowHeader.appendChild(divColHeaderMd3);
    divRowHeader.appendChild(divColHeaderMd9);
    divCardHeader.appendChild(divRowHeader);
    divCardHeader.appendChild(divRowHeader);
    divCard.appendChild(divCardHeader);


    //CARD-BODY
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    let pCardBody = document.createElement("p");
    pCardBody.textContent = professionnel.description;
    divCardBody.appendChild(pCardBody);
    divCard.appendChild(divCardBody);


    //CARD FOOTER
    let divCardFooter = document.createElement("div");
    divCardFooter.classList.add("card-footer", "text-center");
    let divRowFooter = document.createElement("row");
    divRowFooter.classList.add("row");
    let divColFooter = document.createElement("div");
    divColFooter.classList.add("col-md-12");
    let aDetails = document.createElement("a");
    aDetails.setAttribute("href", "#");
    let iDetails = document.createElement("i");
    iDetails.classList.add("fa-solid", "fa-eye");
    aDetails.appendChild(iDetails);
    aDetails.appendChild(document.createTextNode(" Plus de Détails"));
    divColFooter.appendChild(aDetails);
    divRowFooter.appendChild(divColFooter);
    divCardFooter.appendChild(divRowFooter);
    divCard.appendChild(divCardFooter);

    divCol.appendChild(divCard);

    return divCol;

}

/**
 * Retourne la liste des professionnels de la BD en fonction de la catégorie
 * @param categorie_id 
 */
function getProfessionnelsById(categorie_id) {
    let professionnelTrie = [];
    for (const professionnel of professionnels) {
        if (professionnel.categorie_id == categorie_id) {
            professionnelTrie.push(professionnel);
        }
    }

    return professionnelTrie;
}

function createMaterialIcon(dataIcon) {
    let span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = dataIcon;

    return span;
}
// PROFESSIONAL DETAIL