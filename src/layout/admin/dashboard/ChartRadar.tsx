'use client';
import { IconProduct } from '@/components/icons';
import ChartWrap from './ChartWrap';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

const chartData = [
    { month: 'January', product: 186 },
    { month: 'February', product: 305 },
    { month: 'March', product: 237 },
    { month: 'April', product: 73 },
    { month: 'May', product: 209 },
    { month: 'June', product: 214 },
    { month: 'July', product: 217 },
];

const chartConfig = {
    product: {
        label: 'Product',
        color: 'hsl(var(--chart-3))',
    },
} satisfies ChartConfig;

const ChartRadar = () => {
    return (
        <ChartWrap
            title="Total Sales"
            className="basis-4/12"
            ngClass="bg-chart-3/15 text-chart-3 p-2"
            icon={<IconProduct strokeWidth={1.5} />}
        >
            <ChartContainer config={chartConfig} className="mb-2">
                <RadarChart data={chartData}>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                    />
                    <PolarAngleAxis dataKey="month" />
                    <PolarGrid />
                    <Radar
                        dataKey="product"
                        fill="var(--color-product)"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ChartContainer>
        </ChartWrap>
    );
};

export default ChartRadar;
