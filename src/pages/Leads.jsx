// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';
// import '../style/Leads.css'

// const LeadsManagement = () => {
//   const [leads, setLeads] = useState([
//     { id: 1, name: 'ABC Pvt Ltd', contact: 'John Doe', status: 'Pending' },
//     { id: 2, name: 'XYZ Enterprises', contact: 'Jane Smith', status: 'Contacted' }
//   ]);

//   const [newLead, setNewLead] = useState({ name: '', contact: '', status: 'Pending' });
//   const [editingLead, setEditingLead] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLead({ ...newLead, [name]: value });
//   };

//   const addLead = () => {
//     if (!newLead.name || !newLead.contact) {
//       alert('Please fill all fields');
//       return;
//     }
//     setLeads([...leads, { ...newLead, id: Date.now() }]);
//     setNewLead({ name: '', contact: '', status: 'Pending' });
//   };

//   const handleEdit = (lead) => setEditingLead(lead);

//   const handleSave = () => {
//     setLeads(leads.map((lead) => (lead.id === editingLead.id ? editingLead : lead)));
//     setEditingLead(null);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       setLeads(leads.filter((lead) => lead.id !== id));
//     }
//   };

//   return (
//     <div className="p-8 bg-white shadow rounded-lg">
//       <h1 className="text-3xl font-bold mb-6">Leads Management</h1>

//       {/* Add New Lead */}
//       <div className="add">
//         <h2 className="text-xl font-semibold mb-2">Add New Lead</h2>
//         <input name="name" placeholder="Company Name" value={newLead.name} onChange={handleInputChange} className="border p-2 rounded mr-2 j" /><br />
//         <input name="contact" placeholder="Contact Name" value={newLead.contact} onChange={handleInputChange} className="border p-2 rounded mr-2" />
//         <button onClick={addLead} className="bro">
//           <FaPlus className="mr-2" /> Add Lead
//         </button>
//       </div>

//       {/* Lead List */}
//       <h2 className="text-xl font-semibold mb-4">Leads List</h2>
//       <table className="w-full border-collapse border border-gray-200">
//         <thead>
//           <tr>
//             <th className="border p-2">Company</th>
//             <th className="border p-2">Contact</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead.id}>
//               <td className="border p-2">{editingLead?.id === lead.id ? <input value={editingLead.name} onChange={(e) => setEditingLead({ ...editingLead, name: e.target.value })} className="a" /> : lead.name}</td>
//               <td className="border p-2">{editingLead?.id === lead.id ? <input value={editingLead.contact} onChange={(e) => setEditingLead({ ...editingLead, contact: e.target.value })} className="a" /> : lead.contact}</td>
//               <td className="border p-2">
//                 {editingLead?.id === lead.id ? (
//                   <select value={editingLead.status} onChange={(e) => setEditingLead({ ...editingLead, status: e.target.value })} className="a">
//                     <option>Pending</option>
//                     <option>Contacted</option>
//                     <option>Converted</option>
//                   </select>
//                 ) : (
//                   lead.status
//                 )}
//               </td>
//               <td className="border p-2">
//                 {editingLead?.id === lead.id ? (
//                   <button onClick={handleSave} className="chill"><FaSave /></button>
//                 ) : (
//                   <button onClick={() => handleEdit(lead)} className="chill"><FaEdit /></button>
//                 )}
//                 <button onClick={() => handleDelete(lead.id)} className="chill"><FaTrash /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // export default LeadsManagement;
// import React, { useState } from 'react';
// import {
//   Box,
//   Grid,
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from '@mui/material';
// import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';

// const LeadsManagement = () => {
//   const [leads, setLeads] = useState([
//     { id: 1, name: 'ABC Pvt Ltd', contact: 'John Doe', status: 'Pending' },
//     { id: 2, name: 'XYZ Enterprises', contact: 'Jane Smith', status: 'Contacted' }
//   ]);

//   const [newLead, setNewLead] = useState({ name: '', contact: '', status: 'Pending' });
//   const [editingLead, setEditingLead] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLead({ ...newLead, [name]: value });
//   };

//   const addLead = () => {
//     if (!newLead.name || !newLead.contact) {
//       alert('Please fill all fields');
//       return;
//     }
//     setLeads([...leads, { ...newLead, id: Date.now() }]);
//     setNewLead({ name: '', contact: '', status: 'Pending' });
//   };

//   const handleEdit = (lead) => setEditingLead(lead);

//   const handleSave = () => {
//     setLeads(leads.map((lead) => (lead.id === editingLead.id ? editingLead : lead)));
//     setEditingLead(null);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       setLeads(leads.filter((lead) => lead.id !== id));
//     }
//   };

//   return (
//     <Box p={3} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
//       <Typography variant="h4" mb={3} fontWeight="bold">Leads Management</Typography>

//       {/* Add New Lead */}
//       <Typography variant="h6" mb={2}>Add New Lead</Typography>
//       <Grid container spacing={2} mb={3}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             name="name"
//             label="Company Name"
//             value={newLead.name}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             name="contact"
//             label="Contact Name"
//             value={newLead.contact}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={addLead}
//             startIcon={<FaPlus />}
//             sx={{ height: '100%' }}
//           >
//             Add Lead
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Lead List */}
//       <Typography variant="h6" mb={2}>Leads List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//             <TableRow>
//               <TableCell><strong>Company</strong></TableCell>
//               <TableCell><strong>Contact</strong></TableCell>
//               <TableCell><strong>Status</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {leads.map((lead) => (
//               <TableRow key={lead.id}>
//                 <TableCell>
//                   {editingLead?.id === lead.id ? (
//                     <TextField
//                       fullWidth
//                       value={editingLead.name}
//                       onChange={(e) => setEditingLead({ ...editingLead, name: e.target.value })}
//                     />
//                   ) : (
//                     lead.name
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingLead?.id === lead.id ? (
//                     <TextField
//                       fullWidth
//                       value={editingLead.contact}
//                       onChange={(e) => setEditingLead({ ...editingLead, contact: e.target.value })}
//                     />
//                   ) : (
//                     lead.contact
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingLead?.id === lead.id ? (
//                     <Select
//                       fullWidth
//                       value={editingLead.status}
//                       onChange={(e) => setEditingLead({ ...editingLead, status: e.target.value })}
//                     >
//                       <MenuItem value="Pending">Pending</MenuItem>
//                       <MenuItem value="Contacted">Contacted</MenuItem>
//                       <MenuItem value="Converted">Converted</MenuItem>
//                     </Select>
//                   ) : (
//                     lead.status
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingLead?.id === lead.id ? (
//                     <Button onClick={handleSave} color="success"><FaSave /></Button>
//                   ) : (
//                     <Button onClick={() => handleEdit(lead)}><FaEdit /></Button>
//                   )}
//                   <Button onClick={() => handleDelete(lead.id)} color="error"><FaTrash /></Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default LeadsManagement;
import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';

const LeadsManagement = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'ABC Pvt Ltd', contact: 'John Doe', status: 'Pending' },
    { id: 2, name: 'XYZ Enterprises', contact: 'Jane Smith', status: 'Contacted' }
  ]);

  const [newLead, setNewLead] = useState({ name: '', contact: '', status: 'Pending' });
  const [editingLead, setEditingLead] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  const addLead = () => {
    if (!newLead.name || !newLead.contact) {
      alert('Please fill all fields');
      return;
    }
    setLeads([...leads, { ...newLead, id: Date.now() }]);
    setNewLead({ name: '', contact: '', status: 'Pending' });
  };

  const handleEdit = (lead) => setEditingLead(lead);

  const handleSave = () => {
    setLeads(leads.map((lead) => (lead.id === editingLead.id ? editingLead : lead)));
    setEditingLead(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter((lead) => lead.id !== id));
    }
  };

  return (
    <Box p={3} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" mb={3} fontWeight="bold">Leads Management</Typography>

      {/* Add New Lead */}
      <Typography variant="h6" mb={2}>Add New Lead</Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="name"
            // label="Company Name"
            placeholder="Enter company name"
            value={newLead.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="contact"
            // label="Contact Name"
            placeholder="Enter contact name"
            value={newLead.contact}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addLead}
            startIcon={<FaPlus />}
            sx={{ height: '100%' }}
          >
            Add Lead
          </Button>
        </Grid>
      </Grid>

      {/* Lead List */}
      <Typography variant="h6" mb={2}>Leads List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Contact</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  {editingLead?.id === lead.id ? (
                    <TextField
                      fullWidth
                      value={editingLead.name}
                      onChange={(e) => setEditingLead({ ...editingLead, name: e.target.value })}
                    />
                  ) : (
                    lead.name
                  )}
                </TableCell>
                <TableCell>
                  {editingLead?.id === lead.id ? (
                    <TextField
                      fullWidth
                      value={editingLead.contact}
                      onChange={(e) => setEditingLead({ ...editingLead, contact: e.target.value })}
                    />
                  ) : (
                    lead.contact
                  )}
                </TableCell>
                <TableCell>
                  {editingLead?.id === lead.id ? (
                    <Select
                      fullWidth
                      value={editingLead.status}
                      onChange={(e) => setEditingLead({ ...editingLead, status: e.target.value })}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Contacted">Contacted</MenuItem>
                      <MenuItem value="Converted">Converted</MenuItem>
                    </Select>
                  ) : (
                    lead.status
                  )}
                </TableCell>
                <TableCell>
                  {editingLead?.id === lead.id ? (
                    <Button onClick={handleSave} color="success"><FaSave /></Button>
                  ) : (
                    <Button onClick={() => handleEdit(lead)}><FaEdit /></Button>
                  )}
                  <Button onClick={() => handleDelete(lead.id)} color="error"><FaTrash /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeadsManagement;
