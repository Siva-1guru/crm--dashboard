 
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/sidebar";
// import Account from './pages/Account';
// import LeadsManagement from './pages/Leads';
// import Tasks from './pages/Tasks';
// import Contacts from './pages/Contacts';

// function Layout() {
//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="flex-1 flex flex-col">
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/accounts" element={<Account />} />
//           <Route path="/leads" element={<LeadsManagement />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/contacts" element={<Contacts />} /> {/* Contacts Route Added */}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/*" element={<Layout />} />
//       </Routes>
//     </Router>
//   );
// }

//export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/sidebar";
// import Sidebar from "./components/sidebar";

import SmallSidebar from "./components/SmallSidebar";
import Account from './pages/Account';
import LeadsManagement from './pages/Leads';
import Tasks from './pages/Tasks';
import Contacts from './pages/Contacts';
import Profile from "./pages/profile";

function Layout() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
    avatar: ""
  });

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/leads" element={<LeadsManagement />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile user={user} onUpdate={handleUpdate} />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
