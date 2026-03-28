// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "../src/component/Navbar";

// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Projects from "./pages/Project.jsx";
// import ProjectDetails from "./pages/ProjectDetails.jsx";
// import Contact from "./pages/Contact.jsx";
// import Login from "./pages/login.jsx";
// import ProtectedRoute from "./routes/ProtectedRoute.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />

//         {/* 🔐 Protected Routes */}
//         <Route
//           path="/projects"
//           element={
//             <ProtectedRoute>
//               <Projects />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/projects/:id"
//           element={
//             <ProtectedRoute>
//               <ProjectDetails />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Route
//         path="/admin/add-project"
//         element={
//           <ProtectedRoute>
//             <AddProject />
//           </ProtectedRoute>
//         }
//       />
//     </>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import AddProject from "./pages/AddProject";
import ViewContacts from "./pages/viewContact";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* PUBLIC PROJECTS */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN ONLY */}
        <Route
          path="/admin/add-project"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <ViewContacts/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;