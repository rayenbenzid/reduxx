import { configureStore } from '@reduxjs/toolkit'
import Todoslice from './slices/Todoslice'

export const store = configureStore({
  reducer: {
    todoslicee:Todoslice,
  },
})