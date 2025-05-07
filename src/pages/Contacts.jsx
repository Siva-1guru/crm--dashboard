 
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Grid,
//   IconButton,
// } from '@mui/material';
// import { FaEdit, FaTrash, FaSave, FaPlus } from 'react-icons/fa';

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
//   const [editingContact, setEditingContact] = useState(null);

//   useEffect(() => {
//     const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
//     setContacts(storedContacts);
//   }, []);

//   const saveContacts = (updatedContacts) => {
//     localStorage.setItem('contacts', JSON.stringify(updatedContacts));
//     setContacts(updatedContacts);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewContact({ ...newContact, [name]: value });
//   };

//   const addContact = () => {
//     if (!newContact.name || !newContact.email || !newContact.phone) {
//       alert("All fields are required!");
//       return;
//     }
//     const updatedContacts = [...contacts, { ...newContact, id: Date.now() }];
//     saveContacts(updatedContacts);
//     setNewContact({ name: '', email: '', phone: '' });
//   };

//   const handleEdit = (contact) => {
//     setEditingContact(contact);
//   };

//   const saveEdit = () => {
//     const updatedContacts = contacts.map((contact) =>
//       contact.id === editingContact.id ? editingContact : contact
//     );
//     saveContacts(updatedContacts);
//     setEditingContact(null);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this contact?")) {
//       const updatedContacts = contacts.filter((contact) => contact.id !== id);
//       saveContacts(updatedContacts);
//     }
//   };

//   return (
//     <Box p={4} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
//       <Typography variant="h4" mb={3} fontWeight="bold">Contacts Management</Typography>

//       <Typography variant="h6" mb={2}>Add New Contact</Typography>
//       <Grid container spacing={2} mb={3}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             // label="Name"
//             name="name"
//             placeholder="Enter name"
//             value={newContact.name}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             // label="Email"
//             name="email"
//             placeholder="Enter email"
//             value={newContact.email}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             // label="Phone"
//             name="phone"
//             placeholder="Enter phone"
//             value={newContact.phone}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={12}>
//           <Button variant="contained" color="primary" startIcon={<FaPlus />} onClick={addContact}>
//             Add Contact
//           </Button>
//         </Grid>
//       </Grid>

//       <Typography variant="h6" mb={2}>Contact List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//             <TableRow>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//               <TableCell><strong>Phone</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {contacts.map((contact) => (
//               <TableRow key={contact.id}>
//                 <TableCell>
//                   {editingContact?.id === contact.id ? (
//                     <TextField
//                       fullWidth
//                       value={editingContact.name}
//                       onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
//                     />
//                   ) : (
//                     contact.name
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingContact?.id === contact.id ? (
//                     <TextField
//                       fullWidth
//                       value={editingContact.email}
//                       onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
//                     />
//                   ) : (
//                     contact.email
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingContact?.id === contact.id ? (
//                     <TextField
//                       fullWidth
//                       value={editingContact.phone}
//                       onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
//                     />
//                   ) : (
//                     contact.phone
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {editingContact?.id === contact.id ? (
//                     <IconButton color="success" onClick={saveEdit}>
//                       <FaSave />
//                     </IconButton>
//                   ) : (
//                     <IconButton onClick={() => handleEdit(contact)}>
//                       <FaEdit />
//                     </IconButton>
//                   )}
//                   <IconButton color="error" onClick={() => handleDelete(contact.id)}>
//                     <FaTrash />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Contacts;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Typography, TextField, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Grid, IconButton
} from '@mui/material';
import { FaEdit, FaTrash, FaSave, FaPlus } from 'react-icons/fa';

const API_URL = 'http://localhost:5000/api/contacts';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    const res = await axios.get(API_URL);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const addContact = async () => {
    if (!newContact.name || !newContact.email || !newContact.phone) {
      alert("All fields are required!");
      return;
    }
    await axios.post(API_URL, newContact);
    setNewContact({ name: '', email: '', phone: '' });
    fetchContacts();
  };

  const saveEdit = async () => {
    await axios.put(`${API_URL}/${editingContact._id}`, editingContact);
    setEditingContact(null);
    fetchContacts();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchContacts();
    }
  };

  return (
    <Box p={4} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" mb={3} fontWeight="bold">Contacts Management</Typography>

      <Typography variant="h6" mb={2}>Add New Contact</Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth name="name" placeholder="Enter name" value={newContact.name} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth name="email" placeholder="Enter email" value={newContact.email} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth name="phone" placeholder="Enter phone" value={newContact.phone} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" startIcon={<FaPlus />} onClick={addContact}>Add Contact</Button>
        </Grid>
      </Grid>

      <Typography variant="h6" mb={2}>Contact List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>
                  {editingContact?._id === contact._id ? (
                    <TextField fullWidth value={editingContact.name} onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })} />
                  ) : (
                    contact.name
                  )}
                </TableCell>
                <TableCell>
                  {editingContact?._id === contact._id ? (
                    <TextField fullWidth value={editingContact.email} onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })} />
                  ) : (
                    contact.email
                  )}
                </TableCell>
                <TableCell>
                  {editingContact?._id === contact._id ? (
                    <TextField fullWidth value={editingContact.phone} onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })} />
                  ) : (
                    contact.phone
                  )}
                </TableCell>
                <TableCell>
                  {editingContact?._id === contact._id ? (
                    <IconButton color="success" onClick={saveEdit}><FaSave /></IconButton>
                  ) : (
                    <IconButton onClick={() => setEditingContact(contact)}><FaEdit /></IconButton>
                  )}
                  <IconButton color="error" onClick={() => handleDelete(contact._id)}><FaTrash /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Contacts;
