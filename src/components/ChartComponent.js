import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponent = ({ isDarkMode, type = 'line' }) => {
  const lineData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
  ];

  const pieData = [
    { name: 'Direct', value: 400 },
    { name: 'Organic', value: 300 },
    { name: 'Referral', value: 200 },
    { name: 'Social', value: 100 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
  const textColor = isDarkMode ? '#f3f4f6' : '#1f2937';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={pieData} cx="50%" cy="50%" labelLine={false} label outerRadius={80} fill="#8884d8" dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis stroke={textColor} />
        <YAxis stroke={textColor} />
        <Tooltip contentStyle={{
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          border: `1px solid ${gridColor}`,
          color: textColor,
        }} />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
