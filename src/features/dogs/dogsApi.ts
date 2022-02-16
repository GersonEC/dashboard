import { Dog } from '../../utils/models';

export function fetchDogs() {
  return new Promise<Dog[]>((resolve) => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => resolve(data))
  })
}