import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilmFromId } from '../models/IFilm'

interface FilteredFilmCardProps {
	film: IFilmFromId

}

export const FilteredFilmCard: FC<FilteredFilmCardProps> = ({ film }) => {
	const navigate = useNavigate()
	const handler = () => {
		navigate(`/${film.kinopoiskId}`)
	}
	return (
		<div onClick={handler} className='filteredCard'>
			<img height={100} width={70} src={film.posterUrl} alt="" />
			<div className='filteredCard-title'>
				<div>{film.nameRu}</div>
				<div>{film.year}г.</div>
			</div>
		</div>
	)
}
