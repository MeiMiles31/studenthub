import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu
    }
  };

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Since this is frontend only, show a message
    toast({
      title: "Login",
      description: "Login functionality would be implemented with backend integration",
    });
  };

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('shadow-md');
        } else {
          header.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 transition-shadow duration-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">StudentPlan</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-slate-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('feedback')}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Feedback
                </button>
                <a 
                  href="https://yourshop.com"
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Shop
                </a>
                <Button 
                  onClick={() => scrollToSection('login')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Member Login
                </Button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-800"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-slate-800 hover:text-blue-600 font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('feedback')}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600"
                >
                  Feedback
                </button>
                <a 
                  href="https://yourshop.com"
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600"
                >
                  Shop
                </a>
                <button 
                  onClick={() => scrollToSection('login')}
                  className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600"
                >
                  Member Login
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="gradient-hero text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Organize Your Studies with <br />
              <span className="text-blue-200">StudentPlan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Create custom digital planners for students with intuitive design tools, cloud sync, and smart organization features
            </p>
            <Button 
              asChild
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              <a href="https://yourshop.com">
                Shop Now <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Digital Planners</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose the perfect planner to match your study style and academic goals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Planner */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Basic digital planner interface with clean layout" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Basic Planner</h3>
                <p className="text-slate-600 mb-6">Perfect for students who need essential planning features with clean, simple layouts for daily and weekly organization.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Daily & Weekly Views
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Basic Templates
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Note-taking Pages
                  </div>
                </div>
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="https://yourshop.com">Buy Now - $9.99/year</a>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Planner */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Pro digital planner with advanced features and goal tracking" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Pro Planner</h3>
                <p className="text-slate-600 mb-6">Enhanced planning with goal tracking, habit monitoring, and customizable templates for serious students.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Everything in Basic
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Goal Tracking System
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Habit Tracker
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Cloud Sync
                  </div>
                </div>
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="https://yourshop.com">Buy Now - $19.99/year</a>
                </Button>
              </CardContent>
            </Card>

            {/* Ultimate Planner */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Ultimate planner with comprehensive features and analytics across devices" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Ultimate Planner</h3>
                <p className="text-slate-600 mb-6">Complete academic management system with AI-powered insights, collaborative features, and premium support.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Everything in Premium
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    AI Study Insights
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Collaboration Tools
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-check text-emerald-500 mr-2"></i>
                    Priority Support
                  </div>
                </div>
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="https://yourshop.com">Buy Now - $29.99/year</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Compare Our Planners</h2>
            <p className="text-xl text-slate-600">Find the perfect match for your academic needs</p>
          </div>
          
          <div className="pricing-table">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-slate-800">Features</th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-800">
                      Basic<br />
                      <span className="text-sm font-normal text-slate-600">$9.99/year</span>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-800">
                      Pro<br />
                      <span className="text-sm font-normal text-slate-600">$19.99/year</span>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-800">
                      Ultimate<br />
                      <span className="text-sm font-normal text-slate-600">$29.99/year</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-800">Templates</td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                      <div className="text-sm text-slate-600 mt-1">5 Basic</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                      <div className="text-sm text-slate-600 mt-1">15 Premium</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                      <div className="text-sm text-slate-600 mt-1">25+ All Access</div>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">Cloud Sync</td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-times text-slate-400"></i>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-800">Goal Tracking</td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-times text-slate-400"></i>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">Support</td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-slate-600">Email</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-slate-600">Email + Chat</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-slate-600">Priority 24/7</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-800">AI Insights</td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-times text-slate-400"></i>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-times text-slate-400"></i>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-check text-emerald-500"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Student Planner Pro?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Powerful features designed specifically for student success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="feature-icon">
                <i className="fas fa-palette text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Customizable Templates</h3>
              <p className="text-slate-600">Personalize your planner with themes, colors, and layouts that match your study style and personality.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon">
                <i className="fas fa-cloud text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cloud Sync</h3>
              <p className="text-slate-600">Access your planner from any device with automatic synchronization across all your platforms.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon">
                <i className="fas fa-target text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Goal Tracking</h3>
              <p className="text-slate-600">Set academic goals, track progress, and celebrate achievements with visual progress indicators.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon">
                <i className="fas fa-bell text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Smart Reminders</h3>
              <p className="text-slate-600">Never miss an assignment or exam with intelligent notifications and deadline alerts.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cross-Device Support</h3>
              <p className="text-slate-600">Seamlessly switch between phone, tablet, and computer while maintaining perfect synchronization.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Progress Analytics</h3>
              <p className="text-slate-600">Gain insights into your study habits with detailed analytics and productivity reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Feedback Section */}
      <section id="feedback" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Students Say</h2>
            <p className="text-xl text-slate-600">Join thousands of successful students worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-slate-600 mb-6 italic">"Student Planner Pro completely transformed how I organize my studies. The goal tracking feature helped me improve my GPA by a full point!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-slate-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Sarah Chen</h4>
                  <p className="text-sm text-slate-500">Computer Science Major</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-slate-600 mb-6 italic">"The cloud sync is a game-changer! I can plan on my laptop during lectures and check my schedule on my phone between classes. Absolutely love it!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-slate-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Marcus Johnson</h4>
                  <p className="text-sm text-slate-500">Business Administration</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-slate-600 mb-6 italic">"As a medical student, organization is crucial. The templates are beautiful and the reminder system has saved me countless times. Worth every penny!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-slate-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Emily Rodriguez</h4>
                  <p className="text-sm text-slate-500">Pre-Med Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Login Section */}
      <section id="login" className="py-20 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-50 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Member Login</h2>
                <p className="text-slate-600">Access your account to manage your planners</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Login
                </Button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-slate-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Sign Up</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">StudentPlan</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Empowering students worldwide with digital planning tools designed for academic success and personal growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('feedback')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <a href="https://yourshop.com" className="text-slate-300 hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">© 2025 StudentPlan. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://yourshop.com" className="text-slate-400 hover:text-white text-sm transition-colors">Shop Now</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
