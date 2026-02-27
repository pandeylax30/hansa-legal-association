import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState(''); // Name state add ki
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (isSignup) {
        // --- SIGNUP LOGIC ---
        // User ka data object banakar localStorage mein save karenge
        const userData = { fullName, email, password };
        localStorage.setItem('registeredUser', JSON.stringify(userData));
        
        alert("Account Created Successfully! Please login now.");
        setIsSignup(false); // Signup ke baad wapas login screen par bhejo
        setIsLoading(false);
        setPassword(''); // Password clear karo safety ke liye
      } else {
        // --- LOGIN LOGIC ---
        // Saved data ko wapas nikaal kar check karenge
        const storedData = localStorage.getItem('registeredUser');
        const registeredUser = storedData ? JSON.parse(storedData) : null;

        // Condition 1: Default Admin login
        // Condition 2: New Signup wala login
        if (
          (email === "admin@hansa.com" && password === "12345") || 
          (registeredUser && email === registeredUser.email && password === registeredUser.password)
        ) {
          onLoginSuccess();
          navigate('/');
        } else {
          setError('Invalid Credentials. Please sign up if you haven’t.');
          setIsLoading(false);
        }
      }
    }, 1500);
  };

  return (
    <div className="login-page-container pt-32 pb-20 flex justify-center items-center min-h-[90vh]">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="login-glow"
      />

      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg px-4"
      >
        <Card className="login-card-container border-none relative overflow-hidden bg-white/[0.02] backdrop-blur-xl">
          <CardHeader className="text-center space-y-4 pt-10">
            <CardTitle className="text-3xl font-serif text-white tracking-tight">
              Advocate <span className="text-legal-gold italic">{isSignup ? 'Registration' : 'Access'}</span>
            </CardTitle>
            <CardDescription className="text-white/30 text-[9px] uppercase tracking-[0.4em] mt-2">
              Hansa Legal Association Portal
            </CardDescription>
          </CardHeader>

          <CardContent className="p-10 pt-4">
            <form onSubmit={handleAuth} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isSignup ? 'signup' : 'login'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {isSignup && (
                    <div className="space-y-1">
                      <label className="login-label">Full Name</label>
                      <Input 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Adv. Hansa Sharma" 
                        className="login-field h-12" 
                      />
                    </div>
                  )}

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
                    <label className="login-label">Secret Password</label>
                    <Input 
                      required 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="login-field h-12" 
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {error && <p className="text-[10px] text-red-500 uppercase tracking-widest text-center">{error}</p>}

              <Button disabled={isLoading} className="w-full bg-legal-gold text-legal-navy hover:bg-white transition-all h-12 font-bold uppercase tracking-widest text-[10px]">
                {isLoading ? "Processing..." : (isSignup ? "Create Account" : "Authorize Entry")}
              </Button>

              <div className="text-center mt-6">
                <button 
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setError('');
                  }}
                  className="text-[10px] text-white/40 uppercase tracking-[0.2em] hover:text-legal-gold transition-colors"
                >
                  {isSignup ? "Already have access? Login" : "Need access? Request Signup"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;