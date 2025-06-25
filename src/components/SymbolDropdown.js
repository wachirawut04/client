// components/SymbolDropdownNav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SymbolDropdownNav = ({ options }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const symbol = e.target.value;
    if (symbol) {
      const formattedSymbol = symbol.replace('/', '');
      navigate(`/forex/${formattedSymbol}`);
    }
  };

  return (
    <div className="symbol-dropdown-nav">
      <label htmlFor="symbol-nav-select" className="mr-2 font-medium">
        Go to Symbol:
      </label>
      <select
        id="symbol-nav-select"
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-2 py-1"
        defaultValue=""
      >
        <option value="" disabled>Select a symbol</option>
        {options.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SymbolDropdownNav;
