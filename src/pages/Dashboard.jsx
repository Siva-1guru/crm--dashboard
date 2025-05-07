 
// import React, { useEffect, useState } from 'react';
// import {
//   Typography,
//   Button,
//   Grid,
//   IconButton,
//   Menu,
//   MenuItem,
//   TextField,
//   Box
// } from '@mui/material';
// import { FaUsers, FaHandshake, FaDollarSign, FaTasks } from 'react-icons/fa';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// const Dashboard = () => {
//   const [stats, setStats] = useState({ contacts: 0, deals: 0, revenue: 0, tasks: 0 });
//   const [isEditing, setIsEditing] = useState(null);
//   const [tempValue, setTempValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newCall, setNewCall] = useState({ name: '', value: '' });

//   const syncCallData = (updatedStats) => {
//     setCallData([
//       { name: 'Support', value: updatedStats.contacts },
//       { name: 'Sales', value: updatedStats.deals },
//       { name: 'Follow-up', value: updatedStats.tasks },
//       { name: 'Inquiry', value: Math.floor(updatedStats.revenue / 1000) } // Example logic
//     ]);
//   };

//   const [callData, setCallData] = useState([]);

//   useEffect(() => {
//     const initialStats = { contacts: 152, deals: 34, revenue: 25000, tasks: 12 };
//     setStats(initialStats);
//     syncCallData(initialStats);
//   }, []);

//   const handleEditClick = (index, value) => {
//     setIsEditing(index);
//     setTempValue(value.toString().replace(/\D/g, ''));
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
//       syncCallData(updatedStats); // Sync chart
//       return updatedStats;
//     });
//     setIsEditing(null);
//   };

//   const data = [
//     {
//       title: 'Total Contacts',
//       value: stats.contacts,
//       icon: <FaUsers size={24} />,
//       gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'
//     },
//     {
//       title: 'Active Deals',
//       value: stats.deals,
//       icon: <FaHandshake size={24} />,
//       gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
//     },
//     {
//       title: 'Revenue',
//       value: `$${stats.revenue.toLocaleString()}`,
//       icon: <FaDollarSign size={24} />,
//       gradient: 'linear-gradient(135deg, #e53935 0%, #e35d5b 100%)'
//     },
//     {
//       title: 'Pending Tasks',
//       value: stats.tasks,
//       icon: <FaTasks size={24} />,
//       gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
//     }
//   ];

//   const actions = ['Clone', 'Edit', 'Delete', 'Print', 'Download', 'Move to another Dashboard'];

//   return (
//     <div style={{ padding: 20 }}>
//       <Typography variant="h4" gutterBottom>CRM Dashboard Overview</Typography>

//       <Grid container spacing={3}>
//         {data.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Box
//               sx={{
//                 p: 2,
//                 borderRadius: 2,
//                 background: item.gradient,
//                 color: '#fff',
//                 boxShadow: 3,
//               }}
//             >
//               <Grid container alignItems="center" spacing={2}>
//                 <Grid item>{item.icon}</Grid>
//                 <Grid item>
//                   <Typography variant="h6">{item.title}</Typography>
//                   {isEditing === index ? (
//                     <TextField
//                       value={tempValue}
//                       onChange={(e) => setTempValue(e.target.value)}
//                       variant="outlined"
//                       size="small"
//                       type="number"
//                       sx={{ backgroundColor: '#fff', color: '#000', borderRadius: 1 }}
//                     />
//                   ) : (
//                     <Typography variant="h4" fontWeight="bold">{item.value}</Typography>
//                   )}
//                 </Grid>
//               </Grid>
//               <Button
//                 variant="contained"
//                 sx={{
//                   mt: 2,
//                   backgroundColor: '#ffffff33',
//                   color: '#fff',
//                   '&:hover': { backgroundColor: '#ffffff55' }
//                 }}
//                 onClick={() =>
//                   isEditing === index
//                     ? handleSaveClick(index)
//                     : handleEditClick(index, item.value)
//                 }
//               >
//                 {isEditing === index ? 'Save' : 'Edit'}
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       <div style={{ marginTop: 40, position: 'relative' }}>
//         <Typography variant="h5">Call Purpose Tracking</Typography>
//         <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} style={{ position: 'absolute', right: 0 }}>
//           <BsThreeDotsVertical />
//         </IconButton>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
//           <MenuItem onClick={() => {
//             setAnchorEl(null);
//             setShowAddForm(true);
//           }}>Add</MenuItem>
//           {actions.map((action, index) => (
//             <MenuItem key={index} onClick={() => setAnchorEl(null)}>{action}</MenuItem>
//           ))}
//         </Menu>

//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               data={callData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={150}
//               label
//             >
//               {callData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={
//                   ['#2193b0', '#56ab2f', '#f7971e', '#e53935'][index % 4]
//                 } />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>

//         {showAddForm && (
//           <Box mt={2} display="flex" gap={2} alignItems="center">
//             <TextField
//               label="Purpose"
//               value={newCall.name}
//               onChange={(e) => setNewCall({ ...newCall, name: e.target.value })}
//               size="small"
//             />
//             <TextField
//               label="Value"
//               type="number"
//               value={newCall.value}
//               onChange={(e) => setNewCall({ ...newCall, value: e.target.value })}
//               size="small"
//             />
//             <Button
//               variant="contained"
//               onClick={() => {
//                 if (newCall.name && newCall.value) {
//                   setCallData([...callData, { name: newCall.name, value: parseInt(newCall.value) }]);
//                   setNewCall({ name: '', value: '' });
//                   setShowAddForm(false);
//                 }
//               }}
//             >
//               Add
//             </Button>
//             <Button variant="text" onClick={() => setShowAddForm(false)}>Cancel</Button>
//           </Box>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import {
  Typography, Button, Grid, IconButton, Menu, MenuItem,
  TextField, Box, Snackbar, Dialog, DialogActions,
  DialogContent, DialogTitle, CircularProgress
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { FaUsers, FaHandshake, FaDollarSign, FaTasks } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const iconList = [<FaUsers />, <FaHandshake />, <FaDollarSign />, <FaTasks />];
const gradients = [
  'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
  'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
  'linear-gradient(135deg, #e53935 0%, #e35d5b 100%)',
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
];

const Dashboard = () => {
  const [stats, setStats] = useState({ contacts: 0, deals: 0, revenue: 0, tasks: 0 });
  const [loading, setLoading] = useState(true);
  const [editedStat, setEditedStat] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [callData, setCallData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newCall, setNewCall] = useState({ name: '', value: '' });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/stats');
      setStats(res.data);
      syncCallData(res.data);
    } catch (error) {
      console.error("Failed to load stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const syncCallData = (updated) => {
    setCallData([
      { name: 'Support', value: updated.contacts },
      { name: 'Sales', value: updated.deals },
      { name: 'Follow-up', value: updated.tasks },
      { name: 'Inquiry', value: Math.floor(updated.revenue / 1000) }
    ]);
  };

  const handleSave = async (indexKey) => {
    const updatedStats = { ...stats, [indexKey]: parseInt(tempValue) || 0 };
    setStats(updatedStats);
    syncCallData(updatedStats);
    setEditedStat(null);
    setOpenSnackbar(true);

    // Optionally, send updated stats to backend
    await axios.put(`http://localhost:5000/api/stats`, updatedStats);
  };

  const dashboardData = [
    { title: 'Total Contacts', key: 'contacts', value: stats.contacts },
    { title: 'Active Deals', key: 'deals', value: stats.deals },
    { title: 'Revenue', key: 'revenue', value: `$${stats.revenue.toLocaleString()}` },
    { title: 'Pending Tasks', key: 'tasks', value: stats.tasks }
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>CRM Dashboard Overview</Typography>

      <Grid container spacing={3}>
        {dashboardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={item.key}>
            <Box sx={{
              p: 2, borderRadius: 2, background: gradients[index],
              color: '#fff', boxShadow: 3, position: 'relative'
            }}>
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                <>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>{iconList[index]}</Grid>
                    <Grid item xs>
                      <Typography variant="h6">{item.title}</Typography>
                      {editedStat === item.key ? (
                        <TextField
                          size="small"
                          variant="outlined"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          sx={{ background: '#fff', borderRadius: 1, mt: 1 }}
                        />
                      ) : (
                        <Typography variant="h4">{item.value}</Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
                      editedStat === item.key ? handleSave(item.key) : (setEditedStat(item.key), setTempValue(stats[item.key].toString()));
                    }}
                    sx={{
                      mt: 2,
                      backgroundColor: '#ffffff33',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#ffffff55' }
                    }}
                  >
                    {editedStat === item.key ? 'Save' : 'Edit'}
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box mt={5} position="relative">
        <Typography variant="h5">Call Purpose Tracking</Typography>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} style={{ position: 'absolute', right: 0 }}>
          <BsThreeDotsVertical />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => {
            setAnchorEl(null);
            setOpenDialog(true);
          }}>Add Purpose</MenuItem>
        </Menu>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={callData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              label
            >
              {callData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={['#2193b0', '#56ab2f', '#f7971e', '#e53935'][index % 4]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Call Purpose</DialogTitle>
        <DialogContent sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <TextField
            label="Purpose"
            fullWidth
            value={newCall.name}
            onChange={(e) => setNewCall({ ...newCall, name: e.target.value })}
          />
          <TextField
            label="Value"
            type="number"
            fullWidth
            value={newCall.value}
            onChange={(e) => setNewCall({ ...newCall, value: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => {
            if (newCall.name && newCall.value) {
              setCallData([...callData, { name: newCall.name, value: parseInt(newCall.value) }]);
              setNewCall({ name: '', value: '' });
              setOpenDialog(false);
            }
          }} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">Stat updated successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;
