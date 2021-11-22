/*detalle series*/
console.log(location.search);

let convertimientooId = new URLSearchParams(location.search);

let seriesPagina = convertimientooId.get("id");

console.log(seriesPagina);


const titulo = document.querySelector("h2");

const estreno = document.querySelector(".estreno");

const imagen = document.querySelector(".imagen img");

const genero = document.querySelector(".genero");

const trama = document.querySelector(".sinopsis");

const episodios = document.querySelector(".episodios")




let url = "https://api.themoviedb.org/3/tv/" + 

seriesPagina + 

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
        
        datos.original_name;

        imagen.src = "https://image.tmdb.org/t/p/w342/" +
        
        datos.poster_path;

        imagen.alt = datos.original_name;

        estreno.innerText += " " + datos.first_air_date;

        trama.innerText += " " + datos.overview;

        episodios.innerText += " " + datos.number_of_episodes;

       

})

.catch(function (error) {

    console.log('el error fue' + error);

})

// variables del favourites.js

let button = document.querySelector(".boton")

let title = document.querySelector(".titulo-peli")

let releaseDate = document.querySelector(".estreno") 

let img = document.querySelector(".imagen img")

let arrayFavoritos = []

let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

let resultado = objetoQuery.get('id');

button.addEventListener("click", function(){
    let objeto = {titulo: title.innerText, fechaDeEstreno: releaseDate.innerText, imagen: img.src, type: "pelicula", id: resultado}
    if(localStorage.getItem("favoritos")){
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"))
        for (let i = 0; i < arrayFavoritos.length; i++) {
            if (arrayFavoritos[i].id == objeto.id) {
             arrayFavoritos.splice(i, 1)   
             console.log(arrayFavoritos);
             console.log(1);
            }
            else{
                arrayFavoritos.push(objeto)
                console.log(2);
            }
         }
    }
    else{
        arrayFavoritos.push(objeto)
        console.log(3);
    }

    let encontrado 
    
    

    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos))
})
