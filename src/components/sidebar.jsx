 
// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';

// // // import {
// // //   Drawer,
// // //   List,
// // //   ListItemButton,
// // //   ListItemText,
// // //   IconButton,
// // //   Typography,
// // //   Box,
// // //   AppBar,
// // //   Toolbar,
// // //   CssBaseline,
// // //   Divider,
// // //   useTheme,
// // //   useMediaQuery,
// // //   Button,
// // // } from '@mui/material';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import CloseIcon from '@mui/icons-material/Close';

// // // const drawerWidth = 240;

// // // const modules = [
// // //   { name: 'Dashboard', path: '/dashboard' },
// // //   { name: 'Profile', path: '/profile' },
// // //   { name: 'Leads', path: '/leads' },
// // //   { name: 'Contacts', path: '/contacts' },
// // //   // { name: 'Accounts', path: '/accounts' },
// // //   { name: 'Reports', path: '/reports' },
// // //   { name: 'Sales', path: '/sales' },
// // //   { name: 'Tasks', path: '/tasks' },
// // //   { name: 'Deals', path: '/deals' },
// // //   { name: 'Meetings', path: '/meetings' },
// // //   { name: 'Calls', path: '/calls' },
// // //   { name: 'Products', path: '/products' },
// // //   { name: 'Quotes', path: '/quotes' },
// // //   { name: 'Invoices', path: '/invoices' },
// // //   { name: 'Documents', path: '/documents' },
// // //   { name: 'Forecasting', path: '/forecasting' },
// // //   { name: 'Companies', path: '/companies' },
// // //   { name: 'Vendors', path: '/vendors' },
// // //   { name: 'Sales Order', path: '/sales-order' },
// // //   { name: 'Purchase Order', path: '/purchase-order' },
// // //   { name: 'Sales Inbox', path: '/sales-inbox' },
// // //   { name: 'Price Books', path: '/price-books' },
// // //   { name: 'Cases', path: '/cases' },
// // //   { name: 'Solutions', path: '/solutions' },
// // //   { name: 'Visits', path: '/visits' },
// // //   { name: 'Social', path: '/social' },
// // //   { name: 'Service', path: '/service' },
// // //   { name: 'Project', path: '/project' },
// // // ];

// // // const Sidebar = () => {
// // //   const [mobileOpen, setMobileOpen] = useState(false);
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// // //   const handleDrawerToggle = () => {
// // //     setMobileOpen(!mobileOpen);
// // //   };

// // //   const drawer = (
// // //     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// // //       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
// // //         <Typography variant="h6" noWrap>
// // //           CRM Modules
// // //         </Typography>
// // //         {isMobile && (
// // //           <IconButton onClick={handleDrawerToggle}>
// // //             <CloseIcon />
// // //           </IconButton>
// // //         )}
// // //       </Toolbar>
// // //       <Divider />
// // //       <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2 }}>
// // //         <List>
// // //           {modules.map((module, index) => (
// // //             <ListItemButton
// // //               key={index}
// // //               component={Link}
// // //               to={module.path}
// // //               onClick={handleDrawerToggle}
// // //               sx={{
// // //                 justifyContent: 'center',
// // //                 '&:hover': { bgcolor: 'grey.800' },
// // //               }}
// // //             >
// // //               <ListItemText
// // //                 primary={module.name}
// // //                 primaryTypographyProps={{
// // //                   align: 'center',
// // //                   sx: { width: '100%' },
// // //                 }}
// // //               />
// // //             </ListItemButton>
// // //           ))}
// // //         </List>
// // //       </Box>
// // //     </Box>
// // //   );

// // //   return (
// // //     <Box sx={{ display: 'flex' }}>
// // //       <CssBaseline />
// // //       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
// // //         <Toolbar>
// // //           <IconButton
// // //             color="inherit"
// // //             aria-label="open drawer"
// // //             edge="start"
// // //             onClick={handleDrawerToggle}
// // //             sx={{ mr: 2 }}
// // //           >
// // //             <MenuIcon />
// // //           </IconButton>
// // //           <Typography variant="h6" noWrap>
// // //             CRM Dashboard
// // //           </Typography>
// // //           <Button>Logout</Button>
// // //         </Toolbar>
        
// // //       </AppBar>

// // //       <Drawer
// // //         variant="temporary"
// // //         open={mobileOpen}
// // //         onClose={handleDrawerToggle}
// // //         ModalProps={{ keepMounted: true }}
// // //         sx={{
// // //           display: { xs: 'block', sm: 'block' },
// // //           '& .MuiDrawer-paper': {
// // //             width: isMobile ? '100%' : drawerWidth,
// // //             maxWidth: '100%',
// // //           },
// // //         }}
// // //       >
// // //         {drawer}
// // //       </Drawer>

// // //       <Box
// // //         component="main"
// // //         sx={{
// // //           flexGrow: 1,
// // //           p: 3,
// // //           width: { sm: `calc(100% - ${drawerWidth}px)` },
// // //         }}
// // //       >
// // //         <Toolbar />
// // //         {/* Your routed content goes here */}
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Sidebar;
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // import {
// //   Drawer,
// //   List,
// //   ListItemButton,
// //   ListItemText,
// //   IconButton,
// //   Typography,
// //   Box,
// //   AppBar,
// //   Toolbar,
// //   CssBaseline,
// //   Divider,
// //   useTheme,
// //   useMediaQuery,
// //   Button,
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import LogoutIcon from '@mui/icons-material/Logout'; // Imported Logout icon

// // const drawerWidth = 240;

// // const modules = [
// //   { name: 'Dashboard', path: '/dashboard' },
// //   { name: 'Profile', path: '/profile' },
// //   { name: 'Leads', path: '/leads' },
// //   { name: 'Contacts', path: '/contacts' },
// //   // { name: 'Accounts', path: '/accounts' },
// //   { name: 'Reports', path: '/reports' },
// //   { name: 'Sales', path: '/sales' },
// //   { name: 'Tasks', path: '/tasks' },
// //   { name: 'Deals', path: '/deals' },
// //   { name: 'Meetings', path: '/meetings' },
// //   { name: 'Calls', path: '/calls' },
// //   { name: 'Products', path: '/products' },
// //   { name: 'Quotes', path: '/quotes' },
// //   { name: 'Invoices', path: '/invoices' },
// //   { name: 'Documents', path: '/documents' },
// //   { name: 'Forecasting', path: '/forecasting' },
// //   { name: 'Companies', path: '/companies' },
// //   { name: 'Vendors', path: '/vendors' },
// //   { name: 'Sales Order', path: '/sales-order' },
// //   { name: 'Purchase Order', path: '/purchase-order' },
// //   { name: 'Sales Inbox', path: '/sales-inbox' },
// //   { name: 'Price Books', path: '/price-books' },
// //   { name: 'Cases', path: '/cases' },
// //   { name: 'Solutions', path: '/solutions' },
// //   { name: 'Visits', path: '/visits' },
// //   { name: 'Social', path: '/social' },
// //   { name: 'Service', path: '/service' },
// //   { name: 'Project', path: '/project' },
// // ];

// // const Sidebar = () => {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// //   const handleDrawerToggle = () => {
// //     setMobileOpen(!mobileOpen);
// //   };

// //   const drawer = (
// //     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// //       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //         <Typography variant="h6" noWrap>
// //           CRM Modules
// //         </Typography>
// //         {isMobile && (
// //           <IconButton onClick={handleDrawerToggle}>
// //             <CloseIcon />
// //           </IconButton>
// //         )}
// //       </Toolbar>
// //       <Divider />
// //       <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2 }}>
// //         <List>
// //           {modules.map((module, index) => (
// //             <ListItemButton
// //               key={index}
// //               component={Link}
// //               to={module.path}
// //               onClick={handleDrawerToggle}
// //               sx={{
// //                 justifyContent: 'center',
// //                 '&:hover': { bgcolor: 'grey.800' },
// //               }}
// //             >
// //               <ListItemText
// //                 primary={module.name}
// //                 primaryTypographyProps={{
// //                   align: 'center',
// //                   sx: { width: '100%' },
// //                 }}
// //               />
// //             </ListItemButton>
// //           ))}
// //         </List>
// //       </Box>
// //     </Box>
// //   );

// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             sx={{ mr: 2 }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" noWrap>
// //             CRM Dashboard
// //           </Typography>
// //           {/* Spacer to push logout to the right */}
// //           <Box sx={{ flexGrow: 1 }} />
// //           <Button
// //             color="inherit"
// //             startIcon={<LogoutIcon />}
// //             variant="outlined"
// //             onClick={handleL}
// //           >
// //             Logout
// //           </Button>
// //         </Toolbar>
// //       </AppBar>

// //       <Drawer
// //         variant="temporary"
// //         open={mobileOpen}
// //         onClose={handleDrawerToggle}
// //         ModalProps={{ keepMounted: true }}
// //         sx={{
// //           display: { xs: 'block', sm: 'block' },
// //           '& .MuiDrawer-paper': {
// //             width: isMobile ? '100%' : drawerWidth,
// //             maxWidth: '100%',
// //           },
// //         }}
// //       >
// //         {drawer}
// //       </Drawer>

// //       <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           p: 3,
// //           width: { sm: `calc(100% - ${drawerWidth}px)` },
// //         }}
// //       >
// //         <Toolbar />
// //         {/* Your routed content goes here */}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

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
//   Divider,
//   useTheme,
//   useMediaQuery,
//   Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import LogoutIcon from '@mui/icons-material/Logout';

// const drawerWidth = 240;

// const modules = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Leads', path: '/leads' },
//   { name: 'Contacts', path: '/contacts' },
//   // { name: 'Accounts', path: '/accounts' },
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
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();

//   // Toggle Drawer for mobile view
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Logout handler: clear tokens and navigate to login page
//   const handleLogout = () => {
//     // Clear any tokens or user data from local storage
//     localStorage.removeItem('authToken');
//     // Redirect to the login page (adjust the path as needed)
//     navigate('/');
//   };

//   const drawer = (
//     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Typography variant="h6" noWrap>
//           CRM Modules
//         </Typography>
//         {isMobile && (
//           <IconButton onClick={handleDrawerToggle}>
//             <CloseIcon />
//           </IconButton>
//         )}
//       </Toolbar>
//       <Divider />
//       <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2 }}>
//         <List>
//           {modules.map((module, index) => (
//             <ListItemButton
//               key={index}
//               component={Link}
//               to={module.path}
//               onClick={handleDrawerToggle}
//               sx={{
//                 justifyContent: 'center',
//                 '&:hover': { bgcolor: 'grey.800' },
//               }}
//             >
//               <ListItemText
//                 primary={module.name}
//                 primaryTypographyProps={{
//                   align: 'center',
//                   sx: { width: '100%' },
//                 }}
//               />
//             </ListItemButton>
//           ))}
//         </List>
//       </Box>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             CRM Dashboard
//           </Typography>
//           {/* Spacer to push logout to the right */}
//           <Box sx={{ flexGrow: 1 }} />
//           <Button
//             color="inherit"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             variant="outlined"
//           >
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           display: { xs: 'block', sm: 'block' },
//           '& .MuiDrawer-paper': {
//             width: isMobile ? '100%' : drawerWidth,
//             maxWidth: '100%',
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         {/* Your routed content goes here */}
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Divider,
  useTheme,
  useMediaQuery,
  Button,
  ListItemIcon,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReportIcon from '@mui/icons-material/Assessment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TaskIcon from '@mui/icons-material/Task';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';
import ForecastIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InboxIcon from '@mui/icons-material/Inbox';
import BookIcon from '@mui/icons-material/Book';
import BugReportIcon from '@mui/icons-material/BugReport';
import HelpIcon from '@mui/icons-material/Help';
import PlaceIcon from '@mui/icons-material/Place';
import ShareIcon from '@mui/icons-material/Share';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import ReminderForm from '../pages/RemainderForm';
import ReminderIcon from '@mui/icons-material/NotificationsActive'; // use any icon you prefer


const drawerWidth = 240;

const modules = [
  { name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { name: 'Profile', path: '/profile', icon: <PersonIcon /> },
  { name: 'Leads', path: '/leads', icon: <LeaderboardIcon /> },
  { name: 'Contacts', path: '/contacts', icon: <ContactsIcon /> },
  { name: 'Reports', path: '/reports', icon: <ReportIcon /> },
  { name: 'Sales', path: '/sales', icon: <ShoppingCartIcon /> },
  { name: 'Tasks', path: '/tasks', icon: <TaskIcon /> },
  { name: 'Deals', path: '/deals', icon: <WorkIcon /> },
  { name: 'Meetings', path: '/meetings', icon: <CalendarTodayIcon /> },
  { name: 'Calls', path: '/calls', icon: <PhoneIcon /> },
  { name: 'Products', path: '/product', icon: <InventoryIcon /> },
  // { name: 'Quotes', path: '/quotes', icon: <DescriptionIcon /> },
  // { name: 'Invoices', path: '/invoices', icon: <DescriptionIcon /> },
  { name: 'Documents', path: '/documents', icon: <DescriptionIcon /> },
  // { name: 'Forecasting', path: '/forecasting', icon: <ForecastIcon /> },
  // { name: 'Companies', path: '/companies', icon: <BusinessIcon /> },
  // { name: 'Vendors', path: '/vendors', icon: <LocalShippingIcon /> },
  // { name: 'Sales Order', path: '/sales-order', icon: <ShoppingCartIcon /> },
  // { name: 'Purchase Order', path: '/purchase-order', icon: <ShoppingCartIcon /> },
  // { name: 'Sales Inbox', path: '/sales-inbox', icon: <InboxIcon /> },
  // { name: 'Price Books', path: '/price-books', icon: <BookIcon /> },
  // { name: 'Cases', path: '/cases', icon: <BugReportIcon /> },
  // { name: 'Solutions', path: '/solutions', icon: <HelpIcon /> },
  // { name: 'Visits', path: '/visits', icon: <PlaceIcon /> },
  // { name: 'Social', path: '/social', icon: <ShareIcon /> },
  // { name: 'Service', path: '/service', icon: <SupportAgentIcon /> },
  { name: 'Project', path: '/project', icon: <AssignmentIcon /> },
  // { name: 'Project', path: '/project', icon: <AssignmentIcon /> },
  // { name: 'Reminders', path: '/reminders', icon: <ReminderIcon /> },
  // { name: 'RemainderForm', path: '/reminder/:leadId', icon: <AssignmentIcon /> },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          CRM Modules
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2 }}>
        <List>
          {modules.map((module, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={module.path}
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': { bgcolor: 'grey.800' },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                {module.icon}
              </ListItemIcon>
              <ListItemText primary={module.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CRM Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            variant="outlined"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: isMobile ? '100%' : drawerWidth,
            maxWidth: '100%',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Your routed content goes here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
