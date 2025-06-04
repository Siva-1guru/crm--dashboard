 
import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  Container, Typography, TextField, MenuItem, Button, Stack, Card,
  Snackbar, IconButton, InputAdornment, Avatar, Box, Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import MuiAlert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Calls = () => {
  const [calls, setCalls] = useState([]);
  const [callData, setCallData] = useState({
    subject: '',
    type: 'Outbound',
    duration: '',
    date: '',
    contact: '',
    notes: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const theme = useTheme();

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const res = await axios.get('/api/calls');
      setCalls(res.data);
    } catch (err) {
      console.error('Error fetching calls:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCallData({ ...callData, [name]: value });
  };

  const validateFields = (data) => {
    const errors = {};
    const phoneRegex = /^\d{10}$/;

    if (!data.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!data.duration.trim()) {
      errors.duration = 'Duration is required';
    }
    if (!data.date.trim()) {
      errors.date = 'Date is required';
    }
    if (!data.contact.trim()) {
      errors.contact = 'Contact is required';
    } else if (!phoneRegex.test(data.contact)) {
      errors.contact = 'Contact must be a 10-digit number';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFields(callData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const res = await axios.post('/api/calls', callData);
      setCalls([res.data, ...calls]);
      setCallData({
        subject: '',
        type: 'Outbound',
        duration: '',
        date: '',
        contact: '',
        notes: ''
      });
      setFormErrors({});
      setOpenSnackbar(true);
    } catch (err) {
      console.error('Error saving call:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/calls/${id}`);
      setCalls(calls.filter((call) => call._id !== id));
    } catch (err) {
      console.error('Error deleting call:', err);
    }
  };

  const filteredCalls = calls.filter(call =>
    call.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    call.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>📞 Calls</Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Subject"
            name="subject"
            value={callData.subject}
            onChange={handleChange}
            error={!!formErrors.subject}
            helperText={formErrors.subject}
          />
          <TextField
            select
            label="Type"
            name="type"
            value={callData.type}
            onChange={handleChange}
          >
            <MenuItem value="Outbound">Outbound</MenuItem>
            <MenuItem value="Inbound">Inbound</MenuItem>
          </TextField>
          <TextField
            label="Duration (mins)"
            name="duration"
            type="number"
            value={callData.duration}
            onChange={handleChange}
            error={!!formErrors.duration}
            helperText={formErrors.duration}
          />
          <TextField
            type="datetime-local"
            name="date"
            label="Date & Time"
            value={callData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!formErrors.date}
            helperText={formErrors.date}
          />
          <TextField
            label="Contact"
            name="contact"
            value={callData.contact}
            onChange={handleChange}
            error={!!formErrors.contact}
            helperText={formErrors.contact}
          />
          <TextField
            label="Notes"
            name="notes"
            multiline
            rows={3}
            value={callData.notes}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">Save Call</Button>
        </Stack>
      </form>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success">Call saved successfully!</Alert>
      </Snackbar>

      <Divider sx={{ my: 4 }} />

      <TextField
        fullWidth
        placeholder="Search by Subject or Contact"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Stack spacing={2} mt={3}>
        {filteredCalls.map((call) => (
          <Card
            key={call._id}
            variant="outlined"
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: theme.shadows[5],
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)', boxShadow: theme.shadows[10] },
              padding: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar sx={{ marginRight: 2 }}>
                {call.contact ? call.contact[0].toUpperCase() : '?'}
              </Avatar>
              <Stack spacing={1}>
                <Typography variant="h6">{call.subject}</Typography>
                <Typography variant="body2">Type: {call.type}</Typography>
                <Typography variant="body2">Date: {new Date(call.date).toLocaleString()}</Typography>
                <Typography variant="body2">Duration: {call.duration || 0} mins</Typography>
                <Typography variant="body2">Contact: {call.contact}</Typography>
                <Typography variant="body2">Notes: {call.notes}</Typography>
              </Stack>
            </Box>
            <IconButton onClick={() => handleDelete(call._id)} sx={{ color: 'red' }}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
        {filteredCalls.length === 0 && (
          <Typography variant="body2" color="text.secondary">No calls found.</Typography>
        )}
      </Stack>
    </Container>
  );
};

export default Calls;
