import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { IFilmFromId } from '../models/IFilm'
import { getLastElem } from '../utils'

interface FilmDescriptionProps {
	film: IFilmFromId
}

export const FilmDescription: FC<FilmDescriptionProps> = ({ film }) => {

	const { staff } = useAppSelector(state => state.staffSliceReducer)
	const directors = staff.filter(person => person.professionKey === "DIRECTOR")
	const writers = staff.filter(person => person.professionKey === "WRITER")
	const producers = staff.filter(person => person.professionKey === "PRODUCER").slice(0, 3)
	const operators = staff.filter(person => person.professionKey === "OPERATOR")
	const composers = staff.filter(person => person.professionKey === "COMPOSER")
	const designers = staff.filter(person => person.professionKey === "DESIGN")

	return (
		<div className='FilmDescription'>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Страна:</span> {film.countries.map((country, index) => index !== getLastElem(film.countries) ? `${country.country},` : `${country.country}`)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Жанр:</span> {film.genres.map((genre, index) => index !== getLastElem(film.genres) ? `${genre.genre}, ` : `${genre.genre} `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Слоган:</span> {film.slogan ? film.slogan : "—"}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Режиссер:</span> {directors.map((director, index) => index !== getLastElem(directors) ? `${director.nameRu}, ` : `${director.nameRu} `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Сценарий:</span> {writers.map((writer, index) => index !== getLastElem(writers) ? `${writer.nameRu}, ` : `${writer.nameRu} `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Продюсер:</span> {producers.map((producer, index) => index !== getLastElem(producers) ? `${producer.nameRu}, ` : `${producer.nameRu} `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Оператор:</span> {operators.map((operator, index) => index !== getLastElem(operators) ? `${operator.nameRu}, ` : `${operator.nameRu} `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Композитор:</span> {composers.map((composer, index) => index !== getLastElem(composers) ? `${composer.nameRu}, ` : `${composer.nameRu} `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Художники:</span> {designers.map((designer, index) => index !== getLastElem(designers) ? `${designer.nameRu}, ` : `${designer.nameRu} `)}
			</div>



		</div>
	)
}
