import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RestuarantTransformed } from '../restaurants/mock/types';

interface FavouriteContextType {
  favourites: Array<RestuarantTransformed>;
  addToFavourites: (r: RestuarantTransformed) => void;
  removeFromFavourites: (r: RestuarantTransformed) => void;
}

export const FavouritesContext = createContext<FavouriteContextType>({
  favourites: [],
  addToFavourites: () => null,
  removeFromFavourites: () => null,
});

export const FavouritesContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<Array<RestuarantTransformed>>([]);

  const saveFavourites = async (value: Array<RestuarantTransformed>) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites');
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const add = (restaurant: RestuarantTransformed) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: RestuarantTransformed) => {
    const newFavourites = favourites.filter(x => x.placeId !== restaurant.placeId);

    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
