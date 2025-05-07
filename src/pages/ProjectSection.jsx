// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';

// const ProjectSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     client: '',
//     status: '',
//     deadline: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAddProject = () => {
//     if (!form.name || !form.client) return;
//     setProjects([...projects, { ...form, id: Date.now() }]);
//     setForm({ name: '', client: '', status: '', deadline: '' });
//     setOpenDialog(false);
//   };

//   return (
//     <Box p={4}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//         <Typography variant="h4">Projects</Typography>
//         <Button variant="contained" onClick={() => setOpenDialog(true)}>Add New Project</Button>
//       </Box>

//       <Grid container spacing={2}>
//         {projects.map((project) => (
//           <Grid item xs={12} md={6} lg={4} key={project.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{project.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">Client: {project.client}</Typography>
//                 <Typography variant="body2">Status: {project.status}</Typography>
//                 <Typography variant="body2">Deadline: {project.deadline}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogTitle>Add New Project</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             name="name"
//             label="Project Name"
//             fullWidth
//             value={form.name}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="client"
//             label="Client"
//             fullWidth
//             value={form.client}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="status"
//             label="Status"
//             fullWidth
//             value={form.status}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="deadline"
//             type="date"
//             label="Deadline"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             value={form.deadline}
//             onChange={handleChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button onClick={handleAddProject} variant="contained">Add</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// // export default ProjectSection; 
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Chip,
//   Stack,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const getStatusColor = (status) => {
//   switch (status.toLowerCase()) {
//     case 'in progress':
//       return 'warning';
//     case 'completed':
//       return 'success';
//     case 'new':
//     default:
//       return 'info';
//   }
// };

// const getPriorityColor = (priority) => {
//   switch (priority.toLowerCase()) {
//     case 'high':
//       return 'error';
//     case 'medium':
//       return 'warning';
//     case 'low':
//     default:
//       return 'default';
//   }
// };

// const ProjectSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     client: '',
//     status: 'New',
//     deadline: '',
//     priority: 'Medium',
//     description: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAddProject = () => {
//     if (!form.name || !form.client) return;
//     setProjects([...projects, { ...form, id: Date.now() }]);
//     setForm({
//       name: '',
//       client: '',
//       status: 'New',
//       deadline: '',
//       priority: 'Medium',
//       description: '',
//     });
//     setOpenDialog(false);
//   };

//   const daysLeft = (deadline) => {
//     const diff = new Date(deadline) - new Date();
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
//   };

//   return (
//     <Box p={4}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//         <Typography variant="h4">Projects</Typography>
//         <Button variant="contained" onClick={() => setOpenDialog(true)}>
//           Add New Project
//         </Button>
//       </Box>

//       {projects.length === 0 ? (
//         <Typography variant="body1" color="text.secondary">
//           No projects yet. Click "Add New Project" to get started.
//         </Typography>
//       ) : (
//         <Grid container spacing={2}>
//           {projects.map((project) => (
//             <Grid item xs={12} md={6} lg={4} key={project.id}>
//               <Card>
//                 <CardContent>
//                   <Stack direction="row" justifyContent="space-between" alignItems="center">
//                     <Typography variant="h6">{project.name}</Typography>
//                     <Chip
//                       label={project.status}
//                       color={getStatusColor(project.status)}
//                       size="small"
//                     />
//                   </Stack>
//                   <Typography variant="body2" color="text.secondary" mt={1}>
//                     Client: {project.client}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Deadline: {project.deadline} ({daysLeft(project.deadline)} days left)
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Description: {project.description || 'N/A'}
//                   </Typography>
//                   <Box mt={1}>
//                     <Chip
//                       label={`Priority: ${project.priority}`}
//                       color={getPriorityColor(project.priority)}
//                       size="small"
//                     />
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
//         <DialogTitle>Add New Project</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} mt={1}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="name"
//                 label="Project Name"
//                 fullWidth
//                 value={form.name}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="client"
//                 label="Client"
//                 fullWidth
//                 value={form.client}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="status"
//                 label="Status"
//                 fullWidth
//                 value={form.status}
//                 onChange={handleChange}
//                 placeholder="New / In Progress / Completed"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="priority"
//                 label="Priority"
//                 fullWidth
//                 value={form.priority}
//                 onChange={handleChange}
//                 placeholder="High / Medium / Low"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="description"
//                 label="Project Description"
//                 fullWidth
//                 multiline
//                 minRows={2}
//                 value={form.description}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="deadline"
//                 type="date"
//                 label="Deadline"
//                 InputLabelProps={{ shrink: true }}
//                 fullWidth
//                 value={form.deadline}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleAddProject}>
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default ProjectSection;
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Chip,
//   Stack,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   FormHelperText,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const getStatusColor = (status) => {
//   switch (status.toLowerCase()) {
//     case 'in progress':
//       return 'warning';
//     case 'completed':
//       return 'success';
//     case 'new':
//     default:
//       return 'info';
//   }
// };

// const getPriorityColor = (priority) => {
//   switch (priority.toLowerCase()) {
//     case 'high':
//       return 'error';
//     case 'medium':
//       return 'warning';
//     case 'low':
//     default:
//       return 'default';
//   }
// };

// const ProjectSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     client: '',
//     status: 'New',
//     deadline: '',
//     priority: 'Medium',
//     description: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAddProject = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = 'Project name is required';
//     if (!form.client) newErrors.client = 'Client name is required';

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) return;

//     setProjects([...projects, { ...form, id: Date.now() }]);
//     setForm({
//       name: '',
//       client: '',
//       status: 'New',
//       deadline: '',
//       priority: 'Medium',
//       description: '',
//     });
//     setOpenDialog(false);
//   };

//   const daysLeft = (deadline) => {
//     const diff = new Date(deadline) - new Date();
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
//   };

//   return (
//     <Box p={4}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//         <Typography variant="h4">Projects</Typography>
//         <Button variant="contained" onClick={() => setOpenDialog(true)}>
//           Add New Project
//         </Button>
//       </Box>

//       {projects.length === 0 ? (
//         <Typography variant="body1" color="text.secondary">
//           No projects yet. Click "Add New Project" to get started.
//         </Typography>
//       ) : (
//         <Grid container spacing={2}>
//           {projects.map((project) => (
//             <Grid item xs={12} md={6} lg={4} key={project.id}>
//               <Card>
//                 <CardContent>
//                   <Stack direction="row" justifyContent="space-between" alignItems="center">
//                     <Typography variant="h6">{project.name}</Typography>
//                     <Chip label={project.status} color={getStatusColor(project.status)} size="small" />
//                   </Stack>
//                   <Typography variant="body2" color="text.secondary" mt={1}>
//                     Client: {project.client}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Deadline: {project.deadline} ({daysLeft(project.deadline)} days left)
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Description: {project.description || 'N/A'}
//                   </Typography>
//                   <Box mt={1}>
//                     <Chip label={`Priority: ${project.priority}`} color={getPriorityColor(project.priority)} size="small" />
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
//         <DialogTitle>Add New Project</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} mt={1}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="name"
//                 label="Project Name"
//                 fullWidth
//                 value={form.name}
//                 onChange={handleChange}
//                 error={!!errors.name}
//                 helperText={errors.name}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="client"
//                 label="Client"
//                 fullWidth
//                 value={form.client}
//                 onChange={handleChange}
//                 error={!!errors.client}
//                 helperText={errors.client}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth error={!!errors.status}>
//                 <InputLabel>Status</InputLabel>
//                 <Select
//                   name="status"
//                   value={form.status}
//                   onChange={handleChange}
//                   label="Status"
//                 >
//                   <MenuItem value="New">New</MenuItem>
//                   <MenuItem value="In Progress">In Progress</MenuItem>
//                   <MenuItem value="Completed">Completed</MenuItem>
//                 </Select>
//                 <FormHelperText>{errors.status}</FormHelperText>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth error={!!errors.priority}>
//                 <InputLabel>Priority</InputLabel>
//                 <Select
//                   name="priority"
//                   value={form.priority}
//                   onChange={handleChange}
//                   label="Priority"
//                 >
//                   <MenuItem value="High">High</MenuItem>
//                   <MenuItem value="Medium">Medium</MenuItem>
//                   <MenuItem value="Low">Low</MenuItem>
//                 </Select>
//                 <FormHelperText>{errors.priority}</FormHelperText>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="description"
//                 label="Project Description"
//                 fullWidth
//                 multiline
//                 minRows={2}
//                 value={form.description}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="deadline"
//                 type="date"
//                 label="Deadline"
//                 InputLabelProps={{ shrink: true }}
//                 fullWidth
//                 value={form.deadline}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleAddProject}>
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default ProjectSection;
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
} from '@mui/material';

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

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProject = async () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Project name is required';
    if (!form.client) newErrors.client = 'Client name is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      // Send the new project data to the backend
      const response = await axios.post('http://localhost:5000/api/projects', form);
      setProjects([...projects, response.data]); // Append the new project to the list
      setForm({
        name: '',
        client: '',
        status: 'New',
        deadline: '',
        priority: 'Medium',
        description: '',
      });
      setOpenDialog(false);
    } catch (error) {
      console.error('Error adding project:', error);
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

      {projects.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No projects yet. Click "Add New Project" to get started.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
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
                  <Typography variant="body2" color="text.secondary">
                    Description: {project.description || 'N/A'}
                  </Typography>
                  <Box mt={1}>
                    <Chip label={`Priority: ${project.priority}`} color={getPriorityColor(project.priority)} size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

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
    </Box>
  );
};

export default ProjectSection;
