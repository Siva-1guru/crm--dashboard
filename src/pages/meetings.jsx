
import React, { useEffect, useState } from "react";
import axios from './axios';
import {
  Container,
  Typography,
  Divider,
  TextField,
  Box,
} from "@mui/material";
import MeetingForm from "./MeetingForm";
import MeetingList from "./MeetingList";

const MeetingsPage = () => {
  const [meetings, setMeetings] = useState([]);
  const [search, setSearch] = useState("");

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
      setMeetings((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding meeting:", error.response?.data || error.message);
    }
  };

  const filteredMeetings = meetings.filter(meeting =>
    meeting.title?.toLowerCase().includes(search.toLowerCase()) ||
    meeting.host?.toLowerCase().includes(search.toLowerCase()) ||
    meeting.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>📅 Schedule a Meeting</Typography>
      <MeetingForm onAddMeeting={handleAddMeeting} />

      <Divider sx={{ my: 4 }} />

      <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5">Upcoming Meetings</Typography>
        <TextField
          label="Search Meetings"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <MeetingList meetings={filteredMeetings} />
    </Container>
  );
};

export default MeetingsPage;
