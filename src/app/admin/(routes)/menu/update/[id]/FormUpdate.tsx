'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { positionMenu } from '@/constants';
import { TMenu } from '@/type';
import { EStatus } from '@/type/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormUpdateProps {
    data: TMenu;
}

const formShema = z.object({
    label: z.string().nonempty('Label is required'),
    path: z.string(),
    parentId: z.number(),
    position: z.string().nonempty('Position is required'),
    sortOrder: z.number(),
    tableId: z.number(),
    type: z.string(),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
    createAt: z.date(),
});

const FormUpdate: React.FC<FormUpdateProps> = ({ data }) => {
    console.log(data);
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            label: data.label,
            parentId: data.parentId,
            path: data.path,
            position: data.position,
            sortOrder: data.sortOrder,
            tableId: data.tableId,
            status: data.status as EStatus,
            type: data.type,
        },
    });

    const handleSubmit = (data: z.infer<typeof formShema>) => {
        console.log(data);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="mb-10"
                >
                    <div className="flex gap-x-7">
                        <div className="basis-8/12">
                            <FormField
                                control={form.control}
                                name="label"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Menu's Label</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Menu's label"
                                                {...field}
                                            />
                                        </FormControl>
                                        {form.formState.errors.label && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.label
                                                        .message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="path"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Menu's Path</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Menu's path"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="basis-4/12">
                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Position</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select position" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {positionMenu.map(
                                                        (item) => (
                                                            <SelectItem
                                                                key={item.value}
                                                                value={
                                                                    item.value
                                                                }
                                                            >
                                                                {item.label}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {form.formState.errors.position && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors
                                                        .position.message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                variant={'secondary'}
                                className="w-24"
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default FormUpdate;
