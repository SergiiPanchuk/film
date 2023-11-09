import {FC} from "react";

import {IMovie} from "../../interfaces";
import {PopularMovie} from "./Movie";
import css from "./Movies.module.css"

interface IProps {
    movies: IMovie[]
}

const Movies: FC<IProps> = ({movies}) => {

    return (
        <div className={css.PopularMovies}>
            {movies.map((movie) => <PopularMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};