 
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Box,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";
import { pipelineData } from "./salesData"; // Make sure this is structured correctly

const SalesPipeline = () => {
  const [stages, setStages] = useState(pipelineData.stages);
  const [open, setOpen] = useState(false);
  const [newDeal, setNewDeal] = useState({
    name: "",
    value: "",
    stage: Object.keys(pipelineData.stages)[0] || "", // defaults to "prospect"
  });

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const sourceStage = stages[source.droppableId];
    const destStage = stages[destination.droppableId];
    const draggedDeal = sourceStage.deals[source.index];

    const updatedStages = {
      ...stages,
      [source.droppableId]: {
        ...sourceStage,
        deals: sourceStage.deals.filter((_, idx) => idx !== source.index),
      },
      [destination.droppableId]: {
        ...destStage,
        deals: [
          ...destStage.deals.slice(0, destination.index),
          draggedDeal,
          ...destStage.deals.slice(destination.index),
        ],
      },
    };

    setStages(updatedStages);
  };

  const handleAddDeal = () => {
    console.log("Adding deal to stage:", newDeal.stage);
    console.log("All available stages:", Object.keys(stages));

    if (!newDeal.name.trim() || !newDeal.value) return;

    if (!stages[newDeal.stage]) {
      console.error("Invalid stage selected:", newDeal.stage);
      return;
    }

    const deal = {
      id: uuidv4(),
      name: newDeal.name,
      value: parseFloat(newDeal.value),
      date: new Date().toLocaleDateString(),
    };

    const updatedStages = {
      ...stages,
      [newDeal.stage]: {
        ...stages[newDeal.stage],
        deals: [...stages[newDeal.stage].deals, deal],
      },
    };

    setStages(updatedStages);
    setNewDeal({
      name: "",
      value: "",
      stage: Object.keys(stages)[0],
    });
    setOpen(false);
  };

  const handleDeleteDeal = (stageId, dealId) => {
    const updatedDeals = stages[stageId].deals.filter((d) => d.id !== dealId);

    setStages({
      ...stages,
      [stageId]: {
        ...stages[stageId],
        deals: updatedDeals,
      },
    });
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Sales Pipeline</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          + Add Deal
        </Button>
      </Box>

      {/* Add Deal Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Deal</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Deal Name"
            margin="dense"
            value={newDeal.name}
            onChange={(e) =>
              setNewDeal({ ...newDeal, name: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Deal Value"
            margin="dense"
            type="number"
            value={newDeal.value}
            onChange={(e) =>
              setNewDeal({ ...newDeal, value: e.target.value })
            }
          />
          <TextField
            fullWidth
            select
            label="Stage"
            margin="dense"
            SelectProps={{ native: true }}
            value={newDeal.stage}
            onChange={(e) =>
              setNewDeal({ ...newDeal, stage: e.target.value })
            }
          >
            {Object.entries(stages).map(([key, value]) => (
              <option key={key} value={key}>
                {value.title}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddDeal} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Drag & Drop Columns */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          {Object.entries(stages).map(([stageId, stage]) => (
            <Grid item xs={12} sm={6} md={3} key={stageId}>
              <Typography variant="h6" align="center" sx={{ mb: 1 }}>
                {stage.title} ({stage.deals.length})
              </Typography>
              <Droppable droppableId={stageId}>
                {(provided) => (
                  <Paper
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{
                      minHeight: 300,
                      padding: 1.5,
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    {stage.deals.length === 0 ? (
                      <Typography align="center" color="text.secondary">
                        No deals yet
                      </Typography>
                    ) : (
                      stage.deals.map((deal, index) => (
                        <Draggable
                          key={deal.id}
                          draggableId={deal.id}
                          index={index}
                        >
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{
                                mb: 1.5,
                                boxShadow: 2,
                                ...provided.draggableProps.style,
                              }}
                            >
                              <CardContent>
                                <Box
                                  display="flex"
                                  justifyContent="space-between"
                                  alignItems="center"
                                >
                                  <Typography fontWeight="bold">
                                    {deal.name}
                                  </Typography>
                                  <IconButton
                                    size="small"
                                    onClick={() =>
                                      handleDeleteDeal(stageId, deal.id)
                                    }
                                  >
                                    <DeleteIcon fontSize="small" />
                                  </IconButton>
                                </Box>
                                <Typography variant="body2">
                                  Value: ${deal.value}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  Added: {deal.date}
                                </Typography>
                              </CardContent>
                            </Card>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </Paper>
                )}
              </Droppable>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </>
  );
};

export default SalesPipeline;
