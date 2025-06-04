

import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, CircularProgress } from '@mui/material';
import { FaUsers, FaHandshake, FaDollarSign, FaTasks } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/stats');
      setStats(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000); // Auto-update
    return () => clearInterval(interval);
  }, []);

  const pieData = stats ? [
    { name: 'Contacts', value: stats.contacts },
    { name: 'Deals', value: stats.deals },
    { name: 'Tasks', value: stats.tasks },
    { name: 'Revenue', value: stats.revenue / 1000 },
  ] : [];

  const colors = ['#2193b0', '#56ab2f', '#f7971e', '#e53935'];
  const iconList = [<FaUsers />, <FaHandshake />, <FaDollarSign />, <FaTasks />];

  const dashboardData = stats ? [
    { title: 'Contacts', value: stats.contacts },
    { title: 'Deals', value: stats.deals },
    { title: 'Revenue', value: `$${stats.revenue.toLocaleString()}` },
    { title: 'Tasks', value: stats.tasks }
  ] : [];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>CRM Dashboard</Typography>
      {loading ? <CircularProgress /> : (
        <>
          <Grid container spacing={3}>
            {dashboardData.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{
                  p: 2, borderRadius: 2, background: colors[i],
                  color: '#fff', boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                  {iconList[i]}
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="h4">{item.value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box mt={5}>
            <Typography variant="h5">CSAT (Demo Chart)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={colors[i % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
