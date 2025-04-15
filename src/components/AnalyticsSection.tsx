
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ArrowUp, ArrowDown, ArrowUpRight, DollarSign, Users, CreditCard, Calendar } from "lucide-react";
import gsap from "gsap";

const AnalyticsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Monthly revenue data
  const revenueData = [
    { month: 'Jan', revenue: 1200, users: 45 },
    { month: 'Feb', revenue: 1900, users: 58 },
    { month: 'Mar', revenue: 2400, users: 72 },
    { month: 'Apr', revenue: 2800, users: 85 },
    { month: 'May', revenue: 3100, users: 97 },
    { month: 'Jun', revenue: 3800, users: 120 },
    { month: 'Jul', revenue: 4300, users: 145 },
    { month: 'Aug', revenue: 4800, users: 168 },
    { month: 'Sep', revenue: 5200, users: 181 },
    { month: 'Oct', revenue: 5400, users: 195 },
    { month: 'Nov', revenue: 5800, users: 210 },
    { month: 'Dec', revenue: 6300, users: 230 },
  ];
  
  // Plan distribution data
  const planData = [
    { name: 'Starter', value: 45, color: '#4f46e5' },
    { name: 'Pro', value: 35, color: '#8b5cf6' },
    { name: 'Business', value: 20, color: '#a855f7' },
  ];
  
  // User acquisition by channel
  const acquisitionData = [
    { channel: 'Organic', users: 120 },
    { channel: 'Referral', users: 86 },
    { channel: 'Direct', users: 42 },
    { channel: 'Social', users: 64 },
    { channel: 'Ads', users: 38 },
  ];
  
  // Key metrics
  const metrics = [
    { 
      title: "Monthly Recurring Revenue", 
      value: "$6,320", 
      change: "+12.5%", 
      icon: <DollarSign className="h-5 w-5" />,
      positive: true
    },
    { 
      title: "Active Subscribers", 
      value: "231", 
      change: "+8.2%", 
      icon: <Users className="h-5 w-5" />,
      positive: true
    },
    { 
      title: "Avg Revenue Per User", 
      value: "$27.36", 
      change: "+3.7%", 
      icon: <CreditCard className="h-5 w-5" />,
      positive: true
    },
    { 
      title: "Churn Rate", 
      value: "2.4%", 
      change: "-0.8%", 
      icon: <Calendar className="h-5 w-5" />,
      positive: true
    },
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".analytics-title", {
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
      gsap.from(".analytics-subtitle", {
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
      
      // Cards animation with stagger
      gsap.from(".analytics-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Charts animation
      gsap.from(".chart-container", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".analytics-card",
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="analytics-title text-3xl md:text-4xl font-bold">
            Subscription Analytics
          </h2>
          <p className="analytics-subtitle mt-4 text-muted-foreground">
            Track and optimize your recurring revenue performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="analytics-card bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <div className="text-2xl font-bold mt-1">{metric.value}</div>
                    <div className={`flex items-center text-xs mt-2 ${
                      metric.positive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.positive ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
                      {metric.change}
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-white/5">
                    {metric.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="analytics-card bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Monthly Revenue</span>
                <div className="flex items-center text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +28.5% YoY
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8b5cf6" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="users" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="analytics-card bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle>Subscription Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 chart-container flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <div className="flex h-full">
                    <div className="w-1/2">
                      <PieChart>
                        <Pie
                          data={planData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {planData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                      </PieChart>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center">
                      {planData.map((plan, index) => (
                        <div key={index} className="flex items-center mb-3">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: plan.color }}></div>
                          <div className="text-sm">{plan.name}: {plan.value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="analytics-card bg-black/20 border-white/10">
          <CardHeader>
            <CardTitle>User Acquisition by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={acquisitionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                  <XAxis dataKey="channel" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  <Legend />
                  <Bar dataKey="users" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-6 flex justify-center">
          <Button className="rounded-full bg-accent/20 hover:bg-accent/30 text-accent">
            Export Reports
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
