import { createSlice } from "@reduxjs/toolkit";
import { fetchNetworks } from "../Thunks/FetchNetworks";
const NetworkSlice = createSlice({
    name: 'networks',
    initialState: {
       status: "idle",
       data: [],
       error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNetworks.fulfilled , (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        });
    },
});

export const NetworkRecuder = NetworkSlice.reducer;
