import { useContext, useState } from 'react';
import styled from 'styled-components';
import FirebaseContext from '../auth/firebaseContext';

export const Signup: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <Wrapper>
      <FormWrapper>
        <h3>Sign up</h3>
        <Label htmlFor='email'>Email</Label>
        <input name='email' value={email} onChange={handleEmail} />
        <Label htmlFor='password'>Password</Label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={handlePassword}
        />
        <Button onClick={() => firebase!.createUser(email, password)}>
          Sign up
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(255, 239, 16, 0.1);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  background: white;
  width: 450px;
  height: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #adadad;
  font-size: 0.8rem;
  font-weight: 700;
`;

const Button = styled.button`
  width: 150px;
  padding: 8px 16px;
  background-color: #ffd000;
  color: #696969;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
  }
`;
