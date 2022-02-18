import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import FirebaseContext from '../auth/firebaseContext';
import { DashboardLayout } from '../components/DashboardLayout';
import { ProductPreview } from '../components/ProductPreview';
import { loggedIn } from '../features/auth/authSlice';
import { fetchProductsAsync } from '../features/products/productsSlice';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );
  const status = useSelector((state: RootState) => state.products.status);
  const firebase = useContext(FirebaseContext);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      debugger;
      await firebase?.monitorAuthState();
      const user = firebase?.getUser();
      if (user) {
        dispatch(loggedIn(user?.email!));
      } else {
        navigate('/');
      }
    };
    checkLoggedIn();
  }, []);

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
