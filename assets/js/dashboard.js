//var dbSource="bd.json";
let professionnelconnecte;
let profes = 1;//reccuperation du premier professionnel depuis la page loadbdjs

for (const professionnel of professionnels) {
  if (professionnel.id ==profes) {
    professionnelconnecte = professionnel;
    break;
  }
}

let categoriePro;

for (const categorie of categories) {
  if ( categorie.id == professionnelconnecte.categorie_id) {
       categoriePro = categorie.libelle;
    break;
  }
}

console.log(categories)

let name = document.getElementById("name").value= professionnelconnecte.nom + " " + professionnelconnecte.prenom;

let email = document.getElementById("email").value= professionnelconnecte.email 

let tel1 = document.getElementById("tel1").value= professionnelconnecte.tel1

let tel2 = document.getElementById("tel2").value= professionnelconnecte.tel2;

let categoriepro = document.getElementById("categorie").value= categoriePro;

let experience = document.getElementById("experience").value = professionnelconnecte.annee_experience;

let casier_judiciaire = document.getElementById("casier-judiciaire").value=professionnelconnecte.casier_judiciaire;

let piece = document.getElementById("piece").value = professionnelconnecte.piece_identite;

let situation = document.getElementById("situation-geographique").value = professionnelconnecte.situation_geo;

let login = document.getElementById("login").value =professionnelconnecte.login;

let password = document.getElementById("password").value = professionnelconnecte.mot_de_passe;

let biographie = document.getElementById("biographie").value = professionnelconnecte.description;




