'use client';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import ChartWrap from './ChartWrap';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
    { month: 'January', order: 186, sale: 80 },
    { month: 'February', order: 305, sale: 200 },
    { month: 'March', order: 237, sale: 120 },
    { month: 'April', order: 73, sale: 190 },
    { month: 'May', order: 209, sale: 130 },
    { month: 'June', order: 214, sale: 140 },
    { month: 'July', order: 217, sale: 150 },
];

const chartConfig = {
    order: {
        label: 'Order',
        color: 'hsl(var(--chart-1))',
    },
    sale: {
        label: 'Sale',
        color: 'hsl(var(--chart-4))',
    },
} satisfies ChartConfig;

const ChartMultiBar = () => {
    return (
        <ChartWrap title="Overview" className="flex-1">
            <ChartContainer config={chartConfig} className="mb-2">
                <BarChart accessibilityLayer data={chartData} className="mt-5">
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="order" fill="var(--color-order)" radius={4} />
                    <Bar dataKey="sale" fill="var(--color-sale)" radius={4} />
                </BarChart>
            </ChartContainer>
        </ChartWrap>
    );
};

export default ChartMultiBar;
