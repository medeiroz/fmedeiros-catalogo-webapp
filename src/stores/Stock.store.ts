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

function asyncIncrement (amount: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(2000)
    dispatch(increment(amount))
  }
}

function asyncDecrement (amount: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(2000)
    dispatch(decrement(amount))
  }
}

const { increment, decrement } = stock.actions

export { increment, decrement, asyncIncrement, asyncDecrement }
export default stock.reducer
