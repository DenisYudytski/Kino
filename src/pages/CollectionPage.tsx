import { FC, useEffect, useState } from 'react'
import { CollectionNavBar } from '../components/CollectionNavBar'
import { FilmCard } from '../components/FilmCard'
import List from '../components/List'
import { Loader } from '../components/UI/Loader'
import { API_URL_TOP100, API_URL_TOP250, API_URL_TOP_AWAIT } from '../consts/consts'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { IFilm } from '../models/IFilm'
import { addFilms, fetchTopFilms } from '../store/reducers/ActionCreators'



export const CollectionPage: FC = () => {
	const dispatch = useAppDispatch()
	const { films, isLoading, error, type } = useAppSelector(state => state.topFilmSlicereducer)
	const [page, setPage] = useState<number>(1)

	const scrollHandler = (e: any) => {
		const scrollHight = e.target.documentElement.scrollHeight
		const scrollTop = e.target.documentElement.scrollTop
		const windowHeight = window.innerHeight
		if (scrollHight - (scrollTop + windowHeight) < 150 && page < 16) {
			setPage(page + 1)

		}
	}


	useEffect(() => {
		if (type === "popular") {
			dispatch(fetchTopFilms(API_URL_TOP100))
		}
		if (type === "best") {
			dispatch(fetchTopFilms(API_URL_TOP250))
		}
		if (type === "await") {
			dispatch(fetchTopFilms(API_URL_TOP_AWAIT))
		}


	}, [type])

	useEffect(() => {
		if (page !== 1) {
			if (type === "popular") {
				dispatch(addFilms(page, API_URL_TOP100))
			}
			if (type === "best") {
				dispatch(addFilms(page, API_URL_TOP250))
			}
			if (type === "await") {
				dispatch(addFilms(page, API_URL_TOP_AWAIT))
			}
		}
	}, [page])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function () {
			document.removeEventListener('scroll', scrollHandler)
		}
	})


	return (
		<div className='collection'>
			<CollectionNavBar />
			{isLoading &&
				<Loader />
			}
			{error && <div>ошибОчка</div>}
			<List className='filmList' items={films} renderItem={(film: IFilm) => <FilmCard film={film} key={film.filmId} />} />
		</div>

	)
}
