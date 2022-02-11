import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Login: React.FC = () => {
  return (
    <>
      <Link to='/products'>
        <span>Go to Dashboard</span>
      </Link>
      <Wrapper>
        <FormWrapper>
          <h3>Sign in</h3>
          <Label>Email</Label>
          <Label>Password</Label>
          <Button>Sign in</Button>
        </FormWrapper>
      </Wrapper>
    </>
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
