 
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";

const repeatOptions = ["None", "Daily", "Weekly", "Monthly"];
const reminderOptions = ["None", "1 day before", "2 days before"];

const MeetingForm = ({ onAddMeeting }) => {
  const [form, setForm] = useState({
    title: "",
    from: "",
    to: "",
    host: "",
    location: "",
    participants: "",
    relatedTo: "",
    repeat: "None",
    reminder: "None",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.from) newErrors.from = "Start date/time is required";
    if (!form.to) newErrors.to = "End date/time is required";
    if (form.from && form.to && new Date(form.to) <= new Date(form.from))
      newErrors.to = "End date/time must be after start date/time";
    if (!form.host.trim()) newErrors.host = "Host is required";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.participants.trim()) newErrors.participants = "Participants are required";
    if (!form.relatedTo.trim()) newErrors.relatedTo = "Related To is required";
    if (!form.repeat) newErrors.repeat = "Repeat is required";
    if (!form.reminder) newErrors.reminder = "Reminder is required";
    if (!form.description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const participantsArray = form.participants
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);

    const newMeeting = {
      ...form,
      participants: participantsArray,
    };

    console.log("Submitting meeting:", newMeeting);

    if (onAddMeeting) {
      onAddMeeting(newMeeting);
    }

    setForm({
      title: "",
      from: "",
      to: "",
      host: "",
      location: "",
      participants: "",
      relatedTo: "",
      repeat: "None",
      reminder: "None",
      description: "",
    });
    setErrors({});
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Schedule a Meeting
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.title}
              helperText={errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="datetime-local"
              label="From"
              name="from"
              value={form.from}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              error={!!errors.from}
              helperText={errors.from}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="datetime-local"
              label="To"
              name="to"
              value={form.to}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              error={!!errors.to}
              helperText={errors.to}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Host"
              name="host"
              value={form.host}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.host}
              helperText={errors.host}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Participants (comma separated)"
              name="participants"
              value={form.participants}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.participants}
              helperText={errors.participants}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Related To"
              name="relatedTo"
              value={form.relatedTo}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.relatedTo}
              helperText={errors.relatedTo}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Repeat"
              name="repeat"
              value={form.repeat}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.repeat}
              helperText={errors.repeat}
            >
              {repeatOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Reminder"
              name="reminder"
              value={form.reminder}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.reminder}
              helperText={errors.reminder}
            >
              {reminderOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              required
              error={!!errors.description}
              helperText={errors.description}
            />
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button variant="contained" type="submit">
              Add Meeting
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MeetingForm;
