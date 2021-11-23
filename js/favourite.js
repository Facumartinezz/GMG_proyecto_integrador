let button = document.querySelector(".boton");

let title = document.querySelector(".titulo-peli");

let releaseDate = document.querySelector(".estreno");

let img = document.querySelector(".imagen img");

let arrayFavoritos = [];

let container = document.querySelector("#contenedor-favoritos");


if(localStorage.getItem("favoritos")) {
    let agregados = JSON.parse(localStorage.getItem("favoritos"));
    let container = document.querySelector("#contenedor-favoritos");
    console.log(JSON.parse(localStorage.getItem("favoritos")));
    agregados.forEach(function (peliculasSeries) {
            if (peliculasSeries.type == "pelicula") {
                container.innerHTML +=
                    `
        <article>
            <div class="portada">  
                <a href="detail-movie.html?id=${peliculasSeries.id}">
                <img src="${peliculasSeries.imagen}">
                </a> 
        
                <h2> ${peliculasSeries.titulo}</h2>
        
                <p>Fecha de lanzamiento: ${peliculasSeries.fechaDeEstreno}</p>
        
            </div> 
            
        </article> 
                `
            }
            else {
                console.log(peliculasSeries);
                container.innerHTML +=
                    `
        <article>
            <div class="portada">  
                <a href="detail-series.html?id=${peliculasSeries.id}">
                <img src="${peliculasSeries.imagen}">
                </a> 
        
                <h2> ${peliculasSeries.titulo}</h2>
        
                <p>Fecha de lanzamiento: ${peliculasSeries.fechaDeEstreno}</p>
        
            </div> 
            
        </article> 
                `
            }

    })
}