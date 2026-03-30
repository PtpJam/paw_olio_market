import './App.css'
import "../i18n"
import Header from './components/Header';
import Home from './components/page/Home'
import { useState, type Dispatch, type SetStateAction } from 'react';
import TabPanel from './components/TabPanel';
import Oil from './components/page/Oil';
import Footer from './components/Footer';
import { createContext, useContext } from 'react';
import { Route, Routes } from 'react-router';


interface MenuContextType {
  setTab: Dispatch<SetStateAction<number>>;
}
export const MenuContext = createContext<MenuContextType | undefined>(undefined);

function App() {
  const [menu, menuSet] = useState(0)
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    menuSet(newValue);
  };
  
  return (
    <>
      <MenuContext.Provider value={{ setTab: menuSet }}>
        <Header></Header>  
        <main>
          <Routes>
              <Route index element={<Home />} />
              <Route path='/oil' element={<Oil/>} />
          </Routes>
        </main>
        <Footer></Footer>
      </MenuContext.Provider>
    </>
  )
}

export default App
