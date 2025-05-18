import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  Microchip,
  Building,
  Search,
  Filter,
  Download,
  ArrowUp,
  ChartLine,
  Star
} from "lucide-react";
import { dashboardStats, topCompanies } from "@/lib/mock-data";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import { industryData, revenueGrowthData } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const columns = [
    {
      header: "Company",
      accessorKey: "name" as const,
      cell: (company: typeof topCompanies[0]) => (
        <div className="flex items-center">
          <div className={`w-8 h-8 ${company.bgColor} ${company.textColor} flex items-center justify-center rounded-md font-bold mr-3`}>
            {company.logo}
          </div>
          <div>
            <div className="font-medium text-slate-800">{company.name}</div>
            <div className="text-sm text-slate-500">{company.location}</div>
          </div>
        </div>
      )
    },
    {
      header: "Industry",
      accessorKey: "industry" as const
    },
    {
      header: "Size",
      accessorKey: "size" as const
    },
    {
      header: "Revenue",
      accessorKey: "revenue" as const
    },
    {
      header: "Growth",
      accessorKey: "growth" as const,
      cell: (company: typeof topCompanies[0]) => (
        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
          {company.growth}
        </Badge>
      )
    },
    {
      header: "",
      accessorKey: "id" as const,
      cell: () => (
        <Button variant="link" className="text-primary hover:text-blue-700">
          View
        </Button>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Interactive Dashboard - FirmoGraph</title>
        <meta name="description" content="Explore our comprehensive firmographic data dashboard with interactive visualizations, company insights, revenue trends, and industry breakdowns." />
        <meta property="og:title" content="Interactive Dashboard - FirmoGraph" />
        <meta property="og:description" content="Explore our comprehensive firmographic data dashboard." />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-secondary mb-4">Interactive Dashboard View</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Get a glimpse of our comprehensive firmographic data dashboard.
            </p>
          </div>
          
          <Card className="bg-slate-100 shadow-md">
            <CardContent className="p-6 lg:p-8">
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Company Intelligence Dashboard</h3>
                    <div className="flex space-x-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input 
                          placeholder="Search companies..." 
                          className="pl-10 pr-4 py-2 w-full md:w-auto" 
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {dashboardStats.map((stat, index) => (
                      <Card key={index} className={`${stat.bgColor} border-l-4 ${stat.borderColor}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-slate-500">{stat.label}</p>
                              <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                            </div>
                            <div className={`w-10 h-10 rounded-full ${stat.iconBgColor} flex items-center justify-center ${stat.iconColor}`}>
                              {stat.icon === "building" && <Building className="h-5 w-5" />}
                              {stat.icon === "chip" && <Microchip className="h-5 w-5" />}
                              {stat.icon === "chart" && <ChartLine className="h-5 w-5" />}
                              {stat.icon === "star" && <Star className="h-5 w-5" />}
                            </div>
                          </div>
                          <p className="text-xs text-green-600 mt-2">
                            <ArrowUp className="h-3 w-3 inline mr-1" />
                            {stat.change} from last month
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium mb-3 text-secondary">Industry Breakdown</h4>
                      <PieChart
                        title=""
                        data={industryData}
                        dataKey="value"
                        nameKey="name"
                        height={300}
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3 text-secondary">Revenue Growth Trend</h4>
                      <LineChart
                        title=""
                        data={revenueGrowthData}
                        dataKey="year"
                        lines={[{ name: "Revenue ($M)", dataKey: "revenue", color: "#3b82f6" }]}
                        height={300}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-secondary">Top Companies by Growth</h4>
                      <Button variant="link" className="text-primary text-sm font-medium">View All</Button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <DataTable
                        columns={columns}
                        data={topCompanies}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
