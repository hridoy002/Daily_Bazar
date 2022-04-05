import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Reviews from './Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import AboutUs from './components/About/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/reviews' element={<Reviews/> }></Route>
            <Route path='/blogs' element={<Blogs/> }></Route>
            <Route path='/aboutUs' element={<AboutUs/> }></Route>
        </Routes>
    </div>
  );
}

export default App;
