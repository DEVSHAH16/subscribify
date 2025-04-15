
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Check, ArrowRight, Shield, Clock, Zap, StarIcon, Calendar, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PlanManagementSection = () => {
  const [currentPlan, setCurrentPlan] = useState("pro");
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState("");
  
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$9",
      description: "For individuals just getting started",
      features: [
        "5 active subscribers",
        "Basic analytics",
        "Email support",
        "1 payment method"
      ],
      popular: false
    },
    {
      id: "pro",
      name: "Pro",
      price: "$19",
      description: "For growing creators and small businesses",
      features: [
        "100 active subscribers",
        "Advanced analytics",
        "Priority support",
        "Multiple payment methods",
        "Custom checkout",
        "Remove Subscribify branding"
      ],
      popular: true
    },
    {
      id: "business",
      name: "Business",
      price: "$49",
      description: "For established businesses with high volume",
      features: [
        "Unlimited subscribers",
        "Advanced analytics with exports",
        "Dedicated support",
        "Team access (up to 5 users)",
        "Custom domain",
        "API access",
        "Priority feature requests"
      ],
      popular: false
    }
  ];
  
  const handleUpgradeClick = (planId: string) => {
    setSelectedUpgradePlan(planId);
    setShowUpgradeDialog(true);
  };
  
  const handleConfirmUpgrade = () => {
    setCurrentPlan(selectedUpgradePlan);
    setShowUpgradeDialog(false);
  };
  
  const paymentMethods = [
    { last4: "4242", brand: "Visa", expiry: "11/25" },
    { last4: "8210", brand: "Mastercard", expiry: "03/26" }
  ];
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(0);
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Subscription Management
          </h2>
          <p className="mt-4 text-muted-foreground">
            Manage your plan and billing information
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Current Plan Card */}
          <Card className="glass-card bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-accent" />
                Current Plan
              </CardTitle>
              <CardDescription>
                Your subscription details and usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold mr-3">
                        {plans.find(p => p.id === currentPlan)?.name} Plan
                      </h3>
                      <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {plans.find(p => p.id === currentPlan)?.description}
                    </p>
                  </div>
                  
                  <div className="space-y-1 mb-6">
                    <p className="text-sm text-muted-foreground">Current billing period:</p>
                    <p className="font-medium">April 14, 2025 - May 14, 2025</p>
                  </div>
                  
                  <div className="space-y-1 mb-6">
                    <p className="text-sm text-muted-foreground">Subscription started on:</p>
                    <p className="font-medium">January 15, 2025</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Active Subscribers</p>
                      <div className="flex items-end">
                        <span className="text-2xl font-bold">42</span>
                        <span className="text-muted-foreground ml-1 text-sm">/100</span>
                      </div>
                      <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="bg-accent h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Next Billing Amount</p>
                      <div className="text-2xl font-bold">
                        {plans.find(p => p.id === currentPlan)?.price}/mo
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1 border-l border-white/10 pl-6">
                  <h4 className="font-medium mb-2">Plan Features</h4>
                  <ul className="space-y-2">
                    {plans.find(p => p.id === currentPlan)?.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-400 mt-0.5 mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/10 pt-6">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Billing History
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Change Billing Cycle
              </Button>
              {currentPlan !== "business" && (
                <Button
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90"
                  onClick={() => handleUpgradeClick(currentPlan === "starter" ? "pro" : "business")}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Upgrade Plan
                </Button>
              )}
            </CardFooter>
          </Card>
          
          {/* Payment Methods Card */}
          <Card className="glass-card bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-accent" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                Manage your credit cards and payment options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${
                      selectedPaymentMethod === index 
                        ? 'border-accent bg-accent/10' 
                        : 'border-white/10 hover:bg-white/5'
                    }`}
                    onClick={() => setSelectedPaymentMethod(index)}
                  >
                    <div className="flex items-center">
                      {method.brand === "Visa" ? (
                        <div className="w-10 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                      ) : (
                        <div className="w-10 h-6 bg-orange-600 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">
                          MC
                        </div>
                      )}
                      <div>
                        <p className="font-medium">•••• {method.last4}</p>
                        <p className="text-xs text-muted-foreground">Expires {method.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {selectedPaymentMethod === index && (
                        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full mr-3">
                          Default
                        </span>
                      )}
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t border-white/10 pt-6">
              <Button>
                <CreditCard className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Upgrade Dialog */}
        <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upgrade to {plans.find(p => p.id === selectedUpgradePlan)?.name} Plan</DialogTitle>
              <DialogDescription>
                You're about to upgrade your subscription. The new pricing will be applied to your next billing cycle.
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-medium">{plans.find(p => p.id === selectedUpgradePlan)?.name} Plan</h4>
                  <p className="text-sm text-muted-foreground">{plans.find(p => p.id === selectedUpgradePlan)?.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{plans.find(p => p.id === selectedUpgradePlan)?.price}/mo</p>
                  <p className="text-xs text-muted-foreground">Billed monthly</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-medium">New features you'll get:</h4>
                <ul className="space-y-2">
                  {plans.find(p => p.id === selectedUpgradePlan)?.features
                    .filter(f => !plans.find(p => p.id === currentPlan)?.features.includes(f))
                    .map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-accent mt-0.5 mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg mb-6">
                <p className="text-sm flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  Changes will take effect on your next billing date: <span className="font-medium ml-1">May 14, 2025</span>
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowUpgradeDialog(false)}>
                Cancel
              </Button>
              <Button className="bg-accent hover:bg-accent/90" onClick={handleConfirmUpgrade}>
                Confirm Upgrade
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PlanManagementSection;
