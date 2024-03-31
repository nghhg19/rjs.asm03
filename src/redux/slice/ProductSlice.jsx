import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data from API");
  }
});

const dataSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "success";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
