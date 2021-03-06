import { FC, useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { IFilmFromId } from '../models/IFilm'
import { fetchStaff } from '../store/reducers/ActionCreators'
import { getAgeLimit, getFilmYear } from '../utils'
import { AgeLimit } from './AgeLimit'
import { FilmDescription } from './FilmDescription'
import { Trailer } from './Trailer'
import { MyButton } from './UI/MyButton'
import { OutLink } from './UI/OutLink'

interface FilmProps {
	film: IFilmFromId
}

export const Film: FC<FilmProps> = ({ film }) => {

	const age = getAgeLimit(film.ratingAgeLimits)
	const year = getFilmYear(film)

	return (
		<div className='film'>
			<div className='film__leftBar'>
				<img src={film.posterUrlPreview} alt="" />
				<MyButton type='primary' onClick={() => null}>
					Добавить в избранное
				</MyButton>
			</div>

			<div className='film-body'>
				<div className='film-body__title'>
					{film.nameRu} ({year})
				</div>

				<div className='film-body__originalTitle'>
					{film.nameOriginal ?
						<span style={{ marginRight: '10px' }}>
							{film.nameOriginal}
						</span>
						: null
					}
					<AgeLimit age={age} />
				</div>

				<div className="film-body__shortDescription">
					{film.shortDescription}
				</div>

				<OutLink path={film.webUrl}>
					Смотреть на Кинопоиске
				</OutLink>
				<FilmDescription film={film} />
			</div>
		</div>
	)
}
