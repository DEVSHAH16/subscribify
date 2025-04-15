
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, UserX, Search, Filter, UserPlus, ChevronDown, ArrowUpDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import gsap from "gsap";

const UserDashboardSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [planFilter, setPlanFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState("");
  
  // Pagination settings
  const usersPerPage = 5;
  const totalUsers = 20;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  
  // Generate more user data for pagination
  const generateUsers = (page: number) => {
    const baseUsers = [
      { id: "USR-1234", name: "John Smith", email: "john@example.com", status: "Active", plan: "Pro", value: "$19/mo" },
      { id: "USR-2345", name: "Sarah Johnson", email: "sarah@example.com", status: "Active", plan: "Business", value: "$49/mo" },
      { id: "USR-3456", name: "Michael Chen", email: "michael@example.com", status: "Trial", plan: "Pro", value: "$0/mo" },
      { id: "USR-4567", name: "Emily Davis", email: "emily@example.com", status: "Inactive", plan: "Starter", value: "$0/mo" },
      { id: "USR-5678", name: "Robert Wilson", email: "robert@example.com", status: "Active", plan: "Starter", value: "$9/mo" }
    ];
    
    if (page === 1) return baseUsers;
    
    // Generate additional users for page 2+
    return [
      { id: `USR-${6000 + page}`, name: "Alex Thompson", email: "alex@example.com", status: "Active", plan: "Pro", value: "$19/mo" },
      { id: `USR-${7000 + page}`, name: "Olivia Martinez", email: "olivia@example.com", status: "Trial", plan: "Business", value: "$0/mo" },
      { id: `USR-${8000 + page}`, name: "David Kim", email: "david@example.com", status: "Inactive", plan: "Starter", value: "$0/mo" },
      { id: `USR-${9000 + page}`, name: "Sophia Lee", email: "sophia@example.com", status: "Active", plan: "Pro", value: "$19/mo" },
      { id: `USR-${10000 + page}`, name: "James Brown", email: "james@example.com", status: "Active", plan: "Business", value: "$49/mo" }
    ];
  };
  
  const [userList, setUserList] = useState(generateUsers(1));
  
  useEffect(() => {
    // Update user list when page changes
    setUserList(generateUsers(currentPage));
  }, [currentPage]);
  
  // Filter users based on search term and filters
  const filteredUsers = userList.filter(user => {
    const matchesSearch = !searchTerm || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || user.status === statusFilter;
    const matchesPlan = !planFilter || user.plan === planFilter;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".dashboard-title", {
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
      gsap.from(".dashboard-subtitle", {
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
      
      // Dashboard animation
      gsap.from(".dashboard-preview", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  const handleStatusChange = (userId: string, status: string) => {
    setUserList(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, status } : user
      )
    );
    setEditingUser(null);
  };
  
  const handleClearFilters = () => {
    setStatusFilter(null);
    setPlanFilter(null);
    setSearchTerm("");
  };
  
  const userStatCards = [
    { 
      title: "Total Users", 
      value: "2,467", 
      change: "+12%", 
      icon: <Users className="h-6 w-6 text-accent" />
    },
    { 
      title: "Active Subscriptions", 
      value: "1,893", 
      change: "+8%", 
      icon: <UserCheck className="h-6 w-6 text-green-500" />
    },
    { 
      title: "Churned Users", 
      value: "145", 
      change: "-3%", 
      icon: <UserX className="h-6 w-6 text-red-500" />
    }
  ];
  
  return (
    <div ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="dashboard-title text-3xl md:text-4xl font-bold">
            Powerful User Management
          </h2>
          <p className="dashboard-subtitle mt-4 text-muted-foreground">
            Complete control and insights for your SaaS user base
          </p>
        </div>
        
        <div className="dashboard-preview glass-card p-6 rounded-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold">User Dashboard</h3>
              <p className="text-muted-foreground">Manage all your subscribers from one place</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="p-2">
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-2">Status</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {["Active", "Trial", "Inactive"].map(status => (
                          <Button 
                            key={status} 
                            variant={statusFilter === status ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setStatusFilter(statusFilter === status ? null : status)}
                            className="justify-start"
                          >
                            {status}
                            {statusFilter === status && <Check className="h-4 w-4 ml-auto" />}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-2">Plan</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {["Starter", "Pro", "Business"].map(plan => (
                          <Button 
                            key={plan} 
                            variant={planFilter === plan ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setPlanFilter(planFilter === plan ? null : plan)}
                            className="justify-start"
                          >
                            {plan}
                            {planFilter === plan && <Check className="h-4 w-4 ml-auto" />}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="secondary" 
                      onClick={handleClearFilters} 
                      size="sm" 
                      className="w-full mt-2"
                    >
                      Clear Filters
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button size="sm" className="flex items-center gap-2 bg-accent hover:bg-accent/90">
                <UserPlus className="h-4 w-4" />
                Add User
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {userStatCards.map((card, index) => (
              <Card key={index} className="bg-black/20 border-white/10">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">{card.title}</p>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-bold mr-2">{card.value}</p>
                      <span className={card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                        {card.change}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-white/5">
                    {card.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="py-3 px-4 font-medium text-muted-foreground">
                    <div className="flex items-center cursor-pointer">
                      User ID
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-muted-foreground">
                    <div className="flex items-center cursor-pointer">
                      Name
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-muted-foreground">Email</th>
                  <th className="py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="py-3 px-4 font-medium text-muted-foreground">Plan</th>
                  <th className="py-3 px-4 font-medium text-muted-foreground">Value</th>
                  <th className="py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-3 px-4">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">
                      {editingUser === user.id ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-7 px-2">
                              {editStatus || user.status}
                              <ChevronDown className="ml-1 h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            {["Active", "Trial", "Inactive"].map(status => (
                              <DropdownMenuItem 
                                key={status}
                                onClick={() => {
                                  setEditStatus(status);
                                  handleStatusChange(user.id, status);
                                }}
                              >
                                {status}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <span 
                          className={`px-2 py-1 rounded-full text-xs font-medium cursor-pointer ${
                            user.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                            user.status === 'Trial' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-red-500/20 text-red-400'
                          }`}
                          onClick={() => {
                            setEditingUser(user.id);
                            setEditStatus(user.status);
                          }}
                        >
                          {user.status}
                        </span>
                      )}
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
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-muted-foreground">
                      No users match your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredUsers.length} of {totalUsers} users
              {(statusFilter || planFilter) && " (filtered)"}
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    className="w-8 h-8 p-0"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSection;
