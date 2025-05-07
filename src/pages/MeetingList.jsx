 
// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   List,
//   ListItem,
//   Divider,
// } from "@mui/material";

// const MeetingList = ({ meetings }) => {
//   if (!meetings || meetings.length === 0) {
//     return <Typography>No upcoming meetings.</Typography>;
//   }

//   return (
//     <List sx={{ mt: 3 }}>
//       {meetings.map((meeting) => (
//         <React.Fragment key={meeting.id}>
//           <ListItem disableGutters>
//             <Card sx={{ width: "100%", mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   {meeting.description || "Untitled Meeting"}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>From:</strong>{" "}
//                   {new Date(meeting.from).toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>To:</strong> {new Date(meeting.to).toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Host:</strong> {meeting.host}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Participants:</strong>{" "}
//                   {meeting.participants.join(", ")}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Related To:</strong> {meeting.relatedTo}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Repeat:</strong> {meeting.repeat}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Reminder:</strong> {meeting.reminder}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </ListItem>
//           <Divider />
//         </React.Fragment>
//       ))}
//     </List>
//   );
// };

// export default MeetingList;
// src/components/MeetingList.jsx

// import React from "react";
// import { List, ListItem, ListItemText } from "@mui/material";

// const MeetingList = ({ meetings }) => {
//   return (
//     <List>
//       {meetings.map((meeting) => (
//         <ListItem key={meeting._id}>
//           <ListItemText
//             primary={`${meeting.title} — ${meeting.date} at ${meeting.time}`}
//             secondary={`Participants: ${meeting.participants.join(", ")}`}
//           />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default MeetingList;
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const MeetingList = ({ meetings }) => {
  if (!meetings || meetings.length === 0) {
    return <Typography>No upcoming meetings.</Typography>;
  }

  return (
    <List sx={{ mt: 3 }}>
      {meetings.map((meeting) => (
        <React.Fragment key={meeting._id || meeting.id}>
          <ListItem disableGutters>
            <Card sx={{ width: "100%", mb: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {meeting.description || meeting.title || "Untitled Meeting"}
                </Typography>
                <Typography variant="body2">
                  <strong>From:</strong>{" "}
                  {new Date(meeting.from || `${meeting.date}T${meeting.time}`).toLocaleString()}
                </Typography>
                <Typography variant="body2">
                  <strong>To:</strong>{" "}
                  {meeting.to
                    ? new Date(meeting.to).toLocaleString()
                    : "Not specified"}
                </Typography>
                <Typography variant="body2">
                  <strong>Host:</strong> {meeting.host || "N/A"}
                </Typography>
                <Typography variant="body2">
                  <strong>Location:</strong> {meeting.location || "N/A"}
                </Typography>
                <Typography variant="body2">
                  <strong>Participants:</strong>{" "}
                  {Array.isArray(meeting.participants)
                    ? meeting.participants.join(", ")
                    : meeting.participants || "N/A"}
                </Typography>
                <Typography variant="body2">
                  <strong>Related To:</strong> {meeting.relatedTo || "N/A"}
                </Typography>
                <Typography variant="body2">
                  <strong>Repeat:</strong> {meeting.repeat || "None"}
                </Typography>
                <Typography variant="body2">
                  <strong>Reminder:</strong> {meeting.reminder || "None"}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default MeetingList;
