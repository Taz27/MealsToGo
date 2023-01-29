import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext<{
  isLoading: boolean;
  error: Error | null;
  location: {
    lat: number;
    lng: number;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  } | null;
  search: (val: string) => void;
  keyword: string;
}>({
  isLoading: false,
  error: null,
  location: null,
  search: () => undefined,
  keyword: '',
});

export const LocationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [keyword, setKeyword] = useState<string>('san francisco');
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const onSearch = (searchKeyword = 'San Francisco') => {
    setIsLoading(true);
    setKeyword(searchKeyword.trim());
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(res => {
        setIsLoading(false);
        setLocation(res);
        console.log({ res });
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
        console.log({ err });
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
