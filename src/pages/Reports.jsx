// // src/pages/Reports.jsx
// import { BarChart, Bar, XAxis, YAxis } from "recharts";

// const data = [
//   { name: "Jan", deals: 5 },
//   { name: "Feb", deals: 10 },
//   { name: "Mar", deals: 8 },
// ];

// const Reports = () => (
//   <BarChart width={400} height={300} data={data}>
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Bar dataKey="deals" fill="#8884d8" />
//   </BarChart>
// );

// export default Reports;
// src/pages/Reports.jsx

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   ResponsiveContainer,
// } from "recharts";

// const salesData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
//   { name: "Apr", sales: 4500 },
// ];

// const leadsData = [
//   { name: "New", value: 10 },
//   { name: "Contacted", value: 15 },
//   { name: "Qualified", value: 8 },
//   { name: "Converted", value: 5 },
// ];

// const revenueData = [
//   { month: "Jan", revenue: 3000 },
//   { month: "Feb", revenue: 3500 },
//   { month: "Mar", revenue: 4200 },
//   { month: "Apr", revenue: 4800 },
// ];

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// export default function Reports() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//       {/* Sales Report */}
//       <div className="bg-white p-4 shadow rounded-2xl">
//         <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={salesData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="sales" fill="#1976d2" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Leads Status Chart */}
//       <div className="bg-white p-4 shadow rounded-2xl">
//         <h2 className="text-xl font-semibold mb-4">Lead Status Distribution</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={leadsData}
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               dataKey="value"
//               label
//             >
//               {leadsData.map((entry, index) => (
//                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Revenue Trend Line Chart */}
//       <div className="bg-white p-4 shadow rounded-2xl md:col-span-2">
//         <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={revenueData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="revenue"
//               stroke="#4caf50"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
// // import React, { useEffect, useState } from "react";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   LineChart,
// //   Line,
// //   ResponsiveContainer,
// // } from "recharts";
// // import { format } from "date-fns";

// // // Dummy sales reps
// // const salesReps = ["All", "Alice", "Bob", "Charlie"];

// // const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// // const fetchReportData = async (repFilter) => {
// //   // Simulate backend API delay
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({
// //         sales: [
// //           { name: "Jan", sales: 3000 },
// //           { name: "Feb", sales: 4000 },
// //           { name: "Mar", sales: 4500 },
// //           { name: "Apr", sales: 3800 },
// //         ],
// //         leads: [
// //           { name: "New", value: 12 },
// //           { name: "Contacted", value: 18 },
// //           { name: "Qualified", value: 10 },
// //           { name: "Converted", value: 6 },
// //         ],
// //         revenue: [
// //           { month: "Jan", revenue: 2000 },
// //           { month: "Feb", revenue: 3500 },
// //           { month: "Mar", revenue: 4000 },
// //           { month: "Apr", revenue: 4700 },
// //         ],
// //       });
// //     }, 1000);
// //   });
// // };

// // export default function Reports() {
// //   const [data, setData] = useState(null);
// //   const [rep, setRep] = useState("All");
// //   const [loading, setLoading] = useState(true);
// //   const [date, setDate] = useState({
// //     from: "2024-01-01",
// //     to: format(new Date(), "yyyy-MM-dd"),
// //   });

// //   useEffect(() => {
// //     loadData();
// //   }, [rep, date]);

// //   const loadData = async () => {
// //     setLoading(true);
// //     const reportData = await fetchReportData(rep);
// //     setData(reportData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* Filters */}
// //       <div className="flex flex-wrap gap-4 items-center justify-between">
// //         <div className="space-x-2">
// //           <label>Sales Rep:</label>
// //           <select
// //             className="border rounded px-2 py-1"
// //             value={rep}
// //             onChange={(e) => setRep(e.target.value)}
// //           >
// //             {salesReps.map((r) => (
// //               <option key={r} value={r}>
// //                 {r}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <div className="flex gap-2 items-center">
// //           <label>From:</label>
// //           <input
// //             type="date"
// //             className="border rounded px-2 py-1"
// //             value={date.from}
// //             onChange={(e) => setDate({ ...date, from: e.target.value })}
// //           />
// //           <label>To:</label>
// //           <input
// //             type="date"
// //             className="border rounded px-2 py-1"
// //             value={date.to}
// //             onChange={(e) => setDate({ ...date, to: e.target.value })}
// //           />
// //         </div>
// //       </div>

// //       {loading ? (
// //         <div className="text-center text-lg font-semibold py-20">Loading Reports...</div>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Sales Report */}
// //           <div className="bg-white shadow rounded-2xl p-4">
// //             <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <BarChart data={data.sales}>
// //                 <XAxis dataKey="name" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Bar dataKey="sales" fill="#1976d2" />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Leads Status */}
// //           <div className="bg-white shadow rounded-2xl p-4">
// //             <h2 className="text-xl font-semibold mb-4">Lead Status</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <PieChart>
// //                 <Pie
// //                   data={data.leads}
// //                   cx="50%"
// //                   cy="50%"
// //                   outerRadius={100}
// //                   dataKey="value"
// //                   label
// //                 >
// //                   {data.leads.map((entry, index) => (
// //                     <Cell key={index} fill={COLORS[index % COLORS.length]} />
// //                   ))}
// //                 </Pie>
// //                 <Tooltip />
// //               </PieChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Revenue Trend */}
// //           <div className="bg-white shadow rounded-2xl p-4 md:col-span-2">
// //             <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <LineChart data={data.revenue}>
// //                 <XAxis dataKey="month" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Line
// //                   type="monotone"
// //                   dataKey="revenue"
// //                   stroke="#4caf50"
// //                   strokeWidth={2}
// //                 />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// src/pages/Reports.jsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
];

const leadsData = [
  { name: "New", value: 10 },
  { name: "Contacted", value: 15 },
  { name: "Qualified", value: 8 },
  { name: "Converted", value: 5 },
];

const revenueData = [
  { month: "Jan", revenue: 3000 },
  { month: "Feb", revenue: 3500 },
  { month: "Mar", revenue: 4200 },
  { month: "Apr", revenue: 4800 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Reports() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Sales Report */}
      <div className="bg-white p-4 shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Leads Status Chart */}
      <div className="bg-white p-4 shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Lead Status Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={leadsData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {leadsData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Trend Line Chart */}
      <div className="bg-white p-4 shadow rounded-2xl md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4caf50"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
