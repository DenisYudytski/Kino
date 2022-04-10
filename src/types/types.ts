import { IFilm } from "../models/IFilm"


export interface IRate {
	rate: string | number
	bad: boolean
	good: boolean
	great: boolean
	none: boolean
}
export interface IGenre {
	genre: string
}
export interface ICountry {
	country: string
}

export interface ITopFilms {
	films: IFilm[]
	pagesCount: number
}
export interface IFilteredFilms {
	items: IFilm[]
}