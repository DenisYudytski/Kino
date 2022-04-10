import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilm } from '../models/IFilm'
import { getFilmRate } from '../utils'
import { FilmRating } from './FilmRating'
import { Genre } from './Genre'
import List from './List'

interface FilmCardProps {
	film: IFilm
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
	const rate = getFilmRate(film, 4, 7)
	const navigate = useNavigate()
	const handler = () => {
		navigate(`/${film.filmId}`)
	}
	return (
		<div onClick={handler} className='filmCard'>
			<div className='filmCard-image'>
				<img height={420} width={300} src={film.posterUrl} alt="" />
			</div>
			{film.nameRu}
			<div>
				<List className='genre' items={film.genres} renderItem={(genre) => <Genre key={genre.genre} genre={genre} />} />
			</div>
			<FilmRating rating={rate} />
		</div>
	)
}
