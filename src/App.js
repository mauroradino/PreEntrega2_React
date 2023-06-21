import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import InearsPage from './pages/InearsPage/InearsPage'
import HeadphonesPage from './pages/HeadphonesPage/HeadphonesPage';
import ClientsPage from './pages/ClientsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about_us" element={<AboutPage/>} />
        <Route path="/clients" element={<ClientsPage/>} />
        <Route path="/category" element={<CategoryPage/>} />
        <Route path='/category/:categoria' element={<InearsPage/>}/>
        <Route path='/category/:categoria' element={<HeadphonesPage/>}/>
        <Route path="/item/:id" element={<DetailsPage/>}/>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
