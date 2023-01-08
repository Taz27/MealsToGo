import { mocks, mockImages } from './mock';
import camelize from 'camelize';
import { RestuarantTransformed } from './mock/types';

export const restaurantsRequest = (location: string) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location as keyof typeof mocks];

    if (!mock) {
      reject('Not Found!');
    }

    resolve(mock);
  });
};

type Response = typeof mocks['37.7749295,-122.4194155'];

export const restaurantsTransform = (response: unknown) => {
  const { results = [] } = response as Response;
  const mappedResults = results.map(restaurant => {
    const restaurantPhotos = restaurant.photos.map(
      () => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );

    return {
      ...{ ...restaurant, photos: [...restaurantPhotos] },
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED__TEMPORARILY',
    };
  });

  return camelize(mappedResults) as RestuarantTransformed[];
};
