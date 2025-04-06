 
// import React, { useState } from 'react';
// import '../style/Tasks.css'
// const Tasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({
//     taskOwner: '',
//     subject: '',
//     dueDate: '',
//     contact: '',
//     account: '',
//     status: 'Not Started',
//     priority: 'Medium',
//     reminder: false,
//     repeat: false
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewTask({ ...newTask, [name]: type === 'checkbox' ? checked : value });
//   };
 
// const addTask = () => {
//     if (newTask.subject.trim()) {
//       const updatedTasks = [...tasks, { ...newTask, id: Date.now() }];
//       setTasks(updatedTasks);
  
//       // Save to local storage
//       localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//       alert("Task Saved Successfully!");
  
//       setNewTask({
//         taskOwner: '',
//         subject: '',
//         dueDate: '',
//         contact: '',
//         account: '',
//         status: 'Not Started',
//         priority: 'Medium',
//         reminder: false,
//         repeat: false
//       });
//     } else {
//       alert("Subject is required!");
//     }
//   };
  
//   const cancelTask = () => {
//     if (window.confirm("Are you sure you want to cancel?")) {
//       setNewTask({
//         taskOwner: '',
//         subject: '',
//         dueDate: '',
//         contact: '',
//         account: '',
//         status: 'Not Started',
//         priority: 'Medium',
//         reminder: false,
//         repeat: false
//       });
//       alert("Task Canceled!");
//     }
//   };
  

//   return (
//     <div className="p-6 bg-white shadow rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">Create Task</h1>

//       <div className="mb-4">
//         <label className="block mb-2">Task Owner: {newTask.taskOwner}</label>

//         <label className="block mb-2">Subject</label>
//         <input
//           name="subject"
//           placeholder="Enter subject"
//           value={newTask.subject}
//           onChange={handleInputChange}
//           className="border p-2 rounded w-full mb-2"
//         />

//         <label className="block mb-2">Due Date</label>
//         <input
//           type="date"
//           name="dueDate"
//           value={newTask.dueDate}
//           onChange={handleInputChange}
//           className="border p-2 rounded w-full mb-2"
//         />

//         <label className="block mb-2">Contact</label>
//         <input
//           name="contact"
//           placeholder="Enter contact name"
//           value={newTask.contact}
//           onChange={handleInputChange}
//           className="border p-2 rounded w-full mb-2"
//         />

//         <label className="block mb-2">Account</label>
//         <input
//           name="account"
//           placeholder="Enter account name"
//           value={newTask.account}
//           onChange={handleInputChange}
//           className="border p-2 rounded w-full mb-2"
//         />
// {/* 
//         <label className="block mb-2">Status</label>
//         <select name="status" value={newTask.status} onChange={handleInputChange} className="border p-2 rounded w-full mb-2">
//           <option>Not Started</option>
//           <option>In Progress</option>
//           <option>Completed</option>
//         </select> */}
//         <label className="block mb-2">Status</label>
// <select 
//   name="status" 
//   value={newTask.status} 
//   onChange={handleInputChange} 
//   className={` pro ${
//     newTask.status === 'Not Started' 
//       ? 'bg-red-500 text-white'
//       : newTask.status === 'In Progress'
//       ? 'bg-green-500 text-white'
//       : 'bg-yellow-500 text-white'
//   }`}
// >
//   <option>Not Started</option>
//   <option>In Progress</option>
//   <option>Completed</option>
// </select>


//         {/* <label className="block mb-2">Priority</label>
//         <select name="priority" value={newTask.priority} onChange={handleInputChange} className="border p-2 rounded w-full mb-2">
//           <option>Low</option>
//           <option>Medium</option>
//           <option>High</option>
//         </select> */}
//         <label className="block mb-2">Priority</label>
// <select
//   name="priority"
//   value={newTask.priority}
//   onChange={handleInputChange}
//   className={`pro ${
//     newTask.priority === 'Low'
//       ? 'bg-red-500 text-white'
//       : newTask.priority === 'Medium'
//       ? 'bg-green-500 text-white'
//       : 'bg-yellow-500 text-white'
//   }`}
// >
//   <option>Low</option>
//   <option>Medium</option>
//   <option>High</option>
// </select>


//         <label className="chi">
//           <input type="checkbox" name="reminder" checked={newTask.reminder} onChange={handleInputChange} />
//           <span className="ml-2">Reminder</span>
//         </label>

//         <label className="chi">
//           <input type="checkbox" name="repeat" checked={newTask.repeat} onChange={handleInputChange} />
//           <span className="ml-2">Repeat</span>
//         </label>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded">Save</button>
//           <button onClick={cancelTask} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
//           <button onClick={addTask} className="bg-green-500 text-white p-2 rounded">Save and New</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Tasks;
// import React, { useState } from "react";
// import '../style/Tasks.css'
// const TaskManager = () => {
//   const [task, setTask] = useState({
//     subject: "",
//     dueDate: "",
//     contact: "",
//     account: "",
//     status: "Not Started",
//     priority: "Medium",
//     reminder: false,
//     repeat: false,
//   });

//   const [tasksList, setTasksList] = useState([]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setTask({
//       ...task,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Save Task
//   const handleSave = () => {
//     if (!task.subject || !task.dueDate || !task.contact || !task.account) {
//       alert("All fields are required!");
//       return;
//     }

//     setTasksList([...tasksList, { ...task, id: Date.now() }]);
//     setTask({
//       subject: "",
//       dueDate: "",
//       contact: "",
//       account: "",
//       status: "Not Started",
//       priority: "Medium",
//       reminder: false,
//       repeat: false,
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">Create Task</h1>

//       {/* Task Form */}
//       <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
//         <label className="block mb-2">Subject</label>
//         <input
//           type="text"
//           name="subject"
//           value={task.subject}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//           placeholder="Enter subject"
//         />

//         <label className="block mb-2">Due Date</label>
//         <input
//           type="date"
//           name="dueDate"
//           value={task.dueDate}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//         />

//         <label className="block mb-2">Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={task.contact}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//           placeholder="Enter contact name"
//         />

//         <label className="block mb-2">Account</label>
//         <input
//           type="text"
//           name="account"
//           value={task.account}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//           placeholder="Enter account name"
//         />

//         <label className="block mb-2">Status</label>
//         <select
//           name="status"
//           value={task.status}
//           onChange={handleChange}
//           className="status"
//         >
//           <option>Not Started</option>
//           <option>In Progress</option>
//           <option>Completed</option>
//         </select>

//         <label className="block mb-2">Priority</label>
//         <select
//           name="priority"
//           value={task.priority}
//           onChange={handleChange}
//           className="priority"
//         >
//           <option>Low</option>
//           <option>Medium</option>
//           <option>High</option>
//         </select>

//         <div className="box">
//           <label>
//             <input
//               type="checkbox"
//               name="reminder"
//               checked={task.reminder}
//               onChange={handleChange}
//               className="og"
//             />{""}
//             Reminder
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="repeat"
//               checked={task.repeat}
//               onChange={handleChange}
//               className="og"
//             />{" "}
//             Repeat
//           </label>
//         </div>

//         <button onClick={handleSave} className="bg-blue-500 text-white p-2 w-full rounded">
//           Save
//         </button>
//       </div>
      

//       {/* Task Table */}
//       {tasksList.length > 0 && (
//         <div className="mt-6 max-w-4xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-4">Task List</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Subject</th>
//                 <th className="border p-2">Due Date</th>
//                 <th className="border p-2">Contact</th>
//                 <th className="border p-2">Account</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasksList.map((t) => (
//                 <tr key={t.id} className="text-center">
//                   <td className="border p-2">{t.subject}</td>
//                   <td className="border p-2">{t.dueDate}</td>
//                   <td className="border p-2">{t.contact}</td>
//                   <td className="border p-2">{t.account}</td>
//                   <td className="border p-2">{t.status}</td>
//                   <td className="border p-2">{t.priority}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default TaskManager;
// import React, { useState, useEffect } from "react";
// import '../style/Tasks.css';

// const TaskManager = () => {
//   const [task, setTask] = useState({
//     subject: "",
//     dueDate: "",
//     contact: "",
//     account: "",
//     status: "Not Started",
//     priority: "Medium",
//     reminder: false,
//     repeat: false,
//   });

//   const [tasksList, setTasksList] = useState([]);

//   // Request notification permission when the component loads
//   useEffect(() => {
//     if ("Notification" in window) {
//       Notification.requestPermission();
//     }
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setTask({
//       ...task,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Show a notification at the scheduled time
//   const scheduleNotification = (task) => {
//     if (!("Notification" in window)) return;

//     const dueTime = new Date(task.dueDate).getTime();
//     const currentTime = new Date().getTime();
//     const delay = dueTime - currentTime;

//     if (delay > 0) {
//       setTimeout(() => {
//         new Notification("Task Reminder", {
//           body: `Reminder: ${task.subject} is due today!`,
//           icon: "https://cdn-icons-png.flaticon.com/512/1827/1827301.png",
//         });
//       }, delay);
//     }
//   };

//   // Save Task
//   const handleSave = () => {
//     if (!task.subject || !task.dueDate || !task.contact || !task.account) {
//       alert("All fields are required!");
//       return;
//     }

//     const newTask = { ...task, id: Date.now() };
//     setTasksList([...tasksList, newTask]);

//     if (task.reminder) {
//       scheduleNotification(newTask);
//     }

//     setTask({
//       subject: "",
//       dueDate: "",
//       contact: "",
//       account: "",
//       status: "Not Started",
//       priority: "Medium",
//       reminder: false,
//       repeat: false,
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">Create Task</h1>

//       {/* Task Form */}
//       <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
//         <label className="block mb-2">Subject</label>
//         <input
//           type="text"
//           name="subject"
//           value={task.subject}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//           placeholder="Enter subject"
//         />

//         <label className="block mb-2">Due Date</label>
//         <input
//           type="datetime-local"
//           name="dueDate"
//           value={task.dueDate}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//         />

//         <label className="block mb-2">Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={task.contact}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//           placeholder="Enter contact name"
//         />

//         <label className="block mb-2">Account</label>
//         <input
//           type="text"
//           name="account"
//           value={task.account}
//           onChange={handleChange}
//           className="border p-2 w-full rounded mb-3"
//           placeholder="Enter account name"
//         />

//         <label className="block mb-2">Status</label>
//         <select
//           name="status"
//           value={task.status}
//           onChange={handleChange}
//           className="status border p-2 w-full rounded mb-3"
//         >
//           <option>Not Started</option>
//           <option>In Progress</option>
//           <option>Completed</option>
//         </select>

//         <label className="block mb-2">Priority</label>
//         <select
//           name="priority"
//           value={task.priority}
//           onChange={handleChange}
//           className="priority border p-2 w-full rounded mb-3"
//         >
//           <option>Low</option>
//           <option>Medium</option>
//           <option>High</option>
//         </select>

//         <div className="flex gap-4 mb-3">
//           <label>
//             <input
//               type="checkbox"
//               name="reminder"
//               checked={task.reminder}
//               onChange={handleChange}
//               className="og"
//             />
//             Reminder
//           </label>
//           {/* <label>
//             <input
//               type="checkbox"
//               name="repeat"
//               checked={task.repeat}
//               onChange={handleChange}
//               className="og"
//             />
//             Repeat
//           </label> */}
//         </div>

//         <button onClick={handleSave} className="bg-blue-500 text-white p-2 w-full rounded">
//           Save
//         </button>
//       </div>

//       {/* Task Table */}
//       {tasksList.length > 0 && (
//         <div className="mt-6 max-w-4xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-4">Task List</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Subject</th>
//                 <th className="border p-2">Due Date</th>
//                 <th className="border p-2">Contact</th>
//                 <th className="border p-2">Account</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Priority</th>
//                 <th className="border p-2">Reminder</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasksList.map((t) => (
//                 <tr key={t.id} className="text-center">
//                   <td className="border p-2">{t.subject}</td>
//                   <td className="border p-2">{t.dueDate}</td>
//                   <td className="border p-2">{t.contact}</td>
//                   <td className="border p-2">{t.account}</td>
//                   <td className="border p-2">{t.status}</td>
//                   <td className="border p-2">{t.priority}</td>
//                   <td className="border p-2">{t.reminder ? "✅" : "❌"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskManager;
import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
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

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

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
          body: `Reminder: ${task.subject} is due today!`,
          icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827301.png',
        });
      }, delay);
    }
  };

  const handleSave = () => {
    const { subject, dueDate, contact, account } = task;
    if (!subject || !dueDate || !contact || !account) {
      alert('All fields are required!');
      return;
    }

    const newTask = { ...task, id: Date.now() };
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
              fullWidth
              label="Subject"
              name="subject"
              value={task.subject}
              onChange={handleChange}
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
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contact"
              name="contact"
              value={task.contact}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Account"
              name="account"
              value={task.account}
              onChange={handleChange}
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
                <Checkbox
                  name="reminder"
                  checked={task.reminder}
                  onChange={handleChange}
                />
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
                <TableRow key={t.id}>
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
