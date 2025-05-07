 
// // // // // export default ProductList;
// // // // import React, { useState, useEffect } from 'react';

// // // // const AddProduct = () => {
// // // //   const [product, setProduct] = useState({
// // // //     name: '',
// // // //     description: '',
// // // //     price: '',
// // // //     imageUrl: ''
// // // //   });

// // // //   const [products, setProducts] = useState(() => {
// // // //     // Check if products exist in localStorage and parse them
// // // //     const savedProducts = localStorage.getItem('products');
// // // //     return savedProducts ? JSON.parse(savedProducts) : [];
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setProduct({ ...product, [name]: value });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();

// // // //     // Validate inputs before saving
// // // //     if (!product.name || !product.description || !product.price || !product.imageUrl) {
// // // //       alert('Please fill in all fields!');
// // // //       return;
// // // //     }

// // // //     // Add the new product to the products array
// // // //     const updatedProducts = [...products, product];
    
// // // //     // Save updated products in localStorage
// // // //      localStorage.setItem('products', JSON.stringify(updatedProducts));

// // // //     // Update state
// // // //     setProducts(updatedProducts);

// // // //     // Reset the form fields
// // // //     setProduct({
// // // //       name: '',
// // // //       description: '',
// // // //       price: '',
// // // //       imageUrl: ''
// // // //     });

// // // //     alert('Product added successfully!');
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input
// // // //           type="text"
// // // //           name="name"
// // // //           placeholder="Product Name"
// // // //           value={product.name}
// // // //           onChange={handleChange}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           name="description"
// // // //           placeholder="Product Description"
// // // //           value={product.description}
// // // //           onChange={handleChange}
// // // //         />
// // // //         <input
// // // //           type="number"
// // // //           name="price"
// // // //           placeholder="Price"
// // // //           value={product.price}
// // // //           onChange={handleChange}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           name="imageUrl"
// // // //           placeholder="Image URL"
// // // //           value={product.imageUrl}
// // // //           onChange={handleChange}
// // // //         />
// // // //         <button type="submit">Add Product</button>
// // // //       </form>

// // // //       <div>
// // // //         <h3>Product List</h3>
// // // //         <ul>
// // // //           {products.map((prod, index) => (
// // // //             <li key={index}>
// // // //               <img src={prod.imageUrl} alt={prod.name} style={{ width: '50px', height: '50px' }} />
// // // //               <h4>{prod.name}</h4>
// // // //               <p>{prod.description}</p>
// // // //               <p>Price: ${prod.price}</p>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddProduct;
// // // // import React from 'react';
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   CardMedia,
// // // //   Typography,
// // // //   CardActions,
// // // //   Button,
// // // //   Box,
// // // //   Grid,
// // // //   Container
// // // // } from '@mui/material';

// // // // // ProductCard component
// // // // const ProductCard = ({ product }) => {
// // // //   return (
// // // //     <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3, borderRadius: 3 }}>
// // // //       <CardMedia
// // // //         component="img"
// // // //         height="180"
// // // //         image={product.image}
// // // //         alt={product.title}
// // // //       />
// // // //       <CardContent>
// // // //         <Typography gutterBottom variant="h6" component="div" noWrap>
// // // //           {product.title}
// // // //         </Typography>
// // // //         <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: 'hidden' }}>
// // // //           {product.description}
// // // //         </Typography>
// // // //         <Box mt={1}>
// // // //           <Typography variant="h6" color="primary">
// // // //             ${product.price}
// // // //           </Typography>
// // // //         </Box>
// // // //       </CardContent>
// // // //       <CardActions>
// // // //         <Button size="small" variant="outlined">Add to Cart</Button>
// // // //         <Button size="small" variant="contained">View</Button>
// // // //       </CardActions>
// // // //     </Card>
// // // //   );
// // // // };

// // // // // Main Product Manager component
// // // // const ProductManager = () => {
// // // //   const sampleProducts = [
// // // //     {
// // // //       title: "Smart Watch",
// // // //       description: "A stylish and powerful smart watch.",
// // // //       price: 149.99,
// // // //       image: "https://via.placeholder.com/300x180"
// // // //     },
// // // //     {
// // // //       title: "Wireless Earbuds",
// // // //       description: "High-quality sound and compact design.",
// // // //       price: 79.99,
// // // //       image: "https://via.placeholder.com/300x180"
// // // //     },
// // // //     {
// // // //       title: "Gaming Headset",
// // // //       description: "Immersive surround sound for your games.",
// // // //       price: 99.99,
// // // //       image: "https://via.placeholder.com/300x180"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <Container sx={{ py: 4 }}>
// // // //       <Typography variant="h4" gutterBottom>
// // // //         Product Manager
// // // //       </Typography>
// // // //       <Grid container spacing={2}>
// // // //         {sampleProducts.map((product, index) => (
// // // //           <Grid item key={index}>
// // // //             <ProductCard product={product} />
// // // //           </Grid>
// // // //         ))}
// // // //       </Grid>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default ProductManager;
// // // import React, { useState } from 'react';
// // // import {
// // //   Card,
// // //   CardContent,
// // //   CardMedia,
// // //   Typography,
// // //   CardActions,
// // //   Button,
// // //   Box,
// // //   Grid,
// // //   Container,
// // //   TextField,
// // //   Stack
// // // } from '@mui/material';

// // // // Product Card
// // // const ProductCard = ({ product }) => (
// // //   <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3, borderRadius: 3 }}>
// // //     <CardMedia
// // //       component="img"
// // //       height="180"
// // //       image={product.image}
// // //       alt={product.title}
// // //     />
// // //     <CardContent>
// // //       <Typography gutterBottom variant="h6" noWrap>
// // //         {product.title}
// // //       </Typography>
// // //       <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: 'hidden' }}>
// // //         {product.description}
// // //       </Typography>
// // //       <Box mt={1}>
// // //         <Typography variant="h6" color="primary">
// // //           ${product.price}
// // //         </Typography>
// // //       </Box>
// // //     </CardContent>
// // //     <CardActions>
// // //       <Button size="small" variant="outlined">Add to Cart</Button>
// // //       <Button size="small" variant="contained">View</Button>
// // //     </CardActions>
// // //   </Card>
// // // );

// // // // Main Component
// // // const ProductManager = () => {
// // //   const [products, setProducts] = useState([
// // //     {
// // //       title: "Smart Watch",
// // //       description: "A stylish and powerful smart watch.",
// // //       price: 149.99,
// // //       image: " https://tse1.mm.bing.net/th?id=OIP.cMvkrmD_ckaf2mJ9SPdkmQHaGV&pid=Api&P=0&h=180"
// // //     }
// // //   ]);

// // //   const [form, setForm] = useState({
// // //     title: '',
// // //     description: '',
// // //     price: '',
// // //     image: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleAddProduct = () => {
// // //     if (form.title && form.description && form.price && form.image) {
// // //       setProducts([...products, { ...form, price: parseFloat(form.price) }]);
// // //       setForm({ title: '', description: '', price: '', image: '' });
// // //     }
// // //   };

// // //   return (
// // //     <Container sx={{ py: 4 }}>
// // //       <Typography variant="h4" gutterBottom>
// // //         Product Manager
// // //       </Typography>

// // //       {/* Form */}
// // //       <Stack spacing={2} direction="row" flexWrap="wrap" sx={{ mb: 4 }}>
// // //         <TextField label="Title" name="title" value={form.title} onChange={handleChange} />
// // //         <TextField label="Description" name="description" value={form.description} onChange={handleChange} />
// // //         <TextField label="Price" name="price" value={form.price} onChange={handleChange} />
// // //         <TextField label="Image URL" name="image" value={form.image} onChange={handleChange} />
// // //         <Button variant="contained" onClick={handleAddProduct}>
// // //           Add Product
// // //         </Button>
// // //       </Stack>

// // //       {/* Product Cards */}
// // //       <Grid container spacing={2}>
// // //         {products.map((product, index) => (
// // //           <Grid item key={index}>
// // //             <ProductCard product={product} />
// // //           </Grid>
// // //         ))}
// // //       </Grid>
// // //     </Container>
// // //   );
// // // };

// // // export default ProductManager;
// // import React, { useState } from 'react';
// // import {
// //   Card,
// //   CardContent,
// //   CardMedia,
// //   Typography,
// //   CardActions,
// //   Button,
// //   Box,
// //   Grid,
// //   Container,
// //   TextField
// // } from '@mui/material';

// // // Product Card
// // const ProductCard = ({ product }) => (
// //   <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3, borderRadius: 3 }}>
// //     <CardMedia
// //       component="img"
// //       height="180"
// //       image={product.image}
// //       alt={product.title}
// //     />
// //     <CardContent>
// //       <Typography gutterBottom variant="h6" noWrap>
// //         {product.title}
// //       </Typography>
// //       <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: 'hidden' }}>
// //         {product.description}
// //       </Typography>
// //       <Box mt={1}>
// //         <Typography variant="h6" color="primary">
// //           ${product.price}
// //         </Typography>
// //       </Box>
// //     </CardContent>
// //     <CardActions>
// //       <Button size="small" variant="outlined">Add to Cart</Button>
// //       <Button size="small" variant="contained">View</Button>
// //     </CardActions>
// //   </Card>
// // );

// // // Main Component
// // const ProductManager = () => {
// //   const [products, setProducts] = useState([
// //     {
// //       title: "Smart Watch",
// //       description: "A stylish and powerful smart watch.",
// //       price: 149.99,
// //       image: "https://tse1.mm.bing.net/th?id=OIP.cMvkrmD_ckaf2mJ9SPdkmQHaGV&pid=Api&P=0&h=180"
// //     }
// //   ]);

// //   const [form, setForm] = useState({
// //     title: '',
// //     description: '',
// //     price: '',
// //     image: ''
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleAddProduct = () => {
// //     if (form.title && form.description && form.price && form.image) {
// //       setProducts([...products, { ...form, price: parseFloat(form.price) }]);
// //       setForm({ title: '', description: '', price: '', image: '' });
// //     }
// //   };

// //   return (
// //     <Container sx={{ py: 4 }}>
// //       <Typography variant="h4" gutterBottom>
// //         Product Manager
// //       </Typography>

// //       {/* Updated Professional Form */}
// //       <Box component="form" sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
// //         <Typography variant="h6" gutterBottom>
// //           Add New Product
// //         </Typography>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} md={6}>
// //             <TextField
// //               fullWidth
// //               label="Title"
// //               name="title"
// //               value={form.title}
// //               onChange={handleChange}
// //             />
// //           </Grid>
// //           <Grid item xs={12} md={6}>
// //             <TextField
// //               fullWidth
// //               label="Price"
// //               name="price"
// //               type="number"
// //               value={form.price}
// //               onChange={handleChange}
// //             />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Description"
// //               name="description"
// //               multiline
// //               rows={3}
// //               value={form.description}
// //               onChange={handleChange}
// //             />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Image URL"
// //               name="image"
// //               value={form.image}
// //               onChange={handleChange}
// //             />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <Button
// //               variant="contained"
// //               onClick={handleAddProduct}
// //               sx={{ mt: 1 }}
// //             >
// //               Add Product
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </Box>

// //       {/* Product Cards */}
// //       <Grid container spacing={2}>
// //         {products.map((product, index) => (
// //           <Grid item key={index}>
// //             <ProductCard product={product} />
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default ProductManager;
// import React, { useState } from 'react';
// import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';
// import ProductCard from './ProductCard';
// import CartDrawer from './CartDrawer';
// import ProductDetailsDialog from './ProductDetailsDialog';

// const ProductManager = () => {
//   const [products, setProducts] = useState([
//     {
//       title: "Smart Watch",
//       description: "A stylish and powerful smart watch.",
//       price: 149.99,
//       image: "https://tse1.mm.bing.net/th?id=OIP.cMvkrmD_ckaf2mJ9SPdkmQHaGV&pid=Api&P=0&h=180"
//     }
//   ]);

//   const [cart, setCart] = useState([]);
//   const [form, setForm] = useState({ title: '', description: '', price: '', image: '' });
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAddProduct = () => {
//     if (form.title && form.description && form.price && form.image) {
//       setProducts([...products, { ...form, price: parseFloat(form.price) }]);
//       setForm({ title: '', description: '', price: '', image: '' });
//     }
//   };

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//     setIsCartOpen(true);
//   };

//   const handleViewProduct = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Product Manager
//       </Typography>

//       {/* Add Product Form */}
//       <Box component="form" sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
//         <Typography variant="h6" gutterBottom>
//           Add New Product
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Title" name="title" value={form.title} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Price" name="price" type="number" value={form.price} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField fullWidth label="Description" name="description" multiline rows={3} value={form.description} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField fullWidth label="Image URL" name="image" value={form.image} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 1 }}>
//               Add Product
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Product Cards */}
//       <Grid container spacing={2}>
//         {products.map((product, index) => (
//           <Grid item key={index}>
//             <ProductCard product={product} onAddToCart={handleAddToCart} onView={handleViewProduct} />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Cart Drawer */}
//       <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} />

//       {/* Product Details Dialog */}
//       <ProductDetailsDialog open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} product={selectedProduct} />
//     </Container>
//   );
// };

// export default ProductManager;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';
import ProductCard from './ProductCard';
import CartDrawer from './CartDrawer';
import ProductDetailsDialog from './ProductDetailsDialog';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: '', image: '' });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    if (form.title && form.description && form.price && form.image) {
      try {
        const res = await axios.post('http://localhost:5000/api/products', {
          ...form,
          price: parseFloat(form.price),
        });
        setProducts([...products, res.data]); // Update list with newly created product
        setForm({ title: '', description: '', price: '', image: '' });
      } catch (error) {
        console.error('Error adding product:', error);
      }
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
      <Typography variant="h4" gutterBottom>
        Product Manager
      </Typography>

      {/* Add Product Form */}
      <Box component="form" sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Add New Product
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Title" name="title" value={form.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Price" name="price" type="number" value={form.price} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" name="description" multiline rows={3} value={form.description} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Image URL" name="image" value={form.image} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 1 }}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Product Cards */}
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={product._id || index}>
            <ProductCard
              product={product}
              onAddToCart={() => handleAddToCart(product)}
              onView={() => handleViewProduct(product)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} />

      {/* Product Details Dialog */}
      <ProductDetailsDialog open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} product={selectedProduct} />
    </Container>
  );
};

export default ProductManager;
