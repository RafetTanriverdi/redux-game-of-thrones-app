import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotes = createAsyncThunk('/Qutes/getQutes', async () => {
    const res = await axios('https://api.gameofthronesquotes.xyz/v1/characters')
    return res.data;
})

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getQuotes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getQuotes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getQuotes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
    },
})

export default quotesSlice.reducer;