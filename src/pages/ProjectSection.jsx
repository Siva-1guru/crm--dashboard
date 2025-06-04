
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  IconButton,
  Snackbar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return 'warning';
    case 'completed':
      return 'success';
    case 'new':
    default:
      return 'info';
  }
};

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
    default:
      return 'default';
  }
};

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({
    name: '',
    client: '',
    status: 'New',
    deadline: '',
    priority: 'Medium',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProject = async () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Project name is required';
    if (!form.client.trim()) newErrors.client = 'Client name is required';
    if (!form.status) newErrors.status = 'Status is required';
    if (!form.priority) newErrors.priority = 'Priority is required';
    if (!form.deadline) newErrors.deadline = 'Deadline is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await axios.post('http://localhost:5000/api/projects', form);
      setProjects([response.data, ...projects]);
      setFilteredProjects([response.data, ...filteredProjects]);
      setForm({
        name: '',
        client: '',
        status: 'New',
        deadline: '',
        priority: 'Medium',
        description: '',
      });
      setOpenDialog(false);
      setSnackbar({ open: true, message: 'Project added successfully!', type: 'success' });
    } catch (error) {
      console.error('Error adding project:', error);
      setSnackbar({ open: true, message: 'Failed to add project', type: 'error' });
    }
  };

  const handleDeleteClick = async (project) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${project._id}`);
      const updatedProjects = projects.filter((p) => p._id !== project._id);
      const updatedFiltered = filteredProjects.filter((p) => p._id !== project._id);
      setProjects(updatedProjects);
      setFilteredProjects(updatedFiltered);
      setSnackbar({ open: true, message: 'Project deleted successfully!', type: 'success' });
    } catch (error) {
      console.error('Error deleting project:', error);
      setSnackbar({ open: true, message: 'Failed to delete project', type: 'error' });
    }
  };

  const daysLeft = (deadline) => {
    const diff = new Date(deadline) - new Date();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Projects</Typography>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Add New Project
        </Button>
      </Box>

      <TextField
        label="Search Projects"
        variant="outlined"
        size="small"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 3, maxWidth: 400 }}
      />

      {filteredProjects.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No projects found. Try different search criteria.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project._id}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{project.name}</Typography>
                    <Chip label={project.status} color={getStatusColor(project.status)} size="small" />
                  </Stack>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Client: {project.client}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Deadline: {project.deadline} ({daysLeft(project.deadline)} days left)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 1 }}>
                    Description: {project.description || 'N/A'}
                  </Typography>
                  <Box mt={1}>
                    <Chip
                      label={`Priority: ${project.priority}`}
                      color={getPriorityColor(project.priority)}
                      size="small"
                    />
                  </Box>
                  <IconButton color="error" onClick={() => handleDeleteClick(project)}>
                    <DeleteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Add Project Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Project Name"
                fullWidth
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="client"
                label="Client"
                fullWidth
                value={form.client}
                onChange={handleChange}
                error={!!errors.client}
                helperText={errors.client}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.status}>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
                <FormHelperText>{errors.status}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.priority}>
                <InputLabel>Priority</InputLabel>
                <Select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  label="Priority"
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
                <FormHelperText>{errors.priority}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Project Description"
                fullWidth
                multiline
                minRows={2}
                value={form.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="deadline"
                type="date"
                label="Deadline"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={form.deadline}
                onChange={handleChange}
                error={!!errors.deadline}
                helperText={errors.deadline}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddProject}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
};

export default ProjectSection;
