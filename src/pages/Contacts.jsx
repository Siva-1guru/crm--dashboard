
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Typography, TextField, Button, Grid, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, IconButton, Snackbar,
  Alert, Avatar, Card, Divider, Container
} from '@mui/material';
import { FaEdit, FaTrash, FaSave, FaPlus } from 'react-icons/fa';

const API_URL = 'http://localhost:5000/api/contacts';

const getColor = (name) => {
  const colors = ['#007bff', '#6f42c1', '#20c997', '#fd7e14', '#d63384'];
  return colors[name.charCodeAt(0) % colors.length];
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^\d{10,15}$/.test(phone);

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [editingContact, setEditingContact] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchContacts = async () => {
    const res = await axios.get(API_URL);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const showSnackbar = (message, severity = 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateFields = () => {
    const { name, email, phone } = newContact;
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';
    if (!phone.trim()) newErrors.phone = 'Phone is required';
    else if (!validatePhone(phone)) newErrors.phone = 'Phone must be 10–15 digits';
    return newErrors;
  };

  const addContact = async () => {
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    await axios.post(API_URL, newContact);
    setNewContact({ name: '', email: '', phone: '' });
    setErrors({});
    fetchContacts();
    showSnackbar('Contact added successfully!', 'success');
  };

  const saveEdit = async () => {
    const { name, email, phone } = editingContact;
    if (!name || !email || !phone) {
      showSnackbar('All fields are required!');
      return;
    }
    if (!validateEmail(email)) {
      showSnackbar('Invalid email format!');
      return;
    }
    if (!validatePhone(phone)) {
      showSnackbar('Phone must be 10–15 digits!');
      return;
    }

    await axios.put(`${API_URL}/${editingContact._id}`, editingContact);
    setEditingContact(null);
    fetchContacts();
    showSnackbar('Contact updated successfully!', 'success');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await axios.delete(`${API_URL}/${id}`);
      fetchContacts();
      showSnackbar('Contact deleted!', 'success');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to right top, #dfe9f3, #ffffff)', py: 6 }}>
      <Container maxWidth="lg">
        <Card sx={{
          borderRadius: 4,
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,0.75)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          p: 4
        }}>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #007bff, #6610f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            Contacts Manager
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={3}>
              <TextField label="Name" name="name" fullWidth value={newContact.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField label="Email" name="email" fullWidth value={newContact.email} onChange={handleInputChange} error={!!errors.email} helperText={errors.email} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField label="Phone" name="phone" fullWidth value={newContact.phone} onChange={handleInputChange} error={!!errors.phone} helperText={errors.phone} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Button fullWidth variant="contained" size="large" startIcon={<FaPlus />} sx={{ height: '100%' }} onClick={addContact}>Add Contact</Button>
            </Grid>
          </Grid>

          <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 2 }}>
            <Table>
              <TableHead sx={{ bgcolor: '#f4f6f8' }}>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Phone</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact._id} hover>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ bgcolor: getColor(contact.name), color: 'white', width: 32, height: 32, mr: 1 }}>{contact.name[0]}</Avatar>
                        {editingContact?._id === contact._id ? (
                          <TextField variant="standard" value={editingContact.name} onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })} />
                        ) : (
                          contact.name
                        )}
                      </Box>
                    </TableCell>
                    <TableCell>
                      {editingContact?._id === contact._id ? (
                        <TextField variant="standard" value={editingContact.email} onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })} />
                      ) : (
                        <a href={`mailto:${contact.email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{contact.email}</a>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingContact?._id === contact._id ? (
                        <TextField variant="standard" value={editingContact.phone} onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })} />
                      ) : (
                        contact.phone
                      )}
                    </TableCell>
                    <TableCell>
                      {editingContact?._id === contact._id ? (
                        <IconButton color="success" onClick={saveEdit}><FaSave /></IconButton>
                      ) : (
                        <IconButton color="primary" onClick={() => setEditingContact(contact)}><FaEdit /></IconButton>
                      )}
                      <IconButton color="error" onClick={() => handleDelete(contact._id)}><FaTrash /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: '100%' }}>{snackbar.message}</Alert>
          </Snackbar>
        </Card>
      </Container>
    </Box>
  );
};

export default Contacts;
