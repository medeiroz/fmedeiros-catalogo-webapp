import { AppDispatch, AppThunk } from './index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment (state, action: PayloadAction<number>) {
      state.counter += action.payload
    },
    decrement (state, action: PayloadAction<number>) {
      state.counter -= action.payload
    }
  }
})

async function sleep(ms: number) {
  return await new Promise(resolve => setTimeout(resolve, ms))
}


export const { increment, decrement} = stock.actions
export default stock.reducer

export function asyncIncrement (amount: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(2000)
    dispatch(increment(amount))
  }
}

export function asyncDecrement (amount: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(2000)
    dispatch(decrement(amount))
  }
}
