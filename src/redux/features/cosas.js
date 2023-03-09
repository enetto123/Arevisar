import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cosa: 5,
  }

export const cosaSlice = createSlice({
    name: "cosas",
    initialState,
    reducers: {
        add: (state, action) => {
            state.cosa += action.payload
        },
    }
})




export const { add } = cosaSlice.actions

export default cosaSlice.reducer
