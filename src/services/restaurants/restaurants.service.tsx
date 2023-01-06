import { mocks } from './mock';
import camelize from 'camelize';
import { RestuarantTransformed } from './mock/types';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise(resolve => {
    const mock = mocks[location as keyof typeof mocks];
    resolve(mock);
  });
};

type Response = typeof mocks['37.7749295,-122.4194155'];

const restaurantsTransform = (response: unknown) => {
  const { results } = response as Response;
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED__TEMPORARILY',
    };
  });

  return camelize(mappedResults) as RestuarantTransformed[];
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then(transformedResponse => {
    console.log(transformedResponse.slice(0, 3));
  })
  .catch(err => {
    console.log('error', err.message);
  });
