// HOME PAGE
// PROFESSIONAL PAGE LIST
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

  

// input nom
  
    userLastname.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
         document.querySelector('.user-nom').style.display="block"
          }
          userLastname = e.target.value

    })
    userLastname.addEventListener('focus', function (e) {
        document.querySelector('.user-nom').style.display="none"
    })
 
// input prenom

    userFistname.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-prenom').style.display="block"
        }
        userFistname = e.target.value

    })

    userFistname.addEventListener('focus', function (e) {
        document.querySelector('.user-prenom').style.display="none"
    })



// input habitation

    userHome.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-habitation').style.display="block"
        }
        userHome = e.target.value

    })

    userHome.addEventListener('focus', function (e) {
        document.querySelector('.user-habitation').style.display="none"
    })


    //input email


    userEmail.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-email').style.display="block"
        }
        userEmail = e.target.value

    })

    userEmail.addEventListener('focus', function (e) {
        document.querySelector('.user-email').style.display="none"
    })

    // input telephone

    userPhone.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-telephone').style.display="block"
        }
        userPhone = e.target.value

    })

    userPhone.addEventListener('focus', function (e) {
        document.querySelector('.user-telephone').style.display="none"
    })

     // input telephone WhatsApp

     userPhoneWhat.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-telephone-what').style.display="block"
        }
        userPhoneWhat = e.target.value

     })

     userPhoneWhat.addEventListener('focus', function (e) {
        document.querySelector('.user-telephone-what').style.display="none"
    })

    // input mot de passe

    userPassword.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-password').style.display="block"
        }

        else if (e.target.value.length  < 8) {
            document.querySelector('.user-password').style.display="block"
             document.querySelector('.user-password').textContent="Veuillez saisir un mot de passe superieur a 8 caracteres svp"
        }
        userPassword = e.target.value

    })

    userPassword.addEventListener('focus', function (e) {
        document.querySelector('.user-password').style.display="none"
    })

    // input confirmation de mot de passe

   /* PasswordConfirm.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
        document.querySelector('.user-passordconfirm').style.display="block"
        }

        else if (e.target.value.length  == userPassword) {
            document.querySelector('.user-passordconfirm').style.display="block"
        }
        else{
            document.querySelector('.user-passordconfirm').textContent="Confirmation de mot de passe non validée"
        }
        PasswordConfirm = e.target.value

    })

    PasswordConfirm.addEventListener('focus', function (e) {
        document.querySelector('.user-passordconfirm').style.display="none"
    })*/


    // le boutton submit


 /*   let formsubmit = document.getElementById('submit-btn')
    let nom;
    let prenoms;
    let habitation;
    let email;
    let telephone;
    let password;
    let passwordconfirm;
    console.log(formsubmit)
    formsubmit.addEventListener('click',function(e)
    {
        e.preventDefault()
        console.log(nom,prenoms,habitation,email,telephone,password, passwordconfirm)
        let userobj={
            Lastname : nom,
            Fistname : prenoms,
            Home : habitation ,
            Email: email,
            Phone: telephone,
            password:btoa(password),
            PasswordConfirm: btoa(passwordconfirm)

        }

        localStorage.setItem('userinfo',JSON.stringify(userobj))
            return false;
    })*/

    //Script pour prendre photo


    (function prendrePhoto() {

        var streaming = false,
            video        = document.querySelector('#video'),
            cover        = document.querySelector('#cover'),
            canvas       = document.querySelector('#canvas'),
            photo        = document.querySelector('#photo'),
            startbutton  = document.querySelector('#startbutton'),
            width = 320,
            height = 0;
      
        navigator.getMedia = ( navigator.getUserMedia ||
                               navigator.webkitGetUserMedia ||
                               navigator.mozGetUserMedia ||
                               navigator.msGetUserMedia);
      
        navigator.getMedia(
          {
            video: true,
            audio: false
          },
          function(stream) {
            if (navigator.mozGetUserMedia) {
              video.mozSrcObject = stream;
            } else {
              var vendorURL = window.URL || window.webkitURL;
              video.src = vendorURL.createObjectURL(stream);
            }
            video.play();
          },
          function(err) {
            console.log("An error occured! " + err);
          }
        );
      
        video.addEventListener('canplay', function(ev){
          if (!streaming) {
            height = video.videoHeight / (video.videoWidth/width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
          }
        }, false);
      
        function takepicture() {
          canvas.width = width;
          canvas.height = height;
          canvas.getContext('2d').drawImage(video, 0, 0, width, height);
          var data = canvas.toDataURL('image/png');
          photo.setAttribute('src', data);
        }
      
        startbutton.addEventListener('click', function(ev){
            takepicture();
          ev.preventDefault();
        }, false);
      
      })();

//LOGIN













  



/* END AUTHENTIFICATION */