import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import dogsReducer from '../features/dogs/dogsSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    dogs: dogsReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
