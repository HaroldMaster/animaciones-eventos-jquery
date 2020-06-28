$(document).ready(function () {
  /********1. Añadir y eliminar elementos de una lista*******/

  //Funcion para tomar los valores del href de una etiqueta <a< y ponerlas dentro como texto
  function añadirLista() {
    var i = 0;
    $("li").each(function () {
      $(this).attr("data-id", i++);
    });
    $("a").each(function () {
      let objeto = $(this);
      let valores = objeto.attr("href");
      objeto.text(valores);
    });
  }

  //Funcion para agregar un elemento a la lista
  function añadirNuevo() {
    $(".btn-lista").click(function () {
      let lista = $(".input-lista");
      let valores =
        "<li>" +
        `<a href="https://${lista.val()}" target="_blank">` +
        `</a>&nbsp <button class="eliminar-label">Eliminar</button></li>`;
      $(".lista-desordenada").append(valores);
      añadirLista(); //Se refresca la lista
      eliminarElemento(); // Se añade la funcion eliminar elemento
    });
  }

  //Funcion para remover elementos de la lista
  function eliminarElemento() {
    $(".eliminar-label").click(function () {
      $(this).parent().remove();
    });
  }
  //Se añade la funcionalidad para los elementosF que ya se encuentran dentro del html
  añadirLista();
  añadirNuevo();
  eliminarElemento();

  /********2. Mostrar y ocultar un bloque que se pinta con hover*******/
  function mostrarTexto() {
    $(".btn-mostrar").click(function () {
      let bloque = $("#bloque");
      console.log($(this).text());
      if ($(this).text() == "Ocultar") {
        $(this).text("Mostrar");
        bloque.hide("normal");
        return;
      }
      if ($(this).text() == "Mostrar") {
        $(this).text("Ocultar");
        bloque.show("normal");
      }
      // Mostrar ocultar sin animaciones
      /*let display = bloque.css("display");
      switch (display) {
        case "block":
          bloque.css("display", "none");
          $(this).text("Mostrar");

          break;
        case "none":
          //bloque.css("display", "block");
          $(this).text("Ocultar");
          break;
      }*/
    });
  }

  //Funcion para cambiar de color el bloque al pasar el cursor sobre el
  function pintarTexto() {
    $("#bloque").hover(
      function () {
        $(this).css("background", "#FF775A");
      },
      function () {
        $(this).css("background", "orange");
      }
    );
  }
  pintarTexto();
  mostrarTexto();

  /*********3. Cambio de Cursor (En Pruebas)***********
  function cambioCursor() {
    $(".btn-cursor").click(function () {
      $("#contenedor-cursor").css("cursor", "none");
      $("#contenedor-cursor").mousemove(function (event) {
        console.log(event.clientX);
        $("#cursor-circular")
          .css("left", event.pageX)
          .css("top", event.pageY)
          .css("display", "block");
      });
    });
  }
  cambioCursor();*/

  /*********4. Fade In - Fade Out***********/
  function fade() {
    $(".btn-fade").click(function () {
      let bloque = $("#bloque-fade");
      console.log($(this).text());
      if ($(this).text() == "Fade Out") {
        $(this).text("Fade In");
        bloque.fadeOut("slow");
        return;
      }
      if ($(this).text() == "Fade In") {
        $(this).text("Fade Out");
        bloque.fadeIn("slow");
      }
    });
  }
  fade();

  /*********5. Slide Up - Slide Down***********/
  function slide() {
    $(".btn-slide").click(function () {
      let bloque = $("#bloque-slide");
      // console.log($(this).text())
      bloque.slideToggle("slow", function () {
        if ($(".btn-slide").text() == "Slide Up") {
          // console.log("entro aqui");
          $(".btn-slide").text("Slide Down");
          // console.log($(".btn-slide").text());
          return;
        }
        if ($(".btn-slide").text() == "Slide Down") {
          // console.log("entro aqui tambien");
          $(".btn-slide").text("Slide Up");
        }
      });
    });
  }
  slide();
  /*********6. Animacion Arriba - Abajo***********/
  function animacion1() {
    $(".btn-animacion1").click(function () {
      let div = $(".bloque-animacion1");
      div.css("top", "-20px").css("opacity", "0");
      div.animate({ top: "20px", opacity: "1" }, "slow");
    });
  }
  animacion1();
  /*********7. Animacion Abajo - Arriba***********/
  function animacion2() {
    $(".btn-animacion2").click(function () {
      let div = $(".bloque-animacion2");
      div.css("bottom", "-20px").css("opacity", "0");
      div.animate({ bottom: "20px", opacity: "1" }, "slow");
    });
  }
  animacion2();
  /*********8. Animacion Derecha - Izquierda***********/
  function animacion3() {
    $(".btn-animacion3").click(function () {
      let div = $(".bloque-animacion3");
      div.css("right", "-40px").css("opacity", "0");
      div.animate({ right: "20px", opacity: "1" }, "slow");
    });
  }
  animacion3();
  /*********9. Animacion Izquierda derecha***********/
  function animacion4() {
    $(".btn-animacion4").click(function () {
      let div = $(".bloque-animacion4");
      div.css("left", "-20px").css("opacity", "0");
      div.animate({ left: "20px", opacity: "1" }, "slow");
    });
  }
  animacion4();
});
