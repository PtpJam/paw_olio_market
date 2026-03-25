import './App.css'
import "../i18n"
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [headerMenu, headerMenuSet] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    headerMenuSet(newValue);
  };
  return (
    <>
      <Header value={headerMenu} handleChange={handleChange}></Header>  
    </>
  )
}

export default App
