import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { companyDetail } from "@/lib/mock-data";
import { Separator } from "@/components/ui/separator";
import LineChart from "@/components/charts/LineChart";

const CompanyProfile = () => {
  const { name, industry, subIndustry, location, logo, bgColor, textColor, overview, keyInfo, marketPerformance } = companyDetail;

  return (
    <>
      <Helmet>
        <title>{name} Company Profile - FirmoGraph</title>
        <meta name="description" content={`Detailed firmographic data for ${name}. View company size, revenue, growth rate, headquarters location, industry analysis, and more.`} />
        <meta property="og:title" content={`${name} Company Profile - FirmoGraph`} />
        <meta property="og:description" content={`Detailed firmographic data for ${name}.`} />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-secondary mb-4">Company Profile</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore detailed company profiles with comprehensive firmographic data and insights.
            </p>
          </div>
          
          <Card className="overflow-hidden mb-12">
            <div className="p-6 sm:p-8 border-b border-slate-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-center">
                  <div className={`w-16 h-16 ${bgColor} ${textColor} flex items-center justify-center rounded-lg font-bold text-xl mr-4`}>
                    {logo}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                    <p className="text-slate-500">{industry} • {location}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button>Save to List</Button>
                  <Button variant="outline">Request Info</Button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6 sm:p-8">
                <h3 className="font-semibold text-lg mb-4 text-secondary">Company Overview</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Founded</h4>
                    <p className="font-medium">{overview.founded}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Company Size</h4>
                    <p className="font-medium">{overview.size}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Revenue</h4>
                    <p className="font-medium">{overview.revenue}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Growth Rate</h4>
                    <p className="font-medium">{overview.growthRate}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Headquarters</h4>
                    <p className="font-medium">{overview.headquarters}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Industry</h4>
                    <p className="font-medium">{overview.industry}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="font-semibold text-lg mb-4 text-secondary">Key Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Business Model</h4>
                    <p className="font-medium">{keyInfo.businessModel}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Funding</h4>
                    <p className="font-medium">{keyInfo.funding}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {keyInfo.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Target Market</h4>
                    <p className="font-medium">{keyInfo.targetMarket}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-slate-500 mb-1">Primary Products</h4>
                    <ul className="list-disc pl-5 text-slate-700">
                      {keyInfo.products.map((product, index) => (
                        <li key={index}>{product}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="font-semibold text-lg mb-4 text-secondary">Market Performance</h3>
                
                {/* Revenue Growth Chart */}
                <div className="mb-6">
                  <h4 className="text-sm text-slate-500 mb-3">Revenue Growth (Last 5 Years)</h4>
                  <LineChart
                    title=""
                    data={marketPerformance.revenueGrowth}
                    dataKey="year"
                    lines={[{ name: "Revenue ($M)", dataKey: "revenue", color: "#3b82f6" }]}
                    height={180}
                    showGrid={true}
                    showLegend={false}
                  />
                </div>
                
                {/* Employee Growth Chart */}
                <div className="mb-6">
                  <h4 className="text-sm text-slate-500 mb-3">Employee Growth</h4>
                  <div className="space-y-2">
                    {marketPerformance.employeeGrowth.map((item) => (
                      <div key={item.year} className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">{item.year}</span>
                        <div className="w-[70%] bg-slate-100 rounded-full h-3">
                          <div 
                            className="bg-primary rounded-full h-3" 
                            style={{ width: `${(item.employees / 1500) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{item.employees}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-slate-500 mb-2">Market Competitors</h4>
                  <div className="space-y-2">
                    {marketPerformance.competitors.map((competitor, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{competitor.name}</span>
                        <span className="text-sm text-slate-500">Market Share: {competitor.marketShare}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline">View Similar Companies</Button>
            <Button>Download Report</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfile;
