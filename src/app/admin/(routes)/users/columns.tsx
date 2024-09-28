'use client';

import ActionCell from '@/components/common/ActionCell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TUser } from '@/type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import Image from 'next/image';

export const columns: ColumnDef<TUser>[] = [
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
        accessorKey: 'fullname',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    User info
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const { fullname, thumbnail, phoneNumber } = row.original;
            return (
                <div className="flex gap-x-3">
                    {thumbnail && (
                        <div className="size-16 overflow-hidden rounded-lg">
                            <Image
                                src={thumbnail}
                                alt=""
                                className="h-full w-full object-cover"
                                width={64}
                                height={64}
                            />
                        </div>
                    )}
                    <div className="flex-1">
                        {phoneNumber && (
                            <h5 className="mb-1 font-semibold text-slate-400">
                                {phoneNumber}
                            </h5>
                        )}
                        <p className="line-clamp-2 font-medium">{fullname}</p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'username',
        header: 'Username',
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
            const user = row.original;
            console.log(user);

            return (
                <ActionCell
                    item={user}
                    idKey="id"
                    actions={[
                        {
                            label: 'View user',
                            url: `/admin/users/${user.id}`,
                        },
                        {
                            label: 'Update user',
                            url: `/admin/users/update/${user.id}`,
                        },
                        {
                            label: 'Remove user',
                            onClick: (item) => {
                                console.log(
                                    `Removing user with ID: ${item.id}`,
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
