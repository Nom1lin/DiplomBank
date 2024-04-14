import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  vklad: [],
  isLoading: false,
  error: null,
};

// Создание вклада
export const createVklad = createAsyncThunk(
  'vklad/createVklad',
  async ({ client, vid, summa, srock, stavka, finalsumma, DateTime }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/vklad/create', { client, vid, summa, srock, stavka, finalsumma, DateTime });
      return data.vklad;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const vkladsSlice = createSlice({
  name: 'vklad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Создание вклада
      .addCase(createVklad.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createVklad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vklad.push(action.payload);
      })
      .addCase(createVklad.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
  },
});

// export const selectVklads = (state) => state.vklads.vklads;
// export const selectVkladsLoading = (state) => state.vklads.isLoading;
// export const selectVkladsError = (state) => state.vklads.error;

export default vkladsSlice.reducer;
