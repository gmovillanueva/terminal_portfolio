import React from 'react';

export const createContext = <ObjectType extends object>() => {
  const newContext = React.createContext<ObjectType | undefined>(undefined);

  const useContext = () => {
    const usedContext = React.useContext(newContext);
    if (usedContext === undefined) {
      throw new Error('useContext must be inside a Provider with a value.');
    }
    return usedContext;
  };

  return [useContext, newContext.Provider] as const;
};
