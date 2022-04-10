import { FC } from 'react'
import { IFilmFromId } from '../models/IFilm'

interface FilmDescriptionProps {
	film: IFilmFromId
}

export const FilmDescription: FC<FilmDescriptionProps> = ({ film }) => {
	console.log(film.countries[0]);

	return (
		<div className='FilmDescription'>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Страна:</span> {film.countries.map(country => `${country.country}, `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Жанр:</span> {film.genres.map(genre => `${genre.genre}, `)}
			</div>
			<div className='FilmDescription-item'>
				<span className='FilmDescription__tag'>Слоган:</span> {film.slogan ? film.slogan : "—"}
			</div>


		</div>
	)
}
