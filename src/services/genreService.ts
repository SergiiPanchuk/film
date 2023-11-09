import {IRes} from "../types";
import {IGenreResponse, IMovies} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const genreService = {
    getGenre: (): IRes<IGenreResponse> => axiosService.get(urls.genre.genre),
    getByMovieId: (id: string, page: string = '1'): IRes<IMovies> => axiosService.get(urls.genre.byGenreId(id), {params: {page}})
}

export {
    genreService
}