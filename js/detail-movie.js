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

        <a  href="comedia.html?id= ${datos.genres[i].id}">

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