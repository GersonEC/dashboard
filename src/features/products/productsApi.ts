import { Product } from '../../utils/models';

export function fetchProducts() {
  return new Promise<Product[]>((resolve) => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}
