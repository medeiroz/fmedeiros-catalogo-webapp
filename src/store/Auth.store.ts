import { AppDispatch, AppThunk } from './index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthLoginPayload, IAuthState } from './contracts/IAuth';
import { AuthRepository } from '../repository/AuthRepository';

  const initialState : IAuthState = {
    authenticated: false,
  };

const stock = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    login (state, action: PayloadAction<IAuthState>) {
      state.authenticated = action.payload.authenticated;
      state.user = action.payload.user;
    },
  }
})

function asyncLogin (payload: IAuthLoginPayload): AppThunk {
  return async function (dispatch: AppDispatch) {

    const repository = new AuthRepository();
    const response = await repository.login(payload);

    dispatch(login({
      authenticated: true,
      user: {
        ...response
      }
    }))
  }
}

const { login } = stock.actions

export { login, asyncLogin }
export default stock.reducer
