import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allAssets, setAllAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/assets')
      .then(res => res.json())
      .then(data => setAllAssets(data))
      .catch(() => setAllAssets([]));
  }, []);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const matches = allAssets.filter(asset =>
      asset.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(matches);
  }, [query, allAssets]);

  const handleSelect = (symbol, assetClass) => {
    navigate(`/${assetClass.toLowerCase()}`, { state: { symbol } });
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="symbol-search">
      <input
        type="text"
        placeholder="Search for symbols"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="symbol-dropdown">
          {suggestions.map(({ symbol, asset_class }, i) => (
            <li key={i} onClick={() => handleSelect(symbol, asset_class)}>
              {symbol} — <span style={{ fontSize: '12px' }}>{asset_class}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
