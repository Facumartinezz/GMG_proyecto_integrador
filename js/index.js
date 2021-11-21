    // Series mas vistas del momento
let url = ("https://api.themoviedb.org/3/tv/popular?api_key=39567120a5a71b9d0780859871f73c82")

fetch(url)

.then(function(response) {
    return response.json();
})

.then(function(datos){
    for (let i = 0; i < 4; i++){
    console.log(datos.results[i]);

    document.querySelector(".section-series-del-momento").innerHTML +=
        `
<article>

   

    <div class="portada">  
        <a href="detail-series.html?id=${datos.results[i].id}">
        <img src="https://image.tmdb.org/t/p/w300/${datos.results[i].poster_path}">
        </a> 

        <h2> ${datos.results[i].name}</h2>

        <p>Fecha de lanzamiento: ${datos.results[i].first_air_date}</p>

    </div> 
    
</article> 
        `
}
})






// Peliculas mas populares del momento


    let url1 = ("https://api.themoviedb.org/3/movie/popular?api_key=39567120a5a71b9d0780859871f73c82")

    fetch(url1)

    .then(function(response) {
        return response.json();
    })

    .then(function(datos) {
        for (let i = 0; i < 4; i++){

        console.log(datos.results[i]);

    document.querySelector(".section-peliculas-del-momento").innerHTML +=

    `
    <article>

        

    <div class="portada">
        <a href="detail-movie.html?id=${datos.results[i].id}">
            <img src="https://image.tmdb.org/t/p/w300/${datos.results[i].poster_path}"  
                alt=${datos.results[i].title} > 
        </a>

        <h2> ${datos.results[i].title}</h2>

        <p>Fecha de lanzamiento: ${datos.results[i].release_date}
        </p>
    </div>
<article/>
    
         `
        
    }
    })



// peliculas mas valoradas

let url2 = ("https://api.themoviedb.org/3/movie/top_rated?api_key=39567120a5a71b9d0780859871f73c82")

fetch(url2)

.then(function(response) {
    return response.json();
})

.then(function(datos) {
    for (let i = 0; i < 4; i++){

    console.log(datos.results[i]);

document.querySelector(".lo-mas-valorado-en-peliculas").innerHTML +=

`
<article>

    

    <div class="portada">
    <a href="detail-movie.html?id=${datos.results[i].id}">
        <img src="https://image.tmdb.org/t/p/w300/${datos.results[i].poster_path}"  
            alt=${datos.results[i].title} > 
    </a>

    <h2> ${datos.results[i].title}</h2>

    <p>Fecha de lanzamiento: ${datos.results[i].release_date}
    </p>
            </div>






<article/>

     `
    
}
})


