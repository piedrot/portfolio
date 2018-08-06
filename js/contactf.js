contact     =   document.querySelector('.contact');

function contactf() {

    mailphone   =   document.querySelector('.contact') !==null;
    phone       =   document.querySelector('.phone');
    mail        =   document.querySelector('.mail');
    cv          =   document.querySelector('.cv');
    active      =   document.querySelector('.contactive') !==null;

    if ( mailphone == active) {

        phone.style.transition='all .1s';
        phone.style.transform='translateY(0px)';
        phone.style.opacity='0';
        mail.style.transition='all .3s .05s';
        mail.style.transform='translateY(0px)';
        mail.style.opacity='0';
        cv.style.transition='all .6s .15s';
        cv.style.transform='translateY(0px)';
        cv.style.opacity='0';
        contact.classList.remove("contactive");

    } else {

        phone.style.transition='all .8s';
        phone.style.transform='translateY(50px)';
        phone.style.opacity='1';
        mail.style.transition='all .5s ease-out';
        mail.style.transform='translateY(100px)';
        mail.style.opacity='1';
        cv.style.transition='all .3s ease-out';
        cv.style.transform='translateY(150px)';
        cv.style.opacity='1';
        contact.classList.add("contactive");
        
    }
};