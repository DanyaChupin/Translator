import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { TranslateState } from '../../types/types'

export const translateRequest = createAsyncThunk(
	'translate/requestStatus',
	async (value: string) => {
		const options = {
			method: 'POST',
			url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': 'c8d85fa85dmsha37aa9a9e65875ap132fd3jsnd5dad3fb7985',
				'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
			},
			data: {
				q: value,
				source: 'ru',
				target: 'en',
			},
		}

		const request = axios
			.request(options)
			.then(response => {
				return response.data
			})
			.catch(error => {
				console.log(error)
			})
		return request
	}
)

const initialState: TranslateState = { outputValue: '', isFetching: false }

const translateSlice = createSlice({
	name: 'translate',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(translateRequest.fulfilled, (state, { payload }) => {
			state.isFetching = false
			state.outputValue = payload.data.translations.translatedText
		})
		builder.addCase(translateRequest.pending, state => {
			state.isFetching = true
		})
		builder.addCase(translateRequest.rejected, state => {
			state.isFetching = false
			state.outputValue = ''
		})
	},
})

export default translateSlice.reducer
