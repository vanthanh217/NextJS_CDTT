'use client';

import ActionCell from '@/components/common/ActionCell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TProduct } from '@/type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import Image from 'next/image';

export const columns: ColumnDef<TProduct>[] = [
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
            const product = row.original;
            return (
                <div className="flex gap-x-3">
                    <div className="size-16 overflow-hidden rounded-lg">
                        <Image
                            src={product.thumbnail}
                            alt=""
                            className="h-full w-full object-cover"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div className="flex-1">
                        {product.category && (
                            <h5 className="mb-1 font-semibold text-slate-400">
                                {product.category}
                            </h5>
                        )}
                        <p className="line-clamp-2 font-medium">
                            {product.name}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'brand',
        header: 'Brand',
        cell: ({ row }) => {
            const product = row.original;
            return (
                <span className="block font-semibold uppercase text-slate-400">
                    {product.brand}
                </span>
            );
        },
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => {
            const price = parseFloat(row.getValue('price'));

            const formatted = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);

            return formatted;
        },
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const { status } = row.original;

            return (
                <>
                    {(status === 'inactive' || status === 'out of stock') && (
                        <span className="inline-block cursor-default rounded-md border border-destructive px-3 py-1 font-medium uppercase text-destructive hover:bg-destructive/10">
                            {status}
                        </span>
                    )}
                    {(status === 'active' || status === 'in stock') && (
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
            const product = row.original;
            console.log(product);

            return (
                <ActionCell
                    item={product}
                    idKey="id"
                    actions={[
                        {
                            label: 'View product',
                            url: `/admin/products/${product.id}`,
                        },
                        {
                            label: 'Update product',
                            url: `/admin/products/update/${product.id}`,
                        },
                        {
                            label: 'Remove product',
                            onClick: (item) => {
                                console.log(
                                    `Removing product with ID: ${item.id}`,
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
