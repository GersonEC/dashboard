import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Product } from '../../utils/models';
import { fetchProducts } from './productsApi';

export interface ProductsState {
  productList: Product[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: ProductsState = {
  productList: [] as Product[],
  status: 'idle',
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state: ProductsState, action) => {
        state.status = 'success';
        state.productList = action.payload;
      });
  },
});

export const selectProducts = (state: RootState) => state.products.productList;

export default productsSlice.reducer;
