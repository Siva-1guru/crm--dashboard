import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, CardMedia, DialogActions, Button } from '@mui/material';

const ProductDetailsDialog = ({ open, onClose, product }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>{product?.title}</DialogTitle>
    <DialogContent>
      <CardMedia
        component="img"
        height="250"
        image={product?.image}
        alt={product?.title}
        sx={{ objectFit: 'contain', mb: 2 }}
      />
      <Typography variant="body1" gutterBottom>
        {product?.description}
      </Typography>
      <Typography variant="h6" color="primary">
        ${product?.price}
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="contained">Close</Button>
    </DialogActions>
  </Dialog>
);

export default ProductDetailsDialog;
