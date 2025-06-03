import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StocksPage from './pages/StocksPage';
import ForexPage from './pages/ForexPage';
import CommoditiesPage from './pages/CommoditiesPage';
import IndicesPage from './pages/IndicesPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import Placeholder from './components/placeholder';
import SearchResultsPage from './components/SearchResultsPage';

function App() {
  return (
    <Router>

      <NavBar />
      <Routes>  
        <Route path="/" element={<HomePage />} /> {/* Default root route */}
        <Route path="/stock" element={<StocksPage />} />
        <Route path="/forex" element={<ForexPage />} />
        <Route path="/commodity" element={<CommoditiesPage />} />
        <Route path="/index" element={<IndicesPage />} />
        <Route path="/graph" element={<Placeholder />} />
        <Route path="/market" element={<Placeholder />} />
        <Route path="/about" element={<Placeholder />} />
        <Route path="/user" element={<Placeholder />} />
        <Route path="/search/:symbol" element={<SearchResultsPage />} /> 
        

      </Routes>
    </Router>
  );
}

export default App;
