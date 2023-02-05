import React, { useState, createContext } from 'react';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext<{
  user: Record<string, any> | null;
  isLoading: boolean;
  error: Error | null;
  onLogin: (e: string, p: string) => void;
}>({
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

  return (
    <AuthenticationContext.Provider
      value={{
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
