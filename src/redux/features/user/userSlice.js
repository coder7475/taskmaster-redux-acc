import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: 'Robiul Hossain',
    email: 'robiul@gmail.com',
    userTasks: [],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
})

export default userSlice.reducer;