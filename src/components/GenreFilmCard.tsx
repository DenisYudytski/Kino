import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilmFromId } from '../models/IFilm'
import { getFilmRate, getGenreFilmRate } from '../utils'
import { FilmRating } from './FilmRating'
import { Genre } from './Genre'
import List from './List'

interface GenreFilmCardProps {
	film: IFilmFromId
}


export const GenreFilmCard: FC<GenreFilmCardProps> = ({ film }) => {
	const rate = getGenreFilmRate(film, 4, 7)
	const navigate = useNavigate()
	const handler = () => {
		navigate(`/${film.kinopoiskId}`)
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
