
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, CreditCard, Check, Lock } from "lucide-react";
import Footer from "@/components/Footer";
import gsap from "gsap";

// Step content
const steps = [{
  title: "Create your account",
  description: "Fill in your details to create your account",
  fields: [{
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com"
  }, {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••"
  }]
}, {
  title: "Select your plan",
  description: "Choose the plan that suits your needs",
  plans: [{
    id: "starter",
    name: "Starter",
    price: "$9/mo",
    features: ["5 Projects", "Basic Support", "Email Reminders"]
  }, {
    id: "pro",
    name: "Pro",
    price: "$19/mo",
    features: ["50 Projects", "Priority Support", "Analytics Dashboard"],
    popular: true
  }, {
    id: "business",
    name: "Business",
    price: "$49/mo",
    features: ["Unlimited Projects", "Dedicated Support", "Team Access"]
  }]
}, {
  title: "Payment Information",
  description: "Secure payment with Stripe",
  fields: [{
    id: "cardNumber",
    label: "Card Number",
    type: "text",
    placeholder: "1234 5678 9012 3456"
  }, {
    id: "cardExpiry",
    label: "Expiration Date",
    type: "text",
    placeholder: "MM/YY"
  }, {
    id: "cardCvc",
    label: "Security Code",
    type: "text",
    placeholder: "CVC"
  }, {
    id: "cardName",
    label: "Name on Card",
    type: "text",
    placeholder: "John Doe"
  }]
}, {
  title: "You're all set!",
  description: "Your account has been created successfully"
}];

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  useEffect(() => {
    // Scroll to top on step change
    window.scrollTo(0, 0);

    // Animate in the new step content
    gsap.fromTo("#step-content", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5
    });
  }, [currentStep]);
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return <div className="min-h-screen bg-background text-foreground">
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-xl font-bold">
            <span className="text-gradient">SUBSCRIFY</span>
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step indicator with connecting lines */}
          <div className="mb-12 flex justify-center">
            <div className="flex items-center justify-between max-w-xl w-full relative">
              {/* Connecting line behind the steps */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>
              
              {steps.map((_, index) => (
                <div key={index} className="flex-1 relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full ${
                    index < currentStep ? 'bg-accent text-white' : 
                    index === currentStep ? 'bg-primary text-white' : 
                    'bg-secondary text-muted-foreground'
                  }`}>
                    {index < currentStep ? <Check size={18} /> : <span>{index + 1}</span>}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Step content */}
          <div id="step-content" className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h2>
            <p className="text-muted-foreground mb-8">{steps[currentStep].description}</p>
            
            {currentStep === 0 && <div className="space-y-6">
                {steps[0].fields.map(field => <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <Input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full" />
                  </div>)}
              </div>}
            
            {currentStep === 1 && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps[1].plans.map(plan => <div key={plan.id} onClick={() => setSelectedPlan(plan.id)} className={`glass p-6 rounded-xl cursor-pointer transition-all duration-300 relative ${selectedPlan === plan.id ? 'ring-2 ring-accent' : ''} ${plan.popular ? 'transform scale-105' : ''}`}>
                    {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-xs py-1 px-2 rounded-full font-medium">
                        Most Popular
                      </div>}
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="text-2xl font-bold mb-4">{plan.price}</div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => <li key={idx} className="flex items-center">
                          <Check size={16} className="mr-2 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>}
            
            {currentStep === 2 && <div>
                <div className="mb-6 flex items-center">
                  <Lock size={18} className="text-accent mr-2" />
                  <span className="text-sm text-muted-foreground">Secured by Stripe</span>
                </div>
                
                <div className="space-y-6">
                  {steps[2].fields.map(field => <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                        {field.label}
                      </label>
                      <Input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full" />
                    </div>)}
                </div>
              </div>}
            
            {currentStep === 3 && <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto flex items-center justify-center mb-6">
                  <Check size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Welcome to SUBSCRIFY!</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Your account has been created and your subscription is active. You can now access your dashboard.
                </p>
                <Link to="/dashboard">
                  <Button className="px-8 py-6 rounded-full bg-gradient-purple hover:opacity-90">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>}
            
            {/* Navigation buttons */}
            {currentStep < 3 && <div className="flex justify-between mt-12">
                {currentStep > 0 ? <Button variant="outline" onClick={prevStep} className="rounded-full">
                    <ChevronLeft size={16} className="mr-2" /> Back
                  </Button> : <div></div>}
                <Button onClick={nextStep} className={`rounded-full px-6 py-6 ${currentStep === 1 && !selectedPlan ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentStep === 1 && !selectedPlan}>
                  {currentStep === 2 ? 'Complete Signup' : 'Continue'}
                </Button>
              </div>}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default SignupPage;
