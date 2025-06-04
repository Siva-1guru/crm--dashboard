
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Container, TextField, Checkbox, FormControlLabel, Button, Typography, Grid,
//   Select, MenuItem, InputLabel, FormControl, Paper, Table, TableHead, TableRow,
//   TableCell, TableBody, Avatar, Box,
// } from '@mui/material';

// const TaskManager = () => {
//   const [task, setTask] = useState({
//     subject: '',
//     dueDate: '',
//     contact: '',
//     account: '',
//     status: 'Not Started',
//     priority: 'Medium',
//     reminder: false,
//   });

//   const [tasksList, setTasksList] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     if ('Notification' in window) Notification.requestPermission();
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       setTasksList(response.data);
//     } catch (err) {
//       console.error('Error fetching tasks:', err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setTask({ ...task, [name]: type === 'checkbox' ? checked : value });
//   };

//   const scheduleNotification = (task) => {
//     const dueTime = new Date(task.dueDate).getTime();
//     const delay = dueTime - Date.now();
//     if (delay > 0) {
//       setTimeout(() => {
//         new Notification('🔔 Task Reminder', {
//           body: `${task.subject} is due now!`,
//         });
//       }, delay);
//     }
//   };

//   const handleSave = async () => {
//     const { subject, dueDate, contact, account } = task;
//     if (!subject || !dueDate || !contact || !account) {
//       alert('All fields are required!');
//       return;
//     }
//     try {
//       const res = await axios.post('http://localhost:5000/api/tasks', task);
//       const newTask = res.data;
//       setTasksList([...tasksList, newTask]);
//       if (task.reminder) scheduleNotification(newTask);
//       setTask({ subject: '', dueDate: '', contact: '', account: '', status: 'Not Started', priority: 'Medium', reminder: false });
//     } catch (err) {
//       alert('Error saving task!');
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 4, background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//         📝 Task Manager
//       </Typography>

//       <Paper elevation={6} sx={{ p: 4, mb: 5, borderRadius: 4, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)' }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}><TextField fullWidth label="Subject" name="subject" value={task.subject} onChange={handleChange} /></Grid>
//           <Grid item xs={12}><TextField fullWidth label="Due Date" name="dueDate" type="datetime-local" value={task.dueDate} onChange={handleChange} InputLabelProps={{ shrink: true }} /></Grid>
//           <Grid item xs={12} sm={6}><TextField fullWidth label="Contact" name="contact" value={task.contact} onChange={handleChange} /></Grid>
//           <Grid item xs={12} sm={6}><TextField fullWidth label="Account" name="account" value={task.account} onChange={handleChange} /></Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth><InputLabel>Status</InputLabel>
//               <Select name="status" value={task.status} onChange={handleChange}>
//                 <MenuItem value="Not Started">Not Started</MenuItem>
//                 <MenuItem value="In Progress">In Progress</MenuItem>
//                 <MenuItem value="Completed">Completed</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth><InputLabel>Priority</InputLabel>
//               <Select name="priority" value={task.priority} onChange={handleChange}>
//                 <MenuItem value="Low">Low</MenuItem>
//                 <MenuItem value="Medium">Medium</MenuItem>
//                 <MenuItem value="High">High</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel control={<Checkbox name="reminder" checked={task.reminder} onChange={handleChange} />} label="Set Reminder" />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" fullWidth onClick={handleSave} sx={{ py: 1.2, fontWeight: 'bold', borderRadius: 2, boxShadow: 2 }}>
//               Save Task
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       {tasksList.length > 0 && (
//         <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
//           <TextField fullWidth label="Search by Subject or Account" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ mb: 3 }} />
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Subject</TableCell>
//                 <TableCell>Due Date</TableCell>
//                 <TableCell>Contact</TableCell>
//                 <TableCell>Account</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Priority</TableCell>
//                 <TableCell>Reminder</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tasksList
//                 .filter((t) =>
//                   t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                   t.account.toLowerCase().includes(searchQuery.toLowerCase())
//                 )
//                 .map((t) => (
//                   <TableRow key={t._id} hover sx={{ transition: '0.3s', '&:hover': { backgroundColor: '#f0faff' } }}>
//                     <TableCell>
//                       <Box display="flex" alignItems="center" gap={1}>
//                         <Avatar sx={{ bgcolor: '#0072ff', color: '#fff', width: 30, height: 30 }}>
//                           {t.subject.charAt(0).toUpperCase()}
//                         </Avatar>
//                         {t.subject}
//                       </Box>
//                     </TableCell>
//                     <TableCell>{new Date(t.dueDate).toLocaleString()}</TableCell>
//                     <TableCell>{t.contact}</TableCell>
//                     <TableCell>{t.account}</TableCell>
//                     <TableCell>{t.status}</TableCell>
//                     <TableCell>{t.priority}</TableCell>
//                     <TableCell>{t.reminder ? '✅' : '❌'}</TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Container>
//   );
// };

// export default TaskManager;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, TextField, Checkbox, FormControlLabel, Button, Typography, Grid,
  Select, MenuItem, InputLabel, FormControl, Paper, Table, TableHead, TableRow,
  TableCell, TableBody, Avatar, Box,
} from '@mui/material';

const TaskManager = () => {
  const [task, setTask] = useState({
    subject: '',
    dueDate: '',
    contact: '',
    account: '',
    status: 'Not Started',
    priority: 'Medium',
    reminder: false,
  });

  const [tasksList, setTasksList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if ('Notification' in window) Notification.requestPermission();
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasksList(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({ ...task, [name]: type === 'checkbox' ? checked : value });
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!task.subject.trim()) newErrors.subject = 'Subject is required';
    if (!task.dueDate) newErrors.dueDate = 'Due date is required';
    if (!task.contact.trim()) newErrors.contact = 'Contact is required';
    if (!task.account.trim()) newErrors.account = 'Account is required';
    if (!task.status) newErrors.status = 'Status is required';
    if (!task.priority) newErrors.priority = 'Priority is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scheduleNotification = (task) => {
    const dueTime = new Date(task.dueDate).getTime();
    const delay = dueTime - Date.now();
    if (delay > 0) {
      setTimeout(() => {
        new Notification('🔔 Task Reminder', {
          body: `${task.subject} is due now!`,
        });
      }, delay);
    }
  };

  const handleSave = async () => {
    if (!validate()) return;

    try {
      const res = await axios.post('http://localhost:5000/api/tasks', task);
      const newTask = res.data;
      setTasksList([...tasksList, newTask]);
      if (task.reminder) scheduleNotification(newTask);
      setTask({
        subject: '',
        dueDate: '',
        contact: '',
        account: '',
        status: 'Not Started',
        priority: 'Medium',
        reminder: false,
      });
      setErrors({});
    } catch (err) {
      alert('Error saving task!');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{
          mb: 4,
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        📝 Task Manager
      </Typography>

      <Paper
        elevation={6}
        sx={{
          p: 4,
          mb: 5,
          borderRadius: 4,
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={task.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Due Date"
              name="dueDate"
              type="datetime-local"
              value={task.dueDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              error={!!errors.dueDate}
              helperText={errors.dueDate}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contact"
              name="contact"
              value={task.contact}
              onChange={handleChange}
              error={!!errors.contact}
              helperText={errors.contact}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Account"
              name="account"
              value={task.account}
              onChange={handleChange}
              error={!!errors.account}
              helperText={errors.account}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!errors.status} required>
              <InputLabel>Status</InputLabel>
              <Select name="status" value={task.status} onChange={handleChange} label="Status">
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
              {errors.status && (
                <Typography variant="caption" color="error" sx={{ ml: 2, mt: 0.5 }}>
                  {errors.status}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!errors.priority} required>
              <InputLabel>Priority</InputLabel>
              <Select name="priority" value={task.priority} onChange={handleChange} label="Priority">
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
              {errors.priority && (
                <Typography variant="caption" color="error" sx={{ ml: 2, mt: 0.5 }}>
                  {errors.priority}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="reminder" checked={task.reminder} onChange={handleChange} />}
              label="Set Reminder"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSave}
              sx={{ py: 1.2, fontWeight: 'bold', borderRadius: 2, boxShadow: 2 }}
            >
              Save Task
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {tasksList.length > 0 && (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <TextField
            fullWidth
            label="Search by Subject or Account"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Account</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Reminder</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasksList
                .filter(
                  (t) =>
                    t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    t.account.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((t) => (
                  <TableRow
                    key={t._id}
                    hover
                    sx={{ transition: '0.3s', '&:hover': { backgroundColor: '#f0faff' } }}
                  >
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar sx={{ bgcolor: '#0072ff', color: '#fff', width: 30, height: 30 }}>
                          {t.subject.charAt(0).toUpperCase()}
                        </Avatar>
                        {t.subject}
                      </Box>
                    </TableCell>
                    <TableCell>{new Date(t.dueDate).toLocaleString()}</TableCell>
                    <TableCell>{t.contact}</TableCell>
                    <TableCell>{t.account}</TableCell>
                    <TableCell>{t.status}</TableCell>
                    <TableCell>{t.priority}</TableCell>
                    <TableCell>{t.reminder ? '✅' : '❌'}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default TaskManager;
