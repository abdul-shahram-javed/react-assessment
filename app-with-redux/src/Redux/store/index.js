import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slice/CategorySlice'


export default configureStore({
  reducer: {
    category: categoryReducer
  }
})