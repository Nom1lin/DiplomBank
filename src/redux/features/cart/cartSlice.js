import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
	carts: [],
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

export const deleteCart = createAsyncThunk(
	'cart/deleteCart',
	async (cartId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`/cart/delete/${cartId}`);
			return cartId;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const cartsSlice = createSlice({
	name: 'carts',
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
				state.carts.push(action.payload);
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
				state.carts = action.payload.carts;
			})
			.addCase(getAllCarts.rejected, (state, action) => {
				state.isLoading = false;
			})
			//
			.addCase(deleteCart.fulfilled, (state, action) => {
				state.carts = state.carts.filter((cart) => cart._id !== action.payload);
			});
	},
});

// export const selectVklads = (state) => state.vklads.vklads;
// export const selectVkladsLoading = (state) => state.vklads.isLoading;
// export const selectVkladsError = (state) => state.vklads.error;

export default cartsSlice.reducer;
