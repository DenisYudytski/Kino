import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Film } from '../components/Film'
import { Loader } from '../components/UI/Loader'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchCurrentFilm, fetchStaff } from '../store/reducers/ActionCreators'

export const FilmPage: FC = () => {
	const dispatch = useAppDispatch()
	const { currentFilm, isLoading, error } = useAppSelector(state => state.fIlmPageSlice)
	const id = useParams().id

	useEffect(() => {
		dispatch(fetchStaff(+id!))
	}, [])

	useEffect(() => {
		dispatch(fetchCurrentFilm(+id!))
	}, [id])
	return (
		<>
			{isLoading && <div className='loader-wrapper'>
				<Loader />
			</div>}
			<Film film={currentFilm} />
		</>

	)
}
