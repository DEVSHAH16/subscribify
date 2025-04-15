
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    quote: "SUBSCRIFY made it easy to launch our startup subscriptions!",
    author: "Alex Martinez",
    role: "SaaS Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Simple, clean, and super intuitive to use. We've doubled our recurring revenue since switching to SUBSCRIFY.",
    author: "Jordan Wilson",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Love the interface and billing system. Our customers have given us great feedback on the checkout experience.",
    author: "Priya Sharma",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "The analytics dashboard alone is worth the price. We can now make data-driven decisions about our pricing tiers.",
    author: "Thomas Chen",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(".testimonials-subtitle", {
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
      
      animateTestimonialChange();
    });
    
    return () => ctx.revert();
  }, []);
  
  useEffect(() => {
    animateTestimonialChange();
  }, [activeTestimonial]);
  
  const animateTestimonialChange = () => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  };
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div ref={sectionRef} className="py-24 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold">
            What our customers say
          </h2>
          <p className="testimonials-subtitle mt-4 text-muted-foreground">
            Join thousands of satisfied users who have simplified their subscription management.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div ref={testimonialRef} className="glass-card p-8 md:p-12 rounded-2xl relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/30" />
            
            <div className="pt-6 text-center md:text-left">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="mt-8 flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].author} 
                    className="h-16 w-16 rounded-full object-cover border-2 border-accent"
                  />
                </div>
                <div className="md:ml-4 text-center md:text-left">
                  <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-accent w-6' : 'bg-accent/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
