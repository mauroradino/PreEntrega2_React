import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import DetailsPage from './pages/DetailsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/AboutUs" element={<AboutPage/>} />
        <Route path="/Category" element={<CategoryPage/>} />
        <Route path="/Details/:id" element={<DetailsPage/>}/>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
