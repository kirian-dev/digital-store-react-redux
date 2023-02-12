import { toastrSuccess, toastrError } from './../../../shared/helpers/toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth } from './user.interface';
import { AuthService } from '@/services/auth/auth.service';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, onSuccess }: IAuth) => {
    try {
      const response = await AuthService.register(email, password);
      toastrSuccess('Registration completed successfully');
      onSuccess();
      return response;
    } catch (error: any) {
      toastrError(`Register ${error.customData._tokenResponse.error.message}`);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, onSuccess }: IAuth) => {
    try {
      const response = await AuthService.login(email, password);
      toastrSuccess('Login completed successfully');
      onSuccess();
      return response;
    } catch (error: any) {
      toastrError(`Login ${error.customData._tokenResponse.error.message}`);
    }
  }
);
export const googleSignIn = createAsyncThunk('auth/google', async (onSuccess: () => void) => {
  try {
    const response = await AuthService.googleSignIn();
    toastrSuccess('Login completed successfully');
    onSuccess();
    return response;
  } catch (error: any) {
    toastrError(`Google sign in ${error.customData._tokenResponse.error.message}`);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});
