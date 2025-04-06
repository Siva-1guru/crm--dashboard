// src/pages/Reports.jsx
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", deals: 5 },
  { name: "Feb", deals: 10 },
  { name: "Mar", deals: 8 },
];

const Reports = () => (
  <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="deals" fill="#8884d8" />
  </BarChart>
);

export default Reports;
