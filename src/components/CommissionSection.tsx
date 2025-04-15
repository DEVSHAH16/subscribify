
import { useEffect, useRef } from "react";
import { Shield, DollarSign, BarChart } from "lucide-react";
import gsap from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Standard",
    volume: "Up to $10,000/month",
    percent: "2.9%",
    flat: "+ $0.30",
    details: "Perfect for startups and small businesses",
  },
  {
    name: "Growth",
    volume: "$10,001 to $50,000/month",
    percent: "2.5%",
    flat: "+ $0.30",
    details: "For growing businesses with moderate volume",
    featured: true
  },
  {
    name: "Scale",
    volume: "$50,001+/month",
    percent: "2.2%",
    flat: "+ $0.25",
    details: "For established businesses with high volume",
  }
];

const CommissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".commission-title", {
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
      gsap.from(".commission-subtitle", {
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
      
      // Staggered animation for cards
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2 + (index * 0.2),
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div id="commission" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="commission-title text-3xl md:text-4xl font-bold">
            Transparent Commission Structure
          </h2>
          <p className="commission-subtitle mt-4 text-muted-foreground">
            No hidden fees. We take pride in our straightforward and fair commission rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`glass-card relative ${tier.featured ? 'border-accent' : ''}`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-accent px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className={`text-xl ${tier.featured ? 'text-accent' : ''}`}>{tier.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">{tier.volume}</p>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">{tier.percent}</span>
                    <span className="ml-2 text-muted-foreground">{tier.flat} per transaction</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{tier.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Setup Fees</h3>
            <p className="text-muted-foreground">Get started without any upfront costs or setup fees.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Monthly Minimums</h3>
            <p className="text-muted-foreground">Pay only for what you process, with no monthly minimum requirements.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BarChart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Volume Discounts</h3>
            <p className="text-muted-foreground">As your business grows, your rates automatically decrease.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionSection;
