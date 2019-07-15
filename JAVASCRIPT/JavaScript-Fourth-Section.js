$(document).ready(
    function() //Esto significa que cuando el Documento ese listo Abre las siguientes funciones
    {
                $(window).scroll(
                    function()
                    {
                        var barra = $(window).scrollTop();
                        var posicion = barra * 0.1;
       
                        $(".fourth-section .contenedor").css({
                            "background-position":"0 -" + posicion +"px"
                        })
                    }
                );

    })