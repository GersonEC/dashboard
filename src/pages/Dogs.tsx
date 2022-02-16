import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { DashboardLayout } from '../components/DashboardLayout';
import { DogPreview } from '../components/DogPreview';
import { fetchDogsAsync } from '../features/dogs/dogsSlice';

export const Dogs: React.FC = () => {
  const dispatch = useDispatch();
  const dogList = useSelector(
    (state: RootState) => state.dogs.dogList
  );
  const status = useSelector((state: RootState) => state.dogs.status);

  useEffect(() => {
    dispatch(fetchDogsAsync());
  }, [dispatch]);

  if (status === 'loading')
    return (
      <DashboardLayout>
        <h1>Loading...</h1>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      {dogList &&
        dogList.map((dog) => (
          <DogPreview key={dog.id} dog={dog} />
        ))}
    </DashboardLayout>
  );
};
