import { combineReducers, configureStore } from "@reduxjs/toolkit"
import topFilmSlicereducer from './reducers/topFilmsSlice'
import fIlmPageSlice from "./reducers/fIlmPageSlice"
import pageSliceReducer from "./reducers/PagesSlice"
import genreSliceReducer from "./reducers/GenreSlice"
import staffSliceReducer from "./reducers/StaffSlice"

const rootReducer = combineReducers({
	topFilmSlicereducer,
	fIlmPageSlice,
	pageSliceReducer,
	genreSliceReducer,
	staffSliceReducer

})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']