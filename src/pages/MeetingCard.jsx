import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';

const MeetingCard = ({ meeting }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{meeting.title}</Typography>
        <Typography variant="body2">
          Date: {new Date(meeting.datetime).toLocaleString()}
        </Typography>
        <Typography variant="body2">
          Participants:{" "}
          {meeting.participants.map((p, i) => (
            <Chip key={i} label={p} size="small" sx={{ mr: 0.5 }} />
          ))}
        </Typography>
        {meeting.reminder && (
          <Typography color="primary" variant="body2">
            🔔 Reminder Set
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
