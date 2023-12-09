import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Frame from './components/Frame';
import LastRecipesPage from './components/LastRecipesPage';
import LikedRecipesPage from './components/LikedRecipesPage';
import NoMatchPage from './components/NoMatchPage';

function App() {
  return (
    <>
      <Frame />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='home' element={<HomePage />}></Route>
        <Route path='liked-recipes' element={<LikedRecipesPage />}></Route>
        <Route path='last-recipes' element={<LastRecipesPage />}></Route>
        <Route path='*' element={<NoMatchPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
