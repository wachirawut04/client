import React, { useEffect, useState } from 'react';
import './AssetsTable.css';

export default function AssetsTable({ assetClass }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = assetClass
    ? `http://localhost:3001/api/assets/${assetClass}`
    : 'http://localhost:3001/api/assets';

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return res.json()
            .then(errData => {
              throw new Error(errData.error || 'Network response was not ok');
            })
            .catch(() => {
              throw new Error('Network response was not ok');
            });
        }
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

  if (loading) return <p className="status">Loading assets...</p>;
  if (error) return <p className="status error">Error: {error}</p>;
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="status">No assets found.</p>;
  }

  // Function to format numbers
  const formatNumber = (value) => {
    if (typeof value !== 'number') return 'N/A';
    const decimals = assetClass === 'index' ? 3 : 2;
    return value.toFixed(decimals);
  };

  return (
    <div className="table-container">
      <table className="assets-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Prev Close</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, symbol, open, high, low, prev_close }) => {
            const hasValues = typeof open === 'number' && typeof prev_close === 'number';
            const change = hasValues ? open - prev_close : null;
            const percentChange = hasValues && prev_close !== 0
              ? (Math.abs(change) / prev_close) * 100
              : null;

            const isPositive = change > 0;
            const isNegative = change < 0;
            const color = isPositive
              ? '#4ADE80'
              : isNegative
              ? '#F87171'
              : '#FFFFFF';

            return (
              <tr key={id || symbol}>
                <td>{symbol ?? 'N/A'}</td>
                <td>{formatNumber(open)}</td>
                <td>{formatNumber(high)}</td>
                <td>{formatNumber(low)}</td>
                <td>{formatNumber(prev_close)}</td>
                <td style={{ color }}>
                  {hasValues
                    ? `${change > 0 ? '+' : ''}${formatNumber(change)} (${change > 0 ? '+' : ''}${percentChange.toFixed(2)}%)`
                    : 'N/A'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
