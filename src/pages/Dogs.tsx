import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RootState } from '../app/store';
import { DashboardLayout } from '../components/DashboardLayout';
import { DogPreview } from '../components/DogPreview';
import { fetchDogsAsync } from '../features/dogs/dogsSlice';
import { notify } from '../utils/notification';

export const Dogs: React.FC = () => {
  const dispatch = useDispatch();
  const dogList = useSelector((state: RootState) => state.dogs.dogList);
  const status = useSelector((state: RootState) => state.dogs.status);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.logged) {
      notify('Area restricted', 'warning');
      setTimeout(() => navigate('/'), 2000);
    } else {
      dispatch(fetchDogsAsync());
    }
  }, []);

  if (status === 'loading')
    return (
      <DashboardLayout>
        <h1>Loading...</h1>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      {dogList && dogList.map((dog) => <DogPreview key={dog.id} dog={dog} />)}
      <ToastContainer />
    </DashboardLayout>
  );
};
