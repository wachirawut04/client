import { Link, useLocation } from 'react-router-dom';
import './PriceBar.css';

export default function PriceBar() {
  const location = useLocation();

  return (
    <div className="price-bar-vertical">
      <Link to="/forex" className={location.pathname.startsWith('/forex') ? 'active' : ''}>Forex</Link>
      <Link to="/commodity" className={location.pathname.startsWith('/commodity') ? 'active' : ''}>Commodities</Link>
      <Link to="/index" className={location.pathname.startsWith('/index') ? 'active' : ''}>Indices</Link>
      <Link to="/stock" className={location.pathname.startsWith('/stock') ? 'active' : ''}>Stock</Link>
    </div>
  );
}
