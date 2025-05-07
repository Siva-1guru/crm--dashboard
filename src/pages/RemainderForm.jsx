import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';


const ReminderForm = ({ leadId }) => {
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');
  const [channel, setChannel] = useState('whatsapp');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reminders/setReminder', { leadId, message, time, channel });
      alert('Reminder set successfully!');
    } catch (err) {
      alert('Error setting reminder');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Reminder Message"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <TextField
        type="datetime-local"
        label="Send At"
        fullWidth
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <FormControl fullWidth>
        <InputLabel>Channel</InputLabel>
        <Select
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          label="Channel"
        >
          <MenuItem value="whatsapp">WhatsApp</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">Set Reminder</Button>
    </form>
  );
};

export default ReminderForm;
