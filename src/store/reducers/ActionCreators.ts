import { IFilmFromId, IFilteredFilm } from './../../models/IFilm';
import axios from 'axios';
import { API_KEY, API_URL_ID, API_URL_KEYWORD } from '../../consts/consts';
import { ITopFilms } from '../../types/types';
import { AppDispatch } from './../index';
import { addFilmsForPage, filteredFilmsFetchingSuccess, filterFetch, topFilmsFetching, topFilmsFetchingFail, topFilmsFetchingSuccess } from './topFilmsSlice';
import { setCurrentFilm, setCurrentFilmError, setCurrentFilmIsLoading } from './fIlmPageSlice';


export const fetchTopFilms = (type: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(topFilmsFetching())
		const response = await axios.get<ITopFilms>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${type}&page=1`, {
			method: 'GET',
			headers: {
				'X-API-KEY': API_KEY,
				'Content-Type': 'application/json',
			},
		})
		dispatch(topFilmsFetchingSuccess(response.data.films))
	} catch (e: any) {
		dispatch(topFilmsFetchingFail(e.message))
	}
}
export const addFilms = (page: number, type: string) => async (dispatch: AppDispatch) => {
	try {

		const response = await axios.get<ITopFilms>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${type}&page=${page}`, {
			method: 'GET',
			headers: {
				'X-API-KEY': API_KEY,
				'Content-Type': 'application/json',
			},
		})
		dispatch(addFilmsForPage(response.data.films))
	} catch (e: any) {
		dispatch(topFilmsFetchingFail(e.message))
	}
}
export const fetchKeywordFilm = (keyword: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(filterFetch())
		const response = await axios.get<IFilteredFilm>(API_URL_KEYWORD + keyword, {
			method: 'GET',
			headers: {
				'X-API-KEY': API_KEY,
				'Content-Type': 'application/json',
			},
		})
		dispatch(filteredFilmsFetchingSuccess(response.data))
	} catch (e: any) {

	}
}

export const fetchCurrentFilm = (id: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(setCurrentFilmIsLoading(true))
		const response = await axios.get<IFilmFromId>(API_URL_ID + id, {
			method: 'GET',
			headers: {
				'X-API-KEY': API_KEY,
				'Content-Type': 'application/json',
			},
		})
		dispatch(setCurrentFilm(response.data))
		setTimeout(() => {
			dispatch(setCurrentFilmIsLoading(false))
		}, 100)

	} catch (e: any) {
		dispatch(setCurrentFilmError(e))
	}
}