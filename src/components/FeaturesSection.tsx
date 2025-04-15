
import { useEffect, useRef } from "react";
import { CreditCard, Shield, BarChart, UserCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <CreditCard className="w-10 h-10 text-accent" />,
    title: "Easy Subscription Management",
    description: "Update, pause, or cancel your subscription anytime with just a few clicks."
  },
  {
    icon: <Shield className="w-10 h-10 text-accent" />,
    title: "Stripe-secured Payments",
    description: "Your payment details are secure with our trusted payment processor."
  },
  {
    icon: <BarChart className="w-10 h-10 text-accent" />,
    title: "Usage & Billing Analytics",
    description: "Track your usage and billing history with detailed analytics and insights."
  },
  {
    icon: <UserCircle className="w-10 h-10 text-accent" />,
    title: "Personalized Dashboard",
    description: "Your custom dashboard shows everything you need at a glance."
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and subtitle animation
      gsap.from(".features-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(".features-subtitle", {
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
      
      // Staggered animation for feature cards
      featureRefs.current.forEach((feature, index) => {
        gsap.from(feature, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2 + (index * 0.1),
          scrollTrigger: {
            trigger: feature,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div id="features" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="features-title text-3xl md:text-4xl font-bold">
            Everything you need in one place
          </h2>
          <p className="features-subtitle mt-4 text-muted-foreground">
            Manage your subscriptions with powerful features designed to make your life easier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
