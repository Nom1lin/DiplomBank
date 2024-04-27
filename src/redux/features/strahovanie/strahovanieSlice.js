import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'


const initialState = {
	strahovanie: [],
	loading: false,
	error: null,
}

export const createStrahovanie = createAsyncThunk(
	'strahovanie/createStrahovanie',
	async ({ tarif, name, fio, passport, birth, snilsinn, telephone, email, voenik, staj, work, DateTime }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/strahovanie/create', { tarif, name, fio, passport, birth, snilsinn, telephone, email, voenik, staj, work, DateTime })
			return data.strahovanie
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
)

export const strahovanieSlice = createSlice({
	name: 'strahovanie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createStrahovanie.pending, (state) => {
				state.loading = true
				state.error = null;
			})
			.addCase(createStrahovanie.fulfilled, (state, action) => {
				state.loading = false
				state.strahovanie.push(action.payload)
			})
			.addCase(createStrahovanie.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.message;
			})
	},
})

export default strahovanieSlice.reducer
