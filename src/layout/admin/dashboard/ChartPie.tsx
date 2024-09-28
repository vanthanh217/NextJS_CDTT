'use client';
import { Label, Pie, PieChart } from 'recharts';
import ChartWrap from './ChartWrap';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import React from 'react';

const chartData = [
    {
        category: 'keyboard',
        sales: 275,
        fill: 'var(--color-keyboard)',
    },
    { category: 'mouse', sales: 200, fill: 'var(--color-mouse)' },
    {
        category: 'headphone',
        sales: 287,
        fill: 'var(--color-headphone)',
    },
    {
        category: 'smartWatch',
        sales: 173,
        fill: 'var(--color-smartWatch)',
    },
    {
        category: 'smartBand',
        sales: 190,
        fill: 'var(--color-smartBand)',
    },
];

const chartConfig = {
    sales: {
        label: 'Sales',
    },
    keyboard: {
        label: 'Keyboard',
        color: 'hsl(var(--chart-1))',
    },
    mouse: {
        label: 'Mouse',
        color: 'hsl(var(--chart-2))',
    },
    headphone: {
        label: 'Headphone',
        color: 'hsl(var(--chart-3))',
    },
    smartWatch: {
        label: 'Smart Watch',
        color: 'hsl(var(--chart-4))',
    },
    smartBand: {
        label: 'Smart Band',
        color: 'hsl(var(--chart-5))',
    },
} satisfies ChartConfig;

const ChartPie = () => {
    const totalSales = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.sales, 0);
    }, []);

    return (
        <ChartWrap title="Sales by category" className="h-max w-[400px]">
            <ChartContainer config={chartConfig} className="mt-5">
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="sales"
                        nameKey="category"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (
                                    viewBox &&
                                    'cx' in viewBox &&
                                    'cy' in viewBox
                                ) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-3xl font-bold"
                                            >
                                                {totalSales.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Sales
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </ChartWrap>
    );
};

export default ChartPie;
