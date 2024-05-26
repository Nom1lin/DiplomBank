import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
	feedbacks: [],
	loading: false,
	error: null,
}

export const createFeedBack = createAsyncThunk(
	'feedback/createFeedBack',
	async ({ login, text, DateTime }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/feedback/create', { login, text, DateTime })
			return data.feedback
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
)

export const getAllFeedBacks = createAsyncThunk('feedback/getAllfeedbacks', async () => {
	try {
		const { data } = await axios.get('/feedback/getAll');
		return data.feedbacks; // Возвращаем только массив кредитов
	} catch (error) {
		console.log(error);
		throw error; // Пробрасываем ошибку дальше для обработки в компонентах
	}
});


export const feedbackSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createFeedBack.pending, (state) => {
				state.loading = true
				state.error = null;
			})
			.addCase(createFeedBack.fulfilled, (state, action) => {
				state.loading = false
				state.feedbacks.push(action.payload)
			})
			.addCase(createFeedBack.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.message;
			})
			// Получение всех карт
			.addCase(getAllFeedBacks.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllFeedBacks.fulfilled, (state, action) => {
				state.loading = false;
				state.feedbacks = action.payload; // Записываем данные в свойство credits
			})
			.addCase(getAllFeedBacks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message; // Записываем сообщение об ошибке
			})
	},
})

export default feedbackSlice.reducer
