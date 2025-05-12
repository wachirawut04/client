// src/components/FaangStocks.js
import React, { useEffect, useState } from 'react';

function FaangStocks() {
  const [stocks, setStocks] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchStockData = () => {
    fetch('http://localhost:5000/api/faang')
      .then(res => res.json())
      .then(data => {
        setStocks(data);
        setLastUpdated(new Date().toLocaleString());
      })
      .catch(error => {
        console.error('Error fetching FAANG stock data:', error);
      });
  };

  useEffect(() => {
    fetchStockData(); // initial fetch

    const interval = setInterval(() => {
      fetchStockData();
    }, 30000); // every 30 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="stock-container">
      <h2>FAANG Stock Prices</h2>

      {lastUpdated && <p className="timestamp">Last updated: {lastUpdated}</p>}

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Current</th>
            <th>High</th>
            <th>Low</th>
            <th>Previous Close</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stocks).map(([symbol, info]) => (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>${info.currency}</td>
              <td>${info.high}</td>
              <td>${info.low}</td>
              <td>${info.prevClose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FaangStocks;
