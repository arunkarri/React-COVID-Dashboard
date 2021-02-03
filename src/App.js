import React, { useState } from 'react';
import Dashboard from './dashboard';

export const LoaderContext = React.createContext({
  loading: true,
  showLoader: () => {},
});

const App = () => {
  const [loader, showLoader] = useState(true);
  const value = { loader, showLoader };
  return (
    <>
      <LoaderContext.Provider value={value}>
        <Dashboard />
      </LoaderContext.Provider>
    </>
  );
};

export default App;
