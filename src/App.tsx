import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 

// Layout components (Jo har page par dikhenge)
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-legal-navy">
        <Navbar />
        
        <Routes>
          {/* Jab koi sirf website khole (Home Page) */}
          <Route path="/" element={<Home />} />
          
          {/* Jab koi /login par jaye (Login Page) */}
          <Route path="/login" element={<Login />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;