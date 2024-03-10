import { configureStore } from "@reduxjs/toolkit"
import tasksSliceReducer from "./features/tasks/taskSlice"
import userSlice from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        tasksSlice: tasksSliceReducer,
        userSlice: userSlice
    },
})

export default store;