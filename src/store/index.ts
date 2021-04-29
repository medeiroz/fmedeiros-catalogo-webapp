import { useDispatch } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import StockReducer from './Stock.store'

const store = configureStore({
  reducer: {
    stock: StockReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
