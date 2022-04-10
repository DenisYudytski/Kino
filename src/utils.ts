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