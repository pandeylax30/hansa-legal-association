import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  // Jab bhi loginSuccess call hoga, state change hogi aur Navbar dikhega
  const loginSuccess = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-legal-navy">
      {/* Navbar yahan tabhi aayega jab isAuthenticated true hoga */}
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login onLoginSuccess={loginSuccess} />} 
        />
        
        <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} 
        />

        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
      </Routes>

      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;