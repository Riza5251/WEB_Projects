
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form=document.getElementById('form')
const search=document.getElementById('search')

const main=document.getElementById('main')
getMovies(API_URL)   //movie name   

async function getMovies(url)   //this function uses the await keyword and return promises.the resolved value of promise is treated as return value of the await expression
 {   
     const res=await fetch(url)  // the fetch function is used to send a GET request to the url

     const data=await res.json();  //json method help in serializing the objects or arrays ,here it is serializing the movie name that we are getting in return in res as the fetch method is returning them in the form of promises
     showMovies(data.results)  //here we are passing the results of the data variable in the showmovies method
}

function showMovies(movies) {
    main.innerHTML=''

    movies.forEach((movie) => {
        const{title, poster_path, vote_average,overview}=movie
        

        const movieEl=document.createElement('div') //here we are creating an element div and we are giving it name movieEl for our ease in coding
        movieEl.classList.add('movie')


        movieEl.innerHTML=`<div class="movie">
        <img src="${IMG_PATH +poster_path}" alt="${title}">
        <div class="Movie-info">
            <h3>${title}</h3>
            <span class="${getclassbyrate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
           ${overview} 
        </div>
    </div>`
    main.appendChild(movieEl)  //appendchold is used to add a nnew child node to the parent node.SO THIS PARTICULAR LINE WILL ADD MOVIEEL THAT IS THE DIV ELEMENT TO THE MAIN TAG IN HTML DOC

   })
}


function getclassbyrate(vote) // vote is getting the value of vote average as passed above
{
      if(vote>=8){
      return 'green'}
    else if(vote>=5)
    {
        return 'orange'
    }

    else {
        return 'red'
    }
    
}

form.addEventListener('submit',(e) => {
     e.preventDefault()  // {it prevents the default behaviour of the form from ocurring} that is when we will submit the form it will not get submitted.

     const searchterm=search.value

     if(searchterm &&searchterm!=='') //searchterm alone in the if condition means if search term exist  and the second condition after AND means if the serachterm is not an empty string
      {
        getMovies(SEARCH_API + searchterm)  // this search term will be palced in th equery value of the search_api link

        search.value=''
     }
     else {
        window.location.reload()
     }
})