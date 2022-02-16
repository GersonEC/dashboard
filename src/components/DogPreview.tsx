import styled from 'styled-components';
import { Dog } from '../utils/models';

interface Props {
  dog: Dog;
}
export function DogPreview({ dog }: Props) {
  return (
    <Wrapper>
      <Img src={dog.image.url} width={200} alt={dog.name} />
      <Name>{dog.name}</Name>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.255) 0px 2px 3px, rgba(0, 0, 0, 0.22) 0px 1px 1px;
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

const Img = styled.img`
  border-radius: 1rem;
`

const Name = styled.span`
  color: gray;
  font-size: 0.9rem;
  text-align: right;
  margin-top: 4px;
`