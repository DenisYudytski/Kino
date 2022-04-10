import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { setCurrentGenre } from '../store/reducers/GenreSlice'

interface GenreCardProps {
	genre: { id: number, genre: string }
}

export const GenreCard: FC<GenreCardProps> = ({ genre }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const handler = async () => {
		dispatch(setCurrentGenre(genre.genre))
		navigate(`/genres/${genre.id}`)
	}

	return (
		<div onClick={handler} className='genreCard'>
			{genre.genre}
		</div>
	)
}
