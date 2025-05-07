import React, { useState } from "react";
import { Box, Button, TextField, Typography, Card, CardContent, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const DealsList = () => {
  const [deals, setDeals] = useState([]); // deals array
  const [newDeal, setNewDeal] = useState({
    name: "",
    value: "",
  });

  // Handle adding a new deal
  const handleAddDeal = () => {
    if (!newDeal.name.trim() || !newDeal.value) return;

    const deal = {
      id: uuidv4(),
      name: newDeal.name,
      value: parseFloat(newDeal.value),
      date: new Date().toLocaleDateString(),
    };

    setDeals([...deals, deal]); // Add to list
    setNewDeal({ name: "", value: "" }); // Reset form
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Deals List
      </Typography>

      {/* Input Form */}
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Deal Name"
          value={newDeal.name}
          onChange={(e) => setNewDeal({ ...newDeal, name: e.target.value })}
        />
        <TextField
          label="Deal Value"
          type="number"
          value={newDeal.value}
          onChange={(e) => setNewDeal({ ...newDeal, value: e.target.value })}
        />
        <Button variant="contained" onClick={handleAddDeal}>
          Add Deal
        </Button>
      </Box>

      {/* Deal Cards */}
      <Grid container spacing={2}>
        {deals.length === 0 ? (
          <Typography>No deals yet. Add one!</Typography>
        ) : (
          deals.map((deal) => (
            <Grid item xs={12} sm={6} md={4} key={deal.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{deal.name}</Typography>
                  <Typography variant="body1">Value: ${deal.value}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Added: {deal.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default DealsList;
