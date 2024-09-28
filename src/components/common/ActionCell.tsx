'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { Action } from '@/type';
import { useRouter } from 'next/navigation';

interface ActionCellProps<T> {
    item: T;
    actions?: Action<T>[];
    idKey: keyof T;
}
const ActionCell = <T,>({ item, actions, idKey }: ActionCellProps<T>) => {
    const router = useRouter();
    const defaultActions: Action<T>[] = [
        {
            label: 'View item',
            url: `/admin/${item[idKey]}`,
        },
        {
            label: 'Update item',
            url: `/admin/update/${item[idKey]}`,
        },
        {
            label: 'Remove item',
            onClick: (item) =>
                console.log(
                    `Removing item with ID: ${idKey ? item[idKey] : 'unknown'}`,
                ),
        },
        {
            label: 'Change statis',
            onClick: (item) =>
                console.log(
                    `Change status with ID: ${idKey ? item[idKey] : 'unknown'}`,
                ),
        },
    ];

    const menuActions = actions || defaultActions;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 select-none p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {menuActions.map((action, index) => (
                    <DropdownMenuItem
                        key={index}
                        onClick={() => {
                            if (action.url) {
                                router.push(action.url);
                            } else if (action.onClick) {
                                action.onClick(item);
                            }
                        }}
                    >
                        {action.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ActionCell;
