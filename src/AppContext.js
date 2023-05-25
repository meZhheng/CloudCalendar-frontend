import React, { createContext, useState } from 'react';

export const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [isValid, setValid] = useState(false);
  const [isVerified, setVerified] = useState(false)

  return (
    <AppContext.Provider value={{ isValid, setValid, isVerified, setVerified }}>
      {children}
    </AppContext.Provider>
  );
};