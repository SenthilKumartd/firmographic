import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { companyResults } from "@/lib/mock-data";
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Mail, 
  Share 
} from "lucide-react";
import { Helmet } from "react-helmet";

const Results = () => {
  const industries = [
    { name: "Technology", count: 42, checked: true },
    { name: "Healthcare", count: 28, checked: true },
    { name: "Finance", count: 23, checked: true },
    { name: "Manufacturing", count: 19, checked: false },
    { name: "Retail", count: 17, checked: false },
    { name: "Education", count: 14, checked: false },
    { name: "Energy", count: 13, checked: false }
  ];
  
  const companySizes = [
    { name: "1-50 employees", count: 31, checked: false },
    { name: "51-200 employees", count: 42, checked: false },
    { name: "201-1000 employees", count: 35, checked: true },
    { name: "1000+ employees", count: 18, checked: true }
  ];
  
  const revenueRanges = [
    { name: "Under $10M", count: 26, checked: false },
    { name: "$10M - $50M", count: 38, checked: false },
    { name: "$50M - $100M", count: 24, checked: true },
    { name: "$100M - $500M", count: 21, checked: true },
    { name: "$500M+", count: 17, checked: true }
  ];
  
  const regions = [
    { name: "North America", count: 64, checked: true },
    { name: "Europe", count: 42, checked: false },
    { name: "Asia-Pacific", count: 31, checked: false },
    { name: "Latin America", count: 18, checked: false },
    { name: "Middle East & Africa", count: 11, checked: false }
  ];

  return (
    <>
      <Helmet>
        <title>Search Results - FirmoGraph</title>
        <meta name="description" content="Browse firmographic data for companies that match your search criteria. View company profiles, financial information, employee counts, and more." />
        <meta property="og:title" content="Search Results - FirmoGraph" />
        <meta property="og:description" content="Browse companies that match your search criteria." />
      </Helmet>
      
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-secondary">Search Results</h1>
            <div className="flex items-center space-x-4">
              <span className="text-slate-600">126 companies found</span>
              <select className="border border-slate-200 rounded p-2 text-slate-700 focus:border-primary outline-none">
                <option>Sort by: Relevance</option>
                <option>Company size: High to low</option>
                <option>Company size: Low to high</option>
                <option>Company name: A-Z</option>
                <option>Company name: Z-A</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Company Results */}
              {companyResults.map((company) => (
                <Card key={company.id} className="mb-5 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg ${company.bgColor} flex items-center justify-center mr-4 ${company.textColor} font-bold`}>
                          {company.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-secondary">{company.name}</h3>
                          <p className="text-slate-500">{company.industry} • {company.subIndustry}</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-primary">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-slate-500">Employees</span>
                        <p className="font-medium">{company.employees}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Revenue</span>
                        <p className="font-medium">{company.revenue}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Founded</span>
                        <p className="font-medium">{company.founded}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm text-slate-500 mb-1">Headquarters</h4>
                      <p className="font-medium">{company.headquarters}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm text-slate-500 mb-1">Description</h4>
                      <p className="text-slate-700">{company.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Link href={`/company/${company.id}`} className="text-primary hover:text-blue-700 font-medium">
                          View Full Profile
                        </Link>
                        <Link href="#" className="text-slate-600 hover:text-primary">
                          Similar Companies
                        </Link>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="w-8 h-8 rounded-full border border-slate-200 hover:border-primary text-slate-500 hover:text-primary">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="w-8 h-8 rounded-full border border-slate-200 hover:border-primary text-slate-500 hover:text-primary">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex justify-center mt-8">
                <nav className="inline-flex rounded-md shadow-sm">
                  <Button variant="outline" size="icon" className="rounded-l-md">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="default" className="rounded-none">1</Button>
                  <Button variant="outline" className="rounded-none">2</Button>
                  <Button variant="outline" className="rounded-none">3</Button>
                  <Button variant="outline" className="rounded-none">4</Button>
                  <Button variant="outline" size="icon" className="rounded-r-md">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </nav>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Sidebar Filters */}
              <Card className="sticky top-20">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-4">Refine Results</h3>
                  
                  <div className="mb-5">
                    <h4 className="font-medium mb-2">Industry</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {industries.map((industry) => (
                        <label key={industry.name} className="flex items-center">
                          <Checkbox 
                            id={`industry-${industry.name}`} 
                            defaultChecked={industry.checked} 
                            className="mr-2" 
                          />
                          <span className="text-slate-700">
                            {industry.name} ({industry.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="mb-5">
                    <h4 className="font-medium mb-2">Company Size</h4>
                    <div className="space-y-2">
                      {companySizes.map((size) => (
                        <label key={size.name} className="flex items-center">
                          <Checkbox 
                            id={`size-${size.name}`} 
                            defaultChecked={size.checked} 
                            className="mr-2" 
                          />
                          <span className="text-slate-700">
                            {size.name} ({size.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="mb-5">
                    <h4 className="font-medium mb-2">Revenue Range</h4>
                    <div className="space-y-2">
                      {revenueRanges.map((range) => (
                        <label key={range.name} className="flex items-center">
                          <Checkbox 
                            id={`revenue-${range.name}`} 
                            defaultChecked={range.checked} 
                            className="mr-2" 
                          />
                          <span className="text-slate-700">
                            {range.name} ({range.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="mb-5">
                    <h4 className="font-medium mb-2">Region</h4>
                    <div className="space-y-2">
                      {regions.map((region) => (
                        <label key={region.name} className="flex items-center">
                          <Checkbox 
                            id={`region-${region.name}`} 
                            defaultChecked={region.checked} 
                            className="mr-2" 
                          />
                          <span className="text-slate-700">
                            {region.name} ({region.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="link" className="text-primary p-0">Reset filters</Button>
                    <Button>Apply filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
