 
// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Grid,
// //   TextField,
// //   Select,
// //   MenuItem,
// //   Button,
// //   Typography,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// // } from '@mui/material';
// // import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';

// // const LeadsManagement = () => {
// //   const [leads, setLeads] = useState([
// //     { id: 1, name: 'ABC Pvt Ltd', contact: 'John Doe', status: 'Pending' },
// //     { id: 2, name: 'XYZ Enterprises', contact: 'Jane Smith', status: 'Contacted' },
// //   ]);

// //   const [newLead, setNewLead] = useState({ name: '', contact: '', status: 'Pending' });
// //   const [editingLead, setEditingLead] = useState(null);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewLead({ ...newLead, [name]: value });
// //   };

// //   const addLead = () => {
// //     if (!newLead.name.trim() || !newLead.contact.trim()) {
// //       alert('Please fill all fields');
// //       return;
// //     }

// //     const newId = leads.length > 0 ? leads[leads.length - 1].id + 1 : 1;

// //     setLeads([...leads, { ...newLead, id: newId }]);
// //     setNewLead({ name: '', contact: '', status: 'Pending' });
// //   };

// //   const handleEdit = (lead) => setEditingLead({ ...lead });

// //   const handleSave = () => {
// //     setLeads(leads.map((lead) => (lead.id === editingLead.id ? editingLead : lead)));
// //     setEditingLead(null);
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure you want to delete this lead?')) {
// //       setLeads(leads.filter((lead) => lead.id !== id));
// //     }
// //   };

// //   return (
// //     <Box p={3} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
// //       <Typography variant="h4" mb={3} fontWeight="bold">
// //         Leads Management
// //       </Typography>

// //       {/* Add New Lead */}
// //       <Typography variant="h6" mb={2}>
// //         Add New Lead
// //       </Typography>
// //       <Grid container spacing={2} mb={3}>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             fullWidth
// //             name="name"
// //             label="Company Name"
// //             placeholder="Enter company name"
// //             value={newLead.name}
// //             onChange={handleInputChange}
// //           />
// //         </Grid>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             fullWidth
// //             name="contact"
// //             label="Contact Name"
// //             placeholder="Enter contact name"
// //             value={newLead.contact}
// //             onChange={handleInputChange}
// //           />
// //         </Grid>
// //         <Grid item xs={12} sm={4}>
// //           <Select
// //             fullWidth
// //             name="status"
// //             value={newLead.status}
// //             onChange={handleInputChange}
// //           >
// //             <MenuItem value="Pending">Pending</MenuItem>
// //             <MenuItem value="Contacted">Contacted</MenuItem>
// //             <MenuItem value="Converted">Converted</MenuItem>
// //           </Select>
// //         </Grid>
// //         <Grid item xs={12} sm={12} mt={1}>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             startIcon={<FaPlus />}
// //             onClick={addLead}
// //           >
// //             Add Lead
// //           </Button>
// //         </Grid>
// //       </Grid>

// //       {/* Lead List */}
// //       <Typography variant="h6" mb={2}>
// //         Leads List
// //       </Typography>
// //       <TableContainer component={Paper}>
// //         <Table>
// //           <TableHead sx={{ bgcolor: '#f5f5f5' }}>
// //             <TableRow>
// //               <TableCell><strong>Company</strong></TableCell>
// //               <TableCell><strong>Contact</strong></TableCell>
// //               <TableCell><strong>Status</strong></TableCell>
// //               <TableCell><strong>Actions</strong></TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {leads.map((lead) => (
// //               <TableRow key={lead.id}>
// //                 <TableCell>
// //                   {editingLead?.id === lead.id ? (
// //                     <TextField
// //                       fullWidth
// //                       value={editingLead.name}
// //                       onChange={(e) =>
// //                         setEditingLead({ ...editingLead, name: e.target.value })
// //                       }
// //                     />
// //                   ) : (
// //                     lead.name
// //                   )}
// //                 </TableCell>
// //                 <TableCell>
// //                   {editingLead?.id === lead.id ? (
// //                     <TextField
// //                       fullWidth
// //                       value={editingLead.contact}
// //                       onChange={(e) =>
// //                         setEditingLead({ ...editingLead, contact: e.target.value })
// //                       }
// //                     />
// //                   ) : (
// //                     lead.contact
// //                   )}
// //                 </TableCell>
// //                 <TableCell>
// //                   {editingLead?.id === lead.id ? (
// //                     <Select
// //                       fullWidth
// //                       value={editingLead.status}
// //                       onChange={(e) =>
// //                         setEditingLead({ ...editingLead, status: e.target.value })
// //                       }
// //                     >
// //                       <MenuItem value="Pending">Pending</MenuItem>
// //                       <MenuItem value="Contacted">Contacted</MenuItem>
// //                       <MenuItem value="Converted">Converted</MenuItem>
// //                     </Select>
// //                   ) : (
// //                     lead.status
// //                   )}
// //                 </TableCell>
// //                 <TableCell>
// //                   {editingLead?.id === lead.id ? (
// //                     <Button onClick={handleSave} color="success">
// //                       <FaSave />
// //                     </Button>
// //                   ) : (
// //                     <Button onClick={() => handleEdit(lead)}>
// //                       <FaEdit />
// //                     </Button>
// //                   )}
// //                   <Button onClick={() => handleDelete(lead.id)} color="error">
// //                     <FaTrash />
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </Box>
// //   );
// // };

// // // export default LeadsManagement;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Box, Grid, TextField, Select, MenuItem, Button, Typography,
// //   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
// // } from '@mui/material';
// // import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';

// // const API_URL = 'http://localhost:5000/api/leads';

// // const LeadsManagement = () => {
// //   const [leads, setLeads] = useState([]);
// //   const [newLead, setNewLead] = useState({ name: '', contact: '', status: 'Pending' });
// //   const [editingLead, setEditingLead] = useState(null);

// //   // Fetch all leads
// //   const fetchLeads = async () => {
// //     try {
// //       const res = await axios.get(API_URL);
// //       setLeads(res.data);
// //     } catch (err) {
// //       console.error('Failed to fetch leads', err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchLeads();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     if (editingLead) {
// //       setEditingLead({ ...editingLead, [name]: value });
// //     } else {
// //       setNewLead({ ...newLead, [name]: value });
// //     }
// //   };

// //   const addLead = async () => {
// //     if (!newLead.name.trim() || !newLead.contact.trim()) {
// //       alert('Please fill all fields');
// //       return;
// //     }
// //     try {
// //       const res = await axios.post(API_URL, newLead);
// //       setLeads([...leads, res.data]);
// //       setNewLead({ name: '', contact: '', status: 'Pending' });
// //     } catch (err) {
// //       console.error('Failed to add lead', err);
// //     }
// //   };

// //   const handleEdit = (lead) => setEditingLead({ ...lead });

// //   const handleSave = async () => {
// //     try {
// //       await axios.put(`${API_URL}/${editingLead._id}`, editingLead);
// //       setLeads(leads.map((lead) => (lead._id === editingLead._id ? editingLead : lead)));
// //       setEditingLead(null);
// //     } catch (err) {
// //       console.error('Failed to update lead', err);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm('Are you sure you want to delete this lead?')) {
// //       try {
// //         await axios.delete(`${API_URL}/${id}`);
// //         setLeads(leads.filter((lead) => lead._id !== id));
// //       } catch (err) {
// //         console.error('Failed to delete lead', err);
// //       }
// //     }
// //   };

// //   return (
// //     <Box p={3} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
// //       <Typography variant="h4" mb={3} fontWeight="bold">Leads Management</Typography>

// //       {/* Add / Edit Lead */}
// //       <Typography variant="h6" mb={2}>{editingLead ? 'Edit Lead' : 'Add New Lead'}</Typography>
// //       <Grid container spacing={2} mb={3}>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             fullWidth
// //             name="name"
// //             label="Company Name"
// //             value={editingLead?.name || newLead.name}
// //             onChange={handleInputChange}
// //           />
// //         </Grid>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             fullWidth
// //             name="contact"
// //             label="Contact Name"
// //             value={editingLead?.contact || newLead.contact}
// //             onChange={handleInputChange}
// //           />
// //         </Grid>
// //         <Grid item xs={12} sm={4}>
// //           <Select
// //             fullWidth
// //             name="status"
// //             value={editingLead?.status || newLead.status}
// //             onChange={handleInputChange}
// //           >
// //             <MenuItem value="Pending">Pending</MenuItem>
// //             <MenuItem value="Contacted">Contacted</MenuItem>
// //             <MenuItem value="Converted">Converted</MenuItem>
// //           </Select>
// //         </Grid>
// //         <Grid item xs={12} mt={1}>
// //           {editingLead ? (
// //             <Button variant="contained" color="success" startIcon={<FaSave />} onClick={handleSave}>
// //               Save Changes
// //             </Button>
// //           ) : (
// //             <Button variant="contained" color="primary" startIcon={<FaPlus />} onClick={addLead}>
// //               Add Lead
// //             </Button>
// //           )}
// //         </Grid>
// //       </Grid>

// //       {/* Lead List */}
// //       <Typography variant="h6" mb={2}>Leads List</Typography>
// //       <TableContainer component={Paper}>
// //         <Table>
// //           <TableHead sx={{ bgcolor: '#f5f5f5' }}>
// //             <TableRow>
// //               <TableCell><strong>Company</strong></TableCell>
// //               <TableCell><strong>Contact</strong></TableCell>
// //               <TableCell><strong>Status</strong></TableCell>
// //               <TableCell><strong>Actions</strong></TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {leads.map((lead) => (
// //               <TableRow key={lead._id}>
// //                 <TableCell>{lead.name}</TableCell>
// //                 <TableCell>{lead.contact}</TableCell>
// //                 <TableCell>{lead.status}</TableCell>
// //                 <TableCell>
// //                   <Button onClick={() => handleEdit(lead)}><FaEdit /></Button>
// //                   <Button onClick={() => handleDelete(lead._id)} color="error"><FaTrash /></Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </Box>
// //   );
// // };

// // // export default LeadsManagement;
// // import React, { useState } from 'react';
// // import {
// //   Box, Grid, TextField, MenuItem, Select, Button, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer,
// // } from '@mui/material';
// // import { FaPlus } from 'react-icons/fa';

// // const initialLeadState = {
// //   leadOwner: '',
// //   firstName: '',
// //   lastName: '',
// //   company: '',
// //   title: '',
// //   phone: '',
// //   mobile: '',
// //   email: '',
// //   fax: '',
// //   website: '',
// //   leadSource: '',
// //   leadStatus: '',
// //   industry: '',
// //   annualRevenue: '',
// //   noOfEmployees: '',
// //   rating: '',
// //   skypeId: '',
// //   secondaryEmail: '',
// //   twitter: '',
// // };

// // const LeadsPage = () => {
// //   const [leadData, setLeadData] = useState(initialLeadState);
// //   const [leadsList, setLeadsList] = useState([]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setLeadData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleAddLead = () => {
// //     const { company, lastName } = leadData;
// //     if (!company || !lastName) {
// //       alert('Company and Last Name are required.');
// //       return;
// //     }
// //     setLeadsList([...leadsList, leadData]);
// //     setLeadData(initialLeadState);
// //   };

// //   return (
// //     <Box p={3}>
// //       <Typography variant="h4" mb={3} fontWeight="bold">Create Lead</Typography>
// //       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
// //         <Grid container spacing={2}>
// //           {[
// //             ['leadOwner', 'Lead Owner'],
// //             ['firstName', 'First Name'],
// //             ['lastName', 'Last Name'],
// //             ['company', 'Company'],
// //             ['title', 'Title'],
// //             ['phone', 'Phone'],
// //             ['mobile', 'Mobile'],
// //             ['email', 'Email'],
// //             ['fax', 'Fax'],
// //             ['website', 'Website'],
// //             ['leadSource', 'Lead Source', ['None', 'Advertisement', 'Web']],
// //             ['leadStatus', 'Lead Status', ['None', 'New', 'Contacted']],
// //             ['industry', 'Industry', ['None', 'IT', 'Finance']],
// //             ['annualRevenue', 'Annual Revenue'],
// //             ['noOfEmployees', 'No. of Employees'],
// //             ['rating', 'Rating', ['None', 'Hot', 'Cold']],
// //             ['skypeId', 'Skype ID'],
// //             ['secondaryEmail', 'Secondary Email'],
// //             ['twitter', 'Twitter'],
// //           ].map(([key, label, options]) => (
// //             <Grid item xs={12} sm={6} md={4} key={key}>
// //               {options ? (
// //                 <Select
// //                   fullWidth
// //                   name={key}
// //                   value={leadData[key]}
// //                   onChange={handleChange}
// //                   displayEmpty
// //                 >
// //                   {options.map((opt) => (
// //                     <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
// //                       {opt}
// //                     </MenuItem>
// //                   ))}
// //                 </Select>
// //               ) : (
// //                 <TextField
// //                   fullWidth
// //                   name={key}
// //                   label={label}
// //                   value={leadData[key]}
// //                   onChange={handleChange}
// //                 />
// //               )}
// //             </Grid>
// //           ))}
// //           <Grid item xs={12}>
// //             <Button variant="contained" color="primary" startIcon={<FaPlus />} onClick={handleAddLead}>
// //               Add Lead
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </Paper>

// //       <Typography variant="h6" mb={2}>Leads List</Typography>
// //       <TableContainer component={Paper}>
// //         <Table>
// //           <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
// //             <TableRow>
// //               <TableCell><strong>Company</strong></TableCell>
// //               <TableCell><strong>Contact Name</strong></TableCell>
// //               <TableCell><strong>Email</strong></TableCell>
// //               <TableCell><strong>Status</strong></TableCell>
// //               <TableCell><strong>S</strong></TableCell>
// //               <TableCell><strong>Lead Owner</strong></TableCell>
// //     <TableCell><strong>First Name</strong></TableCell>
// //     <TableCell><strong>Last Name</strong></TableCell>
// //     <TableCell><strong>Company</strong></TableCell>
// //     <TableCell><strong>Title</strong></TableCell>
// //     <TableCell><strong>Phone</strong></TableCell>
// //     <TableCell><strong>Mobile</strong></TableCell>
// //     <TableCell><strong>Email</strong></TableCell>
// //     <TableCell><strong>Fax</strong></TableCell>
// //     <TableCell><strong>Website</strong></TableCell>
// //     <TableCell><strong>Lead Source</strong></TableCell>
// //     <TableCell><strong>Lead Status</strong></TableCell>
// //     <TableCell><strong>Industry</strong></TableCell>
// //     <TableCell><strong>Annual Revenue</strong></TableCell>
// //     <TableCell><strong>No. of Employees</strong></TableCell>
// //     <TableCell><strong>Rating</strong></TableCell>
// //     <TableCell><strong>Skype ID</strong></TableCell>
// //     <TableCell><strong>Secondary Email</strong></TableCell>
// //     <TableCell><strong>Twitter</strong></TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {leadsList.map((lead, index) => (
// //               <TableRow key={index}>
// //                 <TableCell>{lead.company}</TableCell>
// //                 <TableCell>{lead.firstName} {lead.lastName}</TableCell>
// //                 <TableCell>{lead.email}</TableCell>
// //                 <TableCell>{lead.leadStatus}</TableCell>
// //                 <TableCell>{lead.leadStatus}</TableCell>
// //                 <TableCell>{lead.leadOwner}</TableCell>
// //       <TableCell>{lead.firstName}</TableCell>
// //       <TableCell>{lead.lastName}</TableCell>
// //       <TableCell>{lead.company}</TableCell>
// //       <TableCell>{lead.title}</TableCell>
// //       <TableCell>{lead.phone}</TableCell>
// //       <TableCell>{lead.mobile}</TableCell>
// //       <TableCell>{lead.email}</TableCell>
// //       <TableCell>{lead.fax}</TableCell>
// //       <TableCell>{lead.website}</TableCell>
// //       <TableCell>{lead.leadSource}</TableCell>
// //       <TableCell>{lead.leadStatus}</TableCell>
// //       <TableCell>{lead.industry}</TableCell>
// //       <TableCell>{lead.annualRevenue}</TableCell>
// //       <TableCell>{lead.noOfEmployees}</TableCell>
// //       <TableCell>{lead.rating}</TableCell>
// //       <TableCell>{lead.skypeId}</TableCell>
// //       <TableCell>{lead.secondaryEmail}</TableCell>
// //       <TableCell>{lead.twitter}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </Box>
// //   );
// // };

// // export default LeadsPage;
// import React, { useState } from 'react';
// import {
//   Box, Grid, TextField, MenuItem, Select, Button, Typography, Paper,
//   Table, TableHead, TableRow, TableCell, TableBody, TableContainer
// } from '@mui/material';
// import { FaPlus } from 'react-icons/fa';

// const initialLeadState = {
//   leadOwner: '',
//   firstName: '',
//   lastName: '',
//   company: '',
//   title: '',
//   phone: '',
//   mobile: '',
//   email: '',
//   fax: '',
//   website: '',
//   leadSource: '',
//   leadStatus: '',
//   industry: '',
//   annualRevenue: '',
//   noOfEmployees: '',
//   rating: '',
//   skypeId: '',
//   secondaryEmail: '',
//   twitter: '',
// };

// const fields = [
//   ['leadOwner', 'Lead Owner'],
//   ['firstName', 'First Name'],
//   ['lastName', 'Last Name'],
//   ['company', 'Company'],
//   ['title', 'Title'],
//   ['phone', 'Phone'],
//   ['mobile', 'Mobile'],
//   ['email', 'Email'],
//   ['fax', 'Fax'],
//   ['website', 'Website'],
//   ['leadSource', 'Lead Source', ['None', 'Advertisement', 'Web']],
//   ['leadStatus', 'Lead Status', ['None', 'New', 'Contacted']],
//   ['industry', 'Industry', ['None', 'IT', 'Finance']],
//   ['annualRevenue', 'Annual Revenue'],
//   ['noOfEmployees', 'No. of Employees'],
//   ['rating', 'Rating', ['None', 'Hot', 'Cold']],
//   ['skypeId', 'Skype ID'],
//   ['secondaryEmail', 'Secondary Email'],
//   ['twitter', 'Twitter'],
// ];

// const LeadsPage = () => {
//   const [leadData, setLeadData] = useState(initialLeadState);
//   const [leadsList, setLeadsList] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeadData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddLead = () => {
//     const { company, lastName } = leadData;
//     if (!company || !lastName) {
//       alert('Company and Last Name are required.');
//       return;
//     }
//     setLeadsList([...leadsList, leadData]);
//     setLeadData(initialLeadState);
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={3} fontWeight="bold">Create Lead</Typography>

//       {/* Lead Form */}
//       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//         <Grid container spacing={2}>
//           {fields.map(([key, label, options]) => (
//             <Grid item xs={12} sm={6} md={4} key={key}>
//               {options ? (
//                 <Select
//                   fullWidth
//                   name={key}
//                   value={leadData[key]}
//                   onChange={handleChange}
//                   displayEmpty
//                 >
//                   {options.map((opt) => (
//                     <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
//                       {opt}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               ) : (
//                 <TextField
//                   fullWidth
//                   name={key}
//                   label={label}
//                   value={leadData[key]}
//                   onChange={handleChange}
//                 />
//               )}
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<FaPlus />}
//               onClick={handleAddLead}
//             >
//               Add Lead
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Lead Table */}
//       <Typography variant="h6" mb={2}>Leads List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
//             <TableRow>
//               {Object.keys(initialLeadState).map((key) => (
//                 <TableCell key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}</strong></TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {leadsList.map((lead, index) => (
//               <TableRow key={index}>
//                 {Object.keys(initialLeadState).map((key) => (
//                   <TableCell key={key}>{lead[key]}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default LeadsPage;
import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  Box, Grid, TextField, MenuItem, Select, Button, Typography, Paper,
  Table, TableHead, TableRow, TableCell, TableBody, TableContainer
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';

const initialLeadState = {
  leadOwner: '',
  firstName: '',
  lastName: '',
  company: '',
  title: '',
  phone: '',
  mobile: '',
  email: '',
  fax: '',
  website: '',
  leadSource: '',
  leadStatus: '',
  industry: '',
  annualRevenue: '',
  noOfEmployees: '',
  rating: '',
  skypeId: '',
  secondaryEmail: '',
  twitter: '',
};

const fields = [
  ['leadOwner', 'Lead Owner'],
  ['firstName', 'First Name'],
  ['lastName', 'Last Name'],
  ['company', 'Company'],
  ['title', 'Title'],
  ['phone', 'Phone'],
  ['mobile', 'Mobile'],
  ['email', 'Email'],
  ['fax', 'Fax'],
  ['website', 'Website'],
  ['leadSource', 'Lead Source', ['None', 'Advertisement', 'Web']],
  ['leadStatus', 'Lead Status', ['None', 'New', 'Contacted']],
  ['industry', 'Industry', ['None', 'IT', 'Finance']],
  ['annualRevenue', 'Annual Revenue'],
  ['noOfEmployees', 'No. of Employees'],
  ['rating', 'Rating', ['None', 'Good', 'Average','Low']],
  ['skypeId', 'Skype ID'],
  ['secondaryEmail', 'Secondary Email'],
  ['twitter', 'Twitter'],
];

const LeadsPage = () => {
  const [leadData, setLeadData] = useState(initialLeadState);
  const [leadsList, setLeadsList] = useState([]);

  const fetchLeads = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/leads');
      console.log('Fetched leads:', res.data);
      setLeadsList(res.data);
    } catch (err) {
      console.error('Error fetching leads:', err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLead = async () => {
    const { company, lastName } = leadData;
    if (!company || !lastName) {
      alert('Company and Last Name are required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/leads', leadData);
      fetchLeads(); // Refresh the list
      setLeadData(initialLeadState);
    } catch (err) {
      console.error('Error adding lead:', err);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">Create Lead</Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Grid container spacing={2}>
          {fields.map(([key, label, options]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              {options ? (
                <Select
                  fullWidth
                  name={key}
                  value={leadData[key]}
                  onChange={handleChange}
                  displayEmpty
                >
                  {options.map((opt) => (
                    <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                <TextField
                  fullWidth
                  name={key}
                  label={label}
                  value={leadData[key]}
                  onChange={handleChange}
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaPlus />}
              onClick={handleAddLead}
            >
              Add Lead
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" mb={2}>Leads List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              {Object.keys(initialLeadState).map((key) => (
                <TableCell key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}</strong></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {leadsList.map((lead, index) => (
              <TableRow key={index}>
                {Object.keys(initialLeadState).map((key) => (
                  <TableCell key={key}>{lead[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeadsPage;
