import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovies} from "../interfaces";
import {movieService} from "../services";
import {Movies} from "../components/MovieContainer/Movies";
import css from "./btnPrevNext.module.css";

const UpcomingPage = () => {
    const [movies, setMovies] = useState<IMovies>(null);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    useEffect(() => {
        movieService.getUpcoming(query.get('page')).then(({data}) => {
            setMovies(data)
            setPrevNext({prev: data.page - 1, next: data.page + 1})
        })
    }, [query.get('page'), query])

    const prev = () => {
        setQuery((prev) => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery((prev) => {
            if (movies.total_pages - 1 >= +prev.get('page')) {
                prev.set('page', `${+prev.get('page') + 1}`);
                return prev;
            }
            else {
                setPrevNext({prev, next: 0})
            }
        })
    }


    return (
        <div>
            {movies && <Movies movies={movies.results}/>}
            <div className={css.btn__block}>
                <button className={css.btn__prev_next} disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button className={css.btn__prev_next} disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    );
};


export {UpcomingPage};