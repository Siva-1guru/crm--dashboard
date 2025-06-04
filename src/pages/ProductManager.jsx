 
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Container, Typography, Grid, Box, TextField, Button,
  CircularProgress
} from '@mui/material';
import ProductCard from './ProductCard';
import CartDrawer from './CartDrawer';
import ProductDetailsDialog from './ProductDetailsDialog';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: '', image: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const errors = {};
    if (!form.title.trim()) errors.title = 'Title is required';
    if (!form.price.trim()) errors.price = 'Price is required';
    else if (isNaN(form.price) || Number(form.price) <= 0) errors.price = 'Enter a valid price';
    if (!form.description.trim()) errors.description = 'Description is required';
    if (!form.image.trim()) errors.image = 'Image URL is required';
    return errors;
  };

  const handleAddProduct = async () => {
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const res = await axios.post('http://localhost:5000/api/products', {
        ...form,
        price: parseFloat(form.price),
      });
      setProducts([...products, res.data]);
      setForm({ title: '', description: '', price: '', image: '' });
      setFormErrors({});
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Product Manager</Typography>

      {/* Add Product Form */}
      <Box component="form" sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Add New Product</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              error={!!formErrors.title}
              helperText={formErrors.title}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              error={!!formErrors.price}
              helperText={formErrors.price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={3}
              value={form.description}
              onChange={handleChange}
              error={!!formErrors.description}
              helperText={formErrors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={form.image}
              onChange={handleChange}
              error={!!formErrors.image}
              helperText={formErrors.image}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 1 }}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Loading Spinner */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product._id}>
              <ProductCard
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onView={() => handleViewProduct(product)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} />
      <ProductDetailsDialog
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </Container>
  );
};

export default ProductManager;
