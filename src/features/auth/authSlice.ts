import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../../utils/models';

export interface AuthState {
  user: User;
  logged: boolean;
}

const initialState: AuthState = {
  user: { email: '' },
  logged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<string>) => {
      state.logged = true;
      state.user.email = action.payload;
    },
    loggedOut: (state) => {
      debugger;
      state.logged = false;
      state.user.email = '';
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
