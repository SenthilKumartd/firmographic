import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from "recharts";

interface PieChartProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  colors?: string[];
  height?: number;
  showLegend?: boolean;
  legendPosition?: "top" | "right" | "bottom" | "left";
}

const PieChart = ({
  title,
  data,
  dataKey,
  nameKey,
  colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444", "#6b7280"],
  height = 400,
  showLegend = true,
  legendPosition = "bottom",
}: PieChartProps) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={height / 3}
                dataKey={dataKey}
                nameKey={nameKey}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}`, ""]}
                contentStyle={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              />
              {showLegend && <Legend layout="horizontal" verticalAlign={legendPosition === "bottom" || legendPosition === "top" ? legendPosition : "middle"} align={legendPosition === "right" || legendPosition === "left" ? legendPosition : "center"} />}
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChart;
