import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '../utils/models';

interface ProductPreviewProps {
  product: Product;
}
export default function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <Wrapper>
      <Link to={''}>
        <img src={product.image} width={200} alt={product.title} />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.255) 0px 2px 3px, rgba(0, 0, 0, 0.22) 0px 1px 1px;

  /*border-bottom: 1px solid rgba(138, 138, 138, 0.3);*/
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.3s;
  }
`;
