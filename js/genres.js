/* Generos de las Películas */
let url = ("https://api.themoviedb.org/3/genre/movie/list?api_key=39567120a5a71b9d0780859871f73c82");

fetch(url)
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        
        console.log(data);
        
        for(let i = 0; i < data.genres.length; i++){
            document.querySelector("#section-generos-peliculas").innerHTML +=
            `
                <section id="section-generos-peliculas">
            
                    <h2>géneros de películas</h2>
            
                    <li>
                        <a href="genres.html?id= ${data.genres[i].id}">${data.genres[i].name}</a>
                    </li>
                    
                </section>
            `
        }
    })
    
    .catch(function(error){
        console.log('El error fue:' + error);
    })
