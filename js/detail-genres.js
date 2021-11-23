/* Detalle de Género */
console.log(location.search);

let conviertoId = new URLSearchParams(location.search);

let generoPagina = conviertoId.get("id");

console.log(generoPagina);

let url = 'https://api.themoviedb.org/3/discover/movie?with_genres/' + generoPagina + '?api_key=39567120a5a71b9d0780859871f73c82'

const nombre = document.querySelector("#section-detalles-generos");

const listado = document.querySelector("#section-detalle-generosP");

fetch(url)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
            console.log(datos);
    
            for(let i = 0; i < datos.generoPagina.length; i++){
                document.querySelector('#section-detalles-generos').innerHTML +=
                `
                    <article class="detalle-genero">
                        
                        <ul>
                            <li>
                                <a href="detail-genres.html?id= ${datos.genres[i].id}"> <h2>género:</h2> ${datos.genres[i].name}</a>
                            </li>
                        </ul>
    
                    </article>
                `
            }

    })

    .catch(function(error){
        console.log('El error fue:' + error);
    })