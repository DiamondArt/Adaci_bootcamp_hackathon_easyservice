/*********************************************************************|
 |                          ADACI BOOTCAMP I
 |-----------------------------------------------------------------
 |                        PROJET: EASYSERVICE
 | @author: 
 | Nguessan Marina <marinanguessan23@gmail.com>
 | Kouadio Ange Melissa <angemelisk@gmail.com>
 | Etoumi Aristide <aetoumi@gmail.com>
 | Magara Etchien <magaretchien@gmail.com>
 | 
 * ********************************************************************/ 

let iconsCategories = [
    'baby_changing_station',
    'directions_car',
    'light_group',
    'local_shipping',
    'valve',
    'food_bank',
    'local_florist'
];
let sidebarUl = document.getElementById("sidebar-ul");
let searchSelect = document.getElementById("searchModal");
let searchForm = document.getElementById("searchForm");
const myModalEl = document.getElementById('follow-modal');
let  closeModal;
myModalEl.style ="visibility:hidden;-moz-transition: opacity 500ms linear, visibility 0s linear 500ms;-o-transition: opacity 500ms linear, visibility 0s linear 500ms;-webkit-transition: opacity 500ms linear, visibility 0s linear;-webkit-transition-delay: 0s, 500ms;transition: opacity 500ms linear, visibility 0s linear 500ms";

/******************************************
 *  window ready state
 * ****************************************/ 
createSideBar();
document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
	} else {
        
        setTimeout(function(){
            document.querySelector("#loader").style.display = "none";
		    document.querySelector("body").style.visibility = "visible";
        },2000);
	}
};

/***********************************************************
 * @function createSideBar()
 * @description: add sidebar content with categories
 * @returns: void
 * *********************************************************/ 
function createSideBar() {
    for (const key in categories) {
        let liTag = document.createElement('li');
        let linkTag = document.createElement('a');
        let iconTag = document.createElement('i');
        let spanTag = document.createElement('span');
        let option = document.createElement('option');
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
        spanTag.appendChild(document.createTextNode(categories[key].libelle));
        option.appendChild(document.createTextNode(categories[key].libelle));
        option.setAttribute("value",categories[key].id);
        linkTag.appendChild(iconTag);
        linkTag.appendChild(spanTag);
        liTag.appendChild(linkTag);
        
        sidebarUl.appendChild(liTag);
        searchSelect.appendChild(option);
    }
}
/***********************************************************
 * @description: search professionnal by category 
 * *********************************************************/ 
searchForm.addEventListener('submit',function(event){
    event.preventDefault();
    let valueSearch = searchSelect.value;
    localStorage.setItem('searchCategory',valueSearch);
    console.log(valueSearch);
    window.location.replace("/home/list-professional.html");

});

/***********************************************************
 * @description: show modal if scroll 
 * *********************************************************/ 
window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    if(!closeModal)
    {
        if(top > 2007) {
            console.log("top= ",top);
            myModalEl.style = "visibility:visible"
        }else{
            myModalEl.style = "visibility:hidden;-moz-transition: opacity 500ms linear, visibility 0s linear;-o-transition: opacity 500ms linear, visibility 0s linear;-webkit-transition: opacity 500ms linear, visibility 0s linear;transition: opacity 500ms linear, visibility 0s linear;";
        }
    }
}, false);

/***********************************************************
 * @function: CloseFollowModale()
 * @description: close modal
 * @returns: void
 * *********************************************************/ 
function CloseFollowModale(){
    closeModal = true;
    myModalEl.style = "visibility:hidden;-moz-transition: opacity 500ms linear, visibility 0s linear;-o-transition: opacity 500ms linear, visibility 0s linear;-webkit-transition: opacity 500ms linear, visibility 0s linear;transition: opacity 500ms linear, visibility 0s linear;";
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

/* START AUTHENTIFICATION */

//SIGUP

/* Recuperation de l'id de chaque champs */

let userLastname = document.getElementById('userLastname');
let userFistname = document.getElementById('userFistname');
let userHome = document.getElementById('userHome');
let userEmail = document.getElementById('userEmail');
let userPhone = document.getElementById('userPhone');
let userPhoneWhat = document.getElementById('userPhoneWhat');
let userPassword = document.getElementById('userPassword');
let PasswordConfirm = document.getElementById('userPasswordConfirm');
let categorieSelect = document.getElementById("categorie");
let userFonction = document.getElementById('userFonction');

//Remplissage du select
for (const categorie of categories) {
    let option = document.createElement("option");
    option.setAttribute("value", categorie.id);
    option.innerHTML = categorie.libelle;

    categorieSelect.appendChild(option);
}



// input nom
let error1 = document.querySelector('.user-nom')
error1.style.display = "none"
let error2 = document.querySelector('.user-prenom')
error2.style.display = "none"
let error9 = document.querySelector('.user-categorie')
error9.style.display = "none"
let error10 = document.querySelector('.user-fonction')
error10.style.display = "none"
let error3 = document.querySelector('.user-habitation')
error3.style.display = "none"
let error4 = document.querySelector('.user-email')
error4.style.display = "none"
let error5 = document.querySelector('.user-telephone')
error5.style.display = "none"
let error6 = document.querySelector('.user-telephone-what')
error6.style.display = "none"
let error7 = document.querySelector('.user-password')
error7.style.display = "none"
let error8 = document.querySelector('.user-passordconfirm')
error8.style.display = "none"

userLastname.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-nom').style.display = "block"
    }
    userLastname.value = e.target.value

})
userLastname.addEventListener('focus', function (e) {
    document.querySelector('.user-nom').style.display = "none"
})

// input prenom

userFistname.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-prenom').style.display = "block"
    }
    userFistname.value = e.target.value

})

userFistname.addEventListener('focus', function (e) {
    document.querySelector('.user-prenom').style.display = "none"
})


categorieSelect.addEventListener('', function (e) {
    if (e.target.value == 0) {
        error9.style.display = "block"
    }
    categorieSelect.value = e.target.value

})

categorieSelect.addEventListener('focus', function (e) {
    document.querySelector('.user-habitation').style.display = "none"
})

userFonction.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        error10.style.display = "block"
    }
    userFonction.value = e.target.value

})

userFonction.addEventListener('focus', function (e) {
    document.querySelector('.user-habitation').style.display = "none"
})

// input habitation

userHome.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-habitation').style.display = "block"
    }
    userHome.value = e.target.value

})

userHome.addEventListener('focus', function (e) {
    document.querySelector('.user-habitation').style.display = "none"
})


//input email


userEmail.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-email').style.display = "block"
    }
    userEmail.value = e.target.value

})

userEmail.addEventListener('focus', function (e) {
    document.querySelector('.user-email').style.display = "none"
})

// input telephone

userPhone.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-telephone').style.display = "block"
    }
    userPhone.value = e.target.value

})

userPhone.addEventListener('focus', function (e) {
    document.querySelector('.user-telephone').style.display = "none"
})

// input telephone WhatsApp

userPhoneWhat.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-telephone-what').style.display = "block"
    }
    userPhoneWhat.value = e.target.value

})

userPhoneWhat.addEventListener('focus', function (e) {
    document.querySelector('.user-telephone-what').style.display = "none"
})

// input mot de passe

userPassword.addEventListener('blur', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-password').style.display = "block"
    }

    else if (e.target.value.length < 8) {
        document.querySelector('.user-password').style.display = "block"
        document.querySelector('.user-password').textContent = "Veuillez saisir un mot de passe superieur a 8 caracteres svp"
    }
    userPassword.value = e.target.value

})

userPassword.addEventListener('focus', function (e) {
    document.querySelector('.user-password').style.display = "none"
})

// input confirmation de mot de passe

PasswordConfirm.addEventListener('input', function (e) {
    if (e.target.value.length == 0) {
        document.querySelector('.user-passordconfirm').style.display = "block"
        document.querySelector('.user-passordconfirm').textContent = "Veuillez confirmer le mot de passsvp"
    }

    else if (e.target.value != userPassword.value) {

        document.querySelector('.user-passordconfirm').style.display = "block"
        document.querySelector('.user-passordconfirm').textContent = "Confirmation de mot de passe non validée"
    } else {
        document.querySelector('.user-passordconfirm').style.display = "none"

    }
    PasswordConfirm = e.target.value

})




// le boutton submit


let formsubmit = document.getElementById('submit-btn')

formsubmit.addEventListener('click', function (e) {
    //recuperation du dernier ID
    let lastId = professionnels[professionnels.length - 1].id;

    e.preventDefault();
    let userobj = {
        id: lastId + 1,
        nom: userFistname.value,
        prenom: userLastname.value,
        categorie_id: categorieSelect.value,
        email: userEmail.value,
        tel1: userPhone.value,
        fonction: userFonction.value,
        /*password: btoa(password),
        PasswordConfirm: btoa(passwordconfirm)*/

    }
    professionnels.push(userobj);

    localStorage.setItem('userinfo', lastId + 1);

    //REDIRECTION VERS ADMIN PAGE
    return false;
})

//Script pour prendre photo

let startbutton = document.getElementById("startbutton");
let video = document.querySelector("#videoElement");
startbutton.addEventListener("click", (ev) => {


    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
});

let stopbutton = document.getElementById("stopbutton");
stopbutton.addEventListener("click", (ev) => {

    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
});

//LOGIN

















/* END AUTHENTIFICATION */
