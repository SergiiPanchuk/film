import {FC} from "react";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css"
import {useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre
}

const Genre:FC<IProps> = ({genre}) => {

    const {id,name} = genre;

    const navigate = useNavigate();
    return (
        <div className={css.Genre}>
            <p onClick={()=>navigate(`${id}`)}>
                {name}
            </p>
        </div>
    );
};

export {Genre};