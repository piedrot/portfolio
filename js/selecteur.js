

// RÉCUPÈRE LA VALEUR DU CLICK SUR LA LISTE DES REALISATIONS

//var iframe  =   document.getElementById('iframe');
var navtext         =   document.getElementById('navtext');
var portfolio       =   document.getElementById('portfolio');
var visite          =   document.getElementById('visite');
var ulselecteur     =   document.getElementById('selecteur'); // Parent

ulselecteur.addEventListener('click', function (e) {
    var cible = e.target; // Clicked element
    while (cible && cible.parentNode !== ulselecteur) {
        cible = cible.parentNode; // If the clicked element isn't a direct child
        if(!cible) { return; } // If element doesn't exist
    }
    if (cible.tagName === 'LI'){

        //Récupère le premier lien du li cliqué
        var dataa = cible.getElementsByTagName('a')[0];

        console.log(cible);

        // Récupère la valeur de data-target et de data-attr
        var datatarget  =   dataa.getAttribute('data-target');
        var dataattr    =   dataa.getAttribute('data-attr');
        var dataanchors =   dataa.getAttribute('data-anchors');
        //console.log(datatarget);

        // Remplace les valeurs de la barre de recherche et l'adresse web de l'iframe
        visite.href         =   datatarget;
        portfolio.href      =   dataanchors;
        navtext.innerHTML   =   dataattr;
        document.getElementById('iframe').contentWindow.location.replace(datatarget);
    }
});



// SELECTEUR D'AFFICHAGE DESKTOP -> MOBILE

var desktop     =   document.getElementById('desktop');
var mobile      =   document.getElementById('mobile');

var mockup =   document.getElementById("mockup");

desktop.addEventListener('click', function (e) {
    mockup.style.width = "100%";
        
});

mobile.addEventListener('click', function (e) {
    mockup.style.width = "400px";
});



// PARTIE EXPERIENCES


var presxp          =       document.getElementById('presxp').getElementsByTagName('li');
presxp[0].classList.add('presactive');

var ulseleclist     =       document.getElementById('selectxp').getElementsByTagName('li');
ulseleclist[0].classList.add('selecactive');

let xptitre      =       document.getElementById('xptitre');
let xptitreli    =       xptitre.getElementsByTagName('li');

for (let i = 0; i < xptitreli.length; i++ ){
    xptitreli[i].addEventListener('mouseover', function(){
        
        var presactive = document.getElementsByClassName("presactive")[0];
        var selecactive = document.getElementsByClassName("selecactive")[0];

        presactive.classList.remove('presactive');
        selecactive.classList.remove('selecactive');
        presxp[i].classList.add('presactive');
        ulseleclist[i].classList.add('selecactive');
        
    });
};

for (let i = 0; i < ulseleclist.length; i++ ){
    ulseleclist[i].addEventListener('click', function(){
        
        var presactive = document.getElementsByClassName("presactive")[0];
        var selecactive = document.getElementsByClassName("selecactive")[0];

        presactive.classList.remove('presactive');
        selecactive.classList.remove('selecactive');
        presxp[i].classList.add('presactive');
        ulseleclist[i].classList.add('selecactive');

        
    });
};