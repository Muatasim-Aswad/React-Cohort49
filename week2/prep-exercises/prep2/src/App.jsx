import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PersonController from './components/personController';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonController />
    </>
  );
}

export default App;
