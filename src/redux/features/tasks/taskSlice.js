import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    tasks: [{
        id: 1,
        status: 'pending',
        title: 'Remove Button',
        description:
          'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
        date: '2023-08-28',
        assignedTo: 'Mir Hussain',
        priority: 'high',
      }],
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
    removeTask: (state, { payload } ) => {
        state.tasks = state.tasks.filter(item => item.id !== payload)
    },
    updateStatus: (state, { payload }) => {
      const currentTask = state.tasks.find(item => item.id === payload.id);
      currentTask.status = payload.status;
    },
    
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
