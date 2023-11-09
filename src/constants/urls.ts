const baseURL:string = 'https://api.themoviedb.org/3';

const popular = '/movie/popular';
const genre = '/genre/movie/list';
const top= '/movie/top_rated';
const upcoming = '/movie/upcoming';


const urls ={
    movie:{
        base:popular,
        top:top,
        upcoming:upcoming,
        byMovieId:(id:string)=>`/movie/${id}`,
    },
    genre:{
        genre:genre,
        byGenreId:(genreId:string)=>`/discover/movie?with_genres=${genreId}`
    }
}

export {
    urls,
    baseURL
}