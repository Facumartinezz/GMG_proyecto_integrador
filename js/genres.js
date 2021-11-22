/* Generos de las Películas */
let url1 = 'https://api.themoviedb.org/3/genre/movie/list?api_key=39567120a5a71b9d0780859871f73c82'

fetch(url1)
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        
        console.log(data);
        
        for(let i = 0; i < data.genres.length; i++){
            document.querySelector('#section-generos-peliculas').innerHTML +=
            `
                <article class="generopeliculas">
            
                    <ul class="generos">
                        <li><a href="comedia.html?id=${data.genres[i].id}">${data.genres[i].name}</a></li>
                    </ul>
                </article>
            `
        }
    })
    
    .catch(function(error){
        console.log('El error fue:' + error);
    })

/* Generos de las Series */
let url2 = 'https://api.themoviedb.org/3/genre/tv/list?api_key=39567120a5a71b9d0780859871f73c82'

fetch(url2)
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        
        console.log(data);
        
        for(let i = 0; i < data.genres.length; i++){
            document.querySelector('#section-generos-series').innerHTML +=
            `
                <article class="generoseries">
            
                    <ul class="generos">
                        <li><a href="comedia.html?id=${data.genres[i].id}">${data.genres[i].name}</a></li>
                    </ul>
                </article>
            `
        }
    })
    
    .catch(function(error){
        console.log('El error fue:' + error);
    })