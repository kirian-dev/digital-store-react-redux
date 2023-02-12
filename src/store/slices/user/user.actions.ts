import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import { IEmailPassword } from './user.interface';
import { AuthService } from '@/services/auth/auth.service';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }: IEmailPassword) => {
    try {
      const response = await AuthService.register(email, password);
      toastr.success('Registration', 'Completed successfully');
      console.log('response', response);
      return response;
    } catch (error: any) {
      toastr.error(error.customData._tokenResponse.error.message, 'Registration');
    }
  }
);

export const login = createAsyncThunk('auth/login', async ({ email, password }: IEmailPassword) => {
  try {
    const response = await AuthService.login(email, password);
    toastr.success('Login', 'Completed successfully');
    return response;
  } catch (error: any) {
    toastr.error(error.customData._tokenResponse.error.message, 'Login');
  }
});
export const googleSignIn = createAsyncThunk('auth/google', async () => {
  try {
    const response = await AuthService.googleSignIn();
    toastr.success('Login', 'Completed successfully');
    return response;
  } catch (error: any) {
    toastr.error(error.customData._tokenResponse.error.message, 'Google sign in');
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});
