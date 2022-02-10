import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <User>
        <Name>Gerson Enriquez</Name>
        <Role>Admin</Role>
      </User>
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
const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: gray;
`;
const Name = styled.h5`
  margin: 0;
`;
const Role = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
