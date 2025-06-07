import React from 'react';
import PlantStore from './pages/PlantStore';
import { ThemeProvider } from './theme/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <PlantStore />
    </ThemeProvider>
  );
};

export default App;