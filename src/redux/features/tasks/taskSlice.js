import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0)
        state.tasks.push({ id: 1, status: "pending", ...payload });
      else {
        const lastId = state.tasks.at(-1).id;
        state.tasks.push({ id: lastId + 1, status: "pending", ...payload });
      }
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
