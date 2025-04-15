
import { useEffect, useRef } from "react";
import { Package, CreditCard, Share2 } from "lucide-react";
import gsap from "gsap";

const steps = [
  {
    icon: <Package className="w-12 h-12 text-accent" />,
    title: "Create a product",
    description: "Set up your digital product or service in just a few clicks with our intuitive dashboard."
  },
  {
    icon: <CreditCard className="w-12 h-12 text-accent" />,
    title: "Set pricing",
    description: "Choose from flexible pricing models: one-time, subscription, or tiered plans with free trials."
  },
  {
    icon: <Share2 className="w-12 h-12 text-accent" />,
    title: "Share and get paid",
    description: "Share your payment link, collect payments securely, and track everything in one place."
  }
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".how-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Subtitle animation
      gsap.from(".how-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Connector line animation
      gsap.from(".connector-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Staggered animation for steps
      stepRefs.current.forEach((step, index) => {
        gsap.from(step, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.3 + (index * 0.2),
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={sectionRef} id="how-it-works" className="py-24 bg-background relative">
      {/* Background aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background/90 -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-accent/5 to-transparent opacity-60 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="how-title text-3xl md:text-4xl font-bold">
            How Subscribify Works
          </h2>
          <p className="how-subtitle mt-4 text-muted-foreground">
            Get started in minutes with our simple three-step process.
          </p>
        </div>
        
        <div className="relative">
          {/* Connector line */}
          <div className="connector-line hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepRefs.current[index] = el}
                className="glass-card p-8 rounded-2xl relative z-10 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center relative">
                  {step.icon}
                  <div className="absolute top-0 left-0 w-full h-full rounded-full animate-glow"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-accent/20 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
