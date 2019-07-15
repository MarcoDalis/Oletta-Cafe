 $(document).ready(
     function() //Esto significa que cuando el Documento ese listo Abre las siguientes funciones
     {
         $(".ver-mas").click(
             function()
             {
                 $(".parrafo-oculto").slideToggle(); //El elemento aparece con un deslizamiento hacia abajo al dar click y al volver dar click sube, usalo para Ver mas de Oletta
             })

                 $(window).scroll(
                     function()
                     {
                         var barra = $(window).scrollTop();
                         var posicion = barra * 0.1;
        
                         $(".second-section .contenedor").css({
                             "background-position":"0 -" + posicion +"px"
                         })
                     }
                 );

     })
    


    