import { configureStore } from "@reduxjs/toolkit"
import tasksSliceReducer from "./features/tasks/taskSlice"

const store = configureStore({
    reducer: {
        tasksSlice: tasksSliceReducer
    },
})

export default store;