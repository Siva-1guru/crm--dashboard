import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CartDrawer = ({ open, onClose, cartItems }) => (
  <Drawer anchor="right" open={open} onClose={onClose}>
    <Box sx={{ width: 300, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Cart</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.title} secondary={`$${item.price}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  </Drawer>
);

export default CartDrawer;
