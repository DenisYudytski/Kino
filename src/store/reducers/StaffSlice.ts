import { PayloadAction } from '@reduxjs/toolkit';
import { IStaff } from './../../models/IStaff';
import { createSlice } from '@reduxjs/toolkit';


interface StaffState {
	staff: IStaff[]
	isLoading: boolean
	error: string
}
const initialState: StaffState = {
	staff: [

	],
	isLoading: false,
	error: ''
}
const staffSlice = createSlice({
	name: "staff",
	initialState,
	reducers: {
		startFetchStaff(state) {
			state.isLoading = true
		},
		getStaff(state, action: PayloadAction<IStaff[]>) {
			state.staff = action.payload
			state.isLoading = false
		}
	}
})

export const { getStaff, startFetchStaff } = staffSlice.actions
export default staffSlice.reducer