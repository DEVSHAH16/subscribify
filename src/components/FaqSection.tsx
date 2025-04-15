
import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import gsap from "gsap";

const faqs = [
  {
    question: "How does billing work?",
    answer: "You'll be billed automatically on a monthly or yearly basis, depending on the plan you choose. We use Stripe for secure payment processing, and you can update your payment method or cancel anytime from your dashboard."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. When you cancel, you'll still have access to your subscription until the end of your current billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee. If you're not satisfied with our service within the first 14 days, contact our support team for a full refund."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, your new rate will apply at the next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 7-day free trial on all our plans. No credit card is required to start your trial. You'll only be charged when you decide to continue with a paid plan."
  },
  {
    question: "How secure is my payment information?",
    answer: "Very secure. We use Stripe for all payment processing, which means your payment details never touch our servers. Stripe is PCI DSS Level 1 compliant, the highest level of certification available."
  }
];

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(".faq-subtitle", {
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
      
      gsap.from(accordionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div id="faq" ref={sectionRef} className="py-24 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="faq-title text-3xl md:text-4xl font-bold">
            Frequently asked questions
          </h2>
          <p className="faq-subtitle mt-4 text-muted-foreground">
            Find answers to common questions about SUBSCRIFY.
          </p>
        </div>
        
        <div ref={accordionRef} className="max-w-3xl mx-auto glass-card p-8 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
