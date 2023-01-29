import React, { createContext, useState } from 'react';
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
