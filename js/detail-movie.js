/* Peliculas populares*/
console.log(location.search);

let convertimientoId = new URLSearchParams(location.search);

let peliculasPagina = convertimientoId.get("id");

console.log(peliculasPagina);


const titulo = document.querySelector("h2");

const parrafo = document.querySelector(".estreno");

const imagen = document.querySelector(".imagen img");

const genero = document.querySelector(".genero");

const trama = document.querySelector(".sinopsis");

const duracion = document.querySelector(".duracion");

const button = document.querySelector(".boton")

let url = "https://api.themoviedb.org/3/movie/" + 

peliculasPagina + 

"?api_key=39567120a5a71b9d0780859871f73c82";

fetch(url)

.then(function (respuesta) {

    return respuesta.json()

})

.then(function (datos) {

    console.log(datos);


    for (let i = 0; i < datos.genres.length; i++) {

        genero.innerHTML += `

        <a  href="detail-genres.html?id= ${datos.genres[i].id}">

         ${datos.genres[i].name},
        <a/>
        `
        }   

        titulo.innerText += " " +
        
        datos.title;

        imagen.src = "https://image.tmdb.org/t/p/w342/" +
        
        datos.poster_path;

        imagen.alt = datos.title;

        parrafo.innerText += " " + datos.release_date;

        trama.innerText += " " + datos.overview;

        duracion.innerText += "" + datos.runtime; 

})

.catch(function (error) {

    console.log('el error fue' + error);

})

// variables del favourites.js

let arrayFavoritos = []
let recuperoStorage = localStorage.getItem("favoritos")

button.addEventListener("click", function () {
    let objeto = { titulo: titulo.innerText, fechaDeEstreno: parrafo.innerText.slice(18, 28), imagen: imagen.src, type: "pelicula", id: peliculasPagina}
    if (localStorage.getItem("favoritos") && localStorage.getItem("favoritos") != null) {
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"))

        if (arrayFavoritos.includes(arrayFavoritos.find(function(element){ return element.id == objeto.id}))) {
            button.innerText = 'Agregar a favoritos'
            arrayFavoritos.splice(arrayFavoritos.indexOf(objeto), 1)
        } 
        else {
            arrayFavoritos.push(objeto)
            button.innerText = 'Sacar de favoritos'
        }
        
    } 
    else {
        arrayFavoritos.push(objeto)
        button.innerText = 'Sacar de favoritos'
    }

    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos))
})

