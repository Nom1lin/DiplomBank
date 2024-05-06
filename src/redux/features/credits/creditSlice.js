import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'


const initialState = {
	credits: [],
	loading: false,
	error: null,
}

export const createCredid = createAsyncThunk(
	'credit/createCredid',
	async ({ client, vid, value11, value21, value12, value22, value13, value23, value14, value24, value15, value25, value16, value26, DateTime, Mesiac }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/credit/create', { client, vid, value11, value21, value12, value22, value13, value23, value14, value24, value15, value25, value16, value26, DateTime, Mesiac })
			return data.credit
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
)

export const getAllСredits = createAsyncThunk('credit/getAllСredits', async () => {
	try {
		const { data } = await axios.get('/credit/getAll');
		return data.credits; // Возвращаем только массив кредитов
	} catch (error) {
		console.log(error);
		throw error; // Пробрасываем ошибку дальше для обработки в компонентах
	}
});

export const deleteCredit = createAsyncThunk(
	'credit/deleteCredit',
	async (creditId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`/credit/delete/${creditId}`);
			return creditId;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

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
			// Получение всех карт
			.addCase(getAllСredits.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllСredits.fulfilled, (state, action) => {
				state.loading = false;
				state.credits = action.payload; // Записываем данные в свойство credits
			})
			.addCase(getAllСredits.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message; // Записываем сообщение об ошибке
			})
			//
			.addCase(deleteCredit.fulfilled, (state, action) => {
				state.credits = state.credits.filter((credit) => credit._id !== action.payload);
			});
	},
})

export default creditSlice.reducer
