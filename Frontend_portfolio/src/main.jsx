import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import { ContactProvider } from "./context/contactContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ProjectProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </ProjectProvider>
    </AuthProvider>
  </BrowserRouter>
);