 
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   MenuItem,
//   Typography,
//   Paper,
// } from "@mui/material";
// import dayjs from "dayjs";

// const repeatOptions = ["None", "Daily", "Weekly", "Monthly"];
// const reminderOptions = ["None", "1 day before", "2 days before"];

// const MeetingForm = () => {
//   const [form, setForm] = useState({
//     from: "",
//     to: "",
//     host: "",
//     participants: "",
//     relatedTo: "",
//     repeat: "None",
//     reminder: "None",
//     description: "",
//   });

//   const [meetings, setMeetings] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = (e) => {
//     e.preventDefault();

//     const newMeeting = {
//       id: Date.now(),
//       ...form,
//     };

//     setMeetings((prev) => [...prev, newMeeting]);

//     // Clear form after saving
//     setForm({
//       from: "",
//       to: "",
//       host: "",
//       locatiom:"",
//       participants: "",
//       relatedTo: "",
//       repeat: "None",
//       reminder: "None",
//       description: "",
//     });
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         Meeting Information
//       </Typography>

//       <form onSubmit={handleSave}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               type="datetime-local"
//               label="From"
//               name="from"
//               value={form.from}
//               onChange={handleChange}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               type="datetime-local"
//               label="To"
//               name="to"
//               value={form.to}
//               onChange={handleChange}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Host"
//               name="host"
//               value={form.host}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="location"
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Participants"
//               name="participants"
//               value={form.participants}
//               onChange={handleChange}
//               fullWidth
//               placeholder="Comma separated names"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Related To"
//               name="relatedTo"
//               value={form.relatedTo}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               select
//               label="Repeat"
//               name="repeat"
//               value={form.repeat}
//               onChange={handleChange}
//               fullWidth
//             >
//               {repeatOptions.map((opt) => (
//                 <MenuItem key={opt} value={opt}>
//                   {opt}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               select
//               label="Reminder"
//               name="reminder"
//               value={form.reminder}
//               onChange={handleChange}
//               fullWidth
//             >
//               {reminderOptions.map((opt) => (
//                 <MenuItem key={opt} value={opt}>
//                   {opt}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Description"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               fullWidth
//               multiline
//               rows={3}
//             />
//           </Grid>
//           <Grid item xs={12} textAlign="right">
//             <Button variant="contained" type="submit">
//               Save
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       <Box mt={4}>
//         <Typography variant="h6" gutterBottom>
//           Upcoming Meetings
//         </Typography>
//         {meetings.length === 0 ? (
//           <Typography>No upcoming meetings.</Typography>
//         ) : (
//           meetings.map((m) => (
//             <Paper key={m.id} sx={{ p: 2, mb: 2 }}>
//               <Typography><strong>From:</strong> {dayjs(m.from).format("DD/MM/YYYY HH:mm")}</Typography>
//               <Typography><strong>To:</strong> {dayjs(m.to).format("DD/MM/YYYY HH:mm")}</Typography>
//               <Typography><strong>Host:</strong> {m.host}</Typography>
//               <Typography><strong>location:</strong> {m.location}</Typography>
//               <Typography><strong>Participants:</strong> {m.participants}</Typography>
//               <Typography><strong>Related To:</strong> {m.relatedTo}</Typography>
//               <Typography><strong>Repeat:</strong> {m.repeat}</Typography>
//               <Typography><strong>Reminder:</strong> {m.reminder}</Typography>
//               <Typography><strong>Description:</strong> {m.description}</Typography>
//             </Paper>
//           ))
//         )}
//       </Box>
//     </Box>
//   );
// };

// // export default MeetingForm;
// import React, { useState } from "react";
// import { TextField, Button, Box } from "@mui/material";

// const MeetingForm = ({ onAddMeeting }) => {
//   const [meetingData, setMeetingData] = useState({
//     title: "",
//     date: "",
//     time: "",
//     participants: "",
//   });

//   const handleChange = (e) => {
//     setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitting:", meetingData); // ✅ Debug log
//     const participantsArray = meetingData.participants.split(',').map(p => p.trim());
//     onAddMeeting({ ...meetingData, participants: participantsArray });
//     setMeetingData({ title: "", date: "", time: "", participants: "" });
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField label="Title" name="title" value={meetingData.title} onChange={handleChange} required />
//       <TextField type="date" name="date" value={meetingData.date} onChange={handleChange} required />
//       <TextField type="time" name="time" value={meetingData.time} onChange={handleChange} required />
//       <TextField label="Participants (comma separated)" name="participants" value={meetingData.participants} onChange={handleChange} />
//       <Button type="submit" variant="contained" color="primary">Add Meeting</Button>
//     </Box>
//   );
// };

// export default MeetingForm;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   MenuItem,
//   Typography,
// } from "@mui/material";

// const repeatOptions = ["None", "Daily", "Weekly", "Monthly"];
// const reminderOptions = ["None", "1 day before", "2 days before"];

// const MeetingForm = ({ onAddMeeting }) => {
//   const [form, setForm] = useState({
//     title: "",
//     from: "",
//     to: "",
//     host: "",
//     location: "",
//     participants: "",
//     relatedTo: "",
//     repeat: "None",
//     reminder: "None",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const participantsArray = form.participants
//       .split(",")
//       .map((p) => p.trim())
//       .filter(Boolean);

//     const newMeeting = {
//       ...form,
//       participants: participantsArray,
//     };

//     console.log("Submitting meeting:", newMeeting); // ✅ Debug

//     if (onAddMeeting) {
//       onAddMeeting(newMeeting);
//     }

//     setForm({
//       title: "",
//       from: "",
//       to: "",
//       host: "",
//       location: "",
//       participants: "",
//       relatedTo: "",
//       repeat: "None",
//       reminder: "None",
//       description: "",
//     });
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         Schedule a Meeting
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="Title"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               type="datetime-local"
//               label="From"
//               name="from"
//               value={form.from}
//               onChange={handleChange}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               type="datetime-local"
//               label="To"
//               name="to"
//               value={form.to}
//               onChange={handleChange}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Host"
//               name="host"
//               value={form.host}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Location"
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Participants (comma separated)"
//               name="participants"
//               value={form.participants}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Related To"
//               name="relatedTo"
//               value={form.relatedTo}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               select
//               label="Repeat"
//               name="repeat"
//               value={form.repeat}
//               onChange={handleChange}
//               fullWidth
//             >
//               {repeatOptions.map((opt) => (
//                 <MenuItem key={opt} value={opt}>
//                   {opt}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               select
//               label="Reminder"
//               name="reminder"
//               value={form.reminder}
//               onChange={handleChange}
//               fullWidth
//             >
//               {reminderOptions.map((opt) => (
//                 <MenuItem key={opt} value={opt}>
//                   {opt}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Description"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               fullWidth
//               multiline
//               rows={3}
//             />
//           </Grid>
//           <Grid item xs={12} textAlign="right">
//             <Button variant="contained" type="submit">
//               Add Meeting
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default MeetingForm;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const participantsArray = form.participants
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);

    const newMeeting = {
      ...form,
      participants: participantsArray,
    };

    console.log("Submitting meeting:", newMeeting); // ✅ Debug

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
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Schedule a Meeting
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              fullWidth
              required
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Participants (comma separated)"
              name="participants"
              value={form.participants}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Related To"
              name="relatedTo"
              value={form.relatedTo}
              onChange={handleChange}
              fullWidth
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
