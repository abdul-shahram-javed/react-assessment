import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../Redux/CategorySlice'

export default configureStore({
  reducer: {
    category: categoryReducer
  }
})