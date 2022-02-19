import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FirebaseContext from '../auth/firebaseContext';
import { notify } from '../utils/notification';

export const Signup: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSignUp = async () => {
    if (firebase) {
      const user = await firebase!.createUser(email, password);
      if (user) {
        notify('User created', 'success');
        setTimeout(() => navigate('/'), 2000);
      } else {
        notify('Ops: Something went wrong with the Sign up', 'error');
      }
    }
  };
  return (
    <Wrapper>
      <FormWrapper>
        <h3>Sign up</h3>
        <Label style={{ marginTop: '16px' }} htmlFor='email'>
          Email
        </Label>
        <Input name='email' value={email} onChange={handleEmail} />
        <Label htmlFor='password'>Password</Label>
        <Input
          name='password'
          type='password'
          value={password}
          onChange={handlePassword}
        />
        <Button onClick={handleSignUp}>Sign up</Button>
      </FormWrapper>
      <p>
        Already have an account?{' '}
        <Signin onClick={() => navigate('/')}>Sign in</Signin>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(255, 239, 16, 0.1);
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  align-items: center;
`;

const Label = styled.label`
  color: #adadad;
  font-size: 0.8rem;
  font-weight: 700;
`;
const Input = styled.input`
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #f1f1f1;
  margin-top: 8px;
  margin-bottom: 16px;
  width: 300px;
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
  margin-top: 32px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const Signin = styled.span`
  font-weight: 700;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
