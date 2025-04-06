 
// import React, { useEffect, useState } from 'react';
// import './db.css';
// import { FaUsers, FaHandshake, FaDollarSign, FaTasks } from 'react-icons/fa';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// const Dashboard = () => {
//   const [stats, setStats] = useState({ contacts: 0, deals: 0, revenue: 0, tasks: 0 });
//   const [isEditing, setIsEditing] = useState(null);
//   const [tempValue, setTempValue] = useState('');
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setStats({ contacts: 152, deals: 34, revenue: 25000, tasks: 12 });
//     }, 1000);
//   }, []);

//   const handleEditClick = (index, value) => {
//     setIsEditing(index);
//     setTempValue(value);
//   };

//   const handleSaveClick = (index) => {
//     const updatedStats = { ...stats };
//     switch (index) {
//       case 0: updatedStats.contacts = tempValue; break;
//       case 1: updatedStats.deals = tempValue; break;
//       case 2: updatedStats.revenue = tempValue; break;
//       case 3: updatedStats.tasks = tempValue; break;
//       default: break;
//     }
//     setStats(updatedStats);
//     setIsEditing(null);
//   };

//   const data = [
//     { title: 'Total Contacts', value: stats.contacts, color: 'bg-blue-500', icon: <FaUsers size={24} /> },
//     { title: 'Active Deals', value: stats.deals, color: 'bg-green-500', icon: <FaHandshake size={24} /> },
//     { title: 'Revenue', value: `$${stats.revenue.toLocaleString()}`, color: 'bg-yellow-500', icon: <FaDollarSign size={24} /> },
//     { title: 'Pending Tasks', value: stats.tasks, color: 'bg-red-500', icon: <FaTasks size={24} /> }
//   ];

//   const callData = [
//     { name: 'Support', value: 45 },
//     { name: 'Sales', value: 25 },
//     { name: 'Follow-up', value: 20 },
//     { name: 'Inquiry', value: 10 }
//   ];

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   const actions = [
//     'Clone', 'Edit', 'Delete', 'Print',
//     'Add to Home', 'Embed URL', 
//     'Move to another Dashboard', 'Download',
//     'Add as Favorite'
//   ];

//   const handleAction = (action) => {
//     alert(`Selected: ${action}`);
//     setShowMenu(false);
//   };

//   return (
//     <div className="dashboard-container p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">CRM Dashboard Overview</h1>

//       {/* Cards Section */}
//       {/* <div className="flex flex-wrap justify-between gap-6 "> */}
//       <div className="flex flex-wrap justify-between gap-6"style={{display:"flex",flexDirection:"row"}}>
//         {data.map((item, index) => (
//           <div key={index} className={`dashboard-box p-6 rounded-lg shadow-lg ${item.color} text-white flex items-center justify-between`}>
//             <div className="flex">
//               <div className="mr-4">{item.icon}</div>
//               <div>
//                 <h2 className="text-xl font-semibold">{item.title}</h2>
//                 {isEditing === index ? (
//                   <input
//                     type="text"
//                     value={tempValue}
//                     onChange={(e) => setTempValue(e.target.value)}
//                     className="hii"
//                   />
//                 ) : (
//                   <p className="text-4xl font-bold mt-">{item.value}</p>
//                 )}
//               </div>
//             </div>
//             <button
//               onClick={() => isEditing === index ? handleSaveClick(index) : handleEditClick(index, item.value)}
//               className="bg-white text-black px-4 py-2 rounded-lg font-bold"
//             >
//               {isEditing === index ? 'Save' : 'Edit'}
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="mt-12 relative">
//   <h2 className="text-2xl font-semibold mb-4">Call Purpose Tracking</h2>

//   {/* Dropdown Menu */}
//   <div className="absolute right-0">
//     <button onClick={() => setShowMenu((prev) => !prev)} className="p-2 bg-gray-200 rounded-full">
//       <BsThreeDotsVertical size={20} />
//     </button>

//     {showMenu && (
//       <div className="absolute right-0 mt-2 w-84 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-2">
//         <div className="grid grid-cols-2 gap-2">
//           {actions.map((action, index) => (
//             <button
//               key={index}
//               onClick={() => handleAction(action)}
//               className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-200"
//             >
//               {action}
//             </button>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>

//   {/* Chart Section */}
//   <ResponsiveContainer width="100%" height={400}>
//     <PieChart>
//       <Pie data={callData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
//         {callData.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend />
//     </PieChart>
//   </ResponsiveContainer>
//   </div>
//     </div>
//   );
// };

// // // export default Dashboard; 
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Button, Grid, IconButton, Menu, MenuItem, TextField } from '@mui/material';
// import { FaUsers, FaHandshake, FaDollarSign, FaTasks } from 'react-icons/fa';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const Dashboard = () => {
//   const [stats, setStats] = useState({ contacts: 0, deals: 0, revenue: 0, tasks: 0 });
//   const [isEditing, setIsEditing] = useState(null);
//   const [tempValue, setTempValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setStats({ contacts: 152, deals: 34, revenue: 25000, tasks: 12 });
//     }, 1000);
//   }, []);

//   const handleEditClick = (index, value) => {
//     setIsEditing(index);
//     setTempValue(value);
//   };

//   const handleSaveClick = (index) => {
//     setStats((prevStats) => {
//       const updatedStats = { ...prevStats };
//       switch (index) {
//         case 0: updatedStats.contacts = Number(tempValue) || 0; break;
//         case 1: updatedStats.deals = Number(tempValue) || 0; break;
//         case 2: updatedStats.revenue = Number(tempValue) || 0; break;
//         case 3: updatedStats.tasks = Number(tempValue) || 0; break;
//         default: break;
//       }
//       return updatedStats;
//     });
//     setIsEditing(null);
//   };

//   const data = [
//     { title: 'Total Contacts', value: stats.contacts, icon: <FaUsers size={24} /> },
//     { title: 'Active Deals', value: stats.deals, icon: <FaHandshake size={24} /> },
//     { title: 'Revenue', value: `$${stats.revenue.toLocaleString()}`, icon: <FaDollarSign size={24} /> },
//     { title: 'Pending Tasks', value: stats.tasks, icon: <FaTasks size={24} /> }
//   ];

//   const callData = [
//     { name: 'Support', value: 45 },
//     { name: 'Sales', value: 25 },
//     { name: 'Follow-up', value: 20 },
//     { name: 'Inquiry', value: 10 }
//   ];

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
//   const actions = ['Clone', 'Edit', 'Delete', 'Print', 'Download', 'Move to another Dashboard'];

//   return (
//     <div style={{ padding: 20 }}>
//       <Typography variant="h4" gutterBottom>CRM Dashboard Overview</Typography>
      
//       <Grid container spacing={3}>
//         {data.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card>
//               <CardContent>
//                 <Grid container alignItems="center" spacing={2}>
//                   <Grid item>{item.icon}</Grid>
//                   <Grid item>
//                     <Typography variant="h6">{item.title}</Typography>
//                     {isEditing === index ? (
//                       <TextField
//                         value={tempValue}
//                         onChange={(e) => setTempValue(e.target.value)}
//                         variant="outlined"
//                         size="small"
//                         type="number"
//                       />
//                     ) : (
//                       <Typography variant="h4" fontWeight="bold">{item.value}</Typography>
//                     )}
//                   </Grid>
//                 </Grid>
//                 <Button
//                   variant="contained"
//                   color={isEditing === index ? "success" : "primary"}
//                   onClick={() => isEditing === index ? handleSaveClick(index) : handleEditClick(index, item.value)}
//                   sx={{ mt: 2 }}
//                 >
//                   {isEditing === index ? 'Save' : 'Edit'}
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <div style={{ marginTop: 40, position: 'relative' }}>
//         <Typography variant="h5">Call Purpose Tracking</Typography>
//         <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} style={{ position: 'absolute', right: 0 }}>
//           <BsThreeDotsVertical />
//         </IconButton>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
//           {actions.map((action, index) => (
//             <MenuItem key={index} onClick={() => setAnchorEl(null)}>{action}</MenuItem>
//           ))}
//         </Menu>
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie data={callData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label>
//               {callData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import { FaUsers, FaHandshake, FaDollarSign, FaTasks } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({ contacts: 0, deals: 0, revenue: 0, tasks: 0 });
  const [isEditing, setIsEditing] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStats({ contacts: 152, deals: 34, revenue: 25000, tasks: 12 });
    }, 1000);
  }, []);

  const handleEditClick = (index, value) => {
    setIsEditing(index);
    setTempValue(value);
  };

  const handleSaveClick = (index) => {
    setStats((prevStats) => {
      const updatedStats = { ...prevStats };
      switch (index) {
        case 0: updatedStats.contacts = Number(tempValue) || 0; break;
        case 1: updatedStats.deals = Number(tempValue) || 0; break;
        case 2: updatedStats.revenue = Number(tempValue) || 0; break;
        case 3: updatedStats.tasks = Number(tempValue) || 0; break;
        default: break;
      }
      return updatedStats;
    });
    setIsEditing(null);
  };

  const data = [
    { title: 'Total Contacts', value: stats.contacts, icon: <FaUsers size={24} /> },
    { title: 'Active Deals', value: stats.deals, icon: <FaHandshake size={24} /> },
    { title: 'Revenue', value: `$${stats.revenue.toLocaleString()}`, icon: <FaDollarSign size={24} /> },
    { title: 'Pending Tasks', value: stats.tasks, icon: <FaTasks size={24} /> }
  ];

  const callData = [
    { name: 'Support', value: 45 },
    { name: 'Sales', value: 25 },
    { name: 'Follow-up', value: 20 },
    { name: 'Inquiry', value: 10 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const actions = ['Clone', 'Edit', 'Delete', 'Print', 'Download', 'Move to another Dashboard'];

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>CRM Dashboard Overview</Typography>
      
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>{item.icon}</Grid>
                  <Grid item>
                    <Typography variant="h6">{item.title}</Typography>
                    {isEditing === index ? (
                      <TextField
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        variant="outlined"
                        size="small"
                        type="number"
                      />
                    ) : (
                      <Typography variant="h4" fontWeight="bold">{item.value}</Typography>
                    )}
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color={isEditing === index ? "success" : "primary"}
                  onClick={() => isEditing === index ? handleSaveClick(index) : handleEditClick(index, item.value)}
                  sx={{ mt: 2 }}
                >
                  {isEditing === index ? 'Save' : 'Edit'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: 40, position: 'relative' }}>
        <Typography variant="h5">Call Purpose Tracking</Typography>
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} style={{ position: 'absolute', right: 0 }}>
          <BsThreeDotsVertical />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          {actions.map((action, index) => (
            <MenuItem key={index} onClick={() => setAnchorEl(null)}>{action}</MenuItem>
          ))}
        </Menu>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={callData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label>
              {callData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
