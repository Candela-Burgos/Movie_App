const queryId = (id) => document.getElementById(id);
const BASE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const getMovies = () => {
  fetch(`${BASE_API}`)
    .then((res) => res.json())
    .then((data) => showMovies(data.results))
    .catch((err) => console.log("this is an error"));
};

getMovies();

const changeColorVote = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

const showMovies = (movies) => {
  for (const movie of movies) {
    console.log(movie);
    const { id, title, overview, poster_path, vote_average } = movie;
    queryId("main").innerHTML += `
      <div class="movie" >
          <img src="${
            IMG_PATH + poster_path
          }" alt="Image about ${title}" class="movie-image">
          <div class="content-title">
            <h3 class="title">${title}</h3>
            <span class="vote ${changeColorVote(
              vote_average
            )}">${vote_average}</span>
          </div>
          <div class="description">
              <h3>Description</h3>
              <p class="text-desc">${overview}</p>
          </div>
      </div>
    `;
  }
};
