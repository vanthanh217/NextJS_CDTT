'use client';

import ImageUpload from '@/components/common/ImageUpload';
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
import { TBrand } from '@/type';
import { EStatus } from '@/type/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormHandleProps {
    data?: TBrand;
}

const formShema = z.object({
    name: z.string().nonempty('Name is required'),
    thumbnail: z.string(),
    slug: z.string(),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
});

const FormHandle: React.FC<FormHandleProps> = ({ data }) => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name: '',
            thumbnail: '',
            slug: '',
            status: undefined,
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                name: data.name,
                thumbnail: data.thumbnail,
                slug: data.slug,
                status: data.status as EStatus,
            });
        }
    }, [data, form]);

    const handleResetForm = () => {
        form.reset({
            name: '',
            thumbnail: '',
            slug: '',
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
                                <FormLabel>Brand's Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Brand's name"
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
                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Brand's Thumbnail</FormLabel>
                                <FormControl>
                                    <ImageUpload
                                        field={{
                                            ...field,
                                            value: Array.isArray(field.value)
                                                ? field.value
                                                : field.value
                                                  ? [field.value]
                                                  : [],
                                            onChange: (
                                                value: string[] | string,
                                            ) => {
                                                field.onChange(value);
                                            },
                                        }}
                                    />
                                </FormControl>
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
