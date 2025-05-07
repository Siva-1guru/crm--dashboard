// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Select,
//   MenuItem,
//   IconButton,
// } from '@mui/material';
// import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
// import { v4 as uuidv4 } from 'uuid';

// const stages = ['Prospect', 'Qualified', 'Proposal', 'Won', 'Lost'];

// const Deals = () => {
//   const [deals, setDeals] = useState([
//     { id: uuidv4(), name: 'Deal A', value: 5000, stage: 'Prospect', date: '2024-04-01' },
//     { id: uuidv4(), name: 'Deal B', value: 12000, stage: 'Proposal', date: '2024-04-05' },
//   ]);

//   const [open, setOpen] = useState(false);
//   const [newDeal, setNewDeal] = useState({ name: '', value: '', stage: 'Prospect' });
//   const [editingDeal, setEditingDeal] = useState(null);

//   const handleChange = (e) => {
//     setNewDeal({ ...newDeal, [e.target.name]: e.target.value });
//   };

//   const handleAddDeal = () => {
//     if (!newDeal.name.trim() || !newDeal.value) return;
//     setDeals([
//       ...deals,
//       {
//         ...newDeal,
//         id: uuidv4(),
//         value: parseFloat(newDeal.value),
//         date: new Date().toLocaleDateString(),
//       },
//     ]);
//     setNewDeal({ name: '', value: '', stage: 'Prospect' });
//     setOpen(false);
//   };

//   const handleDelete = (id) => {
//     setDeals(deals.filter((d) => d.id !== id));
//   };

//   const handleEdit = (deal) => {
//     setEditingDeal(deal);
//   };

//   const handleSaveEdit = () => {
//     setDeals(deals.map((d) => (d.id === editingDeal.id ? editingDeal : d)));
//     setEditingDeal(null);
//   };

//   return (
//     <Box>
//       <Box display="flex" justifyContent="space-between" mb={2}>
//         <Typography variant="h6">Deals Overview</Typography>
//         <Button startIcon={<FaPlus />} onClick={() => setOpen(true)} variant="contained">
//           Add Deal
//         </Button>
//       </Box>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Value</TableCell>
//               <TableCell>Stage</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {deals.map((deal) => (
//               <TableRow key={deal.id}>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <TextField
//                       value={editingDeal.name}
//                       onChange={(e) =>
//                         setEditingDeal({ ...editingDeal, name: e.target.value })
//                       }
//                     />
//                   ) : (
//                     deal.name
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <TextField
//                       value={editingDeal.value}
//                       onChange={(e) =>
//                         setEditingDeal({ ...editingDeal, value: e.target.value })
//                       }
//                     />
//                   ) : (
//                     `$${deal.value}`
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <Select
//                       value={editingDeal.stage}
//                       onChange={(e) =>
//                         setEditingDeal({ ...editingDeal, stage: e.target.value })
//                       }
//                     >
//                       {stages.map((s) => (
//                         <MenuItem key={s} value={s}>
//                           {s}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : (
//                     deal.stage
//                   )}
//                 </TableCell>
//                 <TableCell>{deal.date}</TableCell>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <Button onClick={handleSaveEdit} size="small" color="success">
//                       Save
//                     </Button>
//                   ) : (
//                     <IconButton onClick={() => handleEdit(deal)}>
//                       <FaEdit />
//                     </IconButton>
//                   )}
//                   <IconButton onClick={() => handleDelete(deal.id)} color="error">
//                     <FaTrash />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Deal Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>Add New Deal</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             margin="dense"
//             label="Deal Name"
//             name="name"
//             value={newDeal.name}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             margin="dense"
//             label="Deal Value"
//             name="value"
//             type="number"
//             value={newDeal.value}
//             onChange={handleChange}
//           />
//           <Select
//             fullWidth
//             margin="dense"
//             name="stage"
//             value={newDeal.stage}
//             onChange={handleChange}
//           >
//             {stages.map((s) => (
//               <MenuItem key={s} value={s}>
//                 {s}
//               </MenuItem>
//             ))}
//           </Select>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleAddDeal} variant="contained">
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// // export default Deals;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, IconButton } from '@mui/material';
// import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
// import { v4 as uuidv4 } from 'uuid';

// const stages = ['Prospect', 'Qualified', 'Proposal', 'Won', 'Lost'];

// const Deals = () => {
//   const [deals, setDeals] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [newDeal, setNewDeal] = useState({ name: '', value: '', stage: 'Prospect' });
//   const [editingDeal, setEditingDeal] = useState(null);

//   // Fetch deals from the backend when the component mounts
//   useEffect(() => {
//     axios.get('http://localhost:5000/deals')
//       .then((response) => setDeals(response.data))
//       .catch((error) => console.error('Error fetching deals:', error));
//   }, []);

//   const handleChange = (e) => {
//     setNewDeal({ ...newDeal, [e.target.name]: e.target.value });
//   };

//   const handleAddDeal = () => {
//     if (!newDeal.name.trim() || !newDeal.value) return;
//     axios.post('http://localhost:5000/deals', newDeal)
//       .then((response) => {
//         setDeals([...deals, response.data]);
//         setNewDeal({ name: '', value: '', stage: 'Prospect' });
//         setOpen(false);
//       })
//       .catch((error) => console.error('Error adding deal:', error));
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/deals/${id}`)
//       .then(() => setDeals(deals.filter((d) => d.id !== id)))
//       .catch((error) => console.error('Error deleting deal:', error));
//   };

//   const handleEdit = (deal) => {
//     setEditingDeal(deal);
//   };

//   const handleSaveEdit = () => {
//     axios.put(`http://localhost:5000/deals/${editingDeal.id}`, editingDeal)
//       .then((response) => {
//         setDeals(deals.map((d) => (d.id === editingDeal.id ? response.data : d)));
//         setEditingDeal(null);
//       })
//       .catch((error) => console.error('Error saving edit:', error));
//   };

//   return (
//     <Box>
//       <Box display="flex" justifyContent="space-between" mb={2}>
//         <Typography variant="h6">Deals Overview</Typography>
//         <Button startIcon={<FaPlus />} onClick={() => setOpen(true)} variant="contained">
//           Add Deal
//         </Button>
//       </Box>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Value</TableCell>
//               <TableCell>Stage</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {deals.map((deal) => (
//               <TableRow key={deal.id}>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <TextField
//                       value={editingDeal.name}
//                       onChange={(e) =>
//                         setEditingDeal({ ...editingDeal, name: e.target.value })
//                       }
//                     />
//                   ) : (
//                     deal.name
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <TextField
//                       value={editingDeal.value}
//                       onChange={(e) =>
//                         setEditingDeal({ ...editingDeal, value: e.target.value })
//                       }
//                     />
//                   ) : (
//                     `$${deal.value}`
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <Select
//                       value={editingDeal.stage}
//                       onChange={(e) =>
//                         setEditingDeal({ ...editingDeal, stage: e.target.value })
//                       }
//                     >
//                       {stages.map((s) => (
//                         <MenuItem key={s} value={s}>
//                           {s}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   ) : (
//                     deal.stage
//                   )}
//                 </TableCell>
//                 <TableCell>{deal.date}</TableCell>
//                 <TableCell>
//                   {editingDeal?.id === deal.id ? (
//                     <Button onClick={handleSaveEdit} size="small" color="success">
//                       Save
//                     </Button>
//                   ) : (
//                     <IconButton onClick={() => handleEdit(deal)}>
//                       <FaEdit />
//                     </IconButton>
//                   )}
//                   <IconButton onClick={() => handleDelete(deal.id)} color="error">
//                     <FaTrash />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Deal Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>Add New Deal</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             margin="dense"
//             label="Deal Name"
//             name="name"
//             value={newDeal.name}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             margin="dense"
//             label="Deal Value"
//             name="value"
//             type="number"
//             value={newDeal.value}
//             onChange={handleChange}
//           />
//           <Select
//             fullWidth
//             margin="dense"
//             name="stage"
//             value={newDeal.stage}
//             onChange={handleChange}
//           >
//             {stages.map((s) => (
//               <MenuItem key={s} value={s}>
//                 {s}
//               </MenuItem>
//             ))}
//           </Select>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleAddDeal} variant="contained">
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Deals;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, IconButton } from '@mui/material';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won', 'Lost'];

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [open, setOpen] = useState(false);
  const [newDeal, setNewDeal] = useState({ name: '', value: '', stage: 'Prospect' });
  const [editingDeal, setEditingDeal] = useState(null);

  // Fetch deals from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/deals')
      .then((response) => setDeals(response.data))
      .catch((error) => console.error('Error fetching deals:', error));
  }, []);

  const handleChange = (e) => {
    setNewDeal({ ...newDeal, [e.target.name]: e.target.value });
  };

  const handleAddDeal = () => {
    if (!newDeal.name.trim() || !newDeal.value) return;

    const dealPayload = {
      name: newDeal.name,
      value: parseFloat(newDeal.value),
      stage: newDeal.stage,
      date: new Date().toLocaleDateString(), // Format the date as needed
    };

    axios.post('http://localhost:5000/api/deals', dealPayload)
      .then((response) => {
        setDeals([...deals, response.data]);
        setNewDeal({ name: '', value: '', stage: 'Prospect' });
        setOpen(false);
      })
      .catch((error) => console.error('Error adding deal:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/deals/${id}`)
      .then(() => setDeals(deals.filter((d) => d._id !== id)))
      .catch((error) => console.error('Error deleting deal:', error));
  };

  const handleEdit = (deal) => {
    setEditingDeal(deal);
  };

  const handleSaveEdit = () => {
    axios.put(`http://localhost:5000/api/deals/${editingDeal._id}`, editingDeal)
      .then((response) => {
        setDeals(deals.map((d) => (d._id === editingDeal._id ? response.data : d)));
        setEditingDeal(null);
      })
      .catch((error) => console.error('Error saving edit:', error));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Deals Overview</Typography>
        <Button startIcon={<FaPlus />} onClick={() => setOpen(true)} variant="contained">
          Add Deal
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deals.map((deal) => (
              <TableRow key={deal._id}>
                <TableCell>
                  {editingDeal?._id === deal._id ? (
                    <TextField
                      value={editingDeal.name}
                      onChange={(e) => setEditingDeal({ ...editingDeal, name: e.target.value })}
                    />
                  ) : (
                    deal.name
                  )}
                </TableCell>
                <TableCell>
                  {editingDeal?._id === deal._id ? (
                    <TextField
                      value={editingDeal.value}
                      onChange={(e) => setEditingDeal({ ...editingDeal, value: e.target.value })}
                    />
                  ) : (
                    `$${deal.value}`
                  )}
                </TableCell>
                <TableCell>
                  {editingDeal?._id === deal._id ? (
                    <Select
                      value={editingDeal.stage}
                      onChange={(e) => setEditingDeal({ ...editingDeal, stage: e.target.value })}
                    >
                      {stages.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    deal.stage
                  )}
                </TableCell>
                <TableCell>{deal.date}</TableCell>
                <TableCell>
                  {editingDeal?._id === deal._id ? (
                    <Button onClick={handleSaveEdit} size="small" color="success">
                      Save
                    </Button>
                  ) : (
                    <IconButton onClick={() => handleEdit(deal)}>
                      <FaEdit />
                    </IconButton>
                  )}
                  <IconButton onClick={() => handleDelete(deal._id)} color="error">
                    <FaTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Deal Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Deal</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Deal Name"
            name="name"
            value={newDeal.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Deal Value"
            name="value"
            type="number"
            value={newDeal.value}
            onChange={handleChange}
          />
          <Select
            fullWidth
            margin="dense"
            name="stage"
            value={newDeal.stage}
            onChange={handleChange}
          >
            {stages.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddDeal} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Deals;
