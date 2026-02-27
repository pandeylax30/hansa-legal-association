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

  const loginSuccess = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuthenticated(true);
  };

  // --- YE FUNCTION REFRESH KO ROKEGA ---
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuthenticated(false); // State turant update hogi, reload ki zarurat nahi
  };

  return (
    <div className="min-h-screen bg-legal-navy">
      {/* Navbar ko logout function pass karein */}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}

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