import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './Card';

/**
 * A reusable component that wraps the attendance chart[cite: 16, 29].
 * @param {object} props - Component properties.
 * @param {Array} props.data - The data to be visualized in the chart.
 * @param {string} props.title - The title for the chart card.
 */
const ChartWrapper = ({ data, title }) => {
  return (
    <Card title={title}>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ChartWrapper;