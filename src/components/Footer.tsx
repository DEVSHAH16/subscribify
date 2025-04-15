
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-16 pb-12 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">SUBSCRIFY</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-md">
              Your payment gateway for SaaS products, simplified. Choose a plan, pay securely, and manage your users all in one dashboard.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Pricing</Link></li>
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground text-sm transition-colors">Features</button></li>
              <li><Link to="/signup" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</Link></li>
              <li><button onClick={() => document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground text-sm transition-colors">Commissions</button></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Subscribe</h4>
            <p className="text-muted-foreground text-sm mb-4">Get the latest news and updates</p>
            <div className="flex">
              <Input 
                placeholder="Enter your email" 
                className="rounded-r-none bg-secondary/50 focus:ring-1 focus:ring-accent border-r-0"
              />
              <Button className="rounded-l-none bg-accent hover:bg-accent/90">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Subscrify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
