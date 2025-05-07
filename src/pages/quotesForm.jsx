// import React, { useState } from 'react';
// import { TextField, Button, Grid, MenuItem } from '@mui/material';
// import axios from 'axios';

// const statusOptions = ['Draft', 'Sent', 'Accepted', 'Rejected'];

// const QuotesForm = ({ onQuoteCreated }) => {
//   const [form, setForm] = useState({
//     quoteNumber: '',
//     customerName: '',
//     validUntil: '',
//     totalAmount: '',
//     status: 'Draft',
//   });

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/api/quotes', form);
//     onQuoteCreated(); // Refresh list
//     setForm({ quoteNumber: '', customerName: '', validUntil: '', totalAmount: '', status: 'Draft' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={2} sx={{ mb: 2 }}>
//         <Grid item xs={6}>
//           <TextField name="quoteNumber" label="Quote #" value={form.quoteNumber} onChange={handleChange} fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField name="customerName" label="Customer Name" value={form.customerName} onChange={handleChange} fullWidth />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField name="validUntil" type="date" label="Valid Until" value={form.validUntil} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField name="totalAmount" label="Total Amount" value={form.totalAmount} onChange={handleChange} fullWidth type="number" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField name="status" label="Status" value={form.status} onChange={handleChange} fullWidth select>
//             {statusOptions.map(status => (
//               <MenuItem key={status} value={status}>{status}</MenuItem>
//             ))}
//           </TextField>
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" fullWidth>Add Quote</Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default QuotesForm;
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Grid
} from '@mui/material';

const QuoteForm = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    clientName: '',
    description: '',
    total: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({ clientName: '', description: '', total: '', date: '' });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Quote</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField label="Client Name" fullWidth name="clientName" value={form.clientName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" fullWidth name="description" value={form.description} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Total Amount" fullWidth name="total" value={form.total} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Date" type="date" fullWidth name="date" value={form.date} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuoteForm;
