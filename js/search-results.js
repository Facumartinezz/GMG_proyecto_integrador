let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

let resultado = objetoQuery.get('buscador');

let contenedor = document.querySelector(".resultados-de-busqueda") 

let loader = document.querySelector("#loader")

let button = document.querySelector("button")

button.addEventListener("click", function(){
    loader.classList.remove('oculto')
})

fetch(`https://api.themoviedb.org/3/search/multi?api_key=39567120a5a71b9d0780859871f73c82&language=en-US&query=${resultado}`)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data.results);
        loader.classList.add('oculto')
        data.results.forEach(function(peliculasSeries){
        
            if(peliculasSeries.media_type == "movie"){
                contenedor.innerHTML +=     
            `
            <article>
            
               
            
                <div class="portada">  
                    <a href="detail-movie.html?id=${peliculasSeries.id}">
                    <img src="https://image.tmdb.org/t/p/w300/${peliculasSeries.poster_path}">
                    </a> 
            
                    <h2> ${peliculasSeries.title}</h2>
            
                    <p>Fecha de lanzamiento: ${peliculasSeries.release_date}</p>
            
                </div> 
                
            </article> 
                    `
            }
            else{
                contenedor.innerHTML +=     
            `
            <article>
            
               
            
                <div class="portada">  
                    <a href="detail-series.html?id=${peliculasSeries.id}">
                    <img src="https://image.tmdb.org/t/p/w300/${peliculasSeries.poster_path}">
                    </a> 
            
                    <h2> ${peliculasSeries.name}</h2>
            
                    <p>Fecha de lanzamiento: ${peliculasSeries.first_air_date}</p>
            
                </div> 
                
            </article> 
                    `
            }
        
        });

    })

    .catch(function(error){
    console.log();
    })