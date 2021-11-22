let button = document.querySelector(".boton");

let title = document.querySelector(".titulo-peli");

let releaseDate = document.querySelector(".estreno");

let img = document.querySelector(".imagen img");

let arrayFavoritos = [];

let container = document.querySelector("#contenedor-favoritos");

button.addEventListener("click", function(){
    let objeto = {titulo: title.innerText, fechaDeEstreno: releaseDate.innerText, imagen: img.src}
    if(localStorage.getItem("favoritos")){
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    }
    
arrayFavoritos.push(objeto)

    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos));
})

if(localStorage.getItem("favoritos")){
    let agregados = JSON.parse(localStorage.getItem("favoritos"));
}