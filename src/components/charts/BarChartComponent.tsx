"use client";

import { TrendingUp } from "lucide-react";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  LabelList, 
  XAxis, 
  ResponsiveContainer 
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "January", desktop: 18600 },
  { month: "February", desktop: 31005 },
  { month: "March", desktop: 25837 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 15600 },
  { month: "August", desktop: 15600 },
  { month: "September", desktop: 15600 },
  { month: "October", desktop: 15600 },
  { month: "November", desktop: 15600 },
  { month: "December", desktop: 15600 },
];

// Filter out months with zero values to focus on the data you have
const filteredData = chartData.filter(item => item.desktop > 0);

export default function BarChartComponent() {
  return (
    <Card className="h-full w-full">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-base">Bar Chart</CardTitle>
            <CardDescription className="text-xs">
              Jan - Jun 2024
            </CardDescription>
          </div>
          <div className="flex items-center text-xs font-medium">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+5.2%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: 5,
              }}
              barSize={20}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                fontSize={10}
              />
              <Bar 
                dataKey="desktop" 
                fill="hsl(var(--chart-1))" 
                radius={8}
              >
                <LabelList
                  position="top"
                  offset={12}
                  fill="hsl(var(--foreground))"
                  fontSize={10}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 text-xs text-muted-foreground">
        <div>Total visitors: last 6 months</div>
      </CardFooter>
    </Card>
  );
}