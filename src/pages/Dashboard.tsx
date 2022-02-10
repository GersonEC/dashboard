import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../app/store';
import ProductPreview from '../components/ProductCard';
import { fetchProductsAsync } from '../features/products/productsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <Title>Dashboard</Title>
        <User>
          <Name>Gerson Enriquez</Name>
          <Role>Admin</Role>
        </User>
      </Header>
      <Main>
        <Nav>
          <Item>Item</Item>
          <Item>Caneas</Item>
          <Item>Gattoir</Item>
          <Item>Trhtsasfasf</Item>
        </Nav>
        <Body>
          {productList &&
            productList.map((item) => (
              <ProductPreview key={item.id} product={item} />
            ))}
        </Body>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Header = styled.header`
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

const Main = styled.main`
  display: flex;
  flex: 1;
`;
const Nav = styled.nav`
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
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  height: 85vh;
  margin: 16px 32px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  overflow: auto;
`;
export { Dashboard };
