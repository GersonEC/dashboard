import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { DashboardLayout } from '../components/DashboardLayout';
import ProductPreview from '../components/ProductPreview';
import { fetchProductsAsync } from '../features/products/productsSlice';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (status === 'loading')
    return (
      <DashboardLayout>
        <h1>Loading...</h1>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      {productList &&
        productList.map((item) => (
          <ProductPreview key={item.id} product={item} />
        ))}
    </DashboardLayout>
  );
};
