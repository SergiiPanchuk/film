import {FC, useEffect, useState} from "react";

import {ICast} from "../../interfaces";
import {castService} from "../../services";
import {Actor} from "./Actor";
import css from "./Actors.module.css"

interface IProps {
    id: number
}

const Actors: FC<IProps> = ({id}) => {

    const [actors, setActors] = useState<ICast[]>(null);

    useEffect(() => {
        castService.getByMovieId(id).then(({data}) => setActors(data.cast))
    }, [id])

    return (
        <div className={css.Actor__container}>
            <h4>Main Cast</h4>
            <div className={css.actors}>
                {actors && actors.map((actor: ICast) => <Actor key={actor.id} actor={actor}/>)}
            </div>
        </div>
    );
};


export {Actors};