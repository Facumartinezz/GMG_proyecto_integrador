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
}