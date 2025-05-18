import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { X, Building, Factory, MapPin, DollarSign } from "lucide-react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";

const Search = () => {
  const [, setLocation] = useLocation();
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Technology",
    "50-1000 employees", 
    "USA"
  ]);

  const handleSearch = () => {
    setLocation("/results");
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };
  
  const industries = [
    { name: "Technology", count: 42 },
    { name: "Healthcare", count: 28 },
    { name: "Finance", count: 23 },
    { name: "Manufacturing", count: 19 },
    { name: "Retail", count: 17 },
    { name: "Education", count: 14 },
    { name: "Energy", count: 13 }
  ];
  
  const companySizes = [
    { name: "1-50 employees", count: 31 },
    { name: "51-200 employees", count: 42 },
    { name: "201-1000 employees", count: 35 },
    { name: "1000+ employees", count: 18 }
  ];
  
  const revenueRanges = [
    { name: "Under $10M", count: 26 },
    { name: "$10M - $50M", count: 38 },
    { name: "$50M - $100M", count: 24 },
    { name: "$100M - $500M", count: 21 },
    { name: "$500M+", count: 17 }
  ];
  
  const regions = [
    { name: "North America", count: 64 },
    { name: "Europe", count: 42 },
    { name: "Asia-Pacific", count: 31 },
    { name: "Latin America", count: 18 },
    { name: "Middle East & Africa", count: 11 }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Search - FirmoGraph</title>
        <meta name="description" content="Search for companies using our advanced firmographic search tool. Filter by industry, company size, revenue, location, and more to find your target audience." />
        <meta property="og:title" content="Advanced Search - FirmoGraph" />
        <meta property="og:description" content="Search for companies using our advanced firmographic search tool." />
      </Helmet>
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-secondary mb-4">Advanced Company Search</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Find detailed firmographic data on millions of companies across industries and regions.
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8">
                <div className="relative">
                  <Input 
                    placeholder="Search companies by name, industry, or location..." 
                    className="pl-10 pr-24 py-6 text-lg"
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-slate-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Button 
                      className="rounded-l-none h-full"
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Factory className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="font-medium">Factory</h3>
                  </div>
                  <Select defaultValue="tech">
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All industries</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="font-medium">Company Size</h3>
                  </div>
                  <Select defaultValue="large">
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any size</SelectItem>
                      <SelectItem value="small">1-50 employees</SelectItem>
                      <SelectItem value="medium">51-200 employees</SelectItem>
                      <SelectItem value="large">201-1000 employees</SelectItem>
                      <SelectItem value="enterprise">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="font-medium">Revenue</h3>
                  </div>
                  <Select defaultValue="50m">
                    <SelectTrigger>
                      <SelectValue placeholder="Select revenue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any revenue</SelectItem>
                      <SelectItem value="under10">Under $10M</SelectItem>
                      <SelectItem value="10m">$10M - $50M</SelectItem>
                      <SelectItem value="50m">$50M - $100M</SelectItem>
                      <SelectItem value="100m">$100M - $500M</SelectItem>
                      <SelectItem value="500m">$500M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <h3 className="font-medium">Location</h3>
                  </div>
                  <Select defaultValue="namerica">
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="worldwide">Worldwide</SelectItem>
                      <SelectItem value="namerica">North America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia-Pacific</SelectItem>
                      <SelectItem value="latam">Latin America</SelectItem>
                      <SelectItem value="mea">Middle East & Africa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium mb-4">Active Filters</h3>
                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((filter) => (
                    <Badge 
                      key={filter} 
                      variant="secondary"
                      className="px-3 py-1.5 text-sm"
                    >
                      {filter}
                      <button
                        className="ml-2 text-slate-500 hover:text-slate-700"
                        onClick={() => handleRemoveFilter(filter)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {activeFilters.length > 0 && (
                    <button
                      className="text-primary hover:text-blue-700 text-sm font-medium"
                      onClick={clearAllFilters}
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-medium mb-2">Factory</h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {industries.map((industry) => (
                      <label key={industry.name} className="flex items-center">
                        <Checkbox id={`industry-${industry.name}`} className="text-primary mr-2" />
                        <span className="text-slate-700">
                          {industry.name} ({industry.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Company Size</h3>
                  <div className="space-y-2">
                    {companySizes.map((size) => (
                      <label key={size.name} className="flex items-center">
                        <Checkbox id={`size-${size.name}`} className="text-primary mr-2" />
                        <span className="text-slate-700">
                          {size.name} ({size.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Revenue Range</h3>
                  <div className="space-y-2">
                    {revenueRanges.map((range) => (
                      <label key={range.name} className="flex items-center">
                        <Checkbox id={`revenue-${range.name}`} className="text-primary mr-2" />
                        <span className="text-slate-700">
                          {range.name} ({range.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Region</h3>
                  <div className="space-y-2">
                    {regions.map((region) => (
                      <label key={region.name} className="flex items-center">
                        <Checkbox id={`region-${region.name}`} className="text-primary mr-2" />
                        <span className="text-slate-700">
                          {region.name} ({region.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button onClick={handleSearch} size="lg">
                  Search Companies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Search;
