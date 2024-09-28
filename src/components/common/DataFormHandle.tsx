'use client';

import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import ActionCell from './ActionCell';
import { DataTable } from './data-table';
import { useRouter } from 'next/navigation';

interface DataFormHandleProps<T extends { id: string | number }> {
    data: T[];
    columns: ColumnDef<T>[];
    formComponents: { [key: string]: React.FC<{ data?: T; list?: T[] }> };
    currentType: string;
    list?: T[];
    filterKey?: string;
}

const DataFormHandle = <T extends { id: string | number }>({
    data,
    columns,
    formComponents,
    currentType,
    list,
    filterKey,
}: DataFormHandleProps<T>) => {
    const [selectedItem, setSelectedItem] = useState<T | null>(null);
    const router = useRouter();

    const handleEdit = (item: T) => {
        setSelectedItem(item);
        if (currentType === 'menu') {
            router.push(`/admin/menu/update/${item.id}`);
        } else {
            console.log('Editing item:', item);
        }
    };

    const modifiedColumns: ColumnDef<T>[] = columns.map((column) => {
        if (column.id === 'actions') {
            return {
                ...column,
                cell: ({ row }) => (
                    <ActionCell
                        item={row.original}
                        idKey="id"
                        actions={[
                            {
                                label: 'Edit',
                                onClick: () => handleEdit(row.original),
                            },
                            {
                                label: 'Remove',
                                onClick: (item) => {
                                    console.log(
                                        `Removing item with ID: ${item.id}`,
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
                ),
            };
        }
        return column;
    });

    const FormComponent = formComponents[currentType];

    return (
        <>
            <div className="flex gap-x-5">
                <div className="w-[380px] pr-5">
                    {FormComponent && (
                        <FormComponent
                            data={selectedItem ?? undefined}
                            list={list}
                        />
                    )}
                </div>
                <div className="flex-1">
                    <DataTable
                        data={data}
                        columns={modifiedColumns}
                        filterKey={filterKey}
                    />
                </div>
            </div>
        </>
    );
};

export default DataFormHandle;
