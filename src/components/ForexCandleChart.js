import React, { useEffect, useState } from 'react';
import './ForexCandleChart.css';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Layer,
} from 'recharts';

const CandleShape = (props) => {
  const { x, y, width, height, payload, min, max } = props;
  const color = payload.close > payload.open ? 'green' : 'red';

  const openY = y + height * (1 - (payload.open - min) / (max - min));
  const closeY = y + height * (1 - (payload.close - min) / (max - min));
  const highY = y + height * (1 - (payload.high - min) / (max - min));
  const lowY = y + height * (1 - (payload.low - min) / (max - min));

  const bodyY = Math.min(openY, closeY);
  const bodyHeight = Math.abs(openY - closeY);

  return (
    <Layer>
      <line
        x1={x + width / 2}
        y1={highY}
        x2={x + width / 2}
        y2={lowY}
        stroke={color}
        strokeWidth={1}
      />
      <rect
        x={x}
        y={bodyY}
        width={Math.max(width, 1)}
        height={Math.max(bodyHeight, 1)}
        fill={color}
      />
    </Layer>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || payload.length === 0) return null;

  const d = payload[0].payload;
  return (
    <div style={{ backgroundColor: 'white', padding: 8, border: '1px solid #ccc' }}>
      <strong>{d.date}</strong>
      <p>Open: {d.open}</p>
      <p>High: {d.high}</p>
      <p>Low: {d.low}</p>
      <p>Close: {d.close}</p>
    </div>
  );
};

const ForexSparklineCandle = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/forex/${encodeURIComponent(symbol)}`)
      .then(res => res.json())
      .then(raw => {
        const formatted = raw.map(entry => ({
          date: (entry.datetime || '').slice(0, 16),
          open: +entry.open,
          high: +entry.high,
          low: +entry.low,
          close: +entry.close,
        }));
        // **Do NOT reverse here to keep oldest first**
        setData(formatted);
      })
      .catch(console.error);
  }, [symbol]);

  if (data.length === 0) return <p>Loading data...</p>;

  const min = Math.min(...data.map(d => d.low));
  const max = Math.max(...data.map(d => d.high));

  return (
    <div className="mb-4">
      <h4 className="text-md font-medium mb-1">{symbol} Mini Candlestick</h4>
      <ResponsiveContainer width="100%" height={450}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
        >
          <XAxis dataKey="date" hide />
          <YAxis domain={[min, max]} hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="close"
            shape={(props) => (
              <CandleShape {...props} min={min} max={max} />
            )}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForexSparklineCandle;
