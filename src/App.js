import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './Menu';
import Acceuil from './Acceuil';
import ListVideos from './components/ListVideos';
import AjouterVideo from './components/AjouterVideo';

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<Acceuil/>}></Route>
        <Route path='/videos' element={<ListVideos/>}></Route>
        <Route path='/add'element={<AjouterVideo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
