import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GenreFilmCard } from '../components/GenreFilmCard';
import List from '../components/List';
import { Loader } from '../components/UI/Loader';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGenreFilm } from '../store/reducers/ActionCreators';



export const CurrentGenrePage: FC = () => {
	const id = useParams().id
	console.log(id);
	const dispatch = useAppDispatch()
	const { filteredFilms, isPending } = useAppSelector(state => state.topFilmSlicereducer)
	const { currentGenre } = useAppSelector(state => state.genreSliceReducer)

	useEffect(() => {
		dispatch(fetchGenreFilm(+id!))
	}, [id])

	return (
		<div>
			{isPending &&
				<Loader />
			}
			<div className='title'>{currentGenre}</div>
			<List className='filmList' items={filteredFilms.items} renderItem={item => <GenreFilmCard film={item} />} />
		</div>
	)
}
