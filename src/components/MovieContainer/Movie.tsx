import {FC} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {baseImgURL} from "../../constants";
import css from "./Movie.module.css"
import {MovieRating} from "../StarRatingContainer/StarRating";

interface IProps {
    movie: IMovie
}


const PopularMovie: FC<IProps> = ({movie}) => {

    const {title, poster_path,id,vote_average} = movie;
    const [query, setQuery] = useSearchParams(`id=${id}`);
    const navigate = useNavigate();


    const set= () => {
        setQuery((prev) => {
            prev.set('id',`${id}`)
            return prev
        })
        navigate(`/details?${query.toString()}`);
    }

    return (
        <div className={css.PopularMovie}>
                <img src={baseImgURL + poster_path} alt={title} className={css.movie__poster} onClick={set}/>
                <MovieRating rating={vote_average}/>
                <p onClick={set}>{title}</p>
        </div>
    );
};

export {PopularMovie};