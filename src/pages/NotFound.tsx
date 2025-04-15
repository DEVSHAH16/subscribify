
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="relative">
        <div className="absolute -z-10 opacity-20 blur-3xl w-80 h-80 rounded-full bg-accent/30 -top-20 -left-20"></div>
        <div className="absolute -z-10 opacity-20 blur-3xl w-80 h-80 rounded-full bg-primary/30 -bottom-20 -right-20"></div>
        
        <div className="glass-card p-10 md:p-16 rounded-3xl text-center max-w-lg mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold text-gradient mb-6">404</h1>
          <p className="text-xl md:text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="rounded-full px-6 py-6 bg-gradient-purple hover:opacity-90">
              <HomeIcon className="mr-2 h-4 w-4" /> Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
