import {Outlet} from "react-router-dom";
import 'reset-css';

import css from "./MainLayouts.module.css"
import {Header} from "../components/HeaderContainer";

const MainLayouts = () => {

    return (
        <div className={css.MainLayouts}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};