import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './user.interface';
import { login, logout, register, googleSignIn } from './user.actions';

const initialState: IUserState = {
  user: null,
  isLoading: false,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.user = {
            email: payload.email,
            name: payload?.displayName,
          };
        }
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.user = {
            email: payload.email,
            name: payload?.displayName,
          };
        }
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(googleSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.user = {
            email: payload.email,
            name: payload?.displayName,
          };
        }
      })
      .addCase(googleSignIn.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = slice;
