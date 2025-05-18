import React from 'react';
import AssetsTable from './components/AssetTable';

function App() {
  return (
    <div style={{ padding: 20 }}>
       <h1>Market Dashboard</h1>

      <h2>Commodities</h2>
      <AssetsTable assetClass="commodity" />

      <h2>Stocks</h2>
      <AssetsTable assetClass="stock" />

      <h2>Forex</h2>
      <AssetsTable assetClass="forex" />

      <h2>Index</h2>
      <AssetsTable assetClass="index" />

    </div>
  );
}

export default App;
