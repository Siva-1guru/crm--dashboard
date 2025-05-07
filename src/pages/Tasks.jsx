 
// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Typography,
//   Grid,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
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

//   useEffect(() => {
//     if ('Notification' in window) {
//       Notification.requestPermission();
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setTask({
//       ...task,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const scheduleNotification = (task) => {
//     if (!('Notification' in window)) return;

//     const dueTime = new Date(task.dueDate).getTime();
//     const currentTime = new Date().getTime();
//     const delay = dueTime - currentTime;

//     if (delay > 0) {
//       setTimeout(() => {
//         new Notification('Task Reminder', {
//           body: `Reminder: ${task.subject} is due today!`,
//           icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827301.png',
//         });
//       }, delay);
//     }
//   };

//   const handleSave = () => {
//     const { subject, dueDate, contact, account } = task;
//     if (!subject || !dueDate || !contact || !account) {
//       alert('All fields are required!');
//       return;
//     }

//     const newTask = { ...task, id: Date.now() };
//     setTasksList([...tasksList, newTask]);

//     if (task.reminder) {
//       scheduleNotification(newTask);
//     }

//     // Reset form
//     setTask({
//       subject: '',
//       dueDate: '',
//       contact: '',
//       account: '',
//       status: 'Not Started',
//       priority: 'Medium',
//       reminder: false,
//     });
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 5 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
//         Create Task
//       </Typography>

//       <Paper sx={{ p: 4, mb: 5 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Subject"
//               name="subject"
//               value={task.subject}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Due Date"
//               name="dueDate"
//               type="datetime-local"
//               value={task.dueDate}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Contact"
//               name="contact"
//               value={task.contact}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Account"
//               name="account"
//               value={task.account}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Status</InputLabel>
//               <Select name="status" value={task.status} onChange={handleChange}>
//                 <MenuItem value="Not Started">Not Started</MenuItem>
//                 <MenuItem value="In Progress">In Progress</MenuItem>
//                 <MenuItem value="Completed">Completed</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Priority</InputLabel>
//               <Select name="priority" value={task.priority} onChange={handleChange}>
//                 <MenuItem value="Low">Low</MenuItem>
//                 <MenuItem value="Medium">Medium</MenuItem>
//                 <MenuItem value="High">High</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="reminder"
//                   checked={task.reminder}
//                   onChange={handleChange}
//                 />
//               }
//               label="Set Reminder"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Button fullWidth variant="contained" onClick={handleSave}>
//               Save Task
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       {tasksList.length > 0 && (
//         <Paper sx={{ p: 3 }}>
//           <Typography variant="h5" fontWeight="bold" mb={2}>
//             Task List
//           </Typography>
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
//               {tasksList.map((t) => (
//                 <TableRow key={t.id}>
//                   <TableCell>{t.subject}</TableCell>
//                   <TableCell>{t.dueDate}</TableCell>
//                   <TableCell>{t.contact}</TableCell>
//                   <TableCell>{t.account}</TableCell>
//                   <TableCell>{t.status}</TableCell>
//                   <TableCell>{t.priority}</TableCell>
//                   <TableCell>{t.reminder ? '✅' : '❌'}</TableCell>
//                 </TableRow>
//               ))}
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
  TableCell, TableBody,
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

  // ✅ Fetch tasks from MongoDB on component mount
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }

    fetchTasks(); // Fetch all tasks from MongoDB
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasksList(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const scheduleNotification = (task) => {
    if (!('Notification' in window)) return;

    const dueTime = new Date(task.dueDate).getTime();
    const currentTime = new Date().getTime();
    const delay = dueTime - currentTime;

    if (delay > 0) {
      setTimeout(() => {
        new Notification('Task Reminder', {
          body: `Reminder: ${task.subject} is due!`,
          icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827301.png',
        });
      }, delay);
    }
  };

  const handleSave = async () => {
    const { subject, dueDate, contact, account } = task;
    if (!subject || !dueDate || !contact || !account) {
      alert('All fields are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/tasks', task);
      const newTask = response.data;
      setTasksList([...tasksList, newTask]);

      if (task.reminder) {
        scheduleNotification(newTask);
      }

      // Reset form
      setTask({
        subject: '',
        dueDate: '',
        contact: '',
        account: '',
        status: 'Not Started',
        priority: 'Medium',
        reminder: false,
      });
    } catch (error) {
      console.error('Error saving task:', error);
      alert('Failed to save task!');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Create Task
      </Typography>

      <Paper sx={{ p: 4, mb: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth label="Subject" name="subject"
              value={task.subject} onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth label="Due Date" name="dueDate" type="datetime-local"
              value={task.dueDate} onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth label="Contact" name="contact"
              value={task.contact} onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth label="Account" name="account"
              value={task.account} onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select name="status" value={task.status} onChange={handleChange}>
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select name="priority" value={task.priority} onChange={handleChange}>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox name="reminder" checked={task.reminder} onChange={handleChange} />
              }
              label="Set Reminder"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={handleSave}>
              Save Task
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {tasksList.length > 0 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Task List
          </Typography>
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
              {tasksList.map((t) => (
                <TableRow key={t._id}>
                  <TableCell>{t.subject}</TableCell>
                  <TableCell>{t.dueDate}</TableCell>
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
