import React, { useState, createContext, useContext, useEffect, useMemo } from 'react';
import { RestuarantTransformed } from './mock/types';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestuarantsContext = createContext<{
  restaurants: RestuarantTransformed[];
  isLoading: boolean;
  error: Error | null;
}>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<RestuarantTransformed[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc: string) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(res => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location?.lat, location?.lng]);

  return (
    <RestuarantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestuarantsContext.Provider>
  );
};
