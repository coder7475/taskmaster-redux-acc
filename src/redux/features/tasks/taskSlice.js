import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
        }
    },
})

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;