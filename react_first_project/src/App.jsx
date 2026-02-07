import React, { useState } from "react";
import UserForm from "./UserForm";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial",
    minHeight: "100vh",
    transition: "0.3s",
    backgroundColor: darkMode ? "#9a5151" : "#96cae5",
    color: darkMode ? "#500404" : "#56da4f",
  };

  const buttonStyle = {
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
    backgroundColor: darkMode ? "#4dabf7" : "#1976d2",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={appStyle}>
      <h1>React Form with Local Storage</h1>

      {/* Toggle Theme Button */}
      <button
        style={buttonStyle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <UserForm />
    </div>
  );
}

export default App;
