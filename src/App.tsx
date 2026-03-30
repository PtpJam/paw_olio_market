import './App.css'
import "../i18n"
import Header from './components/Header';
import Home from './components/page/Home'
import {type Dispatch, type SetStateAction } from 'react';
import Oil from './components/page/Oil';
import Footer from './components/Footer';
import { createContext} from 'react';
import { Route, Routes } from 'react-router';
import Product from './components/page/Product';


interface MenuContextType {
  setTab: Dispatch<SetStateAction<number>>;
}
export const MenuContext = createContext<MenuContextType | undefined>(undefined);

function App() {

  return (
    <>
        <Header></Header>  
        <main>
          <Routes>
              <Route index element={<Home />} />
              <Route path='/oil' element={<Oil/>} />
              <Route path='/product/:id' element={<Product/>} />
          </Routes>
        </main>
        <Footer></Footer>
\    </>
  )
}

export default App
