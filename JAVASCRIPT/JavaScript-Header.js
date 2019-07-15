$(document).ready(
    function() //Esto significa que cuando el Documento ese listo Abre las siguientes funciones
    {
        $( "header a" ).mouseover(function() {   //Esto sirve para que cuando el mouse este ensima de algo ejecute una funcion
            $("header a:hover").css({"color":"#F19700"});
            $("header a").css({"transition":"color 0.8s"});
          });

          $( "header a" ).mouseout(function() { //Esto sirve para que cuando el mouse este fuera de algo ejecute una funcion
            $("header a").css({"color":"white"});
          });

        $(window).scroll(
            function() //Cuando se haga Scroll en la pantalla Aplicar la funcion que se le dice.
            {
                scroll = $(window).scrollTop();

                if (scroll > 1) 
                {
                    $("header").css({"position":"fixed"});
                    $("header").css({"width":"100%"});
                    $("header").css({"top":"0%"});
                    $("header .contendor").css({"background":"black"});
                    $("header .contendor").css({"height":"30px"});
                    $("header .logo").css({"width":"100px"});
                    $("header").css({"padding":"0px"});
                    $("header a").css({"color":"white"});
                    $("header").css({"box-shadow":"0px 0px 12px 0px black"});
                    $("header").css({"z-index":"100"}); //Para darle una posicion en la pagina Web, velo como las capas de PhotoShop (mientras mas grande el numero mas prioridad)
                    $("header nav").css({"top":"45px"});
                    $(".menu-desplegable").css({"width":"30px"});
                }
                
                else
                {
                    //Cuando no ahi scroll ó cuando el scroll es para arriba y no para abajo
                    $("header").css({"position":"relative"});
                    $("header .contendor").css({"background":"black"});
                    $("header .contendor").css({"height":"50px"});
                    $("header .logo").css({"width":"150px"});
                    $("header").css({"box-shadow":"0px 0px 12px 0px black"});
                    $("header a").css({"color":"white"});
                    $("header nav").css({"top":"60px"});
                    $(".menu-desplegable").css({"width":"50px"});
                }
            })

        $(".menu-desplegable").click(
            function()
            {
                $("header nav").slideToggle(); //El elemento aparece con un deslizamiento hacia abajo al dar click y al volver dar click sube, usalo para Ver mas de Oletta
            })
    }) 