import { IFilmFromId, IFilteredFilm } from './../../models/IFilm';
import axios from 'axios';
import { API_KEY, API_URL_ID, API_URL_KEYWORD, API_URL_STAFF } from '../../consts/consts';
import { ITopFilms } from '../../types/types';
import { AppDispatch } from './../index';
import { addFilmsForPage, filteredFilmsFetchingSuccess, filterFetch, topFilmsFetching, topFilmsFetchingFail, topFilmsFetchingSuccess } from './topFilmsSlice';
import { setCurrentFilm, setCurrentFilmError, setCurrentFilmIsLoading } from './fIlmPageSlice';
import { getStaff, startFetchStaff } from './StaffSlice';
import { IStaff } from '../../models/IStaff';


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
export const fetchGenreFilm = (genre: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(filterFetch())
		const response = await axios.get<IFilteredFilm>(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}&order=RATING&type=ALL&page=1`, {
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
// export const addGenreFilms = (page: number, genre: number) => async (dispatch: AppDispatch) => {
// 	try {

// 		const response = await axios.get<ITopFilms>(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}&order=RATING&type=ALL&page=${page}`, {
// 			method: 'GET',
// 			headers: {
// 				'X-API-KEY': API_KEY,
// 				'Content-Type': 'application/json',
// 			},
// 		})
// 		dispatch(addFilmsForPage(response.data.films))
// 	} catch (e: any) {
// 		dispatch(topFilmsFetchingFail(e.message))
// 	}
// }
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
export const fetchStaff = (id: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(startFetchStaff())
		const response = await axios.get<IStaff[]>(API_URL_STAFF + id, {
			method: 'GET',
			headers: {
				'X-API-KEY': API_KEY,
				'Content-Type': 'application/json',
			},
		})
		dispatch(getStaff(response.data))
	} catch (e: any) {
		alert(e)
	}
}