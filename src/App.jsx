import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import ContentSection from "./components/landing/ContentSection";
import TestimonialSection from "./components/landing/TestimonialSection";
import PricingSection from "./components/landing/PricingSection";
import Footer from "./components/landing/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import UserDetailPage from "./components/users/UserDetailPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
    // Check if user is already logged in (e.g., from localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="text-gray-800 bg-white dark:bg-gray-950 dark:text-white">
        {isAuthenticated ? (
          <>
            <DashboardNavbar onLogout={handleLogout} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users/:id" element={<UserDetailPage />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <ContentSection />
                    <TestimonialSection />
                    <PricingSection />
                    <Footer />
                  </>
                }
              />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
