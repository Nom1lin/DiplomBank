import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
	cart: [],
	isLoading: false,
	error: null,
};

// Создание вклада
export const createCart = createAsyncThunk(
	'cart/createCart',
	async ({ clientCart, vidCart, number, balans }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/cart/create', { clientCart, vidCart, number, balans });
			return data.cart;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getAllCarts = createAsyncThunk('cart/getAllCarts', async () => {
	try {
		const { data } = await axios.get('/cart/create')
		return data
	} catch (error) {
		console.log(error)
	}
})

const cartsSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Создание вклада
			.addCase(createCart.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.cart.push(action.payload);
			})
			.addCase(createCart.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.message;
			})
			// Получение всех карт
			.addCase(getAllCarts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllCarts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.cart = action.payload.carts;
			})
			.addCase(getAllCarts.rejected, (state, action) => {
				state.isLoading = false;
			})
	},
});

// export const selectVklads = (state) => state.vklads.vklads;
// export const selectVkladsLoading = (state) => state.vklads.isLoading;
// export const selectVkladsError = (state) => state.vklads.error;

export default cartsSlice.reducer;
