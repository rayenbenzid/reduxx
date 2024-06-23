import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
    {
        id:0,
        content:"Task 1"
    },
    {
        id:0,
        content:"Task 2"
    },
  ]
}

export const todoslicee = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoslicee.actions

export default todoslicee.reducer