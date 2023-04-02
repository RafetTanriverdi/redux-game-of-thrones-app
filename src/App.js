
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import Quotes from './components/Quotes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Detail/:id' element={<CharacterDetail/>}/>
      <Route path='/Quotes' element={<Quotes/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
