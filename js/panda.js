window.addEventListener('load', function () {

    //ID QUE SE UTILIZARAN
    var textoUno = document.getElementById("texto1");
    var textoDos = document.getElementById("texto2");
    var panda1   = document.getElementById("panda1");
    var span1    = document.getElementById("imagenUno");
    var panda2   = document.getElementById("panda2");
    var span2    = document.getElementById("imagenDos");
    var panda3   = document.getElementById("panda3");
    var span3    = document.getElementById("imagenTres");
    var panda4   = document.getElementById("panda4");
    var span4    = document.getElementById("imagenCuatro");

  //EJECUTANDO LA FUNCION TITULO 1:ORIGEN
    document.getElementById("titulo1").addEventListener('click', function(){
      textoUno.classList.toggle("aparecer");
    });

  //EJECUTANDO LA FUNCION TITULO2:EXTINCION
    document.getElementById("titulo2").addEventListener('click', function(){
      textoDos.classList.toggle("aparecer");
    });

  //EJECUTANDO OCULTAR LAS IMAGENES
    document.getElementById("imagenUno").addEventListener('click', function(){
      panda1.style.display = "none";
      span1.style.display  = "none";
    });

    document.getElementById("imagenDos").addEventListener('click', function(){
      panda2.style.display = "none";
      span2.style.display  = "none";
    });

    document.getElementById("imagenTres").addEventListener('click', function(){
      panda3.style.display = "none";
      span3.style.display  = "none";
    });

    document.getElementById("imagenCuatro").addEventListener('click', function(){
      panda4.style.display = "none";
      span4.style.display  = "none";
    });

  //EJECUTANDO LA FUNCION DEL TITLO 3: RESTAURAR FOTOS
    document.getElementById("titulo3").addEventListener('click', function(){
      panda1.style.display = "inline-block";
      span1.style.display  = "inline-block";
      panda2.style.display = "inline-block";
      span2.style.display  = "inline-block";
      panda3.style.display = "inline-block";
      span3.style.display  = "inline-block";
      panda4.style.display = "inline-block";
      span4.style.display  = "inline-block";
    });
  });
