import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState: {
        tasks: []
    },
    reducers: {},
})

export default tasksSlice.reducer;