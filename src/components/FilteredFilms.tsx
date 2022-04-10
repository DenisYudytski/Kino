import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { IFilmFromId, IFilteredFilm } from '../models/IFilm'
import List from './List'
import { FilteredFilmCard } from './FilteredFilmCard'
import { Loader } from './UI/Loader'

interface FilteredFilmsProps {
	films: IFilteredFilm
}

export const FilteredFilms: FC<FilteredFilmsProps> = ({ films }) => {
	const isPending = useAppSelector(state => state.topFilmSlicereducer.isPending)
	return (
		<div className='filteredFilmList'>
			{films.total !== 0 ? <List items={films.items} renderItem={(film: IFilmFromId) => <FilteredFilmCard film={film} />} />
				: <div className='none'>
					Ничего не найдено
				</div>
			}

			{isPending && <Loader />}
		</div>

	)
}
