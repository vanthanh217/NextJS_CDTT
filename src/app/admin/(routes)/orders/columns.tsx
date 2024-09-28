'use client';

import ActionCell from '@/components/common/ActionCell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TOrder } from '@/type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<TOrder>[] = [
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
        accessorKey: 'customerName',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Customer's name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const order = row.original;
            return (
                <div className="flex gap-x-3">
                    <div className="flex-1">
                        {order.customerPhone && (
                            <h5 className="mb-1 font-semibold text-slate-400">
                                {order.customerPhone}
                            </h5>
                        )}
                        <p className="line-clamp-2 font-medium">
                            {order.customerName}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'customerEmail',
        header: "Customer's email",
        cell: ({ row }) => {
            const { customerEmail } = row.original;
            return (
                <span className="block font-semibold uppercase text-slate-400">
                    {customerEmail}
                </span>
            );
        },
    },
    {
        accessorKey: 'shippingAddress',
        header: 'Address',
    },
    {
        accessorKey: 'orderDate',
        header: 'Order date',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const { status } = row.original;

            return (
                <>
                    {status === 'pending' && (
                        <span className="inline-block cursor-default rounded-md border border-destructive px-3 py-1 font-medium uppercase text-destructive hover:bg-destructive/10">
                            {status}
                        </span>
                    )}
                    {status === 'processing' && (
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
            const order = row.original;
            console.log(order);

            return (
                <ActionCell
                    item={order}
                    idKey="id"
                    actions={[
                        {
                            label: 'View order',
                            url: `/admin/orders/${order.id}`,
                        },
                        {
                            label: 'Remove order',
                            onClick: (item) => {
                                console.log(
                                    `Removing order with ID: ${item.id}`,
                                );
                            },
                        },
                        {
                            label: 'Change status',
                            onClick: (item) => {
                                console.log(
                                    `Change status with ID: ${item.id}`,
                                );
                            },
                        },
                    ]}
                />
            );
        },
    },
];
