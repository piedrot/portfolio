jQuery(document).on("scroll", onScroll)

    // Détéction de la position du haute du scroll au début de l'appel de la fonction
    var position = jQuery(document).scrollTop(); 

    function onScroll(event){

        // Hauteur de la fenêtre de vue
        var hauteurNavigateur = jQuery(window).height();

        // Valeur de la position haute du scroll
        var scrollPos = jQuery(document).scrollTop();

        console.log(scrollPos);

        //console.log(scrollPos+" ¡ "+hauteurNavigateur);

        // On vérifie que la position haute du scroll après action est supérieur à la position haute du scroll du départ
        if (scrollPos > position){

            // Vers le bas
            var nbItems = (scrollPos) / (hauteurNavigateur);
            // console.log(hauteurNavigateur);

            console.log(nbItems);

            //console.log("Vers le bas "+nbItems+" "+scrollPos+" > "+position);
            var indexCible = Math.ceil(nbItems)+1;

            console.log(indexCible);
            if(indexCible > jQuery('.grille').length)
            {
                indexCible = jQuery('.grille').length;
            }

        } else {

            var nbItems = parseInt(parseInt(scrollPos)+1) / parseInt(hauteurNavigateur);

            // Vers le haut
            //console.log("Vers le haut "+nbItems+" "+scrollPos+" > "+position);

            var indexCible = Math.ceil(nbItems);
            if (indexCible < 1){
                indexCible = 1;
            }
        }

        //console.log("Equipe"+indexCible+"  => "+jQuery("#equipe"+indexCible).offset().top);

        position = scrollPos;
        jQuery('.active').removeClass('active');
        var dataTar = jQuery("#equipe"+indexCible).data('target');
        var speed = 750;
        jQuery('.'+dataTar).addClass('active');
        //jQuery(document).scrollTop(jQuery("#equipe"+indexCible).offset().top);

        //jQuery(document).animate({scrollTop:$('#equipe'+indexCible).offset().top}, 'slow');
        //$('html,body').animate({scrollTop:$('#equipe'+indexCible).offset().top},speed);

    };