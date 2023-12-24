import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
  const response = await fetch("https://reactnd-books-api.udacity.com/books", {
    headers: { Authorization: "whatever-you-want" },
  });
  return response.json();
});

const initialState = {
  data: null,
  isError: false,
};

const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default bookSlice.reducer;
