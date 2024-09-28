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
import { status } from '@/constants';
import { TTopic } from '@/type';
import { EStatus } from '@/type/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormHandleProps {
    data?: TTopic;
    list?: TTopic[];
}

const formShema = z.object({
    name: z.string().nonempty('Name is required'),
    slug: z.string(),
    sortOrder: z.number(),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
});

const FormHandle: React.FC<FormHandleProps> = ({ data, list }) => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name: '',
            slug: '',
            sortOrder: 1,
            status: undefined,
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                name: data.name || '',
                slug: data.slug || '',
                sortOrder: data.sortOrder || 1,
                status: (data.status as EStatus) || undefined,
            });
        }
    }, [data, form]);

    const handleResetForm = () => {
        form.reset({
            name: '',
            slug: '',
            sortOrder: 1,
            status: undefined,
        });
    };

    const handleSubmit = async (formData: z.infer<typeof formShema>) => {
        if (data) {
            // Update handle
            console.log('Updating brand:', { ...formData, id: data.id });
        } else {
            // Create handle
            console.log('Creating brand:', formData);
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="mb-10"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Category's Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Category's name"
                                        {...field}
                                    />
                                </FormControl>
                                {form.formState.errors.name && (
                                    <p className="text-destructive">
                                        {form.formState.errors.name.message}
                                    </p>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sortOrder"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Sort order</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            const numValue = parseInt(
                                                value,
                                                10,
                                            );
                                            field.onChange(
                                                isNaN(numValue)
                                                    ? null
                                                    : numValue,
                                            );
                                        }}
                                        value={
                                            field.value?.toString() || undefined
                                        }
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Sort order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">
                                                None
                                            </SelectItem>
                                            {list?.map((item) => (
                                                <SelectItem
                                                    key={item.id}
                                                    value={(
                                                        item.id + 1
                                                    ).toString()}
                                                >
                                                    Sau: {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Status</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {status.map((item) => (
                                                <SelectItem
                                                    key={item.value}
                                                    value={item.value}
                                                >
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                {form.formState.errors.status && (
                                    <p className="text-destructive">
                                        {form.formState.errors.status.message}
                                    </p>
                                )}
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-between">
                        <Button
                            type="button"
                            variant={'outline'}
                            className="w-32"
                            onClick={handleResetForm}
                        >
                            Reset
                        </Button>
                        <Button
                            type="submit"
                            variant={'secondary'}
                            className="w-32"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default FormHandle;
