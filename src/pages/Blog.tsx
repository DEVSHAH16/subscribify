
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { initGsapAnimations } from "@/utils/gsapUtils";
import { Heading1, CreditCard, User, LineChart, PiggyBank, Users, BarChartHorizontal } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "How Subscrify is Changing the Payment Gateway Landscape",
    date: "April 10, 2025",
    excerpt: "Unlike traditional payment gateways, Subscrify is built specifically for SaaS businesses with subscription models in mind.",
    icon: CreditCard
  },
  {
    id: "2",
    title: "Transparent Pricing: Our Commission Structure Explained",
    date: "April 5, 2025",
    excerpt: "At Subscrify, we believe in complete transparency. Learn about our fair and straightforward commission structure.",
    icon: PiggyBank
  },
  {
    id: "3",
    title: "Why SaaS Businesses Choose Subscrify for Their Payment Needs",
    date: "March 28, 2025",
    excerpt: "Discover the key features that make Subscrify the preferred payment gateway for modern SaaS businesses.",
    icon: LineChart
  },
  {
    id: "4",
    title: "Introducing User Management Dashboard for SaaS Providers",
    date: "March 15, 2025",
    excerpt: "Our new user management dashboard gives SaaS providers unprecedented control and insights into their customer base.",
    icon: Users
  },
  {
    id: "5",
    title: "The SaaS Payment Revolution: Why Legacy Systems Are Being Left Behind",
    date: "March 5, 2025",
    excerpt: "Traditional payment providers aren't designed for subscription businesses. Learn why SaaS companies need specialized payment solutions.",
    icon: BarChartHorizontal
  },
  {
    id: "6",
    title: "Customer Success Story: How MindfulAI Increased Conversions by 35%",
    date: "February 25, 2025",
    excerpt: "Read how one AI startup transformed their payment experience and boosted customer retention with Subscrify.",
    icon: User
  }
];

const BlogPage = () => {
  useEffect(() => {
    // Initialize all GSAP animations
    initGsapAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Blog Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-accent/5 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Subscrify Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, updates, and guides for modern SaaS payment solutions
          </p>
        </div>
      </div>
      
      {/* Featured Post - Why Subscrify is Better */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 flex flex-col justify-center items-center bg-gradient-to-br from-primary/20 to-accent/20">
                <Heading1 size={120} className="text-accent opacity-60" />
                <h2 className="text-3xl font-bold mt-4 text-center">Why Subscrify Outperforms Traditional Solutions</h2>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="text-accent text-sm font-medium mb-2">FEATURED POST</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Subscrify Outperforms Traditional Payment Solutions</h2>
                <p className="text-muted-foreground mb-6">
                  Most payment gateways were designed for one-time purchases, but SaaS businesses need subscription-first solutions. 
                  Subscrify offers specialized features that traditional gateways simply can't match: subscription management, 
                  customer analytics, transparent pricing, and integrated user management—all in one platform.
                </p>
                <div>
                  <Link to="/blog/why-subscrify-is-better" className="text-accent font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="glass-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <post.icon size={64} className="text-accent opacity-60" />
                </div>
                <CardContent className="p-6">
                  <div className="text-muted-foreground text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-accent font-medium hover:underline">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Subscrify Difference Section */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How Subscrify is Different</h2>
            
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">User Management</h3>
                  <p className="text-muted-foreground">
                    Complete control over your customer base with detailed analytics and management tools built for SaaS businesses.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    Clear commission structure with no hidden fees. You always know exactly what you're paying.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChartHorizontal className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">SaaS Optimized</h3>
                  <p className="text-muted-foreground">
                    Built specifically for subscription-based businesses with features tailored to recurring billing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why We're Better Than Competitors */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Subscrify Over Competitors</h2>
            
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Traditional Payment Gateways</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Generic payment processing with no SaaS-specific features</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Complex fee structures with hidden charges</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Separate tools needed for user management and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Limited subscription management capabilities</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Subscrify Advantage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Purpose-built for SaaS with subscription management tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Transparent flat-rate commission structure</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>All-in-one platform: payments, analytics, and user management</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Built-in tools for managing trials, upgrades, and downgrades</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Specialized SaaS analytics to track key metrics like MRR, churn, and LTV</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
