export const industryData = [
  { name: "Technology", value: 32, color: "#3b82f6" },
  { name: "Healthcare", value: 18, color: "#10b981" },
  { name: "Finance", value: 15, color: "#8b5cf6" },
  { name: "Manufacturing", value: 12, color: "#f59e0b" },
  { name: "Retail", value: 10, color: "#ef4444" },
  { name: "Others", value: 13, color: "#6b7280" },
];

export const revenueData = [
  { range: "Under $10M", value: 26 },
  { range: "$10M - $50M", value: 38 },
  { range: "$50M - $100M", value: 24 },
  { range: "$100M - $500M", value: 21 },
  { range: "$500M+", value: 17 },
];

export const companySizeData = [
  { size: "1-50", label: "1-50 employees", value: 28 },
  { size: "51-200", label: "51-200 employees", value: 35 },
  { size: "201-1000", label: "201-1000 employees", value: 22 },
  { size: "1000+", label: "1000+ employees", value: 15 },
];

export const regionData = [
  { name: "North America", value: 42, color: "#3b82f6" },
  { name: "Europe", value: 28, color: "#60a5fa" },
  { name: "Asia-Pacific", value: 21, color: "#93c5fd" },
  { name: "Rest of World", value: 9, color: "#bfdbfe" },
];

export const revenueGrowthData = [
  { year: 2018, revenue: 10.2 },
  { year: 2019, revenue: 15.8 },
  { year: 2020, revenue: 19.2 },
  { year: 2021, revenue: 25.7 },
  { year: 2022, revenue: 32.4 },
  { year: 2023, revenue: 42.1 },
];

export const employeeGrowthData = [
  { year: 2018, employees: 450 },
  { year: 2019, employees: 600 },
  { year: 2020, employees: 900 },
  { year: 2021, employees: 1200 },
  { year: 2022, employees: 1500 },
];

export const companyResults = [
  {
    id: 1,
    name: "TechCorp Industries",
    industry: "Technology",
    subIndustry: "Software Development",
    logo: "TC",
    employees: "1,500 - 2,000",
    revenue: "$50M - $100M",
    founded: "2005",
    headquarters: "San Francisco, California, USA",
    description: "TechCorp Industries is a leading provider of enterprise software solutions specializing in cloud infrastructure and AI-powered analytics platforms.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    name: "HealthInnovate",
    industry: "Healthcare",
    subIndustry: "Biotech",
    logo: "HI",
    employees: "500 - 1,000",
    revenue: "$25M - $50M",
    founded: "2012",
    headquarters: "Boston, Massachusetts, USA",
    description: "HealthInnovate develops next-generation medical devices and pharmaceutical solutions with a focus on personalized medicine and patient-centered care.",
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    id: 3,
    name: "FinServe Global",
    industry: "Finance",
    subIndustry: "Banking",
    logo: "FS",
    employees: "5,000 - 10,000",
    revenue: "$500M - $1B",
    founded: "1995",
    headquarters: "New York, NY, USA",
    description: "FinServe Global provides comprehensive financial services including investment banking, wealth management, and digital payment solutions for enterprise clients worldwide.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    id: 4,
    name: "ManufactureX",
    industry: "Manufacturing",
    subIndustry: "Industrial Equipment",
    logo: "MF",
    employees: "2,000 - 5,000",
    revenue: "$100M - $500M",
    founded: "1987",
    headquarters: "Detroit, Michigan, USA",
    description: "ManufactureX specializes in precision engineering and industrial equipment manufacturing for automotive, aerospace, and defense sectors with a focus on sustainable production processes.",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600"
  }
];

export const dashboardStats = [
  { label: "Total Companies", value: "12,856", icon: "building", change: "+12%", bgColor: "bg-blue-50", borderColor: "border-primary", iconBgColor: "bg-blue-100", iconColor: "text-primary" },
  { label: "Tech Companies", value: "4,218", icon: "chip", change: "+8%", bgColor: "bg-green-50", borderColor: "border-green-500", iconBgColor: "bg-green-100", iconColor: "text-green-500" },
  { label: "Enterprise", value: "2,543", icon: "chart", change: "+5%", bgColor: "bg-purple-50", borderColor: "border-purple-500", iconBgColor: "bg-purple-100", iconColor: "text-purple-500" },
  { label: "New This Month", value: "742", icon: "star", change: "+18%", bgColor: "bg-yellow-50", borderColor: "border-yellow-500", iconBgColor: "bg-yellow-100", iconColor: "text-yellow-500" }
];

export const topCompanies = [
  { 
    name: "TechCorp Industries", 
    location: "San Francisco, CA", 
    industry: "Technology", 
    size: "1,500-2,000", 
    revenue: "$50M-$100M", 
    growth: "+23%", 
    logo: "TC",
    bgColor: "bg-blue-100",
    textColor: "text-primary"
  },
  { 
    name: "HealthInnovate", 
    location: "Boston, MA", 
    industry: "Healthcare", 
    size: "500-1,000", 
    revenue: "$25M-$50M", 
    growth: "+18%", 
    logo: "HI",
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  },
  { 
    name: "FinServe Global", 
    location: "New York, NY", 
    industry: "Finance", 
    size: "5,000-10,000", 
    revenue: "$500M-$1B", 
    growth: "+15%", 
    logo: "FS",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  { 
    name: "ManufactureX", 
    location: "Detroit, MI", 
    industry: "Manufacturing", 
    size: "2,000-5,000", 
    revenue: "$100M-$500M", 
    growth: "+12%", 
    logo: "MF",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600"
  }
];

export const companyDetail = {
  id: 1,
  name: "TechCorp Industries",
  industry: "Technology",
  subIndustry: "Software Development",
  location: "San Francisco, CA",
  logo: "TC",
  bgColor: "bg-blue-100",
  textColor: "text-primary",
  overview: {
    founded: "2005 (17 years old)",
    size: "1,500 - 2,000 employees",
    revenue: "$50M - $100M (estimated)",
    growthRate: "23% year-over-year",
    headquarters: "San Francisco, California, USA",
    industry: "Technology, Software Development, SaaS"
  },
  keyInfo: {
    businessModel: "B2B SaaS",
    funding: "Series C ($75M raised)",
    technologies: ["Cloud Computing", "AI/ML", "Big Data", "DevOps"],
    targetMarket: "Enterprise, Mid-Market",
    products: [
      "TechCorp Cloud Platform",
      "TechCorp Analytics Suite",
      "TechCorp DevOps Tools"
    ]
  },
  marketPerformance: {
    revenueGrowth: [
      { year: "2018", revenue: 12 },
      { year: "2019", revenue: 18 },
      { year: "2020", revenue: 24 },
      { year: "2021", revenue: 35 },
      { year: "2022", revenue: 48 }
    ],
    employeeGrowth: [
      { year: "2018", employees: 450 },
      { year: "2019", employees: 600 },
      { year: "2020", employees: 900 },
      { year: "2021", employees: 1200 },
      { year: "2022", employees: 1500 }
    ],
    competitors: [
      { name: "CompetitorTech Inc", marketShare: "32%" },
      { name: "TechCorp Industries", marketShare: "28%" },
      { name: "CloudSystems Ltd", marketShare: "21%" },
      { name: "DataTech Solutions", marketShare: "15%" },
      { name: "Others", marketShare: "4%" }
    ]
  }
};
