import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {HomeUpcoming, PreviewMovies} from "../components";
import css from "./HomePage.module.css";

const HomePage = () => {
    const [upcomingMovie, setUpcomingMovie] = useState<IMovie>(null);
    const [moviePopulate, setMoviePopulate] = useState<IMovie[]>(null);
    const [movieTop, setMovieTop] = useState<IMovie[]>(null);

    useEffect(() => {
        movieService.getUpcoming().then(({data}) => setUpcomingMovie(data.results[0]))
    }, []);
    useEffect(() => {
        movieService.getAllPopular().then(({data}) => setMoviePopulate(data.results.slice(0, 7)))
    }, []);
    useEffect(() => {
        movieService.getTop().then(({data}) => setMovieTop(data.results.slice(0, 7)))
    }, [])


    return (
        <div className={css.HomePage}>
            {upcomingMovie && <HomeUpcoming upcomingMovie={upcomingMovie}/>}
            <div>
                <div className={css.preview__text}>
                    <p>Populate Movie</p>
                    <NavLink to={'/populate'}>all</NavLink>
                </div>
                {moviePopulate && <PreviewMovies movies={moviePopulate}/>}
            </div>
            <div className={css.preview__text}>
                <p>Top Movie</p>
                <NavLink to={'/top'}>all</NavLink>
            </div>
            {movieTop && <PreviewMovies movies={movieTop}/>}
        </div>
    );
};

export {HomePage};