 
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaSave, FaPlus } from 'react-icons/fa';
// import './contacts.css'; 
// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
//   const [editingContact, setEditingContact] = useState(null);

//   // Load contacts from localStorage
//   useEffect(() => {
//     const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
//     setContacts(storedContacts);
//   }, []);

//   // Save contacts to localStorage
//   const saveContacts = (updatedContacts) => {
//     localStorage.setItem('contacts', JSON.stringify(updatedContacts));
//     setContacts(updatedContacts);
//   };

//   // Handle Input Change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewContact({ ...newContact, [name]: value });
//   };

//   // Add Contact
//   const addContact = () => {
//     if (!newContact.name || !newContact.email || !newContact.phone) {
//       alert("All fields are required!");
//       return;
//     }
//     const updatedContacts = [...contacts, { ...newContact, id: Date.now() }];
//     saveContacts(updatedContacts);
//     setNewContact({ name: '', email: '', phone: '' });
//   };

//   // Edit Contact
//   const handleEdit = (contact) => {
//     setEditingContact(contact);
//   };

//   // Save Edited Contact
//   const saveEdit = () => {
//     const updatedContacts = contacts.map((contact) =>
//       contact.id === editingContact.id ? editingContact : contact
//     );
//     saveContacts(updatedContacts);
//     setEditingContact(null);
//   };

//   // Delete Contact
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this contact?")) {
//       const updatedContacts = contacts.filter((contact) => contact.id !== id);
//       saveContacts(updatedContacts);
//     }
//   };

//   return (
//     <div className="p-8 bg-white shadow rounded-lg">
//       <h1 className="text-3xl font-bold mb-6">Contacts Management</h1>

//       {/* Add Contact Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Add New Contact</h2>
//         <input
//           name="name"
//           placeholder="Name"
//           value={newContact.name}
//           onChange={handleInputChange}
//           className="border p-2 rounded mr-2"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={newContact.email}
//           onChange={handleInputChange}
//           className="border p-2 rounded mr-2"
//         />
//         <input
//           name="phone"
//           placeholder="Phone"
//           value={newContact.phone}
//           onChange={handleInputChange}
//           className="border p-2 rounded mr-2"
//         />
//         <button onClick={addContact} className="bg-blue-500 text-white p-2 rounded">
//           <FaPlus className="mr-2" /> Add Contact
//         </button>
//       </div>

//       {/* Contact List */}
//       <h2 className="text-xl font-semibold mb-4">Contact List</h2>
//       <table className="w-full border-collapse border border-gray-200">
//         <thead>
//           <tr>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact) => (
//             <tr key={contact.id}>
//               <td className="border p-2">
//                 {editingContact?.id === contact.id ? (
//                   <input
//                     value={editingContact.name}
//                     onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
//                     className="ak"
//                   />
//                 ) : (
//                   contact.name
//                 )}
//               </td>
//               <td className="border p-2">
//                 {editingContact?.id === contact.id ? (
//                   <input
//                     value={editingContact.email}
//                     onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
//                     className="ak"
//                   />
//                 ) : (
//                   contact.email
//                 )}
//               </td>
//               <td className="border p-2">
//                 {editingContact?.id === contact.id ? (
//                   <input
//                     value={editingContact.phone}
//                     onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
//                     className="ak"
//                   />
//                 ) : (
//                   contact.phone
//                 )}
//               </td>
//               <td className="border p-2">
//                 {editingContact?.id === contact.id ? (
//                   <button onClick={saveEdit} className="bg-blue text-white p-1 rounded mr-2">
//                     <FaSave />
//                   </button>
//                 ) : (
//                   <button onClick={() => handleEdit(contact)} className="bg-blue text-white p-1 rounded mr-2">
//                     <FaEdit />
//                   </button>
//                 )}
//                 <button onClick={() => handleDelete(contact.id)} className="bg-red text-white p-1 rounded">
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Contacts;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import { FaEdit, FaTrash, FaSave, FaPlus } from 'react-icons/fa';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const saveContacts = (updatedContacts) => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const addContact = () => {
    if (!newContact.name || !newContact.email || !newContact.phone) {
      alert("All fields are required!");
      return;
    }
    const updatedContacts = [...contacts, { ...newContact, id: Date.now() }];
    saveContacts(updatedContacts);
    setNewContact({ name: '', email: '', phone: '' });
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const saveEdit = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editingContact.id ? editingContact : contact
    );
    saveContacts(updatedContacts);
    setEditingContact(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      saveContacts(updatedContacts);
    }
  };

  return (
    <Box p={4} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" mb={3} fontWeight="bold">Contacts Management</Typography>

      <Typography variant="h6" mb={2}>Add New Contact</Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            // label="Name"
            name="name"
            placeholder="Enter name"
            value={newContact.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            // label="Email"
            name="email"
            placeholder="Enter email"
            value={newContact.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            // label="Phone"
            name="phone"
            placeholder="Enter phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" color="primary" startIcon={<FaPlus />} onClick={addContact}>
            Add Contact
          </Button>
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
              <TableRow key={contact.id}>
                <TableCell>
                  {editingContact?.id === contact.id ? (
                    <TextField
                      fullWidth
                      value={editingContact.name}
                      onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
                    />
                  ) : (
                    contact.name
                  )}
                </TableCell>
                <TableCell>
                  {editingContact?.id === contact.id ? (
                    <TextField
                      fullWidth
                      value={editingContact.email}
                      onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
                    />
                  ) : (
                    contact.email
                  )}
                </TableCell>
                <TableCell>
                  {editingContact?.id === contact.id ? (
                    <TextField
                      fullWidth
                      value={editingContact.phone}
                      onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
                    />
                  ) : (
                    contact.phone
                  )}
                </TableCell>
                <TableCell>
                  {editingContact?.id === contact.id ? (
                    <IconButton color="success" onClick={saveEdit}>
                      <FaSave />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => handleEdit(contact)}>
                      <FaEdit />
                    </IconButton>
                  )}
                  <IconButton color="error" onClick={() => handleDelete(contact.id)}>
                    <FaTrash />
                  </IconButton>
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
