import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
	credits: [],
	loading: false,
	error: null,
}

export const createCredid = createAsyncThunk(
	'credit/createCredid',
	async ({ vid, value11, value21, value12, value22, value13, value23, value14, value24, value15, value25, DateTime }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/credit/create', { vid, value11, value21, value12, value22, value13, value23, value14, value24, value15, value25, DateTime })
			return data.credit
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
)

export const creditSlice = createSlice({
	name: 'credit',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createCredid.pending, (state) => {
				state.loading = true
				state.error = null;
			})
			.addCase(createCredid.fulfilled, (state, action) => {
				state.loading = false
				state.credits.push(action.payload)
			})
			.addCase(createCredid.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.message;
			})
	},
})

export default creditSlice.reducer
