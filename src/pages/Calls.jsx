 
// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Stack,
//   Card,
//   CardContent,
//   Divider,
//   Snackbar,
//   IconButton,
//   InputAdornment
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const Calls = () => {
//   const [calls, setCalls] = useState([]);
//   const [callData, setCallData] = useState({
//     subject: '',
//     type: 'Outbound',
//     duration: '',
//     date: '',
//     contact: '',
//     notes: '',
//   });
//   const [searchQuery, setSearchQuery] = useState('');
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCallData({ ...callData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!callData.subject || !callData.date) return;

//     setCalls([callData, ...calls]);
//     setCallData({
//       subject: '',
//       type: 'Outbound',
//       duration: '',
//       date: '',
//       contact: '',
//       notes: '',
//     });

//     setOpenSnackbar(true);
//   };

//   const handleDelete = (indexToDelete) => {
//     const updated = calls.filter((_, index) => index !== indexToDelete);
//     setCalls(updated);
//   };

//   const filteredCalls = calls.filter(call =>
//     call.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     call.contact.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         📞 Calls
//       </Typography>

//       {/* Call Form */}
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={2}>
//           <TextField
//             label="Subject"
//             name="subject"
//             value={callData.subject}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             select
//             label="Type"
//             name="type"
//             value={callData.type}
//             onChange={handleChange}
//           >
//             <MenuItem value="Outbound">Outbound</MenuItem>
//             <MenuItem value="Inbound">Inbound</MenuItem>
//           </TextField>
//           <TextField
//             label="Duration (mins)"
//             name="duration"
//             type="number"
//             value={callData.duration}
//             onChange={handleChange}
//           />
//           <TextField
//             type="datetime-local"
//             name="date"
//             label="Date & Time"
//             value={callData.date}
//             onChange={handleChange}
//             InputLabelProps={{ shrink: true }}
//             required
//           />
//           <TextField
//             label="Contact"
//             name="contact"
//             value={callData.contact}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Notes"
//             name="notes"
//             multiline
//             rows={3}
//             value={callData.notes}
//             onChange={handleChange}
//           />
//           <Button type="submit" variant="contained">
//             Save Call
//           </Button>
//         </Stack>
//       </form>

//       {/* Snackbar */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={() => setOpenSnackbar(false)}
//       >
//         <Alert severity="success">Call saved successfully!</Alert>
//       </Snackbar>

//       <Divider sx={{ my: 4 }} />

//       {/* Search Filter */}
//       <TextField
//         fullWidth
//         placeholder="Search by Subject or Contact"
//         variant="outlined"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />

//       {/* Call List */}
//       <Stack spacing={2} mt={3}>
//         {filteredCalls.map((call, index) => (
//           <Card key={index} variant="outlined">
//             <CardContent>
//               <Typography variant="h6">{call.subject}</Typography>
//               <Typography variant="body2">Type: {call.type}</Typography>
//               <Typography variant="body2">
//                 Date: {new Date(call.date).toLocaleString()}
//               </Typography>
//               <Typography variant="body2">
//                 Duration: {call.duration || 0} mins
//               </Typography>
//               <Typography variant="body2">Contact: {call.contact}</Typography>
//               <Typography variant="body2">Notes: {call.notes}</Typography>
//               <IconButton
//                 onClick={() => handleDelete(index)}
//                 sx={{ color: 'red', mt: 1 }}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </CardContent>
//           </Card>
//         ))}
//         {filteredCalls.length === 0 && (
//           <Typography variant="body2" color="text.secondary">
//             No calls found.
//           </Typography>
//         )}
//       </Stack>
//     </Container>
//   );
// };

// export default Calls;
import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  Container, Typography, TextField, MenuItem, Button, Stack, Card,
  CardContent, Divider, Snackbar, IconButton, InputAdornment
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Calls = () => {
  const [calls, setCalls] = useState([]);
  const [callData, setCallData] = useState({
    subject: '', type: 'Outbound', duration: '', date: '', contact: '', notes: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Fetch calls from backend
  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const res = await axios.get('/api/calls');
      setCalls(res.data);
    } catch (err) {
      console.error('Failed to fetch calls:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCallData({ ...callData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!callData.subject || !callData.date) return;

    try {
      const res = await axios.post('/api/calls', callData);
      setCalls([res.data, ...calls]);
      setCallData({ subject: '', type: 'Outbound', duration: '', date: '', contact: '', notes: '' });
      setOpenSnackbar(true);
    } catch (err) {
      console.error('Failed to save call:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/calls/${id}`);
      setCalls(calls.filter((call) => call._id !== id));
    } catch (err) {
      console.error('Failed to delete call:', err);
    }
  };

  const filteredCalls = calls.filter(call =>
    call.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    call.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>📞 Calls</Typography>

      {/* Call Form */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Subject" name="subject" value={callData.subject} onChange={handleChange} required
          />
          <TextField
            select label="Type" name="type" value={callData.type} onChange={handleChange}>
            <MenuItem value="Outbound">Outbound</MenuItem>
            <MenuItem value="Inbound">Inbound</MenuItem>
          </TextField>
          <TextField
            label="Duration (mins)" name="duration" type="number" value={callData.duration} onChange={handleChange}
          />
          <TextField
            type="datetime-local" name="date" label="Date & Time" value={callData.date} onChange={handleChange}
            InputLabelProps={{ shrink: true }} required
          />
          <TextField label="Contact" name="contact" value={callData.contact} onChange={handleChange} />
          <TextField label="Notes" name="notes" multiline rows={3} value={callData.notes} onChange={handleChange} />
          <Button type="submit" variant="contained">Save Call</Button>
        </Stack>
      </form>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success">Call saved successfully!</Alert>
      </Snackbar>

      <Divider sx={{ my: 4 }} />

      {/* Search Filter */}
      <TextField
        fullWidth placeholder="Search by Subject or Contact" variant="outlined" value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Call List */}
      <Stack spacing={2} mt={3}>
        {filteredCalls.map((call) => (
          <Card key={call._id} variant="outlined">
            <CardContent>
              <Typography variant="h6">{call.subject}</Typography>
              <Typography variant="body2">Type: {call.type}</Typography>
              <Typography variant="body2">Date: {new Date(call.date).toLocaleString()}</Typography>
              <Typography variant="body2">Duration: {call.duration || 0} mins</Typography>
              <Typography variant="body2">Contact: {call.contact}</Typography>
              <Typography variant="body2">Notes: {call.notes}</Typography>
              <IconButton onClick={() => handleDelete(call._id)} sx={{ color: 'red', mt: 1 }}>
                <DeleteIcon />
              </IconButton>
            </CardContent>
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
