import "./component/search-bar.js";
import DataSource from './data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("#movieList");

    window.addEventListener("DOMContentLoaded", () => {
        DataSource.nowPlaying()
        .then(renderResult)
        .catch(fallbackResult);
    });

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {
        movieListElement.innerHTML = "";
        results.forEach(movie => {
            const {title, poster_path, release_date, popularity, vote_average, id} = movie;
            
            let poster = ``;
            if(!poster_path) {
                poster = `./assets/img/noimage.jpg`
            } else {
                poster = `https://image.tmdb.org/t/p/w500/${poster_path}`
            }

            const movieElement = document.createElement("div");
            movieElement.setAttribute("class", "col-lg-3 col-md-4 col-sm-6");
            
            movieElement.innerHTML = 
                `<div class="card">
                    <img class="poster-img" src="${poster}" alt="Poster ${title}">
                    <div class="card-body">
                        <h6>${title}</h6>
                        <p>${release_date}</p>
                        <div class="row">
                            <div class="col">
                                <p class="badge badge-pill badge-warning"><i class="fas fa-star"></i> ${vote_average}</p>
                            </div>
                            <div class="col">
                                <p class="badge badge-pill badge-danger"><i class="fas fa-eye"></i> ${popularity}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
            movieListElement.appendChild(movieElement);
        })
    };

    const fallbackResult = message => {
        movieListElement.innerHTML = "";
        movieListElement.innerHTML += `<h2 class="placeholder"> ${message}</h2>`
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;