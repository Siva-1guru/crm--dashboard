
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Box, Typography, TextField, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';
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

// // const fields = [
// //   ['leadOwner', 'Lead Owner'],
// //   ['firstName', 'First Name'],
// //   ['lastName', 'Last Name'],
// //   ['company', 'Company'],
// //   ['title', 'Title'],
// //   ['phone', 'Phone'],
// //   ['mobile', 'Mobile'],
// //   ['email', 'Email'],
// //   ['fax', 'Fax'],
// //   ['website', 'Website'],
// //   ['leadSource', 'Lead Source', ['None', 'Advertisement', 'Web']],
// //   ['leadStatus', 'Lead Status', ['None', 'New', 'Contacted']],
// //   ['industry', 'Industry', ['None', 'IT', 'Finance']],
// //   ['annualRevenue', 'Annual Revenue'],
// //   ['noOfEmployees', 'No. of Employees'],
// //   ['rating', 'Rating', ['None', 'Good', 'Average','Low']],
// //   ['skypeId', 'Skype ID'],
// //   ['secondaryEmail', 'Secondary Email'],
// //   ['twitter', 'Twitter'],
// // ];

// // const LeadsPage = () => {
// //   const [leadData, setLeadData] = useState(initialLeadState);
// //   const [leadsList, setLeadsList] = useState([]);

// //   const fetchLeads = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:5000/api/leads');
// //       console.log('Fetched leads:', res.data);
// //       setLeadsList(res.data);
// //     } catch (err) {
// //       console.error('Error fetching leads:', err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchLeads();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setLeadData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleAddLead = async () => {
// //     const { company, lastName } = leadData;
// //     if (!company || !lastName) {
// //       alert('Company and Last Name are required.');
// //       return;
// //     }

// //     try {
// //       await axios.post('http://localhost:5000/api/leads', leadData);
// //       fetchLeads(); // Refresh the list
// //       setLeadData(initialLeadState);
// //     } catch (err) {
// //       console.error('Error adding lead:', err);
// //     }
// //   };

// //   return (
// //     <Box p={3}>
// //       <Typography variant="h4" mb={3} fontWeight="bold">Create Lead</Typography>

// //       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
// //         <Grid container spacing={2}>
// //           {fields.map(([key, label, options]) => (
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
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               startIcon={<FaPlus />}
// //               onClick={handleAddLead}
// //             >
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
// //               {Object.keys(initialLeadState).map((key) => (
// //                 <TableCell key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}</strong></TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {leadsList.map((lead, index) => (
// //               <TableRow key={index}>
// //                 {Object.keys(initialLeadState).map((key) => (
// //                   <TableCell key={key}>{lead[key]}</TableCell>
// //                 ))}
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </Box>
// //   );
// // };

// // export default LeadsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box, Typography, TextField, Button, Grid,
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, Select, MenuItem, FormHelperText, FormControl, InputLabel
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
//   ['rating', 'Rating', ['None', 'Good', 'Average', 'Low']],
//   ['skypeId', 'Skype ID'],
//   ['secondaryEmail', 'Secondary Email'],
//   ['twitter', 'Twitter'],
// ];

// const LeadsPage = () => {
//   const [leadData, setLeadData] = useState(initialLeadState);
//   const [leadsList, setLeadsList] = useState([]);
//   const [formErrors, setFormErrors] = useState({});

//   const fetchLeads = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/leads');
//       setLeadsList(res.data);
//     } catch (err) {
//       console.error('Error fetching leads:', err);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeadData((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validateFields = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10,15}$/;

//     Object.entries(leadData).forEach(([key, value]) => {
//       if (!value && (key === 'company' || key === 'lastName')) {
//         errors[key] = 'This field is required';
//       }

//       if (['email', 'secondaryEmail'].includes(key) && value && !emailRegex.test(value)) {
//         errors[key] = 'Invalid email format';
//       }

//       if (['phone', 'mobile'].includes(key) && value && !phoneRegex.test(value)) {
//         errors[key] = 'Invalid phone number';
//       }
//     });

//     return errors;
//   };

//   const handleAddLead = async () => {
//     const errors = validateFields();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/leads', leadData);
//       fetchLeads();
//       setLeadData(initialLeadState);
//       setFormErrors({});
//     } catch (err) {
//       console.error('Error adding lead:', err);
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={3} fontWeight="bold">Create Lead</Typography>

//       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//         <Grid container spacing={2}>
//           {fields.map(([key, label, options]) => (
//             <Grid item xs={12} sm={6} md={4} key={key}>
//               {options ? (
//                 <FormControl fullWidth error={!!formErrors[key]}>
//                   <InputLabel>{label}</InputLabel>
//                   <Select
//                     name={key}
//                     value={leadData[key]}
//                     onChange={handleChange}
//                     label={label}
//                   >
//                     {options.map((opt) => (
//                       <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
//                         {opt}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formErrors[key] && (
//                     <FormHelperText>{formErrors[key]}</FormHelperText>
//                   )}
//                 </FormControl>
//               ) : (
//                 <TextField
//                   fullWidth
//                   name={key}
//                   label={label}
//                   value={leadData[key]}
//                   onChange={handleChange}
//                   error={!!formErrors[key]}
//                   helperText={formErrors[key] || ''}
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

// // export default LeadsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Select,
//   MenuItem,
//   FormHelperText,
//   FormControl,
//   InputLabel
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
//   ['rating', 'Rating', ['None', 'Good', 'Average', 'Low']],
//   ['skypeId', 'Skype ID'],
//   ['secondaryEmail', 'Secondary Email'],
//   ['twitter', 'Twitter'],
// ];

// const LeadsPage = () => {
//   const [leadData, setLeadData] = useState(initialLeadState);
//   const [leadsList, setLeadsList] = useState([]);
//   const [formErrors, setFormErrors] = useState({});

//   const fetchLeads = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/leads');
//       setLeadsList(res.data);
//     } catch (err) {
//       console.error('Error fetching leads:', err);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeadData((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: '' })); // clear error while typing
//   };

//   const validateFields = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10,15}$/;

//     Object.entries(leadData).forEach(([key, value]) => {
//       if (!value || value.trim() === '') {
//         errors[key] = 'This field is required';
//       }

//       if (['email', 'secondaryEmail'].includes(key) && value && !emailRegex.test(value)) {
//         errors[key] = 'Invalid email format';
//       }

//       if (['phone', 'mobile'].includes(key) && value && !phoneRegex.test(value)) {
//         errors[key] = 'Invalid phone number';
//       }
//     });

//     return errors;
//   };

//   const handleAddLead = async () => {
//     const errors = validateFields();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/leads', leadData);
//       fetchLeads();
//       setLeadData(initialLeadState);
//       setFormErrors({});
//     } catch (err) {
//       console.error('Error adding lead:', err);
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={3} fontWeight="bold">Create Lead</Typography>

//       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//         <Grid container spacing={2}>
//           {fields.map(([key, label, options]) => (
//             <Grid item xs={12} sm={6} md={4} key={key}>
//               {options ? (
//                 <FormControl fullWidth error={!!formErrors[key]}>
//                   <InputLabel>{label}</InputLabel>
//                   <Select
//                     name={key}
//                     value={leadData[key]}
//                     onChange={handleChange}
//                     label={label}
//                   >
//                     {options.map((opt) => (
//                       <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
//                         {opt}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formErrors[key] && <FormHelperText>{formErrors[key]}</FormHelperText>}
//                 </FormControl>
//               ) : (
//                 <TextField
//                   fullWidth
//                   name={key}
//                   label={label}
//                   value={leadData[key]}
//                   onChange={handleChange}
//                   error={!!formErrors[key]}
//                   helperText={formErrors[key] || ''}
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

// // export default LeadsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Select,
//   MenuItem,
//   FormHelperText,
//   FormControl,
//   InputLabel
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
//   ['rating', 'Rating', ['None', 'Good', 'Average', 'Low']],
//   ['skypeId', 'Skype ID'],
//   ['secondaryEmail', 'Secondary Email'],
//   ['twitter', 'Twitter'],
// ];

// const LeadsPage = () => {
//   const [leadData, setLeadData] = useState(initialLeadState);
//   const [leadsList, setLeadsList] = useState([]);
//   const [formErrors, setFormErrors] = useState({});
//   const [editingId, setEditingId] = useState(null);

//   const fetchLeads = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/leads');
//       setLeadsList(res.data);
//     } catch (err) {
//       console.error('Error fetching leads:', err);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeadData((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validateFields = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10,15}$/;

//     Object.entries(leadData).forEach(([key, value]) => {
//       if (!value || value.trim() === '') {
//         errors[key] = 'This field is required';
//       }

//       if (['email', 'secondaryEmail'].includes(key) && value && !emailRegex.test(value)) {
//         errors[key] = 'Invalid email format';
//       }

//       if (['phone', 'mobile'].includes(key) && value && !phoneRegex.test(value)) {
//         errors[key] = 'Invalid phone number';
//       }
//     });

//     return errors;
//   };

//   const handleAddOrUpdateLead = async () => {
//     const errors = validateFields();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     try {
//       if (editingId) {
//         await axios.put(`http://localhost:5000/api/leads/${editingId}`, leadData);
//       } else {
//         await axios.post('http://localhost:5000/api/leads', leadData);
//       }

//       fetchLeads();
//       setLeadData(initialLeadState);
//       setFormErrors({});
//       setEditingId(null);
//     } catch (err) {
//       console.error('Error saving lead:', err);
//     }
//   };

//   const handleEdit = (lead) => {
//     setLeadData(lead);
//     setEditingId(lead._id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/leads/${id}`);
//       fetchLeads();
//     } catch (err) {
//       console.error('Error deleting lead:', err);
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={3} fontWeight="bold">
//         {editingId ? 'Edit Lead' : 'Create Lead'}
//       </Typography>

//       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//         <Grid container spacing={2}>
//           {fields.map(([key, label, options]) => (
//             <Grid item xs={12} sm={6} md={4} key={key}>
//               {options ? (
//                 <FormControl fullWidth error={!!formErrors[key]}>
//                   <InputLabel>{label}</InputLabel>
//                   <Select
//                     name={key}
//                     value={leadData[key]}
//                     onChange={handleChange}
//                     label={label}
//                   >
//                     {options.map((opt) => (
//                       <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
//                         {opt}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formErrors[key] && <FormHelperText>{formErrors[key]}</FormHelperText>}
//                 </FormControl>
//               ) : (
//                 <TextField
//                   fullWidth
//                   name={key}
//                   label={label}
//                   value={leadData[key]}
//                   onChange={handleChange}
//                   error={!!formErrors[key]}
//                   helperText={formErrors[key] || ''}
//                 />
//               )}
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<FaPlus />}
//               onClick={handleAddOrUpdateLead}
//             >
//               {editingId ? 'Update Lead' : 'Add Lead'}
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Typography variant="h6" mb={2}>Leads List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
//             <TableRow>
//               {Object.keys(initialLeadState).map((key) => (
//                 <TableCell key={key}>
//                   <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
//                 </TableCell>
//               ))}
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {leadsList.map((lead) => (
//               <TableRow key={lead._id}>
//                 {Object.keys(initialLeadState).map((key) => (
//                   <TableCell key={key}>{lead[key]}</TableCell>
//                 ))}
//                 <TableCell>
//                   <Button color="primary" onClick={() => handleEdit(lead)}>Edit</Button>
//                   <Button color="error" onClick={() => handleDelete(lead._id)}>Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// // export default LeadsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Select,
//   MenuItem,
//   FormHelperText,
//   FormControl,
//   InputLabel
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
//   ['rating', 'Rating', ['None', 'Good', 'Average', 'Low']],
//   ['skypeId', 'Skype ID'],
//   ['secondaryEmail', 'Secondary Email'],
//   ['twitter', 'Twitter'],
// ];

// const LeadsPage = () => {
//   const [leadData, setLeadData] = useState(initialLeadState);
//   const [leadsList, setLeadsList] = useState([]);
//   const [formErrors, setFormErrors] = useState({});
//   const [editingId, setEditingId] = useState(null);

//   const fetchLeads = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/leads');
//       setLeadsList(res.data);
//     } catch (err) {
//       console.error('Error fetching leads:', err);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeadData((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validateFields = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10,15}$/;

//     Object.entries(leadData).forEach(([key, value]) => {
//       if (!value || value.trim() === '') {
//         errors[key] = 'This field is required';
//       }

//       if (['email', 'secondaryEmail'].includes(key) && value && !emailRegex.test(value)) {
//         errors[key] = 'Invalid email format';
//       }

//       if (['phone', 'mobile'].includes(key) && value && !phoneRegex.test(value)) {
//         errors[key] = 'Invalid phone number';
//       }
//     });

//     return errors;
//   };

//   const handleAddOrUpdateLead = async () => {
//     const errors = validateFields();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     try {
//       if (editingId) {
//         await axios.put(`http://localhost:5000/api/leads/${editingId}`, leadData);
//       } else {
//         await axios.post('http://localhost:5000/api/leads', leadData);
//       }

//       fetchLeads();
//       setLeadData(initialLeadState);
//       setFormErrors({});
//       setEditingId(null);
//     } catch (err) {
//       console.error('Error saving lead:', err);
//     }
//   };

//   const handleEdit = (lead) => {
//     // Only map fields present in the form
//     const mappedLead = {};
//     Object.keys(initialLeadState).forEach((key) => {
//       mappedLead[key] = lead[key] || '';
//     });

//     setLeadData(mappedLead);
//     setEditingId(lead._id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/leads/${id}`);
//       fetchLeads();
//     } catch (err) {
//       console.error('Error deleting lead:', err);
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={3} fontWeight="bold">
//         {editingId ? 'Edit Lead' : 'Create Lead'}
//       </Typography>

//       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//         <Grid container spacing={2}>
//           {fields.map(([key, label, options]) => (
//             <Grid item xs={12} sm={6} md={4} key={key}>
//               {options ? (
//                 <FormControl fullWidth error={!!formErrors[key]}>
//                   <InputLabel>{label}</InputLabel>
//                   <Select
//                     name={key}
//                     value={leadData[key]}
//                     onChange={handleChange}
//                     label={label}
//                   >
//                     {options.map((opt) => (
//                       <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
//                         {opt}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formErrors[key] && <FormHelperText>{formErrors[key]}</FormHelperText>}
//                 </FormControl>
//               ) : (
//                 <TextField
//                   fullWidth
//                   name={key}
//                   label={label}
//                   value={leadData[key]}
//                   onChange={handleChange}
//                   error={!!formErrors[key]}
//                   helperText={formErrors[key] || ''}
//                 />
//               )}
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<FaPlus />}
//               onClick={handleAddOrUpdateLead}
//             >
//               {editingId ? 'Update Lead' : 'Add Lead'}
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Typography variant="h6" mb={2}>Leads List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
//             <TableRow>
//               {Object.keys(initialLeadState).map((key) => (
//                 <TableCell key={key}>
//                   <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
//                 </TableCell>
//               ))}
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {leadsList.map((lead) => (
//               <TableRow key={lead._id}>
//                 {Object.keys(initialLeadState).map((key) => (
//                   <TableCell key={key}>{lead[key]}</TableCell>
//                 ))}
//                 <TableCell>
//                   <Button color="primary" onClick={() => handleEdit(lead)}>Edit</Button>
//                   <Button color="error" onClick={() => handleDelete(lead._id)}>Delete</Button>
//                 </TableCell>
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
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  Tooltip,
} from '@mui/material';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

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
  ['rating', 'Rating', ['None', 'Good', 'Average', 'Low']],
  ['skypeId', 'Skype ID'],
  ['secondaryEmail', 'Secondary Email'],
  ['twitter', 'Twitter'],
];

const LeadsPage = () => {
  const [leadData, setLeadData] = useState(initialLeadState);
  const [leadsList, setLeadsList] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

  const fetchLeads = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/leads');
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
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateFields = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}([\/\w\-.?=&%]*)*$/i;

    Object.entries(leadData).forEach(([key, value]) => {
      if (!value || value.trim() === '') {
        errors[key] = 'This field is required';
      }

      if (['email', 'secondaryEmail'].includes(key) && value && !emailRegex.test(value)) {
        errors[key] = 'Invalid email format';
      }

      if (['phone', 'mobile'].includes(key) && value && !phoneRegex.test(value)) {
        errors[key] = 'Invalid phone number';
      }
      if ([
      'leadOwner',
      'firstName',
      'lastName',
      'company',
      'title',
      'fax',
      'leadSource',
      'leadStatus',
      'industry',
      'skypeId',
      'twitter'
    ].includes(key) && value && !nameRegex.test(value)) {
      errors[key] = 'Only letters and spaces are allowed';
    }

    if (key === 'website' && value && !urlRegex.test(value)) {
      errors[key] = 'Invalid website URL';
    }
    });

    return errors;
  };

  const handleAddOrUpdateLead = async () => {
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/leads/${editingId}`, leadData);
      } else {
        await axios.post('http://localhost:5000/api/leads', leadData);
      }

      fetchLeads();
      setLeadData(initialLeadState);
      setFormErrors({});
      setEditingId(null);
    } catch (err) {
      console.error('Error saving lead:', err);
    }
  };

  const handleEdit = (lead) => {
    const mappedLead = {};
    Object.keys(initialLeadState).forEach((key) => {
      mappedLead[key] = lead[key] || '';
    });

    setLeadData(mappedLead);
    setEditingId(lead._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/leads/${id}`);
      fetchLeads();
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        {editingId ? 'Edit Lead' : 'Create Lead'}
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Grid container spacing={2}>
          {fields.map(([key, label, options]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              {options ? (
                <FormControl fullWidth error={!!formErrors[key]}>
                  <InputLabel>{label}</InputLabel>
                  <Select
                    name={key}
                    value={leadData[key]}
                    onChange={handleChange}
                    label={label}
                  >
                    {options.map((opt) => (
                      <MenuItem value={opt === 'None' ? '' : opt} key={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                  {formErrors[key] && <FormHelperText>{formErrors[key]}</FormHelperText>}
                </FormControl>
              ) : (
                <TextField
                  fullWidth
                  name={key}
                  label={label}
                  value={leadData[key]}
                  onChange={handleChange}
                  error={!!formErrors[key]}
                  helperText={formErrors[key] || ''}
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaPlus />}
              onClick={handleAddOrUpdateLead}
            >
              {editingId ? 'Update Lead' : 'Add Lead'}
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
                <TableCell key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
                </TableCell>
              ))}
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leadsList.map((lead) => (
              <TableRow key={lead._id}>
                {Object.keys(initialLeadState).map((key) => (
                  <TableCell key={key}>{lead[key]}</TableCell>
                ))}
                <TableCell>
                  <Tooltip title="Edit Lead">
                    <Button
                      color="primary"
                      onClick={() => handleEdit(lead)}
                      sx={{ minWidth: 'auto', paddingLeft: '16px' }}
                    >
                      <FaEdit style={{ fontSize: '23px' }}/>
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete Lead">
                    <Button
                      color="error"
                      onClick={() => handleDelete(lead._id)}
                      sx={{ minWidth: 'auto', padding: '8px', ml: 1 }}
                    >
                      <FaTrash style={{ fontSize: '23px' }} />
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeadsPage;
