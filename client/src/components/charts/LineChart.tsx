import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CartesianGrid, 
  Legend, 
  Line, 
  LineChart as RechartsLineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

interface LineChartProps {
  title: string;
  data: any[];
  dataKey: string;
  lines: Array<{
    name: string;
    dataKey: string;
    color: string;
  }>;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

const LineChart = ({
  title,
  data,
  dataKey,
  lines,
  height = 400,
  showGrid = true,
  showLegend = true,
}: LineChartProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={dataKey} />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              />
              {showLegend && <Legend />}
              {lines.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  name={line.name}
                  stroke={line.color}
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
