import React, { useState, createContext, useEffect } from 'react';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext<{
  isAuthenticated: boolean;
  user: Record<string, any> | null;
  isLoading: boolean;
  error: Error | null;
  onLogin: (e: string, p: string) => void;
}>({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
  onLogin: () => undefined,
});

export const AuthenticationContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
        console.log({ u });
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  };

  // useEffect(() => {
  //   onLogin('taz@mand.io', 'test123');
  // }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
