import { IStaff } from './models/IStaff';
import { ICountry, IGenre } from './types/types';
import { IFilm, IFilmFromId } from "./models/IFilm";

export const getFilmRate = (film: IFilm, badRate: number, goodRate: number) => {

	if (!film.rating) {
		return null
	}

	const rate = film.rating
	const bad = +film.rating <= badRate
	const good = +film.rating > badRate && +film.rating <= goodRate
	const great = +film.rating > goodRate
	const none = film.rating?.includes("%")


	return {
		rate, bad, good, great, none
	}
}
export const getGenreFilmRate = (film: IFilmFromId, badRate: number, goodRate: number) => {

	if (!film.ratingKinopoisk) {
		return null
	}

	const rate = film.ratingKinopoisk
	const bad = +film.ratingKinopoisk <= badRate
	const good = +film.ratingKinopoisk > badRate && +film.ratingKinopoisk <= goodRate
	const great = +film.ratingKinopoisk > goodRate
	const none = film.ratingKinopoisk === 0


	return {
		rate, bad, good, great, none
	}
}

export const getAgeLimit = (age: string) => {
	return age ? age.slice(3) + '+' : 'none'
}

export const getFilmYear = (film: IFilmFromId) => {
	if (film.serial) {
		if (film.completed) {
			return `Сериал ${film.year} - ${film.endYear}`
		} else return `Сериал ${film.year} - ...`
	}
	return film.year
}
export const getLastElem = (array: [] | IGenre[] | ICountry[] | IStaff[]) => {
	return array.length - 1
}