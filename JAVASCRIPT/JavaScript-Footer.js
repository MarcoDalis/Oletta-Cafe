$(document).ready(
    function() //Esto significa que cuando el Documento ese listo Abre las siguientes funciones
    {
        $( ".logo-2" ).mouseover(function() {   //Esto sirve para que cuando el mouse este ensima de algo ejecute una funcion
            $("footer").css({"background":"white"});
            $("footer .contenedor div p").css({"color":"black"});
            $(".logo-1").css({"content":"url" + "(RecursosOletta/logo-footer-negro.png)"});
          });

          $( ".logo-2" ).mouseout(function() { //Esto sirve para que cuando el mouse este fuera de algo ejecute una funcion
            $("footer").css({"background":"#222222"});
            $("footer .contenedor div p").css({"color":"white"});
            $(".logo-1").css({"content":"url" + "(RecursosOletta/logo-footer.png)"});
          });
    }) 