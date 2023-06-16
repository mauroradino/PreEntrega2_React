import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
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
        <Route path="/item/:id" element={<DetailsPage/>}/>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
