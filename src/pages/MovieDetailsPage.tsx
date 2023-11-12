import {useEffect, useState} from "react";

import {movieService} from "../services";
import {MovieDetails} from "../components";
import {IDetails} from "../interfaces";

const MovieDetailsPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const [movie, setMovie] = useState<IDetails>(null);

    useEffect(() => {
        movieService.getByMovieId(id).then(({data}) => setMovie(data))
    }, [id])
    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export {MovieDetailsPage};