let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

let resultado = objetoQuery.get('buscador');

let contenedor = document.querySelector(".resultados-de-busqueda")

let loader = document.querySelector("#loader")

fetch(`https://api.themoviedb.org/3/search/multi?api_key=39567120a5a71b9d0780859871f73c82&language=en-US&query=${resultado}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].media_type == "movie") {
                contenedor.innerHTML +=
                `
                <article>
                <div class="portada">  
                <a href="detail-movie.html?id=${data.results[i].id}">
                <img src="https://image.tmdb.org/t/p/w300/${data.results[i].poster_path}">
                </a> 
                
                <h2> ${data.results[i].title}</h2>
                
                <p>Fecha de lanzamiento: ${data.results[i].release_date}</p>
                
                </div> 
                
                </article> 
                `
            }
            else {
                contenedor.innerHTML +=
                `
                <article>
                
                
                
                <div class="portada">  
                <a href="detail-series.html?id=${data.results[i].id}">
                <img src="https://image.tmdb.org/t/p/w300/${data.results[i].poster_path}">
                </a> 
                
                <h2> ${data.results[i].name}</h2>
                
                <p>Fecha de lanzamiento: ${data.results[i].first_air_date}</p>
                
                </div> 
                
                </article> 
                `
            }
        }})
    .then(function(){
            loader.style.display = "none";
    })
    .catch(function (error) {
        console.log(error);
    })