import { FC } from 'react'
import { IGenre } from '../types/types'

interface GenreProps {
	genre: IGenre
}

export const Genre: FC<GenreProps> = ({ genre }) => {

	return (
		<div className='genre-item'>
			{genre.genre}
		</div>
	)
}
