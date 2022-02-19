import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../app/store';
import FirebaseContext from '../auth/firebaseContext';
import { loggedOut } from '../features/auth/authSlice';

export const Header: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleSignOut = () => {
    if (firebase) {
      dispatch(loggedOut());
      firebase!.signOut();
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <Right>
        <Name>{auth.user.email}</Name>
        {auth.logged && (
          <SignOut onClick={() => handleSignOut()}>Sign Out</SignOut>
        )}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: rgba(255, 239, 16, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 40px;
`;
const Title = styled.h2``;

const Name = styled.h5`
  margin: 0;
`;
const Role = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const SignOut = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: red;
    opacity: 0.7;
    transition: 0.3s;
  }
`;
