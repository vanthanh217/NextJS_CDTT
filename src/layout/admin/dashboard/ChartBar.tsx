'use client';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, LabelList } from 'recharts';
import ChartWrap from './ChartWrap';
import { IconOrder } from '@/components/icons';

const chartData = [
    { month: 'January', order: 186 },
    { month: 'February', order: 305 },
    { month: 'March', order: 237 },
    { month: 'April', order: 73 },
    { month: 'May', order: 209 },
    { month: 'June', order: 214 },
    { month: 'July', order: 217 },
];

const chartConfig = {
    order: {
        label: 'Order',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

const ChartBar = () => {
    return (
        <ChartWrap
            title="New Orders"
            className="basis-4/12"
            ngClass="bg-chart-1/15 text-chart-1 p-2"
            icon={<IconOrder strokeWidth={1.5} />}
        >
            <ChartContainer config={chartConfig} className="mb-2">
                <BarChart accessibilityLayer data={chartData} className="mt-5">
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="order" fill="var(--color-order)" radius={8}>
                        <LabelList
                            position="top"
                            offset={12}
                            className="fill-foreground"
                            fontSize={12}
                        />
                    </Bar>
                </BarChart>
            </ChartContainer>
        </ChartWrap>
    );
};

export default ChartBar;
