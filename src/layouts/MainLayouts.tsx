import {Outlet} from "react-router-dom";

import css from "./MainLayouts.module.css"
import {Header} from "../components/HeaderContainer";
import 'reset-css';
const MainLayouts = () => {
    return (
        <div className={css.MainLayouts}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};