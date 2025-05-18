import React, { useEffect, useState } from 'react';

export default function AssetsTable({ assetClass }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Decide URL based on prop: fetch all if no assetClass specified
  const url = assetClass
    ? `http://localhost:3001/api/assets/${assetClass}`
    : 'http://localhost:3001/api/assets';

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No data found.</p>;

  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Asset Class</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Previous Close</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, symbol, asset_class, open, high, low, prev_close, timestamp }) => (
          <tr key={id}>
            <td>{symbol}</td>
            <td>{asset_class}</td>
            <td>{open}</td>
            <td>{high}</td>
            <td>{low}</td>
            <td>{prev_close}</td>
            <td>{new Date(timestamp * 1000).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
