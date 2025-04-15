import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  CreditCard, 
  BarChart, 
  Settings, 
  User, 
  LogOut, 
  Menu, 
  X,
  Download,
  Users,
  Search,
  Filter,
  UserPlus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const billing = [
  { 
    date: "Apr 1, 2025", 
    amount: "$19.00", 
    plan: "Pro Plan", 
    status: "Paid" 
  },
  { 
    date: "Mar 1, 2025", 
    amount: "$19.00", 
    plan: "Pro Plan", 
    status: "Paid" 
  },
  { 
    date: "Feb 1, 2025", 
    amount: "$19.00", 
    plan: "Pro Plan", 
    status: "Paid" 
  }
];

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex bg-background">
      {/* Aurora background effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background -z-50"></div>
      <div className="fixed top-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-primary/10 to-transparent opacity-30 blur-3xl -z-40"></div>
      <div className="fixed bottom-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-accent/10 to-transparent opacity-20 blur-3xl -z-40"></div>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-black/70 backdrop-blur-xl border-r border-white/10`}>
        <div className="flex h-full flex-col">
          <div className="p-6">
            <Link to="/" className="text-xl font-bold text-gradient">SUBSCRIFY</Link>
          </div>
          
          <nav className="flex-1 px-4 mt-6 space-y-1">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === "overview" ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:bg-white/5'
              }`}
            >
              <Home size={18} className="mr-3" />
              Overview
            </button>
            
            <button 
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === "users" ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:bg-white/5'
              }`}
            >
              <Users size={18} className="mr-3" />
              User Management
            </button>
            
            <button 
              onClick={() => setActiveTab("billing")}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === "billing" ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:bg-white/5'
              }`}
            >
              <CreditCard size={18} className="mr-3" />
              Billing
            </button>
            
            <button 
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === "analytics" ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:bg-white/5'
              }`}
            >
              <BarChart size={18} className="mr-3" />
              Analytics
            </button>
            
            <button 
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === "settings" ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:bg-white/5'
              }`}
            >
              <Settings size={18} className="mr-3" />
              Settings
            </button>
          </nav>
          
          <div className="p-4 border-t border-white/10 mt-auto">
            <div className="flex items-center px-2 py-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-sm mr-3">
                JD
              </div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">Pro Plan</div>
              </div>
            </div>
            
            <Link to="/">
              <Button variant="secondary" className="w-full mt-2 text-sm">
                <LogOut size={16} className="mr-2" /> Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`flex-1 ${sidebarOpen ? 'md:ml-64' : ''} transition-all duration-300 ease-in-out`}>
        {/* Topbar */}
        <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="md:hidden">
              <Link to="/" className="text-xl font-bold text-gradient">SUBSCRIFY</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0">
                <User size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <main className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="hidden">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="space-y-6">
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Pro Plan</div>
                    <p className="text-muted-foreground mt-1">$19.00/month</p>
                    <div className="mt-4">
                      <Link to="#billing">
                        <Button variant="outline" size="sm">Manage Plan</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">May 1, 2025</div>
                    <p className="text-muted-foreground mt-1">$19.00 via MasterCard</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">Update Payment</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23 / 50</div>
                    <p className="text-muted-foreground mt-1">Projects Used</p>
                    <div className="mt-2 w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '46%' }}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card className="glass-card col-span-1 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <CreditCard size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Payment Processed</p>
                          <p className="text-sm text-muted-foreground">Apr 1, 2025 • $19.00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <Settings size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Profile Updated</p>
                          <p className="text-sm text-muted-foreground">Mar 28, 2025</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <CreditCard size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Payment Processed</p>
                          <p className="text-sm text-muted-foreground">Mar 1, 2025 • $19.00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-6">
              <h1 className="text-2xl font-bold">User Management</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,467</div>
                    <p className="text-green-400 text-sm">↑ 12% from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,893</div>
                    <p className="text-green-400 text-sm">↑ 8% from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Churned Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">145</div>
                    <p className="text-red-400 text-sm">↓ 3% from last month</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>User Dashboard</CardTitle>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Button size="sm" className="flex items-center gap-2 bg-accent hover:bg-accent/90">
                      <UserPlus className="h-4 w-4" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10 text-left">
                          <th className="py-3 px-4 font-medium text-muted-foreground">User ID</th>
                          <th className="py-3 px-4 font-medium text-muted-foreground">Name</th>
                          <th className="py-3 px-4 font-medium text-muted-foreground">Email</th>
                          <th className="py-3 px-4 font-medium text-muted-foreground">Status</th>
                          <th className="py-3 px-4 font-medium text-muted-foreground">Plan</th>
                          <th className="py-3 px-4 font-medium text-muted-foreground">Value</th>
                          <th className="py-3 px-4 font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: "USR-1234", name: "John Smith", email: "john@example.com", status: "Active", plan: "Pro", value: "$19/mo" },
                          { id: "USR-2345", name: "Sarah Johnson", email: "sarah@example.com", status: "Active", plan: "Business", value: "$49/mo" },
                          { id: "USR-3456", name: "Michael Chen", email: "michael@example.com", status: "Trial", plan: "Pro", value: "$0/mo" },
                          { id: "USR-4567", name: "Emily Davis", email: "emily@example.com", status: "Inactive", plan: "Starter", value: "$0/mo" },
                          { id: "USR-5678", name: "Robert Wilson", email: "robert@example.com", status: "Active", plan: "Starter", value: "$9/mo" }
                        ].map((user, index) => (
                          <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                            <td className="py-3 px-4">{user.id}</td>
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                user.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                                user.status === 'Trial' ? 'bg-blue-500/20 text-blue-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">{user.plan}</td>
                            <td className="py-3 px-4">{user.value}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="ghost" size="sm">Edit</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">Showing 5 of 2,467 users</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-6">
              <h1 className="text-2xl font-bold">Billing & Subscription</h1>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold">Pro Plan</h3>
                          <p className="text-muted-foreground mt-1">$19.00 billed monthly</p>
                          
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>50 Projects</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>Priority Support</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>Analytics Dashboard</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-accent/20 text-accent text-xs font-medium px-2 py-1 rounded-full">
                          ACTIVE
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-6 space-x-3">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="destructive">Cancel Subscription</Button>
                      </div>
                    </div>
                    
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-4">Payment Method</h4>
                      <div className="flex items-center">
                        <div className="bg-white/10 rounded-md p-2 mr-3">
                          <CreditCard size={24} />
                        </div>
                        <div>
                          <p className="font-medium">MasterCard ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        Update Payment Method
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Billing History</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" /> Download All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="py-3 px-4 text-left font-medium">Date</th>
                          <th className="py-3 px-4 text-left font-medium">Amount</th>
                          <th className="py-3 px-4 text-left font-medium">Plan</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                          <th className="py-3 px-4 text-left font-medium">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        {billing.map((item, index) => (
                          <tr key={index} className="border-b border-white/10">
                            <td className="py-3 px-4">{item.date}</td>
                            <td className="py-3 px-4">{item.amount}</td>
                            <td className="py-3 px-4">{item.plan}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                                {item.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="ghost" size="sm">
                                <Download size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <h1 className="text-2xl font-bold">Analytics</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-green-400 text-sm">↑ 12% from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-muted-foreground text-sm">Pro Plan</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$19.00</div>
                    <p className="text-muted-foreground text-sm">No change</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Usage Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Analytics chart will display here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <h1 className="text-2xl font-bold">Account Settings</h1>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full p-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full p-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        defaultValue="Acme Inc."
                        className="w-full p-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="•��••••••"
                        className="w-full p-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full p-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full p-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button>Update Password</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive emails about your account activity</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-white/10 p-1 cursor-pointer relative">
                        <div className="w-4 h-4 rounded-full bg-accent absolute right-1 top-1"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Billing Alerts</h4>
                        <p className="text-sm text-muted-foreground">Get notified about upcoming payments</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-white/10 p-1 cursor-pointer relative">
                        <div className="w-4 h-4 rounded-full bg-accent absolute right-1 top-1"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Product Updates</h4>
                        <p className="text-sm text-muted-foreground">Learn about new features and improvements</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-white/10 p-1 cursor-pointer relative">
                        <div className="w-4 h-4 rounded-full bg-secondary absolute left-1 top-1"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
