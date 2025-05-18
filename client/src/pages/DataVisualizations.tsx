import { Card, CardContent } from "@/components/ui/card";
import PieChart from "@/components/charts/PieChart";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import { industryData, regionData, companySizeData, revenueGrowthData } from "@/lib/mock-data";
import { Helmet } from "react-helmet";

const DataVisualizations = () => {
  const employeeGrowthData = [
    { year: "2018", "1-50": 20, "51-200": 25, "201-1000": 18, "1000+": 12 },
    { year: "2019", "1-50": 22, "51-200": 28, "201-1000": 19, "1000+": 13 },
    { year: "2020", "1-50": 24, "51-200": 30, "201-1000": 20, "1000+": 14 },
    { year: "2021", "1-50": 26, "51-200": 32, "201-1000": 21, "1000+": 15 },
    { year: "2022", "1-50": 28, "51-200": 35, "201-1000": 22, "1000+": 15 }
  ];

  return (
    <>
      <Helmet>
        <title>Firmographic Data Insights - FirmoGraph</title>
        <meta name="description" content="Explore interactive data visualizations showing industry trends, company distributions, revenue patterns, and geographic analysis of firmographic data." />
        <meta property="og:title" content="Firmographic Data Insights - FirmoGraph" />
        <meta property="og:description" content="Explore interactive data visualizations showing industry trends and company distributions." />
      </Helmet>
      
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-secondary mb-4">Firmographic Data Insights</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore industry trends and company distributions with our interactive data visualizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Companies by Industry</h3>
              <PieChart
                title=""
                data={industryData}
                dataKey="value"
                nameKey="name"
                height={300}
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                {industryData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-slate-700">{item.name} ({item.value}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Revenue Distribution</h3>
              <BarChart
                title=""
                data={[
                  { range: "Under $10M", value: 26 },
                  { range: "$10M-$50M", value: 38 },
                  { range: "$50M-$100M", value: 24 },
                  { range: "$100M-$500M", value: 21 },
                  { range: "$500M+", value: 17 }
                ]}
                dataKey="range"
                categories={["value"]}
                colors={["#3b82f6"]}
                height={300}
                showLegend={false}
              />
              <div className="mt-4">
                <div className="grid grid-cols-5 gap-2 mb-2">
                  <div className="h-1 bg-blue-200"></div>
                  <div className="h-1 bg-blue-300"></div>
                  <div className="h-1 bg-blue-400"></div>
                  <div className="h-1 bg-blue-500"></div>
                  <div className="h-1 bg-blue-600"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>&lt; $10M</span>
                  <span>$10M-$50M</span>
                  <span>$50M-$100M</span>
                  <span>$100M-$500M</span>
                  <span>&gt; $500M</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Company Size Distribution</h3>
              <BarChart
                title=""
                data={companySizeData}
                dataKey="size"
                categories={["value"]}
                colors={["#3b82f6"]}
                height={300}
                showLegend={false}
              />
              <div className="mt-4 space-y-3">
                {companySizeData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-slate-600">{item.value}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Geographic Distribution</h3>
              <PieChart
                title=""
                data={regionData}
                dataKey="value"
                nameKey="name"
                colors={["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"]}
                height={300}
              />
              <div className="mt-4 flex justify-around">
                {regionData.map((region, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold" style={{ color: region.color }}>{region.value}%</div>
                    <div className="text-sm text-slate-500">{region.name}</div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Revenue Growth Trends</h3>
              <LineChart
                title=""
                data={revenueGrowthData}
                dataKey="year"
                lines={[{ name: "Revenue ($M)", dataKey: "revenue", color: "#3b82f6" }]}
                height={350}
              />
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Company Size Growth</h3>
              <BarChart
                title=""
                data={employeeGrowthData}
                dataKey="year"
                categories={["1-50", "51-200", "201-1000", "1000+"]}
                colors={["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"]}
                height={350}
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataVisualizations;
