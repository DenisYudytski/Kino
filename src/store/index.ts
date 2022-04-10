import { combineReducers, configureStore } from "@reduxjs/toolkit"
import topFilmSlicereducer from './reducers/topFilmsSlice'
import fIlmPageSlice from "./reducers/fIlmPageSlice"
import pageSliceReducer from "./reducers/PagesSlice"

const rootReducer = combineReducers({
	topFilmSlicereducer,
	fIlmPageSlice,
	pageSliceReducer

})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']