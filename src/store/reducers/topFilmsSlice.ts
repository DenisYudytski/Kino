import { IFilteredFilm } from './../../models/IFilm';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFilm } from "../../models/IFilm"

interface TopFilmState {
	films: IFilm[]
	filteredFilms: IFilteredFilm
	isLoading: boolean
	error: string
	type: string
	isPending: boolean
}
const initialState: TopFilmState = {
	films: [],
	isLoading: false,
	error: '',
	type: JSON.parse(localStorage.getItem('type')!) || 'popular',
	filteredFilms: { items: [], total: 0 },
	isPending: false,

}

const topFilmSlice = createSlice({
	name: "topFilm",
	initialState,
	reducers: {
		topFilmsFetching(state) {
			state.isLoading = true
		},
		filteredFilmsFetchingSuccess(state, action: PayloadAction<IFilteredFilm>) {
			state.filteredFilms = action.payload
			state.isPending = false
			state.error = ''

		},
		topFilmsFetchingSuccess(state, action: PayloadAction<IFilm[]>) {
			state.films = action.payload
			state.isLoading = false
			state.error = ''

		},
		topFilmsFetchingFail(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},
		addFilmsForPage(state, action: PayloadAction<IFilm[]>) {
			state.films = [...state.films, ...action.payload]
		},
		filterFetch(state) {
			state.isPending = true
		},
		setType(state, action: PayloadAction<string>) {
			state.type = action.payload
			localStorage.setItem('type', JSON.stringify(state.type))
		},
	}
})
export const { topFilmsFetching, topFilmsFetchingSuccess, topFilmsFetchingFail, filteredFilmsFetchingSuccess, filterFetch, setType, addFilmsForPage } = topFilmSlice.actions
export default topFilmSlice.reducer