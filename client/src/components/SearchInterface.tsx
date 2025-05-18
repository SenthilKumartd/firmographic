import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Building, Factory, MapPin, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";

const SearchInterface = () => {
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<string[]>([
    "Technology", 
    "50-1000 employees", 
    "USA"
  ]);

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter(f => f !== filter));
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  const handleSearch = () => {
    setLocation("/results");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Search Company Data</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Find detailed firmographic data on millions of companies across industries and regions.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="relative">
                <Input 
                  placeholder="Search companies by name, industry, or location..." 
                  className="pl-10 pr-24 py-6"
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-200 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-center mb-2">
                  <Building className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">Company Size</span>
                </div>
                <Select defaultValue="any">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any size" />
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
              
              <div className="border border-slate-200 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-center mb-2">
                  <Factory className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">Factory</span>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All industries" />
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
              
              <div className="border border-slate-200 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-center mb-2">
                  <MapPin className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">Location</span>
                </div>
                <Select defaultValue="worldwide">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Worldwide" />
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
            
            <div className="mt-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
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
              {filters.length > 0 && (
                <button
                  className="text-primary hover:text-blue-700 text-sm font-medium"
                  onClick={handleClearFilters}
                >
                  Clear all filters
                </button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchInterface;
