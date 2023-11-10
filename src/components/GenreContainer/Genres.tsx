import {FC} from "react";

import {IGenre} from "../../interfaces";
import {Genre} from "./Genre";
import css from "./Genres.module.css"

interface IProps {
    genre: IGenre[]
}

const Genres: FC<IProps> = ({genre}) => {

    return (
        <div className={css.Genres}>
            {genre.map((genre) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};