import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gsap from "gsap";
const tabs = [{
  id: "dashboard",
  label: "Dashboard",
  imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  title: "Your Personalized Dashboard",
  description: "Get a complete overview of all your subscriptions, usage statistics, and upcoming payments in one place."
}, {
  id: "billing",
  label: "Billing",
  imgSrc: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80&w=2000",
  title: "Simplified Billing Management",
  description: "View and download invoices, update payment methods, and manage your billing preferences with ease."
}, {
  id: "analytics",
  label: "Analytics",
  imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  title: "Advanced Analytics & Insights",
  description: "Track your subscription metrics with detailed charts and reports to optimize your spending."
}];
const ProductPreviewSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".preview-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      gsap.from(".preview-subtitle", {
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
      gsap.from(".preview-tabs", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      gsap.from(".preview-mockup", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (imageRef.current && contentRef.current) {
      // Animate tab change
      gsap.to([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 10,
        duration: 0.3,
        onComplete: () => {
          gsap.to([imageRef.current, contentRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1
          });
        }
      });
    }
  }, [activeTab]);
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  return <div ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="preview-title text-3xl md:text-4xl font-bold">
            See the product in action
          </h2>
          <p className="preview-subtitle mt-4 text-muted-foreground">
            Explore the intuitive dashboard that makes subscription management a breeze.
          </p>
        </div>
        
        <div className="preview-tabs mt-12">
          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="glass bg-secondary/20">
                {tabs.map(tab => <TabsTrigger key={tab.id} value={tab.id} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    {tab.label}
                  </TabsTrigger>)}
              </TabsList>
            </div>
            
            {tabs.map(tab => <TabsContent key={tab.id} value={tab.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div ref={imageRef} className="order-2 lg:order-1">
                    
                  </div>
                  
                  <div ref={contentRef} className="order-1 lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {activeTabData?.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {activeTabData?.description}
                    </p>
                    <ul className="space-y-3">
                      {activeTabData?.id === "dashboard" && <>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>All your subscriptions in a single view</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Customizable dashboard widgets</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Upcoming payment reminders</span>
                          </li>
                        </>}
                      
                      {activeTabData?.id === "billing" && <>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Secure payment processing with Stripe</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Multiple payment methods support</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Invoice history and exports</span>
                          </li>
                        </>}
                      
                      {activeTabData?.id === "analytics" && <>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Visual spending breakdowns</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Usage trends and forecasting</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>Customizable reporting periods</span>
                          </li>
                        </>}
                    </ul>
                  </div>
                </div>
              </TabsContent>)}
          </Tabs>
        </div>
      </div>
    </div>;
};
export default ProductPreviewSection;