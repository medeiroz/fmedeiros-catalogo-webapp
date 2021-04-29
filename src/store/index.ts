import { configureStore } from '@reduxjs/toolkit'
import StockReducer from './Stock.store'

const store = configureStore({
  reducer: {
    stock: StockReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
