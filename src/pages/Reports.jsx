
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, List, ListItem, CircularProgress } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { fetchReportData } from "./reportApi";

const COLORS = ["#00C49F", "#FF8042"];

const ReportCard = ({ title, children }) => (
  <Paper elevation={3} style={{ padding: 20 }}>
    <Typography variant="h6" gutterBottom>{title}</Typography>
    {children}
  </Paper>
);

const Reports = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadReport = async () => {
      try {
        const report = await fetchReportData();
        console.log("Fetched report data:", report); // Debugging
        setData(report);
      } catch (err) {
        console.error("Error fetching report data:", err);
        setError("Failed to load report data.");
      } finally {
        setLoading(false);
      }
    };
    loadReport();
  }, []);

  if (loading) return <Box p={4}><CircularProgress /></Box>;

  if (error) return (
    <Box p={4}>
      <Typography color="error" variant="h6">{error}</Typography>
    </Box>
  );

  if (!data) return (
    <Box p={4}>
      <Typography variant="h6">No data available.</Typography>
    </Box>
  );

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Reports Dashboard</Typography>
      <Grid container spacing={4}>

        {/* Leads Per Month Bar Chart */}
        <Grid item xs={12} md={6}>
          <ReportCard title="Leads Per Month">
            {data.leads && data.leads.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.leads}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <Typography align="center">No leads data available.</Typography>
            )}
          </ReportCard>
        </Grid>

        {/* Deals Pie Chart */}
        <Grid item xs={12} md={6}>
          <ReportCard title="Deals Status (Won vs Lost)">
            {data.deals && data.deals.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.deals}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {data.deals.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <Typography align="center">No deals data available.</Typography>
            )}
          </ReportCard>
        </Grid>

        {/* Activities List */}
        <Grid item xs={12} md={6}>
          <ReportCard title="Meetings / Calls / Tasks">
            {data.activities && data.activities.length > 0 ? (
              <List>
                {data.activities.map((item, index) => (
                  <ListItem key={index}>
                    {item.type}: {item.count}
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography align="center">No activities data available.</Typography>
            )}
          </ReportCard>
        </Grid>

        {/* Projects Summary */}
        <Grid item xs={12} md={6}>
          <ReportCard title="Projects Summary">
            {data.projects ? (
              <>
                <Typography variant="h5">Total Projects: {data.projects.total}</Typography>
                <Typography color="green">Completed: {data.projects.completed}</Typography>
                <Typography color="orange">Ongoing: {data.projects.ongoing}</Typography>
              </>
            ) : (
              <Typography align="center">No projects data available.</Typography>
            )}
          </ReportCard>
        </Grid>

        {/* Documents Summary */}
        <Grid item xs={12} md={6}>
          <ReportCard title="Documents Summary">
            {data.documents ? (
              <>
                <Typography variant="h5">Total Documents: {data.documents.total}</Typography>
                <Typography color="blue">Uploaded Today: {data.documents.uploadedToday}</Typography>
              </>
            ) : (
              <Typography align="center">No documents data available.</Typography>
            )}
          </ReportCard>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Reports;
