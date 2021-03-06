import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Reviews from './Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import AboutUs from './components/About/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/reviews' element={<Reviews/> }></Route>
            <Route path='/dashboard' element={<Dashboard/> }></Route>
            <Route path='/blogs' element={<Blogs/> }></Route>
            <Route path='/aboutUs' element={<AboutUs/> }></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
