import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IMovies} from "../interfaces";
import {IRes} from "../types";
import {IDetails} from "../interfaces/detailsInterface";

const movieService = {
    getAllPopular: (page = '1'): IRes<IMovies> => axiosService.get(urls.movie.base, {params: {page}}),
    getTop: (): IRes<IMovies> => axiosService.get(urls.movie.top),
    getByMovieId: (id: string): IRes<IDetails> => axiosService.get(urls.movie.byMovieId(id)),
}

export {
    movieService
}