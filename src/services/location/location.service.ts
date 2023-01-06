import camelize from 'camelize';
import { locations } from './location.mock';

type locationType = typeof locations['antwerp'];

export const locationRequest = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm as keyof typeof locations];

    if (!location) {
      reject('Not Found!');
    }

    resolve(location);
  });
};

export const locationTransform = (response: unknown) => {
  const formattedResponse = camelize(response) as locationType;

  const [location] = formattedResponse.results || [];
  const {
    geometry: {
      location: { lat, lng },
    },
  } = location;

  return {
    lat,
    lng,
  };
};
