import './App.css'
import "../i18n"
import Header from './components/Header';
import Home from './components/page/Home'
import { useState } from 'react';
import TabPanel from './components/TabPanel';
import Oil from './components/page/Oil';

function App() {
  const [headerMenu, headerMenuSet] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    headerMenuSet(newValue);
  };
  return (
    <>
      <Header value={headerMenu} handleChange={handleChange}></Header>  
      <main>
        <TabPanel value={headerMenu} index={0}>
          <Home></Home>
        </TabPanel>
        <TabPanel value={headerMenu} index={1}>
          <Oil></Oil>
        </TabPanel>
        <TabPanel value={headerMenu} index={2}>Components</TabPanel>
        <TabPanel value={headerMenu} index={3}>Dishes</TabPanel>
        <TabPanel value={headerMenu} index={4}>DIetary supplements</TabPanel>
      </main>
    </>
  )
}

export default App
