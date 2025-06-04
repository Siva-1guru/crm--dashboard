
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Card,
  CardContent,
  IconButton,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const stagesList = ["proposal", "qualified", "won","lose"];

const SalesPipeline = () => {
  const [products, setProducts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [open, setOpen] = useState(false);
  const [newDeal, setNewDeal] = useState({
    name: "",
    value: "",
    stage: "prospect",
    product: "",
  });

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  const fetchDeals = async () => {
    const res = await axios.get("http://localhost:5000/api/deals");
    setDeals(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchDeals();
  }, []);

  const groupedDeals = stagesList.reduce((acc, stage) => {
    acc[stage] = deals.filter((deal) => deal.stage === stage);
    return acc;
  }, {});

  const handleAddDeal = async () => {
    if (!newDeal.name || !newDeal.value || !newDeal.product) return;
    const payload = {
      ...newDeal,
      value: parseFloat(newDeal.value),
      date: new Date().toLocaleDateString(),
    };
    await axios.post("http://localhost:5000/api/deals", payload);
    fetchDeals();
    setNewDeal({ name: "", value: "", stage: "prospect", product: "" });
    setOpen(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/deals/${id}`);
    fetchDeals();
  };

  const handleDragEnd = async ({ source, destination }) => {
    if (!destination) return;
    const moved = groupedDeals[source.droppableId][source.index];
    await axios.put(`http://localhost:5000/api/deals/${moved._id}`, {
      ...moved,
      stage: destination.droppableId,
    });
    fetchDeals();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Sales Pipeline</Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>Add Deal</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Deal</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth margin="dense" label="Deal Name"
            value={newDeal.name}
            onChange={(e) => setNewDeal({ ...newDeal, name: e.target.value })}
          />
          <TextField
            fullWidth margin="dense" label="Value" type="number"
            value={newDeal.value}
            onChange={(e) => setNewDeal({ ...newDeal, value: e.target.value })}
          />
          <TextField
            fullWidth select label="Product" margin="dense"
            value={newDeal.product}
            onChange={(e) => setNewDeal({ ...newDeal, product: e.target.value })}
          >
            {products.map((prod) => (
              <MenuItem key={prod._id} value={prod._id}>
                {prod.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth select label="Stage" margin="dense"
            value={newDeal.stage}
            onChange={(e) => setNewDeal({ ...newDeal, stage: e.target.value })}
          >
            {stagesList.map((stage) => (
              <MenuItem key={stage} value={stage}>
                {stage.charAt(0).toUpperCase() + stage.slice(1)}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDeal}>Add</Button>
        </DialogActions>
      </Dialog>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {stagesList.map((stageId) => (
            <Grid item xs={12} sm={6} md={3} key={stageId}>
              <Typography variant="h6" gutterBottom>
                {stageId.toUpperCase()}
              </Typography>
              <Droppable droppableId={stageId}>
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{
                      minHeight: 300,
                      background: "#f5f5f5",
                      p: 1,
                      borderRadius: 2,
                    }}
                  >
                    {groupedDeals[stageId].map((deal, index) => (
                      <Draggable key={deal._id} draggableId={deal._id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{ mb: 1 }}
                          >
                            <CardContent>
                              <Typography variant="subtitle1">{deal.name}</Typography>
                              <Typography variant="body2">₹{deal.value}</Typography>
                              <Typography variant="body2">{deal.product?.title}</Typography>
                              <Typography variant="caption">{deal.date}</Typography>
                              <IconButton onClick={() => handleDelete(deal._id)}>
                                <DeleteIcon />
                              </IconButton>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
};

export default SalesPipeline;
