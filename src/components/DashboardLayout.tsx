import styled from 'styled-components';
import { Header } from './Header';
import { Nav } from './Nav';

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Nav />
        <Body>{props.children}</Body>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 32px 0 0 32px;
  height: 85vh;
  width: 85vw;
  margin: 0 32px;
  border-bottom: 2px solid rgba(138, 138, 138, 0.3);
  border-radius: 8px;
  overflow: auto;
`;
const Main = styled.main`
  display: flex;
  flex: 1;
`;
