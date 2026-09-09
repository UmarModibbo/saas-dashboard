import React, { useState } from 'react';
import { FiTrendingUp, FiUsers, FiDollarSign, FiActivity } from 'react-icons/fi';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Table from '../components/Table';
import Filter from '../components/Filter';
import ChartComponent from '../components/ChartComponent';
import './Dashboard.css';

const Dashboard = ({ isDarkMode }) => {
  const [timeFilter, setTimeFilter] = useState('week');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+12.5%', icon: FiDollarSign, trend: 'up' },
    { title: 'Users', value: '8,234', change: '+3.2%', icon: FiUsers, trend: 'up' },
    { title: 'Conversion', value: '2.8%', change: '-1.2%', icon: FiTrendingUp, trend: 'down' },
    { title: 'Active Sessions', value: '1,429', change: '+5.1%', icon: FiActivity, trend: 'up' },
  ];

  const tableData = [
    { id: 'TXN001', customer: 'John Doe', amount: '$1,250', status: 'Completed', date: '2024-01-15' },
    { id: 'TXN002', customer: 'Jane Smith', amount: '$2,500', status: 'Pending', date: '2024-01-14' },
    { id: 'TXN003', customer: 'Bob Johnson', amount: '$875', status: 'Completed', date: '2024-01-13' },
    { id: 'TXN004', customer: 'Alice Brown', amount: '$3,200', status: 'Failed', date: '2024-01-12' },
    { id: 'TXN005', customer: 'Charlie Wilson', amount: '$1,900', status: 'Completed', date: '2024-01-11' },
  ];

  const tableColumns = [
    { key: 'id', label: 'Transaction ID', sortable: true },
    { key: 'customer', label: 'Customer', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <span className={`status-badge status-${value.toLowerCase()}`}>{value}</span>,
    },
    { key: 'date', label: 'Date', sortable: true },
  ];

  const handleSort = (column) => {
    console.log('Sorting by:', column);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's your performance summary.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="charts-row">
          <Card title="Revenue Trend" className="chart-card">
            <ChartComponent isDarkMode={isDarkMode} />
          </Card>
          <Card title="User Distribution" className="chart-card">
            <ChartComponent isDarkMode={isDarkMode} type="pie" />
          </Card>
        </div>
      </div>

      {/* Filters and Table */}
      <Card title="Recent Transactions">
        <div className="table-filters">
          <Filter
            label={`Time: ${timeFilter}`}
            value={timeFilter}
            onChange={setTimeFilter}
            options={[
              { label: 'Today', value: 'today' },
              { label: 'This Week', value: 'week' },
              { label: 'This Month', value: 'month' },
              { label: 'All Time', value: 'all' },
            ]}
          />
          <Filter
            label={`Status: ${statusFilter}`}
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { label: 'All', value: 'all' },
              { label: 'Completed', value: 'completed' },
              { label: 'Pending', value: 'pending' },
              { label: 'Failed', value: 'failed' },
            ]}
          />
        </div>
        <Table columns={tableColumns} data={tableData} onSort={handleSort} />
      </Card>
    </div>
  );
};

export default Dashboard;
