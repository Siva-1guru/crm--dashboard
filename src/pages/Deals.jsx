
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, Dialog,
  DialogTitle, DialogContent, DialogActions, Select, MenuItem, IconButton
} from '@mui/material';
import { FaTrash, FaPlus } from 'react-icons/fa';

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won', 'Lost'];

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [open, setOpen] = useState(false);
  const [newDeal, setNewDeal] = useState({ name: '', value: '', stage: 'Prospect' });

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
      date: new Date().toLocaleDateString(),
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

  return (
    <Box p={3}>
      {/* <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Deals Overview</Typography>
        <Button startIcon={<FaPlus />} onClick={() => setOpen(true)} variant="contained">
          Add Deal
        </Button>
      </Box> */}

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
                <TableCell>{deal.name}</TableCell>
                <TableCell>${deal.value}</TableCell>
                <TableCell>{deal.stage}</TableCell>
                <TableCell>{deal.date}</TableCell>
                <TableCell>
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
