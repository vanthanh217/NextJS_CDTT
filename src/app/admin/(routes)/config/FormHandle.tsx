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
import { TConfig } from '@/type';
import { EStatus } from '@/type/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormHandleProps {
    data?: TConfig;
}

const formShema = z.object({
    configKey: z.string().nonempty('Key is required'),
    configValue: z.string().nonempty('Value is required'),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
});

const FormHandle: React.FC<FormHandleProps> = ({ data }) => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            configKey: data?.configKey,
            configValue: data?.configValue,
            status: data?.status,
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                configKey: data?.configKey,
                configValue: data?.configValue,
                status: data?.status,
            });
        }
    }, [data, form]);

    const handleResetForm = () => {
        form.reset({
            configKey: '',
            configValue: '',
            status: undefined,
        });
    };

    const handleSubmit = async (formData: z.infer<typeof formShema>) => {
        if (data) {
            // Update handle
            console.log('Updating info website:', { ...formData, id: data.id });
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
                        name="configKey"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Key</FormLabel>
                                <FormControl>
                                    <Input placeholder="Key..." {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="configValue"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                    <Input placeholder="Value..." {...field} />
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
                            Update
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default FormHandle;
