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
            "id": 1,
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 3,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 2,
            "nom": "Mangou",
            "prenom": "Olivier",
            "categorie_id": 5,
            "email": "mangouolivier@gmail.com",
            "tel1": "+225 5486952314",
            "tel2": "+225 4258796354",
            "annee_experience": 2,

            "notation": 3,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 3,
            "nom": "Agou",
            "prenom": "Colette",
            "categorie_id": 3,
            "email": "colette_agou@gmail.com",
            "tel1": "+225 8596741236",
            "tel2": "+225 4525698732",
            "annee_experience": 2,
            "notation": 3.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 4,
            "nom": "Kata",
            "prenom": "N'Douan Justine",
            "categorie_id": 1,
            "email": "kata_justine@yahoo.com",
            "tel1": "+225 2352416985",
            "tel2": "+225 2147856932",
            "annee_experience": 6,

            "notation": 3,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 5,
            "nom": "Sagou",
            "prenom": "José Eliakim",
            "categorie_id": 2,
            "email": "sagoujose@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 6,

            "notation": 1,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 6,
            "nom": "Akossi",
            "prenom": "Benjo",
            "categorie_id": 1,
            "email": "akossi@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 7,
            "notation": 3.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Non Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 7,
            "nom": "Danho",
            "prenom": "Deborah",
            "categorie_id": 1,
            "email": "danho@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 7,
            "notation": 3.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 8,
            "nom": "Boly",
            "prenom": "Basile",
            "categorie_id": 6,
            "email": "basileboly@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 5,
            "notation": 4,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 9,
            "nom": "Gnaly",
            "prenom": "Ornella",
            "categorie_id": 1,
            "email": "gnaly@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Non Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 10,
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 11,
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 12,
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 13,
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
        {
            "id": 14,
            "nom": "Kacou",
            "prenom": "Jean-Phillipe",
            "categorie_id": 1,
            "email": "kacouphilippe@gmail.com",
            "tel1": "+225 0785964220",
            "tel2": "+225 0145239874",
            "annee_experience": 3,
            "notation": 4.5,
            "fonction": "Expert menuisier",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptates consectetur, alias animi facere rem ipsa numquam ipsam deleniti ducimus magni omnis veniam optio. Autem nostrum maxime sint ipsam quam.",
            "statut": "Disponible",
            "situation_geo": "Abidjan, Port-Bouet"
        },
    ]
}

var categories = dataBD.categories;
var professionnels = dataBD.professionnels;