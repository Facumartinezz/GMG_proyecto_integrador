<<<<<<< HEAD
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
=======
let container = document.querySelector("#contenedor-favoritos")

console.log(JSON.parse(localStorage.getItem("favoritos")));

let agregados = JSON.parse(localStorage.getItem("favoritos"))
console.log(agregados);

if(localStorage.getItem("favoritos")){
    
    agregados.forEach(function(peliculasSeries){
        if(peliculasSeries.type == "pelicula"){
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
        else{
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
>>>>>>> cf13abf65adc74d8c4d337fc4856577e63714daf
}