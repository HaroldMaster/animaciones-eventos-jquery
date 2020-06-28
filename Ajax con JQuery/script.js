//$(document).ready(function() y window.onload sirven cuando el script tanto de jquery o si vamos a usar objetos del DOM se encuentra en el head y no el body
let div = document.createElement("div");
div.id = "idiv";
document.body.appendChild(div);
let cont = 0;
for (let i = 1; i <= 9; i++) {
  $.get("https://swapi.dev/api/people/", { page: i }, function (response) {
    console.log(response);
    console.log(response.results[0].name);
    response.results.forEach((element, index) => {
      console.log(element.name);
      $("#idiv").append("<p>" + `${element.name}` + "</p>");
      cont++;
      console.log(cont);
    });
  });
}

let user = {
    id: 7,
    nombre:"Harold",
    apellido: "Flores"
}
$.post("https://reqres.in/api/users/", user, function(response){
    console.log(response);
})
