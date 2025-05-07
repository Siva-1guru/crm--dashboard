 
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Dashboard from "./pages/Dashboard";
// // import Navbar from "./components/sidebar";
// // import SmallSidebar from "./components/SmallSidebar";

// // import Account from "./pages/Account";
// // import LeadsManagement from "./pages/Leads";
// // import Tasks from "./pages/Tasks";
// // import Contacts from "./pages/Contacts";
// // import Profile from "./pages/profile";
// // import Sales from "./pages/SalesPipeline";
// // import Reports from "./pages/Reports";
// // import Deals from "./pages/Deals";
// // import MeetingsPage from "./pages/meetings";
// // import Calls from "./pages/Calls";
// // import ProductManager from "./pages/ProductManager";

// // function Layout() {
// //   const [user, setUser] = useState({
// //     name: "John Doe",
// //     email: "johndoe@example.com",
// //     role: "Admin",
// //     avatar: ""
// //   });

// //   const handleUpdate = (updatedUser) => {
// //     setUser(updatedUser);
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       <Navbar />
// //       <div className="flex-1 flex flex-col p-4 overflow-y-auto">
// //         <Routes>
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/accounts" element={<Account />} />
// //           <Route path="/leads" element={<LeadsManagement />} />
// //           <Route path="/tasks" element={<Tasks />} />
// //           <Route path="/contacts" element={<Contacts />} />
// //           <Route path="/sales" element={<Sales />} />
// //           <Route path="/reports" element={<Reports />} />
// //           <Route path="/deals" element={<Deals />} />
// //           <Route path="/meetings" element={<MeetingsPage />} />
// //           <Route path="/calls" element={<Calls />} />
// //           <Route
// //             path="/profile"
// //             element={<Profile user={user} onUpdate={handleUpdate} />}
// //           />
// //           <Route path="/products" element={<ProductManager />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         {/* Layout wraps all the main dashboard components */}
// //         <Route path="/*" element={<Layout />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/sidebar";
// import SmallSidebar from "./components/SmallSidebar";

// import Account from "./pages/Account";
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
// // import ReminderForm from './pages/ReminderForm'; // Import ReminderForm component
// import ReminderForm from "./pages/RemainderForm";  // Make sure the path matches

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
//           <Route path="/accounts" element={<Account />} />
//           <Route path="/leads" element={<LeadsManagement />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/deals" element={<Deals />} />
//           <Route path="/meetings" element={<MeetingsPage />} />
//           <Route path="/calls" element={<Calls />} />
//           <Route
//             path="/profile"
//             element={<Profile user={user} onUpdate={handleUpdate} />}
//           />
//           <Route path="/products" element={<ProductManager />} />
          
//           {/* Add Reminder Route */}
//           <Route path="/reminders" element={<ReminderForm />} /> {/* Dynamic lead ID */}
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
//         {/* Layout wraps all the main dashboard components */}
//         <Route path="/*" element={<Layout />} />
//       </Routes>
//     </Router>
//   );
// }

// // export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ Add this line

// // Pages and Components
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/sidebar";
// import SmallSidebar from "./components/SmallSidebar";

// import Account from "./pages/Account";
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
// import ReminderForm from "./pages/RemainderForm"; // Spelling correct!

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
//           <Route path="/accounts" element={<Account />} />
//           <Route path="/leads" element={<LeadsManagement />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/deals" element={<Deals />} />
//           <Route path="/meetings" element={<MeetingsPage />} />
//           <Route path="/calls" element={<Calls />} />
//           <Route
//             path="/profile"
//             element={<Profile user={user} onUpdate={handleUpdate} />}
//           />
//           <Route path="/products" element={<ProductManager />} />
//           <Route path="/reminders" element={<ReminderForm />} />
//         </Routes>
//       </div>
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
//           {/* Layout wraps all the main dashboard components */}
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// // export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ Add this line

// // Pages and Components
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/sidebar";
// import SmallSidebar from "./components/SmallSidebar";

// import Account from "./pages/Account";
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
// import ReminderForm from "./pages/RemainderForm"; // Spelling correct!
// import DocumentSection  from "./pages/Documentsection";
// // Document Section Page
// // import DocumentSection from "./pages/DocumentSection"; // Update to import from pages folder

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
//           <Route path="/accounts" element={<Account />} />
//           <Route path="/leads" element={<LeadsManagement />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/deals" element={<Deals />} />
//           <Route path="/meetings" element={<MeetingsPage />} />
//           <Route path="/calls" element={<Calls />} />
//           <Route
//             path="/profile"
//             element={<Profile user={user} onUpdate={handleUpdate} />}
//           />
//           <Route path="/products" element={<ProductManager />} />
//           <Route path="/reminders" element={<ReminderForm />} />
//           <Route path="/documents" element={<DocumentSection />} /> {/* Corrected to be a page */}
//         </Routes>
//       </div>
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
//           {/* Layout wraps all the main dashboard components */}
//           <Route path="/*" element={<Layout />} />
//         </Routes>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
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
import ProjectSection from "./pages/ProjectSection"; // ✅ NEW

// Components
import Navbar from "./components/sidebar";
import SmallSidebar from "./components/SmallSidebar"; // optional if you're using it

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
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/leads" element={<LeadsManagement />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/meetings" element={<MeetingsPage />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/products" element={<ProductManager />} />
          <Route path="/reminders" element={<ReminderForm />} />
          <Route path="/documents" element={<DocumentSection />} />
          <Route path="/project" element={<ProjectSection />} /> {/* ✅ NEW */}
          <Route
            path="/profile"
            element={<Profile user={user} onUpdate={handleUpdate} />}
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId="518207342905-48dqdtruidn8oimsvo9dko4r6vbv0uv2.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Layout />} /> {/* All dashboard pages inside */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
