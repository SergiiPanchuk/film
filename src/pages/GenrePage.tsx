import {useEffect, useState} from "react";

import {Genres} from "../components/GenreContainer/Genres";
import {IGenre} from "../interfaces";
import {genreService} from "../services/genreService";

const GenrePage = () => {

    const [genre, setGenre] = useState<IGenre[]>(null)

    useEffect(() => {
        genreService.getGenre().then(({data}) => setGenre(data.genres))
    }, [])

    return (
        <div>
            {genre && <Genres genre={genre}/>}
        </div>
    );
};


export {GenrePage};