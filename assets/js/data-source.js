// import movies from './movies.js';

class DataSource {
    static nowPlaying() {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0856e0f5ca6d63df09ecbd97a7985724&language=en-US&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`try again`);
            }
        });
    }
    
    static searchMovie (keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=0856e0f5ca6d63df09ecbd97a7985724&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results.length > 0) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;