 
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { List, ListItemButton, ListItemText, IconButton } from '@mui/material';
// import { Menu, X } from 'lucide-react';
// import './Sidebar.css';


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);
 
//   const modules = [
//     { name: 'Dashboard', path: '/dashboard' },
//     { name: 'Profile', path: '/profile' },
//     { name: 'Leads', path: '/leads' },
//     { name: 'Contacts', path: '/contacts' },
//     { name: 'Accounts', path: '/accounts' },
//     { name: 'Reports', path: '/reports' },
//     { name: 'Sales', path: '/sales' },
//     { name: 'Tasks', path: '/tasks' },
//     { name: 'Deals', path: '/deals' },
//     { name: 'Meetings', path: '/meetings' },
//     { name: 'Calls', path: '/calls' },
//     { name: 'Products', path: '/products' },
//     { name: 'Quotes', path: '/quotes' },
//     { name: 'Invoices', path: '/invoices' },
//     { name: 'Documents', path: '/documents' },
//     { name: 'Forecasting', path: '/forecasting' },
//     { name: 'Companies', path: '/companies' },
//     { name: 'Vendors', path: '/vendors' },
//     { name: 'Sales Order', path: '/sales-order' },
//     { name: 'Purchase Order', path: '/purchase-order' },
//     { name: 'Sales Inbox', path: '/sales-inbox' },
//     { name: 'Price Books', path: '/price-books' },
//     { name: 'Cases', path: '/cases' },
//     { name: 'Solutions', path: '/solutions' },
//     { name: 'Visits', path: '/visits' },
//     { name: 'Social', path: '/social' },
//     { name: 'Service', path: '/service' },
//     { name: 'Project', path: '/project' },
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* Menu Button for Mobile */}
      
// <IconButton className="sm:hidden" onClick={toggleSidebar}>
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </IconButton>
//       {/* Sidebar */}
//       {isOpen && (
//         <div className="w-64 h-full bg-gray-800 text-white p-5 fixed">
//           <h3 className="sidebar-title text-xl font-bold mb-6">MODULES</h3>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton key={index} component={Link} to={module.path} onClick={toggleSidebar}>
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </div>
//       )}

//       {/* Main Content Centered */}
//       <div className="flex-1 flex items-center justify-center p-5">
//         {/* <h2 className="text-4xl font-bold">Welcome to CRM Dashboard</h2> */}
//       </div>
//     </div>
//   );
// };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   IconButton,
//   Typography,
//   Box,
//   AppBar,
//   Toolbar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const modules = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Leads', path: '/leads' },
//   { name: 'Contacts', path: '/contacts' },
//   { name: 'Accounts', path: '/accounts' },
//   { name: 'Reports', path: '/reports' },
//   { name: 'Sales', path: '/sales' },
//   { name: 'Tasks', path: '/tasks' },
//   { name: 'Deals', path: '/deals' },
//   { name: 'Meetings', path: '/meetings' },
//   { name: 'Calls', path: '/calls' },
//   { name: 'Products', path: '/products' },
//   { name: 'Quotes', path: '/quotes' },
//   { name: 'Invoices', path: '/invoices' },
//   { name: 'Documents', path: '/documents' },
//   { name: 'Forecasting', path: '/forecasting' },
//   { name: 'Companies', path: '/companies' },
//   { name: 'Vendors', path: '/vendors' },
//   { name: 'Sales Order', path: '/sales-order' },
//   { name: 'Purchase Order', path: '/purchase-order' },
//   { name: 'Sales Inbox', path: '/sales-inbox' },
//   { name: 'Price Books', path: '/price-books' },
//   { name: 'Cases', path: '/cases' },
//   { name: 'Solutions', path: '/solutions' },
//   { name: 'Visits', path: '/visits' },
//   { name: 'Social', path: '/social' },
//   { name: 'Service', path: '/service' },
//   { name: 'Project', path: '/project' },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDrawer = () => setIsOpen(!isOpen);

//   return (
//     <>
//       {/* Top AppBar for Mobile Menu */}
//       <AppBar position="static" sx={{ display: { sm: 'none' } }}>
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ ml: 2 }}>
//             CRM Modules
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Permanent Drawer for Desktop */}
//       <Box sx={{ display: { xs: 'none', sm: 'block' }, width: 240, height: '100vh', bgcolor: 'grey.900', color: 'white', position: 'fixed' }}>
//         <Box sx={{ p: 3 }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             MODULES
//           </Typography>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton
//                 key={index}
//                 component={Link}
//                 to={module.path}
//                 sx={{ color: 'white', '&:hover': { bgcolor: 'grey.800' } }}
//               >
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Box>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 250 }}>
//           <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
//             <Typography variant="h6">Modules</Typography>
//             <IconButton onClick={toggleDrawer}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton key={index} component={Link} to={module.path} onClick={toggleDrawer}>
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content Placeholder */}
//       <Box sx={{ ml: { sm: '240px' }, p: 3 }}>
//         <Typography variant="h4" fontWeight="bold">
//           Welcome to CRM Dashboard
//         </Typography>
//       </Box>
//     </>
//   );
// };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   IconButton,
//   Typography,
//   Box,
//   AppBar,
//   Toolbar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const drawerWidth = 180; // Slimmer sidebar

// const modules = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Leads', path: '/leads' },
//   { name: 'Contacts', path: '/contacts' },
//   { name: 'Accounts', path: '/accounts' },
//   { name: 'Reports', path: '/reports' },
//   { name: 'Sales', path: '/sales' },
//   { name: 'Tasks', path: '/tasks' },
//   { name: 'Deals', path: '/deals' },
//   { name: 'Meetings', path: '/meetings' },
//   { name: 'Calls', path: '/calls' },
//   { name: 'Products', path: '/products' },
//   { name: 'Quotes', path: '/quotes' },
//   { name: 'Invoices', path: '/invoices' },
//   { name: 'Documents', path: '/documents' },
//   { name: 'Forecasting', path: '/forecasting' },
//   { name: 'Companies', path: '/companies' },
//   { name: 'Vendors', path: '/vendors' },
//   { name: 'Sales Order', path: '/sales-order' },
//   { name: 'Purchase Order', path: '/purchase-order' },
//   { name: 'Sales Inbox', path: '/sales-inbox' },
//   { name: 'Price Books', path: '/price-books' },
//   { name: 'Cases', path: '/cases' },
//   { name: 'Solutions', path: '/solutions' },
//   { name: 'Visits', path: '/visits' },
//   { name: 'Social', path: '/social' },
//   { name: 'Service', path: '/service' },
//   { name: 'Project', path: '/project' },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDrawer = () => setIsOpen(!isOpen);

//   return (
//     <>
//       {/* Top AppBar for Mobile Menu */}
//       <AppBar position="static" sx={{ display: { sm: 'none' } }}>
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ ml: 2 }}>
//             CRM Modules
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Permanent Drawer for Desktop */}
//       <Box
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           width: drawerWidth,
//           height: '100vh',
//           bgcolor: 'grey.900',
//           color: 'white',
//           position: 'fixed'
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             MODULES
//           </Typography>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton
//                 key={index}
//                 component={Link}
//                 to={module.path}
//                 sx={{ color: 'white', '&:hover': { bgcolor: 'grey.800' } }}
//               >
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Box>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 250 }}>
//           <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
//             <Typography variant="h6">Modules</Typography>
//             <IconButton onClick={toggleDrawer}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton key={index} component={Link} to={module.path} onClick={toggleDrawer}>
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content Placeholder */}
//       <Box sx={{ ml: { sm: `${drawerWidth}px` }, p: 3 }}>
//         <Typography variant="h4" fontWeight="bold">
//           Welcome to CRM Dashboard
//         </Typography>
//       </Box>
//     </>
//   );
// };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   IconButton,
//   Typography,
//   Box,
//   AppBar,
//   Toolbar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const drawerWidth = 180; // Slimmer sidebar

// const modules = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Leads', path: '/leads' },
//   { name: 'Contacts', path: '/contacts' },
//   { name: 'Accounts', path: '/accounts' },
//   { name: 'Reports', path: '/reports' },
//   { name: 'Sales', path: '/sales' },
//   { name: 'Tasks', path: '/tasks' },
//   { name: 'Deals', path: '/deals' },
//   { name: 'Meetings', path: '/meetings' },
//   { name: 'Calls', path: '/calls' },
//   { name: 'Products', path: '/products' },
//   { name: 'Quotes', path: '/quotes' },
//   { name: 'Invoices', path: '/invoices' },
//   { name: 'Documents', path: '/documents' },
//   { name: 'Forecasting', path: '/forecasting' },
//   { name: 'Companies', path: '/companies' },
//   { name: 'Vendors', path: '/vendors' },
//   { name: 'Sales Order', path: '/sales-order' },
//   { name: 'Purchase Order', path: '/purchase-order' },
//   { name: 'Sales Inbox', path: '/sales-inbox' },
//   { name: 'Price Books', path: '/price-books' },
//   { name: 'Cases', path: '/cases' },
//   { name: 'Solutions', path: '/solutions' },
//   { name: 'Visits', path: '/visits' },
//   { name: 'Social', path: '/social' },
//   { name: 'Service', path: '/service' },
//   { name: 'Project', path: '/project' },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDrawer = () => setIsOpen(!isOpen);

//   return (
//     <>
//       {/* Top AppBar for Mobile Menu */}
//       <AppBar position="static" sx={{ display: { sm: 'none' } }}>
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ ml: 2 }}>
//             CRM Modules
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Permanent Drawer for Desktop */}
//       <Box
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           width: drawerWidth,
//           height: '100vh',
//           bgcolor: 'grey.900',
//           color: 'white',
//           position: 'fixed',
//           overflowY: 'auto', // ✅ Enables vertical scrolling
//           scrollbarWidth: 'thin', // ✅ Makes scrollbar slim (for Firefox)
//           '&::-webkit-scrollbar': { width: '6px' }, // ✅ Scrollbar width (for Chrome)
//           '&::-webkit-scrollbar-thumb': { background: 'grey', borderRadius: '10px' }, // ✅ Scrollbar styling
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             MODULES
//           </Typography>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton
//                 key={index}
//                 component={Link}
//                 to={module.path}
//                 sx={{ color: 'white', '&:hover': { bgcolor: 'grey.800' } }}
//               >
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Box>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 250 }}>
//           <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
//             <Typography variant="h6">Modules</Typography>
//             <IconButton onClick={toggleDrawer}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <List>
//             {modules.map((module, index) => (
//               <ListItemButton key={index} component={Link} to={module.path} onClick={toggleDrawer}>
//                 <ListItemText primary={module.name} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content Placeholder */}
//       <Box sx={{ ml: { sm: `${drawerWidth}px` }, p: 3 }}>
//         <Typography variant="h4" fontWeight="bold">
//           Welcome to CRM Dashboard
//         </Typography>
//       </Box>
//     </>
//   );
// };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   IconButton,
//   Typography,
//   Box,
//   AppBar,
//   Toolbar,
//   CssBaseline,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const drawerWidth = 240;

// const modules = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Leads', path: '/leads' },
//   { name: 'Contacts', path: '/contacts' },
//   { name: 'Accounts', path: '/accounts' },
//   { name: 'Reports', path: '/reports' },
//   { name: 'Sales', path: '/sales' },
//   { name: 'Tasks', path: '/tasks' },
//   { name: 'Deals', path: '/deals' },
//   { name: 'Meetings', path: '/meetings' },
//   { name: 'Calls', path: '/calls' },
//   { name: 'Products', path: '/products' },
//   { name: 'Quotes', path: '/quotes' },
//   { name: 'Invoices', path: '/invoices' },
//   { name: 'Documents', path: '/documents' },
//   { name: 'Forecasting', path: '/forecasting' },
//   { name: 'Companies', path: '/companies' },
//   { name: 'Vendors', path: '/vendors' },
//   { name: 'Sales Order', path: '/sales-order' },
//   { name: 'Purchase Order', path: '/purchase-order' },
//   { name: 'Sales Inbox', path: '/sales-inbox' },
//   { name: 'Price Books', path: '/price-books' },
//   { name: 'Cases', path: '/cases' },
//   { name: 'Solutions', path: '/solutions' },
//   { name: 'Visits', path: '/visits' },
//   { name: 'Social', path: '/social' },
//   { name: 'Service', path: '/service' },
//   { name: 'Project', path: '/project' },
// ];

// const Sidebar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar>
//         <Typography variant="h6" noWrap>
//           CRM Modules
//         </Typography>
//       </Toolbar>
//       <List>
//         {modules.map((module, index) => (
//           <ListItemButton
//             key={index}
//             component={Link}
//             to={module.path}
//             sx={{ '&:hover': { bgcolor: 'grey.800' } }}
//             onClick={handleDrawerToggle}
//           >
//             <ListItemText primary={module.name} />
//           </ListItemButton>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* AppBar */}
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             CRM Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       {/* Permanent Drawer for Desktop */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         open
//       >
//         {drawer}
//       </Drawer>
//       {/* Temporary Drawer for Mobile */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//       >
//         {drawer}
//       </Drawer>
//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar />
//         <Typography variant="h4" fontWeight="bold">
//           Welcome to CRM Dashboard
//         </Typography>
//         {/* உங்கள் முக்கிய உள்ளடக்கம் இங்கே வரும் */}
//       </Box>
//     </Box>
//   );
// };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   IconButton,
//   Typography,
//   Box,
//   AppBar,
//   Toolbar,
//   CssBaseline,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const drawerWidth = 240;

// const modules = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Leads', path: '/leads' },
//   { name: 'Contacts', path: '/contacts' },
//   { name: 'Accounts', path: '/accounts' },
//   { name: 'Reports', path: '/reports' },
//   { name: 'Sales', path: '/sales' },
//   { name: 'Tasks', path: '/tasks' },
//   { name: 'Deals', path: '/deals' },
//   { name: 'Meetings', path: '/meetings' },
//   { name: 'Calls', path: '/calls' },
//   { name: 'Products', path: '/products' },
//   { name: 'Quotes', path: '/quotes' },
//   { name: 'Invoices', path: '/invoices' },
//   { name: 'Documents', path: '/documents' },
//   { name: 'Forecasting', path: '/forecasting' },
//   { name: 'Companies', path: '/companies' },
//   { name: 'Vendors', path: '/vendors' },
//   { name: 'Sales Order', path: '/sales-order' },
//   { name: 'Purchase Order', path: '/purchase-order' },
//   { name: 'Sales Inbox', path: '/sales-inbox' },
//   { name: 'Price Books', path: '/price-books' },
//   { name: 'Cases', path: '/cases' },
//   { name: 'Solutions', path: '/solutions' },
//   { name: 'Visits', path: '/visits' },
//   { name: 'Social', path: '/social' },
//   { name: 'Service', path: '/service' },
//   { name: 'Project', path: '/project' },
// ];

// const Sidebar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar>
//         <Typography variant="h6" noWrap>
//           CRM Modules
//         </Typography>
//       </Toolbar>
//       <List>
//         {modules.map((module, index) => (
//           <ListItemButton
//             key={index}
//             component={Link}
//             to={module.path}
//             sx={{ '&:hover': { bgcolor: 'grey.800' } }}
//             onClick={handleDrawerToggle}
//           >
//             <ListItemText primary={module.name} />
//           </ListItemButton>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* AppBar */}
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             CRM Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       {/* Permanent Drawer for Desktop */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         open
//       >
//         {drawer}
//       </Drawer>
//       {/* Temporary Drawer for Mobile */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//       >
//         {drawer}
//       </Drawer>
//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const modules = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Profile', path: '/profile' },
  { name: 'Leads', path: '/leads' },
  { name: 'Contacts', path: '/contacts' },
  { name: 'Accounts', path: '/accounts' },
  { name: 'Reports', path: '/reports' },
  { name: 'Sales', path: '/sales' },
  { name: 'Tasks', path: '/tasks' },
  { name: 'Deals', path: '/deals' },
  { name: 'Meetings', path: '/meetings' },
  { name: 'Calls', path: '/calls' },
  { name: 'Products', path: '/products' },
  { name: 'Quotes', path: '/quotes' },
  { name: 'Invoices', path: '/invoices' },
  { name: 'Documents', path: '/documents' },
  { name: 'Forecasting', path: '/forecasting' },
  { name: 'Companies', path: '/companies' },
  { name: 'Vendors', path: '/vendors' },
  { name: 'Sales Order', path: '/sales-order' },
  { name: 'Purchase Order', path: '/purchase-order' },
  { name: 'Sales Inbox', path: '/sales-inbox' },
  { name: 'Price Books', path: '/price-books' },
  { name: 'Cases', path: '/cases' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Visits', path: '/visits' },
  { name: 'Social', path: '/social' },
  { name: 'Service', path: '/service' },
  { name: 'Project', path: '/project' },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap>
          CRM Modules
        </Typography>
      </Toolbar>
      <List>
        {modules.map((module, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={module.path}
            sx={{ '&:hover': { bgcolor: 'grey.800' } }}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={module.name} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }} // Menu icon always visible
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CRM Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Permanent Drawer for Desktop */}
      {/* <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open
      >
        {drawer}
      </Drawer> */}

      {/* Temporary Drawer for All Screens (can be toggled) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block' }, // Allow toggle on all screen sizes
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        {/* Your routed pages will render here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
