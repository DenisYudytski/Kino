import { FC } from 'react'
import { GenreCard } from '../components/GenreCard'
import List from '../components/List'
import { useAppSelector } from '../hooks/redux'

export const GenresPage: FC = () => {

	const { genres, currentGenre } = useAppSelector(state => state.genreSliceReducer)
	return (
		<div>
			<List className='filmList' items={genres} renderItem={genres => <GenreCard genre={genres} key={genres.id} />} />
		</div>
	)
}
