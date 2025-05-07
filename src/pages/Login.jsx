 
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Tabs, Tab, TextField, Button, Typography, Paper } from '@mui/material';

// const Login = () => {
//   const [tab, setTab] = useState(0);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleTabChange = (e, newValue) => {
//     setTab(newValue);
//     setFormData({ name: '', email: '', password: '' });
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url = tab === 0 
//       ? 'http://localhost:5000/api/auth/login' 
//       : 'http://localhost:5000/api/auth/register';

//     try {
//       const res = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || 'Something went wrong');
//         return;
//       }

//       if (tab === 0) {
//         alert('Login successful');
//         navigate('/dashboard');
//       } else {
//         alert('Registration successful');
//         setTab(0); // switch to login tab
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       alert('Server error');
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 10 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Tabs value={tab} onChange={handleTabChange} centered>
//           <Tab label="Login" />
//           <Tab label="Register" />
//         </Tabs>

//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           {tab === 1 && (
//             <TextField
//               label="Name"
//               name="name"
//               fullWidth
//               required
//               margin="normal"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           )}
//           <TextField
//             label="Email"
//             name="email"
//             fullWidth
//             required
//             margin="normal"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Password"
//             name="password"
//             fullWidth
//             required
//             margin="normal"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             {tab === 0 ? 'Login' : 'Register'}
//           </Button>
//         </Box>

//         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//           {tab === 0 ? "Don't have an account?" : "Already have an account?"}{' '}
//           <Button onClick={() => setTab(tab === 0 ? 1 : 0)}>
//             {tab === 0 ? "Register" : "Login"}
//           </Button>
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab, TextField, Button, Typography, Paper } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';  // ADD this line

const Login = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = tab === 0 
      ? 'http://localhost:5000/api/auth/login' 
      : 'http://localhost:5000/api/auth/register';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Something went wrong');
        return;
      }

      if (tab === 0) {
        alert('Login successful');
        navigate('/dashboard');
      } else {
        alert('Registration successful');
        setTab(0); // switch to login tab
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Server error');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {tab === 1 && (
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <TextField
            label="Email"
            name="email"
            fullWidth
            required
            margin="normal"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            fullWidth
            required
            margin="normal"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {tab === 0 ? 'Login' : 'Register'}
          </Button>
        </Box>

        {/* Google OAuth Button */}
        {tab === 0 && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1 }}>OR</Typography>
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse); // Here you can send credentialResponse.credential to backend
                navigate('/dashboard');
              }}
              onError={() => {
                console.log('Google Login Failed');
              }}
            />
          </Box>
        )}

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {tab === 0 ? "Don't have an account?" : "Already have an account?"}{' '}
          <Button onClick={() => setTab(tab === 0 ? 1 : 0)}>
            {tab === 0 ? "Register" : "Login"}
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
// http://localhost:3000