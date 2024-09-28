'use client';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import ChartWrap from './ChartWrap';
import { Area, AreaChart } from 'recharts';
import { IconUser } from '@/components/icons';

const chartData = [
    { month: 'January', user: 186 },
    { month: 'February', user: 305 },
    { month: 'March', user: 237 },
    { month: 'April', user: 73 },
    { month: 'May', user: 209 },
    { month: 'June', user: 214 },
    { month: 'July', user: 217 },
];

const chartConfig = {
    user: {
        label: 'User',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

const ChartArea = () => {
    return (
        <ChartWrap
            title="New Users"
            className="basis-4/12"
            ngClass="bg-chart-2/15 text-chart-2 p-2"
            icon={<IconUser strokeWidth={1.5} />}
        >
            <ChartContainer config={chartConfig} className="mb-2">
                <AreaChart accessibilityLayer data={chartData} className="mt-5">
                    <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent indicator="dot" hideLabel />
                        }
                    />
                    <Area
                        dataKey="user"
                        type="linear"
                        stroke="var(--color-user)"
                        fill="var(--color-user)"
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ChartContainer>
        </ChartWrap>
    );
};

export default ChartArea;
