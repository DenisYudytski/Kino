import { PayloadAction } from '@reduxjs/toolkit';
import { IFilmFromId } from './../../models/IFilm';
import { createSlice } from '@reduxjs/toolkit';

interface initialState {
	currentFilm: IFilmFromId
	isLoading: boolean
	error: string
}
const initialState = {
	currentFilm: {
		kinopoiskId: 1,
		nameRu: '',
		nameEn: '',
		countries: [{ country: '' }],
		genres: [{ genre: '' }],
		nameOriginal: '',
		posterUrl: '',
		posterUrlPreview: '',
		coverUrl: '',
		ratingKinopoisk: 1,
		ratingAgeLimits: '',
		year: 1,
		filmLength: 1,
		slogan: '',
		description: '',
		shortDescription: '',
		webUrl: '',
		endYear: 1,
		serial: false,
		shortFilm: false,
		completed: false,
	},
	isLoading: false,
	error: '',
}

const filmPageSlice = createSlice({
	name: "filmPage",
	initialState,
	reducers: {
		setCurrentFilmIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
		setCurrentFilm(state, action: PayloadAction<IFilmFromId>) {
			state.currentFilm = action.payload
			state.error = ''
		},
		setCurrentFilmError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export const { setCurrentFilm, setCurrentFilmIsLoading, setCurrentFilmError } = filmPageSlice.actions
export default filmPageSlice.reducer