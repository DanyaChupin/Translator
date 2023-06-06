import { configureStore } from '@reduxjs/toolkit'
import translateSllice from './slices/translateSlice'

export const store = configureStore({
	reducer: {
		translate: translateSllice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
