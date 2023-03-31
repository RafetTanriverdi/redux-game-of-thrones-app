import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk('characters/getcharacters', async () => {
    const res = await axios('https://thronesapi.com/api/v2/Characters')
    return res.data;

})

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            //get characters
            .addCase(getCharacters.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCharacters.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
               state.isLoading=false;
                state.items = action.payload;
            })

    },
});

export default charactersSlice.reducer;