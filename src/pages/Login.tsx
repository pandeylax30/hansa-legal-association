import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Redirect ke liye
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Fake authentication logic
    setTimeout(() => {
      if (email === "admin@hansa.com" && password === "12345") {
        // Agar sahi hai toh Panel par bhej do
        navigate('/panel'); 
      } else {
        setError('Invalid Security Credentials. Access Denied.');
        setIsLoading(false);
      }
    }, 1500); // Luxury feel ke liye thoda delay
  };

  return (
    <div className="login-page-container pt-32 pb-20">
      {/* Animated Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="login-glow"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="login-card-container border-none relative overflow-hidden">
          <CardHeader className="text-center space-y-4 pt-10">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardTitle className="text-3xl font-serif text-white tracking-tight">
                Advocate <span className="text-legal-gold italic">Access</span>
              </CardTitle>
              <CardDescription className="text-white/30 text-[9px] uppercase tracking-[0.4em] mt-2">
                Hansa Legal Association Portal
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="p-8 pt-4">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1">
                <label className="login-label">Registration Email</label>
                <Input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@hansalegal.com" 
                  className="login-field h-12"
                />
              </div>

              <div className="space-y-1">
                <label className="login-label">Secret Key / Password</label>
                <Input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="login-field h-12"
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-[10px] text-red-500 uppercase tracking-widest text-center animate-pulse">
                  {error}
                </p>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  disabled={isLoading}
                  className="w-full bg-legal-gold text-legal-navy hover:bg-white transition-all duration-500 rounded-none h-12 font-bold uppercase tracking-widest text-[10px] cursor-pointer"
                >
                  {isLoading ? "Verifying Identity..." : "Authorize Entry"}
                </Button>
              </motion.div>

              <div className="flex justify-between items-center pt-4">
                <a href="#" className="text-[9px] text-white/20 uppercase tracking-widest hover:text-legal-gold transition-colors">
                  Forgot Access?
                </a>
                <span className="w-12 h-[1px] bg-white/5"></span>
                <a href="#" className="text-[9px] text-white/20 uppercase tracking-widest hover:text-legal-gold transition-colors">
                  System Status
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;