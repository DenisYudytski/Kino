import { ICountry } from './../types/types';
import { IGenre } from "../types/types"

export interface IFilm {
	filmId: number
	filmLength: string
	genres: IGenre[]
	nameEn: string
	nameRu: string
	posterUrl: string
	posterUrlPreview: string
	coverUrl: string
	rating: string
	ratingVoteCount: number
	year: string
}

export interface IFilmFromId {

	kinopoiskId: number,
	nameRu: string,
	nameEn: string,
	nameOriginal: string,
	countries: ICountry[],
	genres: IGenre[],
	posterUrl: string,
	posterUrlPreview: string,
	coverUrl: string,
	ratingKinopoisk: number,
	ratingAgeLimits: string,
	year: number,
	filmLength: number,
	slogan: string,
	description: string,
	shortDescription: string,
	webUrl: string
	endYear: number,
	serial: boolean,
	shortFilm: boolean,
	completed: boolean,

}

export interface IFilteredFilm {
	items: IFilmFromId[]
	total: number
}