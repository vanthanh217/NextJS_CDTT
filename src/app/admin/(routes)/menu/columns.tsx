'use client';

import ActionCell from '@/components/common/ActionCell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TMenu } from '@/type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
export const columns: ColumnDef<TMenu>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'label',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Label
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const { label } = row.original;
            return (
                <div className="flex items-center gap-x-4">
                    <h5 className="text-lg font-semibold text-light-dark">
                        {label}
                    </h5>
                </div>
            );
        },
    },
    {
        accessorKey: 'path',
        header: 'Path',
    },
    {
        accessorKey: 'position',
        header: 'Position',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const { status } = row.original;

            return (
                <>
                    {status === 'inactive' && (
                        <span className="inline-block cursor-default rounded-md border border-destructive px-3 py-1 font-medium uppercase text-destructive hover:bg-destructive/10">
                            {status}
                        </span>
                    )}
                    {status === 'active' && (
                        <span className="inline-block cursor-default rounded-md border border-emerald-500 px-3 py-1 font-medium uppercase text-emerald-500 hover:bg-emerald-500/20">
                            {status}
                        </span>
                    )}
                </>
            );
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const menu = row.original;
            console.log(menu);

            return <ActionCell item={menu} idKey="id" />;
        },
    },
];
