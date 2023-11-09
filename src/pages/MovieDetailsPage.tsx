import {useEffect, useState} from "react";

import {movieService} from "../services";
import {MovieDetails} from "../components/MovieContainer/MovieDetails";
import {IDetails} from "../interfaces/detailsInterface";

const MovieDetailsPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const [movie,setMovie] = useState<IDetails>(null);

    useEffect(() => {
        movieService.getByMovieId(id).then(({data})=> setMovie(data))
    }, [])
    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export {MovieDetailsPage};