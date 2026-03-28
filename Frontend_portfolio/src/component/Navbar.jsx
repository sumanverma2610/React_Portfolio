// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/App.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Suman Verma</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/App.css";

const Navbar = () => {
  const navigate = useNavigate();

  // check admin login
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload(); // refresh navbar
  };

  return (
    <nav className="navbar">
      <div className="logo">Suman Verma</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* ADMIN ONLY */}
        {token && (
          <>
            <li><Link to="/admin/add-project">Add Project</Link></li>
            <li><Link to="/admin/contacts">View Contacts</Link></li>

            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;