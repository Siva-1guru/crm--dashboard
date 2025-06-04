
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// // Pages
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import LeadsManagement from "./pages/Leads";
// import Tasks from "./pages/Tasks";
// import Contacts from "./pages/Contacts";
// import Profile from "./pages/profile";
// import Sales from "./pages/SalesPipeline";
// import Reports from "./pages/Reports";
// import Deals from "./pages/Deals";
// import MeetingsPage from "./pages/meetings";
// import Calls from "./pages/Calls";
// import ProductManager from "./pages/ProductManager";
// import ReminderForm from "./pages/RemainderForm";
// import DocumentSection from "./pages/Documentsection";
// import ProjectSection from "./pages/ProjectSection"; // ✅ NEW

// // Components
// import Navbar from "./components/sidebar";
// import SmallSidebar from "./components/SmallSidebar"; // optional if you're using it

// function Layout() {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     role: "Admin",
//     avatar: ""
//   });

//   const handleUpdate = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="flex-1 flex flex-col p-4 overflow-y-auto">
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
       
//           <Route path="/leads" element={<LeadsManagement />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/deals" element={<Deals />} />
//           <Route path="/meetings" element={<MeetingsPage />} />
//           <Route path="/calls" element={<Calls />} />
//           <Route path="/product" element={<ProductManager />} />
//           <Route path="/reminders" element={<ReminderForm />} />
//           <Route path="/documents" element={<DocumentSection />} />
//           <Route path="/project" element={<ProjectSection />} /> {/* ✅ NEW */}
//           <Route
//             path="/profile"
//             element={<Profile user={user} onUpdate={handleUpdate} />}
//           />
//         </Routes>
//       </div>
//       {/*   */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <GoogleOAuthProvider clientId="518207342905-48dqdtruidn8oimsvo9dko4r6vbv0uv2.apps.googleusercontent.com">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/*" element={<Layout />} /> {/* All dashboard pages inside */}
//         </Routes>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

import { GoogleOAuthProvider } from "@react-oauth/google";

// Components & Pages
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LeadsManagement from "./pages/Leads";
import Tasks from "./pages/Tasks";
import Contacts from "./pages/Contacts";
import Profile from "./pages/profile";
import Sales from "./pages/SalesPipeline";
import Reports from "./pages/Reports";
import Deals from "./pages/Deals";
import MeetingsPage from "./pages/meetings";
import Calls from "./pages/Calls";
import ProductManager from "./pages/ProductManager";
import ReminderForm from "./pages/RemainderForm";
import DocumentSection from "./pages/Documentsection";
import ProjectSection from "./pages/ProjectSection";

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
    avatar: ""
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <GoogleOAuthProvider clientId="518207342905-48dqdtruidn8oimsvo9dko4r6vbv0uv2.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Layout */}
          <Route
            path="/*"
            element={
              <Box sx={{ display: "flex" }}>
                <CssBaseline />

                {/* AppBar */}
                <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      CRM Dashboard
                    </Typography>
                    <Button
                      color="inherit"
                      startIcon={<LogoutIcon />}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Toolbar>
                </AppBar>

                {/* Sidebar */}
                <Drawer
                  variant={isMobile ? "temporary" : "permanent"}
                  open={isMobile ? mobileOpen : true}
                  onClose={handleDrawerToggle}
                  ModalProps={{ keepMounted: true }}
                  sx={{
                    '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                    },
                  }}
                >
                  <Sidebar />
                </Drawer>

                {/* Main Content */}
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    p: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                  }}
                >
                  <Toolbar />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/leads" element={<LeadsManagement />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/deals" element={<Deals />} />
                    <Route path="/meetings" element={<MeetingsPage />} />
                    <Route path="/calls" element={<Calls />} />
                    <Route path="/product" element={<ProductManager />} />
                    <Route path="/reminders" element={<ReminderForm />} />
                    <Route path="/documents" element={<DocumentSection />} />
                    <Route path="/project" element={<ProjectSection />} />
                    <Route
                      path="/profile"
                      element={<Profile user={user} onUpdate={setUser} />}
                    />
                  </Routes>
                </Box>
              </Box>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
