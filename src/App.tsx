import './App.css'
import "../i18n"
import Header from './components/Header';
import Home from './components/page/Home'
import {type Dispatch, type SetStateAction } from 'react';
import Oil from './components/page/Oil';
import Footer from './components/Footer';
import { createContext} from 'react';
import { Route, Routes } from 'react-router';
import ProductInfo from './components/page/ProductInfo';
import AboutUs from './components/page/AboutUs';
import Contacts from './components/page/Contacts';
import Policy from './components/page/Policy';
import NewsBlog from './components/page/NewsBlog';
import NewsInfo from './components/page/NewsInfo';
import Comments from './components/page/Comments';
import ProfileUser from './components/page/ProfileUser';


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
              <Route path='/cosmetics' element={<div>132</div>} />
              <Route path='/dishes' element={<div>132</div>} />
              <Route path='/dietary_supplements' element={<div>132</div>} />
              <Route path='/product/:id/*' element={<ProductInfo/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contacts' element={<Contacts/>} />
              <Route path='/newsblog' element={<NewsBlog/>} />
              <Route path='/newsblog/:id' element={<NewsInfo/>} />
              <Route path='/newsblog/:id/comments' element={<Comments key="newsblogComments"/>}/>
              <Route path='/articles/:id/comments' element={<Comments key="articlesComments"/>}/>
              <Route path='/privacypolicy' element={<Policy key="privacy" translate="privacyPolicy"/>}/>
              <Route path='/currentpolicy' element={<Policy key="current" translate="currentPolicy"/>}/>
              <Route path='/termsofuse' element={<Policy key="termsOfUse" translate="termOfUse"/>}/>
              <Route path='/termsofsale' element={<Policy key="termsOfSale" translate="termOfSale"/>}/>
              <Route path='/user/:id' element={<ProfileUser/>}/>
          </Routes>
        </main>
        <Footer></Footer>
    </>
  )
}

export default App
