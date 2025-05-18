import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  PieChart, 
  Building, 
  Download, 
  ListChecks, 
  Bell,
  ArrowRight 
} from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description: "Powerful search capabilities to find companies based on multiple firmographic criteria.",
      link: "/search"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Data Visualization",
      description: "Interactive charts and graphs to visualize firmographic data trends and patterns.",
      link: "/visualizations"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Profiles",
      description: "Detailed profiles with comprehensive firmographic data for millions of companies.",
      link: "/results"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export Options",
      description: "Export firmographic data in multiple formats for integration with your existing tools.",
      link: "#"
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: "List Building",
      description: "Create and save custom lists of companies for targeted sales and marketing campaigns.",
      link: "#"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alerts & Notifications",
      description: "Stay updated with real-time alerts about changes in company firmographic data.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Powerful Features</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore the comprehensive suite of tools available in our firmographic platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow" data-testid="feature-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center mb-4 text-white" data-testid="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <Link href={feature.link} className="text-primary hover:text-blue-700 font-medium flex items-center" data-testid="feature-link">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
