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
import { TBanner } from '@/type';
import { EStatus } from '@/type/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormHandleProps {
    data?: TBanner;
}

const formShema = z.object({
    title: z.string(),
    desc: z.string(),
    thumbnail: z.string(),
    path: z.string(),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
});

const FormHandle: React.FC<FormHandleProps> = ({ data }) => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            title: '',
            desc: '',
            thumbnail: '',
            path: '',
            status: undefined,
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                title: data.title,
                desc: data.desc,
                thumbnail: data.thumbnail,
                path: data.path,
                status: data.status as EStatus,
            });
        }
    }, [data, form]);

    const handleResetForm = () => {
        form.reset({
            title: '',
            desc: '',
            thumbnail: '',
            path: '',
            status: undefined,
        });
    };

    const handleSubmit = async (formData: z.infer<typeof formShema>) => {
        if (data) {
            // Update handle
            console.log('Updating banner:', { ...formData, id: data.id });
        } else {
            // Create handle
            console.log('Creating banner:', formData);
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
                        name="title"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Banner's Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Banner's name"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="desc"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Banner's Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Banner's description"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="path"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Banner's Path</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Banner's path"
                                        {...field}
                                    />
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
                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Banner's Thumbnail</FormLabel>
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
