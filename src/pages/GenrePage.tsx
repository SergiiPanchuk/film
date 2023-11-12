import {useEffect, useState} from "react";

import {Genres} from "../components";
import {IGenre} from "../interfaces";
import {genreService} from "../services";

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