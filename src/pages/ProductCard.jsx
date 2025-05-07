import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';

const ProductCard = ({ product, onAddToCart, onView }) => (
  <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3, borderRadius: 3 }}>
    <CardMedia
      component="img"
      height="180"
      image={product.image}
      alt={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" noWrap>
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: 'hidden' }}>
        {product.description}
      </Typography>
      <Box mt={1}>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </Box>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined" onClick={() => onAddToCart(product)}>Add to Cart</Button>
      <Button size="small" variant="contained" onClick={() => onView(product)}>View</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
