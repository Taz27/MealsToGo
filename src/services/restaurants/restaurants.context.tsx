import React, { useState, createContext, useEffect, useMemo } from 'react';
import { RestuarantTransformed } from './mock/types';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestuarantsContext = createContext({});

export const RestaurantsContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<RestuarantTransformed[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);

    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);

  return (
    <RestuarantsContext.Provider
      value={{
        restaurants,
        isloading,
        error,
      }}
    >
      {children}
    </RestuarantsContext.Provider>
  );
};
