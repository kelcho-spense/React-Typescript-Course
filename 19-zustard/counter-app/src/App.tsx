import React from 'react';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Zustand Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;