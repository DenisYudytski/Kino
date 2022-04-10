import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { genres } from '../../consts/consts';



const initialState = {
	genres: genres,
	currentGenre: JSON.parse(localStorage.getItem('currentGenre')!) || ''
}

const genreSlice = createSlice({
	name: 'geners',
	initialState,
	reducers: {
		setCurrentGenre(state, action: PayloadAction<string>) {
			state.currentGenre = action.payload
			localStorage.setItem('currentGenre', JSON.stringify(state.currentGenre))
		}
	}
})

export const { setCurrentGenre } = genreSlice.actions
export default genreSlice.reducer