/* Peliculas populares*/
console.log(location.search);

let convertimientoId = new URLSearchParams(location.search);

let peliculasPagina = convertimientoId.get("id");

console.log(peliculasPagina);

let url = "https://api.themoviedb.org/3/movie/" + 

peliculasPagina + 

"?api_key=39567120a5a71b9d0780859871f73c82";






const titulo = document.querySelector("h2");

const estreno = document.querySelector(".estreno");

const imagen = document.querySelector(".imagen img");

const genero = document.querySelector(".genero");

const trama = document.querySelector(".sinopsis");

const duracion = document.querySelector(".duracion");

const button = document.querySelector(".boton")

const popularidad = document.querySelector(".calificacion")


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

        titulo.innerText     += " " +
        
        datos.title;

        imagen.src = "https://image.tmdb.org/t/p/w342/" +
        
        datos.poster_path;

        imagen.alt = datos.title;

        estreno.innerText += " " + datos.release_date;

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
    //Condicional que pregunta si tengo algo en localStorage Y si no es nulo
    if (localStorage.getItem("favoritos") && localStorage.getItem("favoritos") != null) {
    //guarda en el array que declaraste antes lo que encontro en el LS parseado (lo paso de formato JSON a JS)
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"))
    //condicional que pregunta si el array incluye al objeto (lo busca en el array y si es que lo encuentra pregunta si lo incluye)
        if (arrayFavoritos.includes(arrayFavoritos.find(function(element){ return element.id == objeto.id}))) {

            button.innerText = 'Agregar a favoritos'
            //elimina 1 objeto en el indice que encontro en arrayFavoritos.indexOf(objeto)
            arrayFavoritos.splice(arrayFavoritos.indexOf(objeto), 1)

            //si no encontro el objeto, quiere decir que no esta, entonces lo agrega
        } else {
            //lo pushea
            arrayFavoritos.push(objeto)
            button.innerText = 'Sacar de favoritos'
        }
        //si no encontro nada en el LS entonces pushea el objeto al array
    } else {
        arrayFavoritos.push(objeto)
        button.innerText = 'Sacar de favoritos'
    }

    //setea el array en el lS con el identificador favoritos
    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos))
})

