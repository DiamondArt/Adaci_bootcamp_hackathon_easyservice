//var dbSource="bd.json";

var dataBD = {
    "categories": [
        {
            "id": 1,
            "libelle": "Nounou"
        },
        {
            "id": 2,
            "libelle": "Chauffeur"
        },
        {
            "id": 3,
            "libelle": "Electricien"
        },
        {
            "id": 4,
            "libelle": "Coursier"
        },
        {
            "id": 5,
            "libelle": "Plombier"
        },
        {
            "id": 6,
            "libelle": "Domestique"
        },
        {
            "id": 7,
            "libelle": "Jardinier"
        }
    ],
    "professionnels": [
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Mangou",
            "prenom": "Olivier",
            "categorie_id": 5,
            "email": "mangouolivier@gmail.com",
            "tel1": "+225 5486952314",
            "tel2": "+225 4258796354",
            "annee_experience": 2,
            "notation": 3,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Agou",
            "prenom": "Colette",
            "categorie_id": 3,
            "email": "colette_agou@gmail.com",
            "tel1": "+225 8596741236",
            "tel2": "+225 4525698732",
            "annee_experience": 2,
            "notation": 3.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kata",
            "prenom": "N'Douan Justine",
            "categorie_id": 1,
            "email": "kata_justine@yahoo.com",
            "tel1": "+225 2352416985",
            "tel2": "+225 2147856932",
            "annee_experience": 6,
            "notation": 3,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Sagou",
            "prenom": "José Eliakim",
            "categorie_id": 2,
            "email": "sagoujose@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 6,
            "notation": 1,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Akossi",
            "prenom": "Benjo",
            "categorie_id": 1,
            "email": "akossi@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 7,
            "notation": 3.5,
            "Fonction": "Expert menuisier",
            "statut":"Non Disponible"
        },
        {
            "nom": "Danho",
            "prenom": "Deborah",
            "categorie_id": 1,
            "email": "danho@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 7,
            "notation": 3.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Boly",
            "prenom": "Basile",
            "categorie_id": 6,
            "email": "basileboly@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 5,
            "notation": 4,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Gnaly",
            "prenom": "Ornella",
            "categorie_id": 1,
            "email": "gnaly@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Non Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Non Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Non Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Non Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        },
        {
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "Fonction": "Expert menuisier",
            "statut":"Disponible"
        }
    ]
}

var categories = dataBD.categories;
var professionnels = dataBD.professionnels;