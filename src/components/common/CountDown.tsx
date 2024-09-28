'use client';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

interface CountDownProps {
    className?: string;
    targetDate: string;
}

interface ITimeLeft {
    days: number;
    hours: number;
    mins: number;
    secs: number;
}

const CountDown: React.FC<CountDownProps> = ({ className, targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<ITimeLeft>(() =>
        calculateTimeLeft(new Date(targetDate)),
    );
    const [isClient, setIsClient] = useState(false);

    function calculateTimeLeft(targetDate: Date): ITimeLeft {
        const now = new Date();
        const difference = +targetDate.getTime() - +now.getTime();
        let timeLeft = {
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (24 * 60 * 60 * 1000)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        setIsClient(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(new Date(targetDate)));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const padNumber = (num: number): string => num.toString().padStart(2, '0');
    if (!isClient) {
        return null;
    }

    return (
        <div
            className={clsx(
                'flex items-center justify-around rounded-lg bg-white/85 shadow-[0_1px_6px_#20212447] transition-all duration-300 ease-linear group-hover:bottom-0 group-hover:opacity-0',
                className,
            )}
        >
            <div className="flex flex-col items-center">
                <span className="font-bold">{padNumber(timeLeft.days)}</span>
                <span>Days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-bold">{padNumber(timeLeft.hours)}</span>
                <span>Hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-bold">{padNumber(timeLeft.mins)}</span>
                <span>Mins</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-bold">{padNumber(timeLeft.secs)}</span>
                <span>Secs</span>
            </div>
        </div>
    );
};

export default CountDown;
