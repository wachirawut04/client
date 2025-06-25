import React from 'react';
import ForexSparklineCandle from '../components/ForexCandleChart';

const GraphPage = () => {
  return (
    <div>
      <h2>Forex Sparklines</h2>
      <ForexSparklineCandle symbol="EURUSD" /> 
    </div>
  );
};

export default GraphPage;
