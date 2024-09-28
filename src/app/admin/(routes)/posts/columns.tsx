'use client';

import ActionCell from '@/components/common/ActionCell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TContentPage } from '@/type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import Image from 'next/image';

export const columns: ColumnDef<TContentPage>[] = [
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
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const { title, thumbnail } = row.original;
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
                        <p className="line-clamp-2 font-medium">{title}</p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'topicId',
        header: 'Topic',
        cell: ({ row }) => {
            const post = row.original;
            return (
                <span className="block font-semibold uppercase text-slate-400">
                    {post.topicId}
                </span>
            );
        },
    },
    {
        accessorKey: 'desc',
        header: 'Description',
        cell: ({ row }) => {
            const { desc } = row.original;
            return <p className="line-clamp-2">{desc}</p>;
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
            const post = row.original;
            console.log(post);

            return (
                <ActionCell
                    item={post}
                    idKey="id"
                    actions={[
                        {
                            label: 'View post',
                            url: `/admin/posts/${post.id}`,
                        },
                        {
                            label: 'Update post',
                            url: `/admin/posts/update/${post.id}`,
                        },
                        {
                            label: 'Remove post',
                            onClick: (item) => {
                                console.log(
                                    `Removing post with ID: ${item.id}`,
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
