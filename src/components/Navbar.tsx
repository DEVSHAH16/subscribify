
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Bell, Settings, LogOut, CreditCard, CreditCardIcon, Zap, Shield, BookOpen, BarChart4 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is on dashboard page to simulate logged in state
    setIsLoggedIn(location.pathname.includes('/dashboard'));
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-3 glass shadow-md" : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">SUBSCRIFY</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            FAQ
          </button>
          <Link to="/blog" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
            Blog
          </Link>
        </div>
        
        {isLoggedIn ? (
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-gradient-to-r from-green-500/20 to-green-400/10 px-3 py-1.5 rounded-full border border-green-500/20">
              <Zap className="h-4 w-4 text-green-400 mr-1.5" />
              <div>
                <span className="text-xs text-green-400 font-medium">Saving 3.5% per transaction</span>
                <span className="text-xs text-green-300 ml-1">$432 this month</span>
              </div>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 px-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-sm leading-tight">John Smith</span>
                        <span className="text-xs text-muted-foreground leading-tight">Pro Plan</span>
                      </div>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] p-2">
                      <div className="px-3 py-2">
                        <div className="font-medium">john@example.com</div>
                        <div className="text-xs text-muted-foreground mt-1">Account ID: SUB-2234</div>
                      </div>
                      
                      <div className="border-t border-white/10 my-2"></div>
                      
                      <div className="grid gap-1">
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <BarChart4 size={16} />
                              <span>Analytics</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <User size={16} />
                              <span>Manage Users</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Bell size={16} />
                              <span>Notifications</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <CreditCard size={16} />
                              <span>Billing & Plans</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Settings size={16} />
                              <span>Settings</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <div className="border-t border-white/10 my-1"></div>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Shield size={16} className="text-accent" />
                              <span>Security</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <BookOpen size={16} className="text-accent" />
                              <span>Documentation</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        <div className="border-t border-white/10 my-1"></div>
                        
                        <NavigationMenuLink asChild>
                          <Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2 text-red-400">
                              <LogOut size={16} />
                              <span>Sign Out</span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signup">
              <Button variant="secondary" className="rounded-full px-5">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-full px-5 bg-gradient-purple hover:opacity-90 shadow-button">
                Get Started
              </Button>
            </Link>
          </div>
        )}
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors text-left"
            >
              FAQ
            </button>
            <Link to="/blog" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Blog
            </Link>
            
            {isLoggedIn ? (
              <>
                <div className="flex items-center bg-gradient-to-r from-green-500/20 to-green-400/10 px-3 py-1.5 rounded-full border border-green-500/20 w-fit">
                  <Zap className="h-4 w-4 text-green-400 mr-1.5" />
                  <div>
                    <span className="text-xs text-green-400 font-medium">Saving 3.5%</span>
                    <span className="text-xs text-green-300 ml-1">$432 this month</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-white/10 flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Smith</div>
                    <div className="text-xs text-muted-foreground">Pro Plan</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 pt-2">
                  <Link to="/dashboard" className="flex items-center gap-2 text-sm">
                    <BarChart4 size={16} />
                    <span>Analytics</span>
                  </Link>
                  <Link to="/dashboard" className="flex items-center gap-2 text-sm">
                    <User size={16} />
                    <span>Manage Users</span>
                  </Link>
                  <Link to="/dashboard" className="flex items-center gap-2 text-sm">
                    <CreditCard size={16} />
                    <span>Billing & Plans</span>
                  </Link>
                  <Link to="/dashboard" className="flex items-center gap-2 text-sm">
                    <Bell size={16} />
                    <span>Notifications</span>
                  </Link>
                  <Link to="/dashboard" className="flex items-center gap-2 text-sm">
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <Link to="/" className="flex items-center gap-2 text-sm text-red-400">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
                <Link to="/signup">
                  <Button variant="secondary" className="w-full rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full rounded-full bg-gradient-purple hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
