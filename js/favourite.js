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
    for (let i = 0; i < agregados.length; i++) {
        
        if (agregados[i].type == "pelicula") {
            container.innerHTML +=
                `
    <article>
        <div class="portada">  
            <a href="detail-movie.html?id=${agregados[i].id}">
            <img src="${agregados[i].imagen}">
            </a> 
    
            <h2> ${agregados[i].titulo}</h2>
    
            <p>Fecha de lanzamiento: ${agregados[i].fechaDeEstreno}</p>
    
        </div> 
        
    </article> 
            `
        }
        else {
            console.log(agregados[i]);
            container.innerHTML +=
                `
    <article>
        <div class="portada">  
            <a href="detail-series.html?id=${agregados[i].id}">
            <img src="${agregados[i].imagen}">
            </a> 
    
            <h2> ${agregados[i].titulo}</h2>
    
            <p>Fecha de lanzamiento: ${agregados[i].fechaDeEstreno}</p>
    
        </div> 
        
    </article> 
            `
        }
        
    }
    
}