import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart as RechartsBarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface BarChartProps {
  title: string;
  data: any[];
  dataKey: string;
  categories: string[];
  colors?: string[];
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

const BarChart = ({
  title,
  data,
  dataKey,
  categories,
  colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"],
  height = 400,
  showGrid = true,
  showLegend = true,
}: BarChartProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={dataKey} />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              />
              {showLegend && <Legend />}
              {categories.map((category, index) => (
                <Bar 
                  key={category}
                  dataKey={category} 
                  fill={colors[index % colors.length]} 
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChart;
