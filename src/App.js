import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StocksPage from './pages/StocksPage';
import ForexPage from './pages/ForexPage';
import CommoditiesPage from './pages/CommoditiesPage';
import IndicesPage from './pages/IndicesPage';
import HomePage from './pages/HomePage';
import GraphPage from './pages/GraphPage';
import NavBar from './components/NavBar';
import Placeholder from './components/placeholder';
import SearchResultsPage from './components/SearchResultsPage';

// New auth pages
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedPage from './pages/ProtectedPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock" element={<StocksPage />} />
        <Route path="/forex" element={<ForexPage />} />
        <Route path="/commodity" element={<CommoditiesPage />} />
        <Route path="/index" element={<IndicesPage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/market" element={<Placeholder />} />
        <Route path="/about" element={<Placeholder />} />
        <Route path="/user" element={<SignInPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/protected" element={<ProtectedPage />} />

        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
