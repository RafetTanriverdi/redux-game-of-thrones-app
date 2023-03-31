
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Detail/:id' element={<CharacterDetail/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
