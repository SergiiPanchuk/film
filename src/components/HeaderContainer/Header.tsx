import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"/home"}><img src="/icon/logo-icon.svg" alt="Logo"/></NavLink>
            <NavLink to={"/populate"}>Populate</NavLink>
            <NavLink to={"/top"}>Top</NavLink>
            <NavLink to={"/upcoming"}>Upcoming</NavLink>
            <NavLink to={"/genre"}>Genre</NavLink>
        </div>
    );
};

export {Header};