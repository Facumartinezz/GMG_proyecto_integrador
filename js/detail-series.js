/*detalle series*/
console.log(location.search);

let convertimientooId = new URLSearchParams(location.search);

let seriesPagina = convertimientooId.get("id");

console.log(seriesPagina);

let url = "https://api.themoviedb.org/3/tv/" + 

seriesPagina + 

"?api_key=39567120a5a71b9d0780859871f73c82";




const titulo = document.querySelector("h2");

const estreno = document.querySelector(".estreno");

const imagen = document.querySelector(".imagen img");

const genero = document.querySelector(".genero");

const trama = document.querySelector(".sinopsis");

const episodios = document.querySelector(".episodios")

const button = document.querySelector(".boton")

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


let arrayFavoritos = []

button.addEventListener("click", function () {
    let objeto = { titulo: titulo.innerText, fechaDeEstreno: estreno.innerText.slice(18,28), imagen: imagen.src, type: "tv", id: seriesPagina}
     if (localStorage.getItem("favoritos") && localStorage.getItem("favoritos") != null) {
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"))
        if (arrayFavoritos.includes(arrayFavoritos.find(function(element){ return element.id == objeto.id}))) {

            button.innerText = 'Agregar a favoritos'
            arrayFavoritos.splice(arrayFavoritos.indexOf(objeto), 1)

              } else {
            arrayFavoritos.push(objeto)
            button.innerText = 'Sacar de favoritos'
        }
           } else {
        arrayFavoritos.push(objeto)
        button.innerText = 'Sacar de favoritos'
    }

   localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos))
})
