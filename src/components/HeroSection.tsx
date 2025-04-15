import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, CreditCard } from "lucide-react";
import gsap from "gsap";
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shapeOneRef = useRef<HTMLDivElement>(null);
  const shapeTwoRef = useRef<HTMLDivElement>(null);
  const shapeThreeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
      });
      gsap.from(".hero-icon", {
        opacity: 0,
        scale: 0.5,
        rotation: -10,
        duration: 1.2,
        delay: 0.4,
        ease: "elastic.out(1, 0.5)"
      });

      // Floating animations for shapes
      gsap.to(shapeOneRef.current, {
        y: -30,
        x: 20,
        rotation: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(shapeTwoRef.current, {
        y: 30,
        x: -20,
        rotation: -10,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
      gsap.to(shapeThreeRef.current, {
        y: -20,
        x: -30,
        rotation: 5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // Scroll indicator bounce
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    return () => ctx.revert();
  }, []);
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div ref={heroRef} className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-primary/20 to-background -z-20"></div>
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary/10 to-transparent opacity-70 blur-3xl -z-10"></div>
      
      {/* Floating shapes */}
      <div ref={shapeOneRef} className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div ref={shapeTwoRef} className="absolute bottom-[30%] right-[15%] w-72 h-72 rounded-full bg-accent/10 blur-3xl -z-10"></div>
      <div ref={shapeThreeRef} className="absolute top-[50%] left-[60%] w-48 h-48 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="hero-icon mb-6 p-6 rounded-full bg-primary/10 backdrop-blur-lg border border-white/10">
            <CreditCard size={48} className="text-accent animate-pulse" />
          </div>
          
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The easiest way to sell <span className="text-gradient">subscriptions</span>
          </h1>
          <p className="hero-subtitle mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Subscribify helps creators and founders manage pricing plans, collect payments, and grow recurring revenue — no code required.
          </p>
          <div className="hero-cta mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/signup">
              <Button className="rounded-full px-6 py-6 bg-gradient-purple hover:opacity-90 shadow-button text-base">
                Start for Free
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary" className="rounded-full px-6 py-6 text-base">
                See Plans
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">AB</div>
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs">JL</div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">KM</div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Trusted by 10,000+ users</p>
              <div className="flex items-center mt-1 justify-center">
                {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>)}
                <span className="ml-1 text-xs text-muted-foreground">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          
        </div>
      </div>
    </div>;
};
export default HeroSection;