import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav: React.FC = () => {
  return (
    <Wrapper>
      <Link to={'/products'}>
        <Item>Products</Item>
      </Link>
      <Link to={'/random'}>
        <Item>ASDFDSG</Item>
      </Link>
      <Item>Gattoir</Item>
      <Item>Trhtsasfasf</Item>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 150px;
  margin: 16px 0 16px 6px;
  display: flex;
  flex-direction: column;
`;
const Item = styled.p`
  margin: 8px 0;
  font-weight: 600;
  color: gray;
  padding: 8px 0 8px 16px;
  font-size: 0.9rem;
  border-radius: 8px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    background: rgba(255, 239, 16, 0.3);
  }
`;
