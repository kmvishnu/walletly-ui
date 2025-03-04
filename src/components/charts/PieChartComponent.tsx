"use client"

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "grocery", visitors: 275, fill: "hsl(var(--chart-1))" },
  { browser: "food", visitors: 200, fill: "hsl(var(--chart-2))" },
  { browser: "fuel", visitors: 287, fill: "hsl(var(--chart-3))" },
  { browser: "entertainment", visitors: 173, fill: "hsl(var(--chart-4))" },
  { browser: "medicine", visitors: 190, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  Spent: {
    label: "Spent",
  },
  grocery: {
    label: "Grocery",
    color: "hsl(var(--chart-1))",
  },
  food: {
    label: "Food",
    color: "hsl(var(--chart-2))",
  },
  fuel: {
    label: "Fuel",
    color: "hsl(var(--chart-3))",
  },
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-4))",
  },
  medicine: {
    label: "Medicine",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function PieChartComponent() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="h-full rounded-none">
      <CardHeader className="pb-2">
        <CardTitle>Expense Categories</CardTitle>
        <CardDescription>January 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0 h-100 md:max-h-[200px]">
        <div className="h-full w-full">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="bg-background border-border"
                    />
                  }
                  wrapperStyle={{ outline: "none" }}
                  cursor={{ fill: "var(--color-tooltip-cursor)" }}
                  position={{ x: 0, y: 0 }}
                />
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="visitors"
                  nameKey="browser"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-xl font-bold"
                >
                  {totalVisitors.toLocaleString()}
                </text>
                <text
                  x="50%"
                  y="58%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-sm text-muted-foreground"
                >
                  Spent
                </text>
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}