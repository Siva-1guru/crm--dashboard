 
// // // // import React, { useState } from "react";
// // // // import { Container, Typography, Divider } from "@mui/material";
// // // // import MeetingForm from  './MeetingForm';
// // // // import MeetingList from  './MeetingList';

// // // // const MeetingsPage = () => {
// // // //   const [meetings, setMeetings] = useState([]);

// // // //   const handleAddMeeting = (meeting) => {
// // // //     setMeetings((prev) => [...prev, meeting]);
// // // //   };

// // // //   return (
// // // //     <Container>
// // // //       <Typography variant="h4" gutterBottom>📆 Schedule a New Meeting</Typography>
// // // //       <MeetingForm onAddMeeting={handleAddMeeting} />
// // // //       <Divider sx={{ my: 4 }} />
// // // //       <Typography variant="h5" gutterBottom>Upcoming Meetings</Typography>
// // // //       <MeetingList meetings={meetings} />
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default MeetingsPage;
// // // import React, { useState, useEffect } from "react";
// // // import axios from 'axios';
// // // import { Container, Typography, Divider } from "@mui/material";
// // // import MeetingForm from  './MeetingForm';
// // // import MeetingList from  './MeetingList';

// // // const MeetingsPage = () => {
// // //   const [meetings, setMeetings] = useState([]);

// // //   useEffect(() => {
// // //     axios.get('http://localhost:5000/api/meetings')
// // //       .then(res => setMeetings(res.data))
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   const handleAddMeeting = (meeting) => {
// // //     axios.post('http://localhost:5000/api/meetings', meeting)
// // //       .then(res => setMeetings(prev => [...prev, res.data]))
// // //       .catch(err => console.error(err));
// // //   };

// // //   return (
// // //     <Container>
// // //       <Typography variant="h4" gutterBottom>📆 Schedule a New Meeting</Typography>
// // //       <MeetingForm onAddMeeting={handleAddMeeting} />
// // //       <Divider sx={{ my: 4 }} />
// // //       <Typography variant="h5" gutterBottom>Upcoming Meetings</Typography>
// // //       <MeetingList meetings={meetings} />
// // //     </Container>
// // //   );
// // // };

// // // export default MeetingsPage;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Container, Typography, Divider } from "@mui/material";
// // import MeetingForm from "./MeetingForm";
// // import MeetingList from "./MeetingList";

// // const MeetingsPage = () => {
// //   const [meetings, setMeetings] = useState([]);

// //   useEffect(() => {
// //     fetchMeetings();
// //   }, []);

// //   const fetchMeetings = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/meetings");
// //       setMeetings(res.data);
// //     } catch (error) {
// //       console.error("Error fetching meetings:", error);
// //     }
// //   };

// //   const handleAddMeeting = async (newMeeting) => {
// //     try {
// //       const res = await axios.post("http://localhost:5000/api/meetings", newMeeting);
// //       setMeetings((prev) => [...prev, res.data]);
// //     } catch (error) {
// //       console.error("Error adding meeting:", error);
// //     }
// //   };

// //   return (
// //     <Container sx={{ mt: 4 }}>
// //       <Typography variant="h4" gutterBottom>📅 Schedule a Meeting</Typography>
// //       <MeetingForm onAddMeeting={handleAddMeeting} />
// //       <Divider sx={{ my: 4 }} />
// //       <Typography variant="h5" gutterBottom>Upcoming Meetings</Typography>
// //       <MeetingList meetings={meetings} />
// //     </Container>
// //   );
// // };

// // export default MeetingsPage;
// import React, { useEffect, useState } from "react";
// import axios from './axios';
// import { Container, Typography, Divider } from "@mui/material";
// import MeetingForm from "./MeetingForm";
// import MeetingList from "./MeetingList";

// const MeetingsPage = () => {
//   const [meetings, setMeetings] = useState([]);

//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   const fetchMeetings = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/meetings");
//       setMeetings(res.data);
//     } catch (error) {
//       console.error("Error fetching meetings:", error);
//     }
//   };

//   const handleAddMeeting = async (newMeeting) => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/meetings", newMeeting);
//       setMeetings((prev) => [...prev, res.data]);
//     } catch (error) {
//       console.error("Error adding meeting:", error);
//     }
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>📅 Schedule a Meeting</Typography>
//       <MeetingForm onAddMeeting={handleAddMeeting} />
//       <Divider sx={{ my: 4 }} />
//       <Typography variant="h5" gutterBottom>Upcoming Meetings</Typography>
//       <MeetingList meetings={meetings} />
//     </Container>
//   );
// };

// export default MeetingsPage;
// src/pages/MeetingsPage.jsx
import React, { useEffect, useState } from "react";
import axios from './axios';
import { Container, Typography, Divider } from "@mui/material";
import MeetingForm from "./MeetingForm";
import MeetingList from "./MeetingList";

const MeetingsPage = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/meetings");
      setMeetings(res.data);
    } catch (error) {
      console.error("Error fetching meetings:", error);
    }
  };

  const handleAddMeeting = async (newMeeting) => {
    try {
      const res = await axios.post("http://localhost:5000/api/meetings", newMeeting);
      console.log("Response from backend:", res.data); // ✅ Added this
      setMeetings((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding meeting:", error.response?.data || error.message);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>📅 Schedule a Meeting</Typography>
      <MeetingForm onAddMeeting={handleAddMeeting} />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>Upcoming Meetings</Typography>
      <MeetingList meetings={meetings} />
    </Container>
  );
};

export default MeetingsPage;
