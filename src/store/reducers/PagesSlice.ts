import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface pagesState {
	currentPage: string
}
const initialState: pagesState = {
	currentPage: JSON.parse(localStorage.getItem('page')!) || 'Home'
}

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<string>) {
			state.currentPage = action.payload
			localStorage.setItem('page', JSON.stringify(state.currentPage))
		}
	}
})

export const { setCurrentPage } = pageSlice.actions
export default pageSlice.reducer