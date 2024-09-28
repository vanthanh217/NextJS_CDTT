import clsx from 'clsx';
import React from 'react';

interface IChartWrapProps {
    className?: string;
    children: React.ReactNode;
    title: string;
    ngClass?: string;
    icon?: React.ReactNode;
}

const ChartWrap: React.FC<IChartWrapProps> = ({
    className,
    children,
    title,
    ngClass,
    icon,
}) => {
    return (
        <div className={clsx('rounded-xlg bg-white p-5 shadow-lg', className)}>
            <div className="flex items-center gap-x-4">
                {icon && (
                    <span
                        className={clsx(
                            'inline-block select-none rounded-lg',
                            ngClass,
                        )}
                    >
                        {icon}
                    </span>
                )}
                <h5 className="font-semibold capitalize">{title}</h5>
            </div>
            <>{children}</>
        </div>
    );
};

export default ChartWrap;
