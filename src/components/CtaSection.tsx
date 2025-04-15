
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import gsap from "gsap";

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(".cta-button", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Pulsating glow effect
      gsap.to(".glow-pulse", {
        boxShadow: "0 0 30px rgba(132, 90, 223, 0.5)",
        repeat: -1,
        yoyo: true,
        duration: 2
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="glass-card py-16 px-8 md:p-16 rounded-3xl text-center max-w-4xl mx-auto relative">
          {/* Glow effect */}
          <div className="absolute inset-0 glow-pulse rounded-3xl bg-gradient-glow opacity-60 pointer-events-none"></div>
          
          <div className="cta-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start your free trial – Cancel Anytime
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied users who have simplified their subscription management. No credit card required to get started.
            </p>
          </div>
          
          <div className="cta-button">
            <Link to="/signup">
              <Button className="px-10 py-7 text-lg rounded-full bg-gradient-purple hover:opacity-90 shadow-button">
                Start Free Trial
              </Button>
            </Link>
            
            <div className="flex items-center justify-center mt-6">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm text-muted-foreground">Trusted by 10,000+ users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
