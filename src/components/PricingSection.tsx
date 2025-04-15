
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import gsap from "gsap";

const plans = [
  {
    name: "Free",
    price: {
      monthly: 0,
      yearly: 0
    },
    description: "Perfect for individuals just getting started",
    features: ["3 Products", "Basic Analytics", "Payment Links", "Customer Portal", "Email Support"],
    isPopular: false,
    ctaText: "Start Free"
  },
  {
    name: "Basic",
    price: {
      monthly: 9,
      yearly: 99
    },
    description: "Great for creators and small businesses",
    features: ["Unlimited Products", "Advanced Analytics", "Custom Checkout", "Team Access", "API Access", "Priority Support"],
    isPopular: true,
    ctaText: "Choose Plan"
  },
  {
    name: "Pro",
    price: {
      monthly: 29,
      yearly: 290
    },
    description: "For growing businesses with advanced needs",
    features: ["Everything in Basic", "White-label Checkout", "Advanced Reporting", "Multiple Currencies", "Custom Domains", "24/7 Support", "Dedicated Account Manager"],
    isPopular: false,
    ctaText: "Choose Plan"
  }
];

const PricingSection = () => {
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const planRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and toggle animation
      gsap.from(".pricing-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(".pricing-toggle", {
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

      // Staggered animation for pricing cards
      planRefs.current.forEach((plan, index) => {
        gsap.from(plan, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.3 + index * 0.15,
          scrollTrigger: {
            trigger: plan,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  const toggleBilling = () => {
    const timeline = gsap.timeline();
    // Animate prices out
    timeline.to(".price", {
      opacity: 0,
      y: -20,
      duration: 0.3
    });
    // Toggle the state
    setYearlyBilling(!yearlyBilling);
    // Animate new prices in
    timeline.to(".price", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: 0.1
    });
  };
  
  return (
    <div ref={sectionRef} id="pricing" className="py-24 bg-black/50 relative">
      {/* Aurora background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
      
      <div className="container mx-auto px-4 py-[40px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="pricing-title text-3xl md:text-4xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            No contracts. No surprise fees. Choose the plan that works best for you.
          </p>
          
          <div className="pricing-toggle mt-8 flex items-center justify-center space-x-3">
            <span className={`text-sm ${!yearlyBilling ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch checked={yearlyBilling} onCheckedChange={toggleBilling} className="data-[state=checked]:bg-accent" />
            <span className={`text-sm ${yearlyBilling ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-xs py-0.5 px-2 rounded-full bg-accent/20 text-accent">Save 15%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              ref={el => planRefs.current[index] = el} 
              className={`relative group transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
            >
              <div className={`glass-card rounded-2xl p-1 relative h-full ${plan.isPopular ? 'ring-2 ring-accent' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs font-bold py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6 rounded-xl h-full flex flex-col">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  <div className="price mt-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {plan.price.monthly === 0 && !yearlyBilling ? 'Free' : `$${yearlyBilling ? plan.price.yearly : plan.price.monthly}`}
                      </span>
                      {plan.price.monthly !== 0 && (
                        <span className="text-sm text-muted-foreground ml-2">
                          /{yearlyBilling ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="mt-6 space-y-3 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 rounded-full p-0.5 bg-primary/20 text-accent">
                          <Check size={16} />
                        </span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Link to="/signup">
                      <Button className={`w-full rounded-full ${plan.isPopular ? 'bg-gradient-purple hover:opacity-90 shadow-button' : 'bg-secondary hover:bg-secondary/80'}`}>
                        {plan.ctaText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
