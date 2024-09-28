'use client';

import ActionCell from '@/components/common/ActionCell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TContact } from '@/type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<TContact>[] = [
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
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const order = row.original;
            return (
                <div className="flex gap-x-3">
                    <div className="flex-1">
                        {order.phoneNumber && (
                            <span className="font-semibold text-slate-400">
                                {order.phoneNumber}
                            </span>
                        )}
                        <p className="line-clamp-2 text-lg font-medium">
                            {order.name}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => {
            const { email } = row.original;
            return (
                <span className="block font-semibold uppercase text-slate-400">
                    {email}
                </span>
            );
        },
    },
    {
        accessorKey: 'message',
        header: 'Message',
    },
    {
        accessorKey: 'createdAt',
        header: 'Created at',
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
                    {status === 'resolved' && (
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
            const contact = row.original;
            console.log(contact);

            return (
                <ActionCell
                    item={contact}
                    idKey="id"
                    actions={[
                        {
                            label: 'View contact',
                            url: `/admin/contacts/${contact.id}`,
                        },
                        {
                            label: 'Remove contact',
                            onClick: (item) => {
                                console.log(
                                    `Removing contact with ID: ${item.id}`,
                                );
                            },
                        },
                    ]}
                />
            );
        },
    },
];
