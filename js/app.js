const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=12bb05a0d85be8d234df1c8cf3558101&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=12bb05a0d85be8d234df1c8cf3558101&query="';

//DomElements
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


//Get initial movies
getMovie(API_URL)

//function_getMovie
async function getMovie(url) {
 const res = await fetch(url);
 const data = await res.json()
 showMovies(data.results)
}

//showMovie
function showMovies(movies) {
 main.innerHTML = '';
 movies.forEach((movie) => {
  const {
   title,
   poster_path,
   vote_average,
   overview
  } = movie;
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `
    <!-- movie -->
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <!-- movie-info -->
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <!-- end of movie-info -->
      
      <!-- overview -->
      <div class="overview">
        <h3>overview</h3>
        ${overview}
      </div>
      <!-- end of overview -->
  `
  main.appendChild(movieElement)
 })
}

function getClassByRate(vote) {
 if (vote >= 8) {
  return 'green';
 } else if (vote >= 5) {
  return 'orange'
 } else {
  return 'red'
 }
}


form.addEventListener('submit', (e) => {
 e.preventDefault();
 const searchTerm = search.value;
 console.log(searchTerm);
 if (searchTerm && searchTerm !== '') {
  getMovie(SEARCH_API + searchTerm);
  search.value = '';
 } else {
  window.location.reload();
 }

})